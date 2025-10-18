import './globals.css';
import Link from 'next/link';
import { ThemeToggle } from '../components/ThemeToggle';
import { Providers } from './providers';
import { ErrorBoundary } from '../components/ErrorBoundary';

export const metadata = { title: 'TechNexus.AI', description: 'AI-powered digital assistant for teachers' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-screen">
        <header className="sticky top-0 z-50 glass p-4 shadow-sm flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg">TechNexus.AI</Link>
          <nav className="flex items-center gap-4">
            <Link href="/dashboard" className="hover:underline">Dashboard</Link>
            <Link href="/ai" className="hover:underline">AI Tools</Link>
            <Link href="/upload" className="hover:underline">Uploads</Link>
            <ThemeToggle />
          </nav>
        </header>
        <Providers>
          <ErrorBoundary>
            <main className="p-6 max-w-6xl mx-auto">{children}</main>
          </ErrorBoundary>
        </Providers>
        <footer className="p-6 text-center text-sm opacity-70">© {new Date().getFullYear()} TechNexus.AI</footer>
      </body>
    </html>
  );
}
