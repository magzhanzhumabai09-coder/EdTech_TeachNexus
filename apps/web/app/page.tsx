import Link from 'next/link';
import { AcademicCapIcon, ChartBarIcon, Cog8ToothIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <main className="min-h-screen gradient-hero">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="glass rounded-2xl p-10 md:p-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-brand-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
            TechNexus.AI
          </h1>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            Cutting-edge digital assistant for teachers. Plan syllabi, create assignments, generate quizzes, and track progress with AI.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard href="/dashboard" title="Teacher Dashboard" icon={<ChartBarIcon className="w-8 h-8" />} />
            <FeatureCard href="/ai" title="AI Teaching Assistant" icon={<Cog8ToothIcon className="w-8 h-8" />} />
            <FeatureCard href="/syllabus" title="Syllabus & Schedules" icon={<AcademicCapIcon className="w-8 h-8" />} />
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ title, href, icon }: { title: string; href: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="glass rounded-xl p-6 hover:scale-[1.01] transition-transform text-left">
      <div className="flex items-center gap-3 text-brand-300">{icon}<span className="font-semibold">{title}</span></div>
      <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Explore {title} features</p>
    </Link>
  );
}
