'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Decorative diamonds */}
      <div className="absolute top-32 right-64 w-5 h-5 bg-white/15 rotate-45 pointer-events-none" />
      <div className="absolute top-36 right-60 w-3 h-3 bg-white/8 rotate-45 pointer-events-none" />
      <div className="absolute bottom-28 left-1/4 w-4 h-4 bg-purple-400/20 rotate-45 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-xl mx-auto">

          {/* Name — no box */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 px-2"
          >
            <p className="text-xl md:text-2xl text-white/85 font-light mb-1">Hello, I'm</p>
            <h1 className="text-7xl md:text-9xl font-bold text-white leading-none tracking-tight">
              <span className="wavy-underline-light">Diksha</span>
            </h1>
            <p className="text-white/65 text-lg mt-3 tracking-wide">You're in the right place.</p>
          </motion.div>

          {/* Subtitle + buttons card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl px-10 py-8"
          >
            <p className="text-base md:text-lg text-white/85 leading-relaxed mb-8">
              I'm a Business Analyst and Product Marketer who turns data into
              strategy and insights into growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="https://www.linkedin.com/in/diksha-sivaprasad/"
                target="_blank"
                rel="noopener noreferrer"
                className="vivarily-btn group"
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>CONNECT WITH ME</span>
                <span className="vivarily-arrow group-hover:translate-x-1 transition-transform">›</span>
              </motion.a>
              <motion.a
                href="mailto:dikshasivaprasad11@gmail.com"
                className="vivarily-btn group"
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>LET'S TALK</span>
                <span className="vivarily-arrow group-hover:translate-x-1 transition-transform">›</span>
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
