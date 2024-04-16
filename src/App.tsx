import reactLogo from './assets/react.svg'
import badAxeLogo from './assets/badAxe.png'
// import './App.css'
import { Box, Stack, Typography } from '@mui/material'

function App() {
  return (
    <Stack
      direction="column"
      sx={{ width: '100vw' }}
      alignItems="center"
      spacing={2}
    >
      <Box>
        <a href="https://react.dev" target="_blank">
          <img src={badAxeLogo} className="logo react" alt="React logo" />
        </a>
      </Box>
      <Typography variant="h1">Bad Axe coming soon!</Typography>
    </Stack>
  )
}

export default App
