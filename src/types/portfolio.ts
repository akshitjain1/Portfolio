// Type definitions for the portfolio data

export interface PersonalInfo {
  name: string
  title: string
  tagline: string
  email: string
  phone: string
  location: string
  bio: string
  profileImage: string
  resume: string
  funFacts: readonly string[]
  social: {
    github: string
    linkedin: string
    twitter: string
    instagram: string
    email: string
  }
}

export interface NavigationItem {
  name: string
  href: string
}

export interface Skill {
  name: string
  level: number
  icon: string
}

export interface SkillCategory {
  [category: string]: readonly Skill[]
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: readonly string[]
  category: string
  github: string
  demo: string
  featured: boolean
}

export interface TimelineItem {
  id: number
  type: 'education' | 'experience' | 'certification'
  title: string
  organization: string
  location: string
  period: string
  description: string
  achievements: readonly string[]
}

export interface GitHubStats {
  username: string
  totalRepos: number
  totalCommits: number
  totalStars: number
  totalForks: number
  streak: number
  topLanguages: readonly {
    name: string
    percentage: number
  }[]
}

// Theme types
export type Theme = 'light' | 'dark'

export interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  mounted: boolean
}
