'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { useEffect } from 'react'

const DoodleBriefcase = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="10" width="22" height="15" rx="3" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M9 10 L9 7 C9 5.9 9.9 5 11 5 L17 5 C18.1 5 19 5.9 19 7 L19 10" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M3 15 Q14 18 25 15" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    <path d="M12 15 L12 17 L16 17 L16 15" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
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

const experiences = [
  {
    title: 'Business Analyst',
    company: 'Virstack',
    location: 'Irvine, CA',
    period: 'October 2025 - Present',
    summary: 'Deploying client-specific virtual AI agents within an internal automation platform, designing conversational flows that improved customer support interactions. Built and automated project tracking AI workflows in Airtable and JIRA to streamline process improvement and enable data-informed decision-making. Collaborate with developers and designers using JIRA and Figma to plan sprints, document features, and build wireframes for mobile and web application development.',
  },
  {
    title: 'Project Consultant',
    company: 'Seed Consulting Group',
    location: 'Irvine, CA',
    period: 'September 2025 - Present',
    summary: 'Built an AI-powered sponsorship outreach platform using GPT-4o-mini and a custom RAG pipeline, transforming a static playbook into a dynamic decision-support tool with a chatbot for a nonprofit organization based in San Diego.',
  },
  {
    title: 'Business Analyst Intern',
    company: 'Bosch',
    location: 'Irvine, CA',
    period: 'January 2025 - June 2025',
    summary: 'Improved supply chain and inventory planning accuracy by 13% by developing predictive models in Python, SQL, and Power BI. Built advanced forecasting models (ARIMA, XGBoost, Prophet, Cosine Similarity) to predict SKU-level product launch demand. Delivered Power BI dashboards and clear stakeholder-ready summaries, enabling non-technical teams to adjust messaging and planning strategies based on real-time demand signals.',
  },
  {
    title: 'Project Consultant',
    company: 'Karma Automotive',
    location: 'Irvine, CA',
    period: 'January 2025 - March 2025',
    summary: 'Identified and evaluated 20+ strategic EV partnerships by conducting stakeholder interviews, market research, and SQL-based analysis, supporting the expansion of EV charging infrastructure across Southern California. Improved targeting and effectiveness of EV workforce initiatives by building a SQL-based partner database and collaborating with marketing leadership to design data-sharing and measurement frameworks.',
  },
  {
    title: 'Product Marketing Analyst',
    company: 'Bayut and Dubizzle',
    location: 'Dubai, UAE',
    period: 'July 2021 - May 2023',
    summary: 'Achieved a 30% increase in advertising campaign engagement by optimizing content strategy across CMS platforms and social channels (Instagram, TikTok, Facebook). Collaborated across marketing, design, engineering, and product teams to analyze paid ad campaigns during FIFA World Cup 2022 using SQL and Excel, delivering weekly performance insights that led to a 12% boost in ad engagement. Delivered a 10% increase in audience reach on key products by analyzing engagement metrics, conducting user interviews, and maintaining documentation to refine product strategy.',
  },
  {
    title: 'Media Intelligence Analyst Intern',
    company: 'LexisNexis',
    location: 'Dubai, UAE',
    period: 'November 2020 - July 2021',
    summary: 'Delivered 30+ campaign intelligence reports by analyzing brand sentiment, coverage volume, and social listening data using Nexis Newsdesk, Excel, and Looker Studio. Generated competitive intelligence and media analytics reports for high-profile clients, including the UAE Ministry of Interior, Emirates Global Aluminum, Qatar Library, and Tasaki Jewelry UK. Developed internal social listening and analytics dashboards that tracked campaign lifecycle metrics across earned media, and translated insights into strategic playbooks for client marketing teams.',
  },
]

export default function Experience() {
  useEffect(() => {
    Log.section('Experience Component')
    Log.info('Experience section rendered')
    Log.kv({ experiencesCount: experiences.length })
  }, [])

  return (
    <section id="experience" className="py-8 px-4 sm:px-6 lg:px-8 bg-transparent bg-texture relative">
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Experience
          </h2>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 decorative-diamond opacity-20"></div>
          <div className="absolute bottom-10 right-10 decorative-squiggle opacity-15"></div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Center vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-orange-400 via-pink-400 to-fuchsia-400 opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const dotColors = [
                'bg-orange-500', 'bg-pink-500', 'bg-rose-500',
                'bg-amber-500', 'bg-fuchsia-500', 'bg-red-500',
              ]
              const textColors = [
                'text-orange-400', 'text-pink-400', 'text-rose-400',
                'text-amber-400', 'text-fuchsia-400', 'text-red-400',
              ]
              const dot = dotColors[index % dotColors.length]
              const accent = textColors[index % textColors.length]
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07, duration: 0.5 }}
                  className="relative flex items-start md:grid md:grid-cols-[1fr_32px_1fr] gap-0"
                >
                  {/* Left side */}
                  <div className={`hidden md:block ${isLeft ? 'pr-10 text-right' : ''}`}>
                    {isLeft && (
                      <>
                        <div className="flex flex-wrap justify-end items-baseline gap-x-3 gap-y-1 mb-1">
                          <span className={`font-semibold ${accent}`}>{exp.company}</span>
                          <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                        </div>
                        <div className="flex flex-wrap justify-end items-center gap-x-3 text-white/45 text-sm mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{exp.period}</span>
                          </div>
                          <span>·</span>
                          <span>{exp.location}</span>
                        </div>
                        <p className="text-white/70 leading-relaxed text-sm">{exp.summary}</p>
                      </>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex flex-col items-center pt-1.5">
                    <div className={`w-4 h-4 rounded-full ${dot} shadow-lg ring-4 ring-white/10 flex-shrink-0`} />
                  </div>

                  {/* Right side */}
                  <div className={`hidden md:block ${!isLeft ? 'pl-10' : ''}`}>
                    {!isLeft && (
                      <>
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                          <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                          <span className={`font-semibold ${accent}`}>{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-3 text-white/45 text-sm mb-3">
                          <span>{exp.location}</span>
                          <span>·</span>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <p className="text-white/70 leading-relaxed text-sm">{exp.summary}</p>
                      </>
                    )}
                  </div>

                  {/* Mobile layout — single column */}
                  <div className="md:hidden pl-8 relative">
                    <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full ${dot} ring-4 ring-white/10`} />
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
                      <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                      <span className={`font-semibold ${accent}`}>{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 text-white/45 text-sm mb-2">
                      <span>{exp.location}</span>
                      <span>·</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-white/70 leading-relaxed text-sm">{exp.summary}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

