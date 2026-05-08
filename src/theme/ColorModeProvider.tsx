import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { buildTheme } from './theme'
import type { ColorMode } from '../types'

interface ColorModeContextType {
  mode: ColorMode
  toggleColorMode: () => void
}

const ColorModeContext = createContext<ColorModeContextType>({
  mode: 'dark',
  toggleColorMode: () => {},
})

export const useColorMode = () => useContext(ColorModeContext)

export default function ColorModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ColorMode>(() => {
    const saved = localStorage.getItem('colorMode')
    return (saved as ColorMode) || 'dark'
  })

  const toggleColorMode = () => {
    setMode((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      localStorage.setItem('colorMode', next)
      return next
    })
  }

  const theme = useMemo(() => buildTheme(mode), [mode])

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
