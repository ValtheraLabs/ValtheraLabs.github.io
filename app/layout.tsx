import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://valtheralabs.github.io'),
  title: 'ValtheraLabs — Engineering Intelligent Digital Systems',
  description: 'ValtheraLabs engineers AI-native products, real-time platforms, on-chain systems, and digital infrastructure.',
  keywords: ['AI systems', 'Next.js', 'FastAPI', 'Solidity', 'digital infrastructure', 'ValtheraLabs'],
  icons: { icon: { url: '/icon.svg', type: 'image/svg+xml' } },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'ValtheraLabs — Engineering Intelligent Digital Systems',
    description: 'AI-native products, real-time platforms, on-chain systems, and digital infrastructure.',
    url: 'https://valtheralabs.github.io', siteName: 'ValtheraLabs', locale: 'en_US', type: 'website',
    images: [{ url: '/x-banner.png', width: 1500, height: 500, alt: 'ValtheraLabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'ValtheraLabs — Engineering Intelligent Digital Systems', description: 'AI-native products, real-time platforms, on-chain systems, and digital infrastructure.', images: ['/x-banner.png'] },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className="dark"><body>{children}</body></html>
}
