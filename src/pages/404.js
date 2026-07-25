import Link from 'next/link';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" path="/404" />
      <main className="container-page flex min-h-screen flex-col items-center justify-center text-center">
        <p className="eyebrow mb-3">404</p>
        <h1 className="font-display text-3xl font-semibold text-ink-900 dark:text-white">
          Page not found
        </h1>
        <p className="mt-3 max-w-prose text-ink-600 dark:text-ink-300">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to home
        </Link>
      </main>
    </>
  );
}
