CREATE TABLE IF NOT EXISTS website_visitors (
  visitor_hash CHAR(64) PRIMARY KEY,
  first_seen_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  last_seen_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  city VARCHAR(80),
  region VARCHAR(80),
  country_code CHAR(2),
  geo_checked_at TIMESTAMPTZ
);

ALTER TABLE website_visitors ADD COLUMN IF NOT EXISTS city VARCHAR(80);
ALTER TABLE website_visitors ADD COLUMN IF NOT EXISTS region VARCHAR(80);
ALTER TABLE website_visitors ADD COLUMN IF NOT EXISTS country_code CHAR(2);
ALTER TABLE website_visitors ADD COLUMN IF NOT EXISTS geo_checked_at TIMESTAMPTZ;

CREATE INDEX IF NOT EXISTS website_visitors_city_idx ON website_visitors (city) WHERE city IS NOT NULL;
CREATE INDEX IF NOT EXISTS website_visitors_last_seen_idx ON website_visitors (last_seen_at DESC);

DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'visitor_counter') THEN
    CREATE ROLE visitor_counter NOLOGIN;
  END IF;
END
$$;

GRANT USAGE ON SCHEMA public TO visitor_counter;
GRANT SELECT, INSERT, UPDATE ON website_visitors TO visitor_counter;

CREATE OR REPLACE FUNCTION visitor_count()
RETURNS BIGINT
LANGUAGE sql
STABLE
AS 'SELECT COUNT(*) FROM website_visitors';

GRANT EXECUTE ON FUNCTION visitor_count() TO visitor_counter;

CREATE OR REPLACE FUNCTION visitor_overview()
RETURNS JSONB
LANGUAGE sql
STABLE
AS $$
  SELECT jsonb_build_object(
    'total', (SELECT COUNT(*) FROM website_visitors),
    'activeVisitors', (SELECT COUNT(*) FROM website_visitors WHERE last_seen_at >= CURRENT_TIMESTAMP - INTERVAL '7 days'),
    'cities', (SELECT COUNT(DISTINCT city) FROM website_visitors WHERE city IS NOT NULL),
    'topCities', COALESCE((
      SELECT jsonb_agg(city_data ORDER BY city_data.count DESC, city_data.city ASC)
      FROM (
        SELECT city, NULLIF(region, '') AS region, COUNT(*)::INTEGER AS count
        FROM website_visitors
        WHERE city IS NOT NULL
        GROUP BY city, region
        ORDER BY count DESC, city ASC
        LIMIT 8
      ) AS city_data
    ), '[]'::jsonb)
  )
$$;

GRANT EXECUTE ON FUNCTION visitor_overview() TO visitor_counter;
