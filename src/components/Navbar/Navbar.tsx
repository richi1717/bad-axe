import { useState } from 'react'
import { Link as RouterLink, NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import MenuIcon from '@mui/icons-material/Menu'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import CloseIcon from '@mui/icons-material/Close'
import { useColorMode } from '../../theme/ColorModeProvider'
import axesLogo from '../../assets/axes.svg'
import type { NavItem } from '../../types'

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'Find Us', path: '/location' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { mode, toggleColorMode } = useColorMode()

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar sx={{ gap: 1 }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{ display: 'flex', alignItems: 'center', mr: 2, flexShrink: 0 }}
          >
            <Box
              component="img"
              src={axesLogo}
              alt="Bad Axe Farmstead"
              sx={{ height: 40 }}
            />
          </Box>

          {/* Desktop nav links */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 0.5,
              flexGrow: 1,
            }}
          >
            {navItems.map((item) => (
              <Box
                key={item.path}
                component={NavLink}
                to={item.path}
                end={item.path === '/'}
                sx={(theme) => ({
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                  fontFamily: '"Montserrat Variable", sans-serif',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  letterSpacing: '0.03em',
                  textDecoration: 'none',
                  color: 'text.primary',
                  transition: 'color 0.2s, background 0.2s',
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'action.hover',
                  },
                  '&.active': {
                    color: 'primary.main',
                    bgcolor: theme.palette.action.selected,
                  },
                })}
              >
                {item.label}
              </Box>
            ))}
          </Box>

          <Box sx={{ flexGrow: { xs: 1, md: 0 } }} />

          <Tooltip title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}>
            <IconButton onClick={toggleColorMode} color="inherit" size="medium">
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>

          <IconButton
            sx={{ display: { md: 'none' } }}
            onClick={() => setDrawerOpen(true)}
            color="inherit"
            aria-label="open menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 240 } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)} aria-label="close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  '&.active': {
                    color: 'primary.main',
                    bgcolor: 'action.selected',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ sx: { fontWeight: 600 } }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}
