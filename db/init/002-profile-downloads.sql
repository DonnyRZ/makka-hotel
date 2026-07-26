CREATE TABLE IF NOT EXISTS profile_downloads (
  visitor_hash CHAR(64) PRIMARY KEY,
  first_downloaded_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  last_downloaded_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  download_count INTEGER NOT NULL DEFAULT 1 CHECK (download_count > 0)
);

CREATE INDEX IF NOT EXISTS profile_downloads_last_downloaded_idx
  ON profile_downloads (last_downloaded_at DESC);

DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'visitor_counter') THEN
    CREATE ROLE visitor_counter NOLOGIN;
  END IF;
END
$$;

GRANT USAGE ON SCHEMA public TO visitor_counter;
GRANT SELECT, INSERT, UPDATE ON profile_downloads TO visitor_counter;

CREATE OR REPLACE FUNCTION download_overview()
RETURNS JSONB
LANGUAGE sql
STABLE
AS $$
  SELECT jsonb_build_object(
    'totalDownloads', COALESCE((SELECT SUM(download_count)::BIGINT FROM profile_downloads), 0),
    'uniqueDownloaders', (SELECT COUNT(*)::BIGINT FROM profile_downloads)
  )
$$;

GRANT EXECUTE ON FUNCTION download_overview() TO visitor_counter;

CREATE OR REPLACE FUNCTION register_profile_download(p_visitor_hash text)
RETURNS JSONB
LANGUAGE plpgsql
AS $$
BEGIN
  IF p_visitor_hash IS NULL OR length(p_visitor_hash) <> 64 THEN
    RAISE EXCEPTION 'invalid visitor hash';
  END IF;

  INSERT INTO profile_downloads (visitor_hash, download_count, last_downloaded_at)
  VALUES (p_visitor_hash, 1, CURRENT_TIMESTAMP)
  ON CONFLICT (visitor_hash) DO UPDATE
  SET
    download_count = profile_downloads.download_count + 1,
    last_downloaded_at = CURRENT_TIMESTAMP;

  RETURN download_overview();
END;
$$;

GRANT EXECUTE ON FUNCTION register_profile_download(text) TO visitor_counter;
