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
        main: '#5C6B52',
        light: '#7A8C6E',
        dark: '#3A4A34',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#8A8E84',
        light: '#A8ACA4',
        dark: '#5E6258',
        contrastText: '#FFFFFF',
      },
      background: {
        default: isDark ? '#2A2D2B' : '#F0EEE8',
        paper: isDark ? '#343836' : '#FFFFFF',
      },
      text: {
        primary: isDark ? '#C8CEC8' : '#2A2D2B',
        secondary: isDark ? '#8A8E84' : '#5C6358',
      },
      divider: isDark ? '#3E4440' : '#D8D8D0',
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
        textTransform: 'uppercase',
      },
      h3: {
        fontFamily: FONT_SERIF,
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
      },
      h4: {
        fontFamily: FONT_SERIF,
      },
      h5: {
        fontFamily: FONT_BODY,
        fontWeight: 600,
        textTransform: 'uppercase',
      },
      h6: {
        fontFamily: FONT_BODY,
        fontWeight: 600,
        textTransform: 'uppercase',
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
