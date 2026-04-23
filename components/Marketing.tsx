'use client'

import { motion } from 'framer-motion'
import { Megaphone, Target, LineChart, Network } from 'lucide-react'
import { useEffect } from 'react'

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
    Icon: Megaphone,
    title: 'Campaign Optimization',
    description: 'Achieved 30% increase in advertising engagement through data-driven content strategy and performance analytics.',
    color: 'text-blue-500',
  },
  {
    Icon: Target,
    title: 'Audience Targeting',
    description: 'Improved targeting effectiveness by building partner databases and measurement frameworks for data-driven messaging.',
    color: 'text-purple-500',
  },
  {
    Icon: LineChart,
    title: 'Analytics & Insights',
    description: 'Delivered 30+ campaign intelligence reports analyzing brand sentiment, coverage volume, and social listening data.',
    color: 'text-pink-500',
  },
  {
    Icon: Network,
    title: 'Cross-Functional Collaboration',
    description: 'Worked with marketing, design, engineering, and product teams to drive customer-focused improvements.',
    color: 'text-indigo-500',
  },
]

export default function Marketing() {
  useEffect(() => {
    Log.section('Marketing Component')
    Log.info('Marketing section rendered')
    Log.kv({ highlightsCount: marketingHighlights.length })
  }, [])

  return (
    <section id="marketing" className="py-8 px-4 sm:px-6 lg:px-8 bg-transparent bg-texture relative">
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Marketing Expertise
          </h2>

          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 decorative-diamond opacity-20"></div>
          <div className="absolute bottom-10 left-10 decorative-squiggle opacity-15"></div>
          <p className="text-xl text-white/75 max-w-3xl mx-auto">
            Driving growth through data-driven marketing strategies and campaign optimization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {marketingHighlights.map((highlight, index) => {
            const { Icon } = highlight
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
                <div className={`${highlight.color} mb-4`}>
                  <Icon className="w-10 h-10 group-hover:scale-110 transition-transform" />
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

