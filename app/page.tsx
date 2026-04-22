'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import WhatIBring from '@/components/WhatIBring'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import BackgroundAccents from '@/components/BackgroundAccents'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const rawX = useMotionValue(760)
  const rawY = useMotionValue(400)
  const glowX = useSpring(rawX, { stiffness: 45, damping: 22 })
  const glowY = useSpring(rawY, { stiffness: 45, damping: 22 })

  useEffect(() => { setMounted(true) }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    rawX.set(e.clientX)
    rawY.set(e.clientY)
  }

  return (
    <main
      className="min-h-screen relative"
      style={{ background: '#0d0818' }}
      onMouseMove={handleMouseMove}
    >
      {/* Fixed ambient gradient + mouse glow — client-only to avoid hydration mismatch */}
      {mounted && (
        <>
          <div
            className="fixed inset-0 pointer-events-none"
            style={{
              zIndex: 0,
              background:
                'radial-gradient(ellipse 60% 55% at 80% 60%, rgba(109,40,217,0.35) 0%, transparent 65%), ' +
                'radial-gradient(ellipse 45% 45% at 20% 30%, rgba(236,72,153,0.18) 0%, transparent 60%)',
            }}
          />
          <motion.div
            className="fixed pointer-events-none"
            style={{
              width: 850,
              height: 850,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(192,132,252,0.45) 0%, rgba(236,72,153,0.22) 35%, transparent 65%)',
              filter: 'blur(80px)',
              translateX: '-50%',
              translateY: '-50%',
              left: 0,
              top: 0,
              x: glowX,
              y: glowY,
              zIndex: 0,
            }}
          />
        </>
      )}

      <BackgroundAccents />
      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Hero />
        <WhatIBring />
        <Projects />
        <Contact />
      </motion.div>
    </main>
  )
}
