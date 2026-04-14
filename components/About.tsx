'use client'

import { motion } from 'framer-motion'
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

const skills = [
  {
    title: 'GTM Strategy',
    type: 'gradient',
    gradient: 'from-purple-600 to-purple-300',
    textColor: 'text-slate-700',
  },
  {
    title: 'Storytelling',
    type: 'solid',
    color: 'bg-yellow-200',
    textColor: 'text-slate-900',
  },
  {
    title: 'Marketing Analytics',
    type: 'solid',
    color: 'bg-blue-200',
    textColor: 'text-slate-900',
  },
  {
    title: 'Product Market',
    type: 'gradient',
    gradient: 'from-blue-600 to-blue-300',
    textColor: 'text-slate-700',
  },
  {
    title: 'Power BI',
    type: 'gradient',
    gradient: 'from-purple-600 to-purple-300',
    textColor: 'text-slate-700',
  },
  {
    title: 'A/B Testing',
    type: 'solid',
    color: 'bg-yellow-200',
    textColor: 'text-slate-900',
  },
  {
    title: 'Customer Insights',
    type: 'solid',
    color: 'bg-purple-200',
    textColor: 'text-slate-900',
  },
  {
    title: 'Data Visualization',
    type: 'gradient',
    gradient: 'from-yellow-500 to-yellow-200',
    textColor: 'text-slate-700',
  },
]

export default function About() {
  useEffect(() => {
    Log.section('About Component')
    Log.info('About section rendered')
    Log.kv({ skillsCount: skills.length })
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent bg-texture relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            About Me
          </h2>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 decorative-diamond opacity-20"></div>
          <div className="absolute bottom-10 left-10 decorative-squiggle opacity-15"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Data tells a story. Marketing gives it a voice. Automation makes it scale. I bring all three together, helping organizations make sense of their market, sharpen their product positioning, and build intelligent workflows that drive measurable outcomes.
          </p>
        </motion.div>

        <div className="overflow-hidden relative py-4 px-2 sm:px-4">
          <motion.div 
            className="flex gap-4"
            animate={{
              x: [0, -1728],
            }}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }
            }}
          >
            {/* Duplicate skills for seamless loop - each card is 200px + 16px gap = 216px, 8 cards = 1728px */}
            {[...skills, ...skills, ...skills].map((skill, index) => {
              const isGradient = skill.type === 'gradient'
              const bgClass = isGradient 
                ? `bg-gradient-to-r ${skill.gradient}` 
                : skill.color
              
              return (
                <motion.div
                  key={`${skill.title}-${index}`}
                  className={`${bgClass} px-4 py-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer flex-shrink-0 w-[200px] box-border overflow-hidden`}
                  whileHover={{ 
                    scale: 1.05,
                  }}
                >
                  <h3 className={`text-sm md:text-base font-semibold ${skill.textColor} text-center break-words leading-tight`}>
                    {skill.title}
                  </h3>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

