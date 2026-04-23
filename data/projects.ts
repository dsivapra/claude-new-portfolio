export type Project = {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  link: string
  featured?: boolean
  role?: string
  tech?: string[]
  outcomes?: string[]
}

export const projects: Project[] = [
  {
    id: 0,
    title: 'The Byte Brief',
    description: 'A twice-daily AI newsletter built to solve inbox overload. Curated by Gemini, short enough to actually finish, delivered straight to your inbox.',
    longDescription: 'Too many AI newsletters, not enough time. Subscribed to all of them and still felt behind, so The Byte Brief was built as a personal fix.\n\nTwice a day, it pulls from top RSS feeds and uses Google Gemini to surface what actually matters across four areas: Startups & Funding, Policy & Regulation, Agents & Automation, and AI Research. Each brief respects your time with four stories with a "Why it matters" line, a tools spotlight, a hype reality-check, and an audio version for when reading isn\'t on the cards.\n\nBuilt with Lovable, Supabase, Google Gemini, ElevenLabs, and Resend. Hosted on Vercel.',
    image: '/images/ByteBrief.jpg',
    link: 'https://the-byte-brief.vercel.app/',
    featured: true,
    role: 'Product Builder / Creator',
    tech: ['Lovable', 'Supabase', 'Google Gemini', 'ElevenLabs API', 'Resend API', 'RSS Feeds', 'Vercel'],
    outcomes: [
      'Twice-daily AI newsletter with automated content curation via Gemini',
      'Audio version generated with ElevenLabs API for on-the-go listening',
      'End-to-end product: from problem to design, build, and deployment',
      'Covers Startups & Funding, Policy, Agents & Automation, and AI Research',
    ],
  },
  {
    id: 1,
    title: 'Predicting Uber Fare Prices',
    description: 'Using machine learning algorithms to understand the surge pricing model and provided ways to find cost-effective rides.',
    longDescription: 'Analyzed Uber fare data to uncover patterns in surge pricing and build predictive models that help riders find cost-effective options. Explored feature engineering, model comparison, and visualization of fare determinants across time, distance, and demand.',
    image: '/images/Uber.jpg',
    link: '/reports/Uber.html',
    featured: false,
    role: 'Data Analyst',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter'],
    outcomes: [
      'Identified key drivers of fare pricing and surge behavior',
      'Built and compared multiple ML models for fare prediction',
      'Delivered actionable insights for cost-effective ride planning',
    ],
  },
  {
    id: 2,
    title: 'Sephora Product and Review Analysis',
    description: 'Built a personalized product recommendation model using TF-IDF, KNN, and sentiment analysis to match users with top-rated skincare products based on skin type and brand trends.',
    longDescription: 'Developed an end-to-end recommendation pipeline using natural language processing and sentiment analysis on Sephora product reviews. Combined TF-IDF and KNN for content-based filtering and integrated sentiment scores to surface highly rated products aligned with user preferences and skin type.',
    image: '/images/Sephora.jpg',
    link: '/reports/Sephora.html',
    featured: false,
    role: 'Data Analyst / NLP',
    tech: ['Python', 'TF-IDF', 'KNN', 'Sentiment Analysis', 'Pandas', 'NLP'],
    outcomes: [
      'Personalized product recommendations by skin type and brand',
      'Sentiment-driven ranking of top-rated skincare products',
      'Actionable insights for product and marketing strategy',
    ],
  },
  {
    id: 3,
    title: 'Stress Level Predictions',
    description: "Used the K-Means Clustering method to identify Sun Country's target customer segments and provided recommendations to boost their marketing.",
    longDescription: 'Applied unsupervised learning to segment Sun Country Airlines customers and derive marketing recommendations. Used K-Means clustering to group travelers by behavior and demographics, then translated segments into targeted campaign and messaging strategies.',
    image: '/images/Stress Level.jpg',
    link: '/reports/Stress.html',
    featured: false,
    role: 'Data Analyst',
    tech: ['Python', 'K-Means Clustering', 'Scikit-learn', 'Pandas', 'Visualization'],
    outcomes: [
      'Identified distinct customer segments for Sun Country',
      'Provided data-driven marketing and targeting recommendations',
      'Enabled more effective campaign and messaging strategies',
    ],
  },
  {
    id: 4,
    title: 'Movie Recommendation System',
    description: 'Built a system that recommends movies by understanding storylines, tone, and themes. Something closer to how people actually make suggestions.',
    longDescription: 'Designed a recommendation system that goes beyond ratings by using storylines, tone, and themes, matching how people naturally suggest movies. Combined narrative and thematic features to produce more relevant and explainable recommendations.',
    image: '/images/Movie.jpg',
    link: 'https://medium.com/@dsivapra/how-we-built-a-movie-recommendation-system-that-understands-stories-066698a824b2',
    featured: false,
    role: 'Data Analyst / ML',
    tech: ['Python', 'NLP', 'Recommendation Systems', 'Story/Theme Extraction'],
    outcomes: [
      'Recommendations based on storylines, tone, and themes',
      'More interpretable and human-like suggestions',
      'Documented approach and results in a Medium article',
    ],
  },
  {
    id: 5,
    title: 'TSA Baggage Claims Statistical Analysis',
    description: 'Identified airports with the highest and lowest rates of baggage loss and damage.',
    longDescription: 'Conducted statistical analysis of TSA baggage claims data to pinpoint airports and routes with the highest and lowest rates of loss and damage. Delivered clear, stakeholder-ready findings to support operational and policy decisions.',
    image: '/images/Baggage.jpg',
    link: '/reports/TSA.html',
    featured: false,
    role: 'Data Analyst',
    tech: ['Python', 'Pandas', 'Statistical Analysis', 'Visualization', 'Excel'],
    outcomes: [
      'Ranked airports by baggage loss and damage rates',
      'Highlighted high-risk routes and locations',
      'Supported data-driven operational and policy recommendations',
    ],
  },
]

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id)
}
