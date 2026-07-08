import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ValtheraLabs — Engineering Intelligent Digital Systems',
  description: 'ValtheraLabs builds premium AI systems, enterprise web applications, blockchain infrastructure, smart contracts, DEX platforms, trading dashboards, automation tools, and cloud-native software.',
  keywords: ['AI', 'blockchain', 'web development', 'smart contracts', 'DEX', 'trading bots', 'SaaS', 'cybersecurity', 'ValtheraLabs'],
  openGraph: {
    title: 'ValtheraLabs — Engineering Intelligent Digital Systems',
    description: 'Premium technology company building AI systems, web applications, blockchain infrastructure, and developer tools.',
    url: 'https://valtheralabs.github.io',
    siteName: 'ValtheraLabs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ValtheraLabs — Engineering Intelligent Digital Systems',
    description: 'Premium technology company building AI systems, web applications, blockchain infrastructure, and developer tools.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
