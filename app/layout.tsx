import type { Metadata } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://valtheralabs.io'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'ValtheraLabs — Engineering Intelligent Digital Systems',
  description: 'ValtheraLabs designs and builds AI systems, web applications, blockchain software, SaaS platforms, trading tools, and cloud-native systems.',
  keywords: ['AI', 'blockchain', 'web development', 'smart contracts', 'DEX', 'trading bots', 'SaaS', 'cybersecurity', 'ValtheraLabs'],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: { url: '/icon.svg', type: 'image/svg+xml' },
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'ValtheraLabs — Engineering Intelligent Digital Systems',
    description: 'Technology company building AI systems, web applications, blockchain software, and developer tools.',
    url: siteUrl,
    siteName: 'ValtheraLabs',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/x-banner.png', width: 1500, height: 500, alt: 'ValtheraLabs brand banner' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ValtheraLabs — Engineering Intelligent Digital Systems',
    description: 'Technology company building AI systems, web applications, blockchain software, and developer tools.',
    images: ['/x-banner.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ValtheraLabs',
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    founder: {
      '@type': 'Person',
      name: 'Dionis Markov',
      url: 'https://dionismarkov.com',
    },
    sameAs: ['https://github.com/ValtheraLabs'],
  }

  return (
    <html lang="en" className="dark">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  )
}
