'use client'

import Navigation from '@/components/Navigation'
import BackgroundAccents from '@/components/BackgroundAccents'
import About from '@/components/About'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Marketing from '@/components/Marketing'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="min-h-screen relative" style={{ background: '#0d0818' }}>
      {/* Ambient gradient */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background:
            'radial-gradient(ellipse 60% 55% at 80% 60%, rgba(109,40,217,0.35) 0%, transparent 65%), ' +
            'radial-gradient(ellipse 45% 45% at 20% 30%, rgba(236,72,153,0.18) 0%, transparent 60%)',
        }}
      />

      <BackgroundAccents />
      <Navigation />

      <div className="relative z-10 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Bio section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] max-w-sm mx-auto w-full"
            >
              <img
                src="/images/diksha.jpg"
                alt="Diksha Sivaprasad"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            {/* Bio text */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">— About Me</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                A Little Bit About Me
              </h1>
              <div className="space-y-4 text-white/70 leading-relaxed text-[1.05rem]">
                <p>
                  I'm an AI-forward Business Analyst with international experience across supply chain, consumer tech, and automotive sectors. I'm a Certified Scrum Product Owner (CSPO) with a track record of bridging business and technical teams — translating complex requirements into data-driven strategy and measurable outcomes.
                </p>
                <p>
                  I've worked across Dubai, London, and California — building predictive supply chain models at Bosch, an AI sponsorship platform at Seed Consulting Group, and data-driven marketing campaigns at Bayut & Dubizzle. Whether I'm running SQL analysis, designing Power BI dashboards, or leading sprint planning, I believe the best work happens when data, people, and strategy move together.
                </p>
                <p>
                  I recently completed my MS in Business Analytics at UC Irvine's Paul Merage School of Business, where I also served as VP of Marketing for Merage Women in Business and won the LXi Fall Case Competition.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Skills carousel + experience + education + marketing */}
      <div className="relative z-10">
        <About />
        <Experience />
        <Education />
        <Marketing />
      </div>
    </main>
  )
}
