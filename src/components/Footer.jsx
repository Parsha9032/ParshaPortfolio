import Link from 'next/link';
import site from '../../data/site.json';

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
        <p>Last updated {site.resumeLastUpdated}</p>
      </div>
    </footer>
  );
}
