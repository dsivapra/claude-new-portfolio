'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Marketing from '@/components/Marketing'
import BackgroundAccents from '@/components/BackgroundAccents'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen relative bg-fixed bg-gradient-to-br from-[#ede4ff] via-[#fad5f0] to-[#ffe8d6]">
      <BackgroundAccents />
      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Marketing />
        <Contact />
      </motion.div>
    </main>
  )
}

