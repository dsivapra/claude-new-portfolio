'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '@/data/projects'

export default function Projects() {
  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-8 px-4 sm:px-6 lg:px-8 bg-transparent bg-texture relative">
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My Projects
          </h2>
          <div className="absolute top-10 right-10 decorative-diamond opacity-20" />
          <div className="absolute bottom-10 left-10 decorative-squiggle opacity-15" />
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Exploring data, building insights, and creating solutions that matter
          </p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="bg-white/8 border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold mb-4">
                    Featured Project
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    {featuredProject.title}
                  </h3>
                  <p className="text-lg text-white/65 mb-6">
                    {featuredProject.description}
                  </p>
                  <Link
                    href={`/projects/${featuredProject.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors"
                  >
                    View Project
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
                <Link
                  href={`/projects/${featuredProject.id}`}
                  className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg block w-full"
                >
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group text-left w-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-3 transition-all">
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
