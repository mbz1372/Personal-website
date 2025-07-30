export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies?: string[];
  location?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  iconUrl?: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  telegram?: string;
  phone?: string;
  location: string;
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  profileImage: string;
  resumeUrl: string;
  contact: ContactInfo;
  experiences: Experience[];
  certificates: Certificate[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  date: string;
  tags: string[];
  previewImage?: string;
  description: string;
  content: string;
  readTime?: number;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  downloadUrl?: string;
  previewUrl?: string;
  publishDate?: string;
  category?: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration?: string;
  category?: string;
  date: string;
  isYoutube?: boolean;
}

export interface Skills {
  hard: string[];
  soft: string[];
  languages: { name: string; level: string }[];
}

export interface AboutData {
  biography: string;
  skills: Skills;
  personalityTraits: string[];
  funFacts?: string[];
}