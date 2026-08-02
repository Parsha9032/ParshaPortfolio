import site from '../../data/site.json';

const SOCIAL_LINKS = [
  { key: 'github', label: 'GitHub' },
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'twitter', label: 'Twitter' },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section scroll-mt-20 border-t border-ink-100 dark:border-ink-800"
    >
      <div className="container-page">
        <div className="max-w-2xl rounded-2xl border border-ink-100 bg-white p-6 shadow-card dark:border-ink-700 dark:bg-ink-900">
          <div className="mt-4 flex flex-col gap-2 text-base text-ink-600 dark:text-ink-300">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 font-semibold text-brand-600 hover:underline dark:text-brand-300"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-2 font-semibold text-brand-600 hover:underline dark:text-brand-300"
            >
              {site.phone}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
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
      </div>
    </section>
  );
}
