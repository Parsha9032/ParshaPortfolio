import Link from 'next/link';
import site from '../../data/site.json';

const resumeUrl = (site.resumePdf || '/resume.pdf').startsWith('/')
  ? `${process.env.BASE_PATH || ''}${site.resumePdf}`
  : site.resumePdf;

export default function Hero() {
  return (
    <section className="section pb-8 pt-10 sm:pt-14">
      <div className="container-page">
        <div className="max-w-3xl animate-fadeUp">
          <p className="eyebrow mb-3">{site.location}</p>
          <h1 className="font-display text-4xl font-bold text-ink-900 sm:text-5xl dark:text-white">
            {site.name}
          </h1>
          <p className="mt-2 font-display text-xl font-medium text-ink-500 sm:text-2xl dark:text-ink-300">
            {site.title}
          </p>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-600 sm:text-lg dark:text-ink-300">
            {site.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <Link href="/resume/" className="btn-primary">
              View Resume
            </Link>
            <a href={resumeUrl} className="btn-secondary" download target="_blank" rel="noreferrer">
              Download resume
            </a>
            <Link href="/#contact" className="btn-secondary">
              Contact Me
            </Link>
            <Link href="/#projects" className="btn-secondary">
              Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
