import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CssBaseline from '@mui/material/CssBaseline'
import '@fontsource/norwester'
import '@fontsource/quattrocento'
import '@fontsource-variable/montserrat'
import ColorModeProvider from './theme/ColorModeProvider'
import App from './App'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorModeProvider>
      <CssBaseline enableColorScheme />
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ColorModeProvider>
  </React.StrictMode>,
)
