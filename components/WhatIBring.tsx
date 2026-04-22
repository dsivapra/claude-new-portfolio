'use client'

import { motion } from 'framer-motion'

const outcomes = [
  {
    title: 'Data-Driven Strategy',
    description:
      'Delivered 13% forecasting improvements at Bosch and 30% engagement lifts at Bayut by turning raw data into decisions teams could act on. Python, SQL, and Power BI are the tools — clear outcomes are the point.',
    doodle: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="3" y="20" width="6" height="12" rx="1.5" stroke="#a855f7" strokeWidth="2" fill="none"/>
        <rect x="15" y="12" width="6" height="20" rx="1.5" stroke="#a855f7" strokeWidth="2" fill="none"/>
        <rect x="27" y="5" width="6" height="27" rx="1.5" stroke="#a855f7" strokeWidth="2" fill="none"/>
        <path d="M6 16 Q12 10 18 12" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" fill="none"/>
        <path d="M21 9 Q24 7 27 5" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Product & Requirements',
    description:
      'Starting with the pain point, not the solution. Talking to people, mapping what they actually need, and turning that into BRDs, PRDs, and wireframes that engineering can run with — as a Certified Scrum Product Owner.',
    doodle: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="4" width="24" height="28" rx="3" stroke="#ec4899" strokeWidth="2" fill="none"/>
        <path d="M11 11 h14" stroke="#ec4899" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M11 16 h14" stroke="#ec4899" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M11 21 h8" stroke="#ec4899" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="27" cy="27" r="5" fill="white" stroke="#ec4899" strokeWidth="2"/>
        <path d="M25 27 l1.5 1.5 L29 25" stroke="#ec4899" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'AI & Automation',
    description:
      'Prototype fast, iterate on real feedback, and keep improving until it\'s genuinely useful. From RAG pipelines to AI agents to personal workflow automations, the focus is always on solving something real.',
    doodle: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="10" y="8" width="16" height="12" rx="3" stroke="#f97316" strokeWidth="2" fill="none"/>
        <path d="M18 20 L18 25" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 25 h12" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="1.5" fill="#f97316"/>
        <circle cx="18" cy="14" r="1.5" fill="#f97316"/>
        <circle cx="22" cy="14" r="1.5" fill="#f97316"/>
        <path d="M5 12 Q3 14 5 16" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <path d="M31 12 Q33 14 31 16" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Cross-Functional Leadership',
    description:
      'From Dubai to California, working at the intersection of marketing, engineering, product, and supply chain. Getting different teams moving in the same direction toward something that actually ships.',
    doodle: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="10" r="4" stroke="#6366f1" strokeWidth="2" fill="none"/>
        <path d="M10 28 C10 21 26 21 26 28" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle cx="7" cy="13" r="3" stroke="#6366f1" strokeWidth="1.8" fill="none" strokeDasharray="2 1.5"/>
        <path d="M3 27 C3 22 13 22 13 27" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" fill="none" strokeDasharray="2 1.5"/>
        <circle cx="29" cy="13" r="3" stroke="#6366f1" strokeWidth="1.8" fill="none" strokeDasharray="2 1.5"/>
        <path d="M23 27 C23 22 33 22 33 27" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" fill="none" strokeDasharray="2 1.5"/>
      </svg>
    ),
  },
]

export default function WhatIBring() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-transparent relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">What I Bring</h2>
          <p className="text-white/55">
            Connecting data, strategy, and people to drive outcomes that actually move the needle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -4 }}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform inline-block">
                {item.doodle}
              </div>
              <h3 className="text-base font-semibold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
