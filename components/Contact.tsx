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

export default function Contact() {
  useEffect(() => {
    Log.section('Contact Component')
    Log.info('Contact section rendered')
  }, [])

  return (
    <section id="contact" className="py-8 px-4 sm:px-6 lg:px-8 bg-transparent bg-texture relative">
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
            Get In Touch
          </h2>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 decorative-diamond opacity-20"></div>
          <div className="absolute bottom-10 right-10 decorative-squiggle opacity-15"></div>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-0">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/8 border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                <span>SEND ME AN EMAIL</span>
                <span className="vivarily-arrow group-hover:translate-x-1 transition-transform">›</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 text-white/35"
        >
          <p>© {new Date().getFullYear()} Diksha Sivaprasad. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}

