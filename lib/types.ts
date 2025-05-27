export interface Partner {
  name: string
  type: string
  logo: string
  category: "government" | "industry" | "nonprofit"
  description?: string
}

export interface Mentor {
  name: string
  role: string
  image: string
  expertise: string[]
  bio?: string
  email?: string
  linkedin?: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  content: string
  rating: number
}

export interface Developer {
  name: string
  role: string
  image: string
  bio: string
  skills: string[]
  github?: string
  linkedin?: string
}

export interface Service {
  title: string
  description: string
  icon: React.ComponentType
  href: string
}

export interface FAQ {
  question: string
  answer: string
  category?: string
}

export interface ContactInfo {
  title: string
  description: string
  icon: React.ComponentType
  value: string
  href?: string
} 