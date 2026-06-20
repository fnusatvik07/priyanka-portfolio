/**
 * Type contract for portfolio-data.json — the single source of truth.
 * Components consume these types only; no resume content is hardcoded in JSX.
 */

export interface Basics {
  name: string
  label: string
  headline: string
  positioning: string
  location: string
  availability: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ExperienceItem {
  company: string
  role: string
  start: string
  end: string
  current: boolean
  location: string
  highlights: string[]
  technologies: string[]
}

export interface Project {
  name: string
  date: string
  featured: boolean
  challenge: string
  solution: string
  outcome: string
  technologies: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  year: string
  detail: string
}

export interface Certification {
  name: string
  issuer: string
  link: string
}

export interface Achievement {
  metric: string
  label: string
  source: string
}

export interface Publication {
  title: string
  venue: string
  year: string
  link: string
}

export interface Talk {
  title: string
  event: string
  year: string
  link: string
}

export interface Award {
  name: string
  issuer: string
  year: string
}

export interface Socials {
  linkedin: string
  github: string
}

export interface Contact {
  email: string
  phone: string
}

export interface PortfolioData {
  basics: Basics
  summary: string
  skills: SkillGroup[]
  experience: ExperienceItem[]
  projects: Project[]
  education: EducationItem[]
  certifications: Certification[]
  awards: Award[]
  publications: Publication[]
  talks: Talk[]
  achievements: Achievement[]
  socials: Socials
  contact: Contact
  technologies: string[]
}
