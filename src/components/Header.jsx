import Link from 'next/link';
import { useEffect, useState } from 'react';
import site from '../../data/site.json';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape for keyboard users.
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/80 backdrop-blur dark:border-ink-800 dark:bg-ink-950/80">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-ink-900 dark:text-white"
        >
          Home
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href.startsWith('#') ? `/${link.href}` : link.href}
              className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/resume" className="btn-secondary hidden sm:inline-flex">
            Resume
          </Link>
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-700 md:hidden dark:border-ink-700 dark:text-ink-100"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path
                  d="M6 6l12 12M18 6l-12 12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-ink-100 bg-white px-5 py-4 md:hidden dark:border-ink-800 dark:bg-ink-950"
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href.startsWith('#') ? `/${link.href}` : link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-ink-700 dark:text-ink-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/resume"
                onClick={() => setOpen(false)}
                className="block text-base font-medium text-brand-600 dark:text-brand-300"
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
