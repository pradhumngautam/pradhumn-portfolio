import Link from "next/link";
export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">404 / Not found</p>
      <h1>This sheet is missing.</h1>
      <p>The page may have moved. The rest of the portfolio is right here.</p>
      <Link className="text-link" href="/">
        ← Back to portfolio
      </Link>
    </section>
  );
}
