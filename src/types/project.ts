export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

// Narrow type for components that don't need `id` or `featured`
export type ProjectForModal = Pick<
  Project,
  'title' | 'description' | 'image' | 'technologies' | 'liveUrl' | 'githubUrl'
>