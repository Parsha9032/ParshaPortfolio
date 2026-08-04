import Link from 'next/link';
import site from '../../data/site.json';

const lastUpdated = process.env.NEXT_PUBLIC_LAST_UPDATED || site.resumeLastUpdated;

function formatDate(dateString) {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    }).format(date);
  } catch (error) {
    return dateString;
  }
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-100 dark:border-ink-800">
      <div className="container-page flex flex-col items-center gap-3 py-10 text-sm text-ink-500 sm:flex-row sm:justify-between dark:text-ink-400">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <nav aria-label="Footer" className="flex items-center gap-5">
          <Link href="/#about" className="hover:text-ink-800 dark:hover:text-ink-100">
            About
          </Link>
          <Link href="/#projects" className="hover:text-ink-800 dark:hover:text-ink-100">
            Projects
          </Link>
          <Link href="/#contact" className="hover:text-ink-800 dark:hover:text-ink-100">
            Contact
          </Link>
        </nav>
        <p>Last updated: {formatDate(lastUpdated)}</p>
      </div>
    </footer>
  );
}
