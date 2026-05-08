import Stack from '@mui/material/Stack'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = () => (
  <Stack direction="column" sx={{ minHeight: '100vh' }}>
    <Navbar />
    <Stack component="main" sx={{ flexGrow: 1 }}>
      <Outlet />
    </Stack>
    <Footer />
  </Stack>
)

export default Layout
