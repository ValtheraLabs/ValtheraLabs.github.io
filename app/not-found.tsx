import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-deep flex items-center justify-center px-6 text-center">
      <div>
        <p className="font-mono text-xs tracking-[0.2em] text-accent mb-4">404</p>
        <h1 className="text-4xl font-black text-white mb-4">Page not found</h1>
        <p className="text-silver mb-8">The requested ValtheraLabs page does not exist.</p>
        <Link
          href="/"
          className="inline-flex bg-accent text-white rounded-lg px-6 py-3 font-medium hover:bg-accent/90 transition"
        >
          Return home
        </Link>
      </div>
    </main>
  )
}
