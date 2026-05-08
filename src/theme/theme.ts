import { createTheme, type ThemeOptions } from '@mui/material/styles'
import type { ColorMode } from '../types'

const FONT_DISPLAY = 'Norwester, serif'
const FONT_BODY = '"Montserrat Variable", "Helvetica Neue", Arial, sans-serif'
const FONT_SERIF = 'Quattrocento, serif'

export function getThemeOptions(mode: ColorMode): ThemeOptions {
  const isDark = mode === 'dark'

  return {
    palette: {
      mode,
      primary: {
        main: '#C4732A',
        light: '#D9945A',
        dark: '#8F5120',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#5B8C4A',
        light: '#7AAD67',
        dark: '#3D6132',
        contrastText: '#FFFFFF',
      },
      background: {
        default: isDark ? '#0F0C08' : '#F5F0E8',
        paper: isDark ? '#1C1710' : '#FFFFFF',
      },
      text: {
        primary: isDark ? '#F0E6D3' : '#1A1208',
        secondary: isDark ? '#B8A88A' : '#5A4A35',
      },
      divider: isDark ? '#3A2E20' : '#D4C4A8',
    },
    typography: {
      fontFamily: FONT_BODY,
      h1: {
        fontFamily: FONT_DISPLAY,
        letterSpacing: '0.05em',
      },
      h2: {
        fontFamily: FONT_DISPLAY,
        letterSpacing: '0.04em',
      },
      h3: {
        fontFamily: FONT_SERIF,
        letterSpacing: '0.02em',
      },
      h4: {
        fontFamily: FONT_SERIF,
      },
      h5: {
        fontFamily: FONT_BODY,
        fontWeight: 600,
      },
      h6: {
        fontFamily: FONT_BODY,
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            letterSpacing: '0.03em',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  }
}

export function buildTheme(mode: ColorMode) {
  return createTheme(getThemeOptions(mode))
}
