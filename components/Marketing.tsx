'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'

const DoodleTrendingUp = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 30 Q10 28 14 22 Q18 16 24 18 Q29 20 34 10" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M28 8 L35 9 L34 16" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M5 33 L36 33" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3"/>
  </svg>
)

const DoodleTarget = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="15" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2"/>
    <circle cx="20" cy="20" r="9" stroke="#a855f7" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="20" cy="20" r="3.5" fill="#a855f7"/>
    <path d="M20 5 L20 9" stroke="#a855f7" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 31 L20 35" stroke="#a855f7" strokeWidth="2" strokeLinecap="round"/>
    <path d="M5 20 L9 20" stroke="#a855f7" strokeWidth="2" strokeLinecap="round"/>
    <path d="M31 20 L35 20" stroke="#a855f7" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const DoodleBarChart = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="22" width="7" height="12" rx="2" stroke="#ec4899" strokeWidth="2" fill="none"/>
    <rect x="16.5" y="14" width="7" height="20" rx="2" stroke="#ec4899" strokeWidth="2" fill="none"/>
    <rect x="28" y="8" width="7" height="26" rx="2" stroke="#ec4899" strokeWidth="2" fill="none"/>
    <path d="M3 36 L37 36" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 18 Q13 16 16.5 14" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
    <path d="M23.5 11 Q26 10 28 8" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
  </svg>
)

const DoodleUsers = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="13" r="5" stroke="#6366f1" strokeWidth="2" fill="none"/>
    <path d="M5 33 C5 25 25 25 25 33" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <circle cx="28" cy="12" r="4" stroke="#6366f1" strokeWidth="1.8" fill="none" strokeDasharray="3 2"/>
    <path d="M24 32 C25 27 37 27 36 33" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" fill="none" strokeDasharray="3 2"/>
  </svg>
)

const Log = {
  section: (title: string) => {
    console.log('\n' + '='.repeat(50))
    console.log(`  ${title}`)
    console.log('='.repeat(50))
  },
  info: (msg: string) => console.log(`[INFO] ${msg}`),
  warn: (msg: string) => console.warn(`[WARN] ${msg}`),
  error: (msg: string, context?: Record<string, any>) => {
    console.error(`[ERROR] ${msg}`)
    if (context) {
      const kv = Object.entries(context).map(([k, v]) => `${k}=${v}`).join(' | ')
      console.error(`[ERROR] Context: ${kv}`)
    }
  },
  kv: (data: Record<string, any>) => {
    const kv = Object.entries(data).map(([k, v]) => `${k}=${v}`).join(' | ')
    console.log(`[KV] ${kv}`)
  },
}

const marketingHighlights = [
  {
    Doodle: DoodleTrendingUp,
    title: 'Campaign Optimization',
    description: 'Achieved 30% increase in advertising engagement through data-driven content strategy and performance analytics.',
  },
  {
    Doodle: DoodleTarget,
    title: 'Audience Targeting',
    description: 'Improved targeting effectiveness by building partner databases and measurement frameworks for data-driven messaging.',
  },
  {
    Doodle: DoodleBarChart,
    title: 'Analytics & Insights',
    description: 'Delivered 30+ campaign intelligence reports analyzing brand sentiment, coverage volume, and social listening data.',
  },
  {
    Doodle: DoodleUsers,
    title: 'Cross-Functional Collaboration',
    description: 'Worked with marketing, design, engineering, and product teams to drive customer-focused improvements.',
  },
]

export default function Marketing() {
  useEffect(() => {
    Log.section('Marketing Component')
    Log.info('Marketing section rendered')
    Log.kv({ highlightsCount: marketingHighlights.length })
  }, [])

  return (
    <section id="marketing" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent bg-texture relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Marketing Expertise
          </h2>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 decorative-diamond opacity-20"></div>
          <div className="absolute bottom-10 left-10 decorative-squiggle opacity-15"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Driving growth through data-driven marketing strategies and campaign optimization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {marketingHighlights.map((highlight, index) => {
            const { Doodle } = highlight
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform inline-block">
                  <Doodle />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">
                  {highlight.title}
                </h3>
                <p className="text-slate-600">
                  {highlight.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

