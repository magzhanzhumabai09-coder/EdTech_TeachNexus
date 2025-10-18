'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface DashboardCardProps {
  title: string
  value: string
  icon: React.ReactNode
  color: 'mint' | 'skyblue' | 'navy'
  link: string
}

export default function DashboardCard({ title, value, icon, color, link }: DashboardCardProps) {
  const colorClasses = {
    mint: 'from-mint-500 to-mint-600',
    skyblue: 'from-skyblue-500 to-skyblue-600',
    navy: 'from-navy-600 to-navy-700',
  }

  return (
    <Link href={link}>
      <div className="card group cursor-pointer hover:scale-105 transition-transform duration-200">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClasses[color]} text-white`}>
            {icon}
          </div>
          <ArrowRight className="w-5 h-5 text-navy-400 group-hover:text-mint-600 transition-colors" />
        </div>
        <h3 className="text-navy-600 text-sm font-medium mb-1">{title}</h3>
        <p className="text-3xl font-bold text-navy-900">{value}</p>
      </div>
    </Link>
  )
}
