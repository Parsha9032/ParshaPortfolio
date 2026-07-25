import { useState } from 'react';
import site from '../../data/site.json';

const SOCIAL_LINKS = [
  { key: 'github', label: 'GitHub' },
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'twitter', label: 'Twitter' },
];

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    // Honeypot: bots tend to fill every field, humans never see this one.
    if (data.get('company')) {
      setStatus('success');
      return;
    }

    setStatus('submitting');
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      });
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <section
      id="contact"
      className="section scroll-mt-20 border-t border-ink-100 dark:border-ink-800"
    >
      <div className="container-page grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl dark:text-white">
            Let's work together
          </h2>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-600 dark:text-ink-300">
            The fastest way to reach me is by email. I usually reply within a day or two.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-brand-600 hover:underline dark:text-brand-300"
          >
            {site.email}
          </a>

          <div className="mt-8 flex gap-4">
            {SOCIAL_LINKS.map(({ key, label }) => (
              <a
                key={key}
                href={site.social[key]}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-secondary"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="company"
          onSubmit={handleSubmit}
          className="card space-y-4"
        >
          {/* Required for Netlify's build-time form detection. */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot field — hidden from sighted and screen-reader users. */}
          <p className="hidden">
            <label>
              Company
              <input name="company" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          <div>
            <label htmlFor="name" className="text-sm font-medium text-ink-700 dark:text-ink-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1.5 w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 focus:border-brand-500 dark:border-ink-700 dark:bg-ink-900 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-ink-700 dark:text-ink-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1.5 w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 focus:border-brand-500 dark:border-ink-700 dark:bg-ink-900 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-ink-700 dark:text-ink-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1.5 w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 focus:border-brand-500 dark:border-ink-700 dark:bg-ink-900 dark:text-white"
            />
          </div>

          <button type="submit" className="btn-primary w-full" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </button>

          <p role="status" aria-live="polite" className="text-sm">
            {status === 'success' && (
              <span className="text-green-600 dark:text-green-400">
                Thanks! Your message has been sent.
              </span>
            )}
            {status === 'error' && (
              <span className="text-red-600 dark:text-red-400">
                Something went wrong. Please email me directly instead.
              </span>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
