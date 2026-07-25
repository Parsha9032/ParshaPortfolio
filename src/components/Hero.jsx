import Link from 'next/link';
import site from '../../data/site.json';

export default function Hero() {
  return (
    <section className="section pb-12 pt-14 sm:pt-20">
      <div className="container-page">
        <div className="max-w-3xl animate-fadeUp">
          <p className="eyebrow mb-4">{site.location}</p>
          <h1 className="font-display text-display-lg font-bold text-ink-900 dark:text-white">
            {site.name}
          </h1>
          <p className="mt-3 font-display text-display-md font-medium text-ink-500 dark:text-ink-300">
            {site.title}
          </p>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-600 dark:text-ink-300">
            {site.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/resume" className="btn-primary">
              View Resume
            </Link>
            <a href={site.resumePdf} className="btn-secondary" download>
              Download PDF
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
