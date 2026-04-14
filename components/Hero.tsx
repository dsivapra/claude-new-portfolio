'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Hero() {
  // Track mouse in px relative to the section element
  const rawX = useMotionValue(900)
  const rawY = useMotionValue(400)

  // Spring lag — glow trails the cursor naturally
  const glowX = useSpring(rawX, { stiffness: 45, damping: 22 })
  const glowY = useSpring(rawY, { stiffness: 45, damping: 22 })

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    rawX.set(e.clientX - rect.left)
    rawY.set(e.clientY - rect.top)
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
      style={{ background: 'linear-gradient(to bottom, #0d0818 30%, rgba(13,8,24,0.5) 65%, transparent 100%)' }}
      onMouseMove={handleMouseMove}
    >
      {/* Static ambient base */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 65% at 85% 65%, rgba(109,40,217,0.3) 0%, transparent 65%), ' +
            'radial-gradient(ellipse 40% 50% at 15% 25%, rgba(236,72,153,0.15) 0%, transparent 60%)',
        }}
      />

      {/* Mouse-following glow — absolute so it stays inside the hero */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 700,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(192,132,252,0.55) 0%, rgba(236,72,153,0.28) 35%, transparent 65%)',
          filter: 'blur(60px)',
          translateX: '-50%',
          translateY: '-50%',
          left: 0,
          top: 0,
          x: glowX,
          y: glowY,
        }}
      />

      {/* Decorative diamonds */}
      <div className="absolute top-32 right-64 w-5 h-5 bg-white/15 rotate-45 pointer-events-none" />
      <div className="absolute top-36 right-60 w-3 h-3 bg-white/8 rotate-45 pointer-events-none" />
      <div className="absolute bottom-28 left-1/4 w-4 h-4 bg-purple-400/20 rotate-45 pointer-events-none" />

      {/* Bento cards */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-xl mx-auto">

          {/* Name card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-3xl px-10 py-12 mb-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Hi, I'm{' '}
              <span className="wavy-underline-light">Diksha</span>!
            </h1>
          </motion.div>

          {/* Subtitle + buttons card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl px-10 py-8"
          >
            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">
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
