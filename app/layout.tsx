import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TechNexus.AI - Digital Assistant for Teachers',
  description: 'Revolutionize how educators manage their work with AI-powered tools, complete academic management suite, and intuitive interfaces.',
  keywords: ['education', 'AI', 'teachers', 'digital assistant', 'EdTech', 'classroom management'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {children}
      </body>
    </html>
  )
}