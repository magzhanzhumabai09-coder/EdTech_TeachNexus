import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/nav/Sidebar";
import Topbar from "@/components/nav/Topbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechNexus.Ai — Teacher Assistant Platform",
  description:
    "All-in-one AI-powered platform for teachers: syllabus, schedules, assignments, exams, analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen grid grid-cols-[260px_1fr]">
          <Sidebar />
          <div className="flex flex-col min-h-screen">
            <Topbar />
            <main className="flex-1 p-6 sm:p-8 bg-[--color-background]">
              {children}
            </main>
            <footer className="px-6 py-4 text-xs text-[--color-muted]">
              <div className="flex items-center gap-2">
                <span className="chip">TechNexus.Ai</span>
                <span>© {new Date().getFullYear()} — For demo purposes</span>
                <span className="ml-auto">
                  <Link className="hover:underline" href="/settings">Settings</Link>
                </span>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
