export type ColorMode = 'light' | 'dark'

export interface NavItem {
  label: string
  path: string
}

export interface Product {
  id: string
  name: string
  description: string
  available: boolean
  category: string
}
