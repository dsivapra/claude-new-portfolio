import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Diksha Sivaprasad | Business Analyst & Data Enthusiast',
  description: 'A Business Analyst with a background in Marketing and Business Management. An enthusiast of all things Data, Marketing, and Product.',
  keywords: ['Business Analyst', 'Data Science', 'Marketing', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

