'use client'

import { motion } from 'framer-motion'
import { Check, Circle, Inbox, FolderKanban, Activity, CheckSquare, Users, MessageSquare, Settings, Sparkles, Send, TrendingUp, Calendar, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

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

export default function AIShowcase() {
  const [selectedDate, setSelectedDate] = useState(4)
  
  useEffect(() => {
    Log.section('AI Showcase Component')
    Log.info('AI showcase section rendered')
  }, [])

  const sidebarItems = [
    { icon: Inbox, label: 'Inbox', badge: 4, active: true },
    { icon: FolderKanban, label: 'Project' },
    { icon: Activity, label: 'Activity' },
    { icon: CheckSquare, label: 'My task' },
    { icon: Users, label: 'Teams' },
    { icon: MessageSquare, label: 'Message' },
    { icon: Settings, label: 'Settings' },
  ]

  const dates = Array.from({ length: 7 }, (_, i) => i + 1)

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-orange-200"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12"
        >
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                <Check className="w-4 h-4" />
                Private & Secure
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
                <Circle className="w-2 h-2 fill-current" />
                Real-Time Insights
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
                <Circle className="w-2 h-2 fill-current" />
                Automated Follow-Ups
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-sm transition-colors flex items-center gap-2">
                Get Template for Free
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold text-sm transition-colors">
                Access 4200+ Components
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Left Sidebar */}
            <div className="lg:col-span-3 space-y-2">
              {sidebarItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      item.active
                        ? 'bg-orange-50 text-orange-600'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </motion.button>
                )
              })}
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 grid md:grid-cols-2 gap-6">
              {/* AI Prompt Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-slate-50 rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-orange-500" />
                  <h3 className="font-semibold text-slate-900">Prompt</h3>
                </div>
                <div className="space-y-4 mb-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-slate-600 text-sm">Hi, how can i help you?</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0"></div>
                    <div className="bg-white rounded-lg p-4 flex-1">
                      <p className="text-slate-600 text-sm">How do i update my account information?</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg p-3 border border-slate-200">
                  <input
                    type="text"
                    placeholder="Ask me anything..."
                    className="flex-1 bg-transparent text-slate-600 placeholder-slate-400 text-sm outline-none"
                  />
                  <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>

              {/* Sales Analytics Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-slate-50 rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  <h3 className="font-semibold text-slate-900">Sales Analyzing</h3>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-slate-900">$540,50,000</div>
                    <span className="text-sm text-green-600 font-medium">+12.5%</span>
                  </div>
                  <div className="h-32 flex items-end justify-between gap-2">
                    {['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map((month, index) => (
                      <div key={month} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-gradient-to-t from-orange-500 to-orange-300 rounded-t"
                          style={{
                            height: `${60 + Math.random() * 40}%`,
                            maxHeight: index === 2 ? '100%' : undefined,
                          }}
                        ></div>
                        <span className="text-xs text-slate-500 mt-2">{month}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Calendar Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="md:col-span-2 bg-slate-50 rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  <h3 className="font-semibold text-slate-900">Calendar</h3>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <select className="mb-4 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium">
                    <option>July</option>
                  </select>
                  <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
                    {dates.map((date) => (
                      <button
                        key={date}
                        onClick={() => {
                          Log.info(`Date selected: ${date}`)
                          setSelectedDate(date)
                        }}
                        className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium transition-colors ${
                          selectedDate === date
                            ? 'bg-orange-500 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        Fri {date.toString().padStart(2, '0')}
                      </button>
                    ))}
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <p className="text-slate-700 font-medium">Meeting with UI/UX team</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

