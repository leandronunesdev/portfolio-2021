export interface Skills {
  id: number,
  name: string
}

export interface Project {
  id: number,
  title: string,
  description: string,
  image: string,
  liveLink: string,
  codeLink: string
}

export interface Perfil {
  skills: Skills[]
  projects: Project[]
}

export interface Dados {
  dados: Perfil
}