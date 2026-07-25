import Head from 'next/head';
import site from '../../data/site.json';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.netlify.app';

export default function Seo({
  title = `${site.name} — ${site.title}`,
  description = site.summary,
  path = '/',
}) {
  const url = `${SITE_URL}${path}`;

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.title,
    url: SITE_URL,
    email: `mailto:${site.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.location,
    },
    sameAs: Object.values(site.social).filter(Boolean),
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:image" content={`${SITE_URL}/images/og-cover.svg`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}/images/og-cover.svg`} />

      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

      {/* Structured data */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </Head>
  );
}
