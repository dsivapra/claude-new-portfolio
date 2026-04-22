'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

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

export default function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    Log.section('Navigation Component')
    Log.info('Initializing navigation scroll listener')

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '/about', hash: false },
    { name: 'Work', href: '#projects', hash: true },
    { name: 'Contact', href: '#contact', hash: true },
  ]

  const handleNavClick = (item: (typeof navItems)[0], e: React.MouseEvent) => {
    Log.info(`Navigation clicked: ${item.href}`)
    setIsMobileMenuOpen(false)
    if (item.hash && isHome) {
      e.preventDefault()
      const element = document.querySelector(item.href)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-bold text-white block"
          >
            <motion.span
              className="block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              D/S
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              isHome ? (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(item, e)
                  }}
                  className="text-white/80 hover:text-white transition-colors font-medium"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name}
                </motion.a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href.startsWith('#') ? `/${item.href}` : item.href}
                  className="text-white/80 hover:text-white transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => {
              Log.info(`Mobile menu toggled: ${!isMobileMenuOpen}`)
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-md"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-white hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                D/S
              </Link>
              {navItems.map((item) =>
                isHome ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(item, e)
                    }}
                    className="block px-4 py-2 text-white hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href.startsWith('#') ? `/${item.href}` : item.href}
                    className="block px-4 py-2 text-white hover:bg-slate-800 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

