import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import site from '../../data/site.json';

const resumeUrl = (site.resumePdf || '/resume.pdf').startsWith('/')
  ? `${process.env.BASE_PATH || ''}${site.resumePdf}`
  : site.resumePdf;

export default function Resume() {
  return (
    <>
      <Seo title={`${site.name} — Resume`} path="/resume/" />

      <div className="print:hidden">
        <Header />
      </div>

      <main id="main-content" className="container-page section py-8 sm:py-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-2xl border border-ink-200/70 bg-white p-4 shadow-sm dark:border-ink-800 dark:bg-ink-900/80 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-400">
                Resume
              </p>
              <h1 className="font-display text-2xl font-semibold text-ink-900 dark:text-white">
                {site.name}
              </h1>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={resumeUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                Open PDF
              </a>
              <a href={resumeUrl} download className="btn-primary">
                Download PDF
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-ink-200 bg-ink-50 dark:border-ink-800 dark:bg-ink-950">
            <iframe
              src={resumeUrl}
              title={`${site.name} resume`}
              className="min-h-[75vh] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}
