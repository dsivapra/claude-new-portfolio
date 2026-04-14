import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, User, Wrench, Target, ExternalLink } from 'lucide-react'
import { getProjectById, projects } from '@/data/projects'
import Navigation from '@/components/Navigation'
import BackgroundAccents from '@/components/BackgroundAccents'

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = parseInt(params.id, 10)
  const project = getProjectById(id)
  if (!project) return { title: 'Project not found' }
  return {
    title: `${project.title} | Diksha Sivaprasad`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10)
  const project = getProjectById(id)
  if (!project) notFound()

  const body = project.longDescription
  const hasDetails = project.role || (project.tech?.length) || (project.outcomes?.length)

  return (
    <main className="min-h-screen bg-white relative">
      <BackgroundAccents />
      <Navigation />
      <div className="relative z-10 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-600 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>

          {/* Hero: title + image */}
          <div className="mb-12">
            <span className="section-tag text-orange-600">Project</span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {project.title}
            </h1>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>

          {/* Summary in new portfolio style */}
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {body}
            </p>

            {hasDetails && (
              <div className="space-y-6 pt-6 border-t border-slate-200">
                {project.role && (
                  <div>
                    <div className="flex items-center gap-2 text-slate-900 font-semibold mb-2">
                      <User className="w-5 h-5 text-orange-500" />
                      Role
                    </div>
                    <p className="text-slate-600 pl-7">{project.role}</p>
                  </div>
                )}
                {project.tech && project.tech.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 text-slate-900 font-semibold mb-2">
                      <Wrench className="w-5 h-5 text-orange-500" />
                      Tools & Tech
                    </div>
                    <div className="pl-7 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-full text-sm font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.outcomes && project.outcomes.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 text-slate-900 font-semibold mb-2">
                      <Target className="w-5 h-5 text-orange-500" />
                      Key Outcomes
                    </div>
                    <ul className="pl-7 space-y-2">
                      {project.outcomes.map((outcome, i) => (
                        <li key={i} className="text-slate-600 flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Full report CTA - internal reports open in same tab, external in new tab */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <a
                href={project.link}
                {...(project.link.startsWith('/') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                View full report
                <ExternalLink className="w-5 h-5" />
              </a>
              <p className="text-sm text-slate-500 mt-3">
                {project.link.startsWith('/') ? 'View the full analysis and visuals on this site.' : 'Opens the detailed report in a new tab.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
