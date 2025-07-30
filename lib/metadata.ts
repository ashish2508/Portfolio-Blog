import type { Metadata as NextMetadata } from 'next';

type Metadata = Omit<NextMetadata, 'title' | 'keywords'> & {
  title: string
  keywords: string[]
}



export const createMetadata = (override: Partial<Metadata> = {}): Metadata => {
  const siteName = 'Ashish'
  const title = override.title ? `${override.title} | ${siteName}` : siteName
  const description =
    override.description ??
    `I'm Ashish, a web developer specializing in Next.js. Passionate about creating efficient web applications and 2D enthusiast.`

  const {
    title: _,
    description: __,
    keywords = [],
    openGraph,
    ...restOverride
  } = override
  const { images: ogImages, url: ogUrl, ...restOpenGraph } = openGraph ?? {}
  const url = `${getBaseUrl()}${ogUrl ?? ''}`

  return {
    metadataBase: new URL(getBaseUrl()),
    applicationName: siteName,
    title,
    description,
    category: 'Portfolio',
    authors: { name: 'Ashish', url: getBaseUrl() },
    manifest: `${getBaseUrl()}/manifest.webmanifest`,
    keywords: [
      ...keywords,
      'Ashish',
      'ashish2508',
      'Ashish Jha',
      'web development',
      'frontend',
      'Next.js',
      'React',
      'TypeScript',
      'portfolio',
      'developer',
      'blogs',
      'DxD',
    ],
    openGraph: {
      url,
      title,
      description,
      siteName,
      type: 'website',
      images: [
        { url: '/api/og?uwu=true', alt: 'Ashish' },
        ...(Array.isArray(ogImages) ? ogImages : ogImages ? [ogImages] : []),
      ],
      ...restOpenGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creatorId: '@ashish2508',
      ...override.twitter,
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-32x32.png',
      apple: '/apple-touch-icon.png',
    },
    alternates: {
      canonical: url,
      ...override.alternates,
    },
    assets: '/assets',
    ...restOverride,
  }
}

export function getBaseUrl() {
  if (typeof window !== 'undefined') return window.location.origin
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return `http://localhost:${process.env.PORT ?? 3000}`
}
