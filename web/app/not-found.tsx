import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-name">MECCA</div>
      <span>404</span>
      <h1>This page could not be found</h1>
      <p>The page may have moved, or the address may be incomplete.</p>
      <Link className="button button--gold" href="/en">Return home</Link>
    </main>
  );
}
