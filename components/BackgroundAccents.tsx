'use client'

import { motion } from 'framer-motion'

export default function BackgroundAccents() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft Glowing Blobs */}
      <motion.div
        className="glow-blob bg-blue-400 w-96 h-96 top-20 left-10"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="glow-blob bg-purple-400 w-80 h-80 top-40 right-20"
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="glow-blob bg-pink-400 w-72 h-72 bottom-32 left-1/3"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Gradient Orbs */}
      <motion.div
        className="gradient-orb bg-gradient-to-br from-orange-300 to-pink-300 w-64 h-64 top-1/3 right-1/4"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="gradient-orb bg-gradient-to-br from-indigo-300 to-blue-300 w-56 h-56 bottom-1/4 left-1/4"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-grid-overlay opacity-30" />
    </div>
  )
}


