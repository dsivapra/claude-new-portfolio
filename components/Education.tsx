'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { useEffect } from 'react'

const DoodleGradCap = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 5 L26 11 L14 17 L2 11 Z" stroke="white" strokeWidth="2" strokeLinejoin="round" fill="none"/>
    <path d="M6 13.5 L6 20 C6 20 10 23 14 23 C18 23 22 20 22 20 L22 13.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M26 11 L26 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="26" cy="19.5" r="1.5" fill="white"/>
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

const education = [
  {
    degree: 'MSc. in Business Analytics',
    institution: 'University of California, Irvine',
    school: 'The Paul Merage School of Business',
    period: 'Jul 2024 – Sep 2025',
    activities: [
      'Data @UCI, Merage Analytics Club (MAC), Merage Women in Business',
      'LXi Fall Case Competition Winner',
      'Vice President of Marketing – Merage Women in Business Association',
      'Student Council Representative – Associated Graduate Students',
      'Mentor – Women in Leadership',
      'Merage Scholarship Recipient',
    ],
    coursework: [
      'Statistics for Data Science',
      'Machine Learning for Analytics',
      'Data and Programming for Analytics',
      'Foundations of Marketing',
      'Natural Language Processing',
      'Management Science for Analytics',
      'Customer and Social Analytics',
      'Consulting Projects',
      'Micromarketing',
      'Big Data Management Systems',
      'Blockchain Technology',
    ],
  },
  {
    degree: 'BA (Honors) Business Management – Marketing',
    institution: 'Middlesex University London',
    school: undefined,
    period: '2018 – 2021',
    grade: 'First Class Honours',
    activities: undefined as string[] | undefined,
    coursework: [
      'Financial Aspects of Business',
      'Applications and Research in Management',
      'Operations Management',
      'Brand Management',
      'Strategic Management',
      'International Marketing',
    ],
  },
]

export default function Education() {
  useEffect(() => {
    Log.section('Education Component')
    Log.info('Education section rendered')
    Log.kv({ educationCount: education.length })
  }, [])

  return (
    <section id="education" className="py-8 px-4 sm:px-6 lg:px-8 bg-transparent bg-texture relative">
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Education
          </h2>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 decorative-diamond opacity-20"></div>
          <div className="absolute bottom-10 right-10 decorative-squiggle opacity-15"></div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
          {education.map((edu, index) => {
            const colors = [
              { header: 'from-orange-500 to-pink-500', accent: 'text-orange-500', badge: 'bg-orange-50 text-orange-700' },
              { header: 'from-pink-500 to-fuchsia-500', accent: 'text-pink-500', badge: 'bg-pink-50 text-pink-700' },
            ]
            const color = colors[index % colors.length]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group w-full"
                whileHover={{ y: -4 }}
              >
                <div className="rounded-2xl overflow-hidden border border-white/10 flex flex-col">
                  {/* Coloured header band */}
                  <div className={`bg-gradient-to-r ${color.header} p-6 pb-8`}>
                    <p className="text-white/70 text-sm font-medium mb-1 uppercase tracking-widest">
                      {edu.period}
                    </p>
                    <h3 className="text-2xl font-bold text-white leading-snug">{edu.degree}</h3>
                  </div>

                  {/* Dark glass body */}
                  <div className="bg-white/8 p-6 flex flex-col flex-1 -mt-3">
                    {/* Institution */}
                    <div className="mb-4">
                      <p className="text-xl font-bold text-white">{edu.institution}</p>
                      {edu.school && <p className="text-white/55 text-sm mt-0.5">{edu.school}</p>}
                    </div>

                    {'grade' in edu && edu.grade && (
                      <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 bg-white/15 text-white/85`}>
                        {edu.grade}
                      </span>
                    )}

                    {'activities' in edu && edu.activities && edu.activities.length > 0 && (
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-white/45 uppercase tracking-wide mb-2">Activities</p>
                        <ul className="text-sm text-white/70 space-y-1 list-disc list-inside">
                          {edu.activities.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {edu.coursework && edu.coursework.length > 0 && (
                      <div className="mt-auto">
                        <p className="text-xs font-semibold text-white/45 uppercase tracking-wide mb-2">Coursework</p>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.coursework.map((course, i) => (
                            <span key={i} className="px-2.5 py-1 bg-white/10 text-white/70 rounded-md text-xs font-medium">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

