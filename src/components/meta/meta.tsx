// components/Meta.js (optional reusable component)
import Head from 'next/head';

export default function Meta({
  title = 'Zulfo Muhović',
  description = 'Full Stack Developer',
  image = 'https://zuxbrt.github.io/og-image.png',
  url = 'https://zuxbrt.github.io'
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="google-site-verification" content="xAEcQPksFuxiClIDf2rhNPmYcaZMzl9LnnyyoahK5gI" />
      <meta charSet="UTF-8" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Canonical link (optional but helpful for SEO) */}
      <link rel="canonical" href={url} />
    </Head>
  );
}
