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
    degree: 'Master of Science (MS), Business Analytics',
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
    institution: 'Middlesex University',
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">
            Education
          </h2>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 decorative-diamond opacity-20"></div>
          <div className="absolute bottom-10 right-10 decorative-squiggle opacity-15"></div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="space-y-4">
          {education.map((edu, index) => {
            const colors = [
              { bg: 'bg-orange-500', hover: 'bg-orange-600', border: 'border-orange-200', accent: 'text-orange-600' },
              { bg: 'bg-pink-500', hover: 'bg-pink-600', border: 'border-pink-200', accent: 'text-pink-600' },
            ]
            const color = colors[index % colors.length]
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative"
                whileHover={{ x: index % 2 === 0 ? 4 : -4 }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${color.bg} rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`}></div>
                <div className={`relative bg-white rounded-xl p-6 border-2 ${color.border} hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                  <div className={`absolute top-0 left-0 w-1 h-full ${color.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full -mr-12 -mt-12 opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <motion.div 
                        className={`w-14 h-14 rounded-xl ${color.bg} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        whileHover={{ rotate: [0, 10, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <DoodleGradCap />
                      </motion.div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-2 mb-1">
                        <h3 className="text-xl font-semibold text-slate-900">{edu.institution}</h3>
                        {edu.school && (
                          <>
                            <span className="text-slate-400">•</span>
                            <span className="text-slate-700 font-medium">{edu.school}</span>
                          </>
                        )}
                      </div>
                      <p className={`text-lg font-medium ${color.accent} mb-2`}>{edu.degree}</p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-500 mb-3 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        {'grade' in edu && edu.grade && (
                          <span className="font-medium text-slate-600">{edu.grade}</span>
                        )}
                      </div>
                      {'activities' in edu && edu.activities && edu.activities.length > 0 && (
                        <div className="mb-3">
                          <p className="text-sm font-semibold text-slate-700 mb-1.5">Activities and societies</p>
                          <ul className="text-sm text-slate-600 space-y-0.5 list-disc list-inside">
                            {edu.activities.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {edu.coursework && edu.coursework.length > 0 && (
                        <div>
                          <p className="text-sm font-semibold text-slate-700 mb-1.5">Relevant coursework</p>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
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

