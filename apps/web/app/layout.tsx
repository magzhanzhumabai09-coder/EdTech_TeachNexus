import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: 'TechNexus.AI',
  description: 'AI-powered digital assistant for teachers',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
