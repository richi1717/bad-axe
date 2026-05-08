import { Link as RouterLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import StorefrontIcon from '@mui/icons-material/Storefront'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import '@fontsource/norwester'
import '@fontsource/quattrocento'
import '@fontsource-variable/montserrat'
import backgroundSvg from '../../assets/background.svg'
import { BUSINESS } from '../../constants/businessInfo'

const HomePage = () => (
  <Stack direction="column">
    {/* Hero */}
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '60vh', md: '75vh' },
        backgroundImage: `url(${backgroundSvg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0,0,0,0.45)',
        }}
      />
      <Stack
        direction="column"
        spacing={1}
        sx={{ position: 'relative', zIndex: 1, alignItems: 'center', textAlign: 'center', px: 2 }}
      >
        <Typography
          component="h1"
          sx={{
            fontFamily: 'Norwester, serif',
            fontSize: { xs: 56, sm: 80, md: 110 },
            letterSpacing: '0.06em',
            color: '#FFFFFF',
            lineHeight: 1,
            textShadow: '0 2px 12px rgba(0,0,0,0.6)',
          }}
        >
          BAD AXE
        </Typography>
        <Typography
          component="h2"
          sx={{
            fontFamily: 'Quattrocento, serif',
            fontSize: { xs: 28, sm: 40, md: 52 },
            color: '#F0DEC0',
            letterSpacing: '0.08em',
            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
          }}
        >
          FARMSTEAD
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Montserrat Variable", sans-serif',
            fontSize: { xs: 14, sm: 18 },
            color: '#D4C4A0',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            mt: 1,
          }}
        >
          {BUSINESS.tagline}
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3 }}>
          <Button
            component={RouterLink}
            to="/shop"
            variant="contained"
            size="large"
            startIcon={<StorefrontIcon />}
            sx={{ px: 4 }}
          >
            See What We Have
          </Button>
          <Button
            component={RouterLink}
            to="/location"
            variant="outlined"
            size="large"
            startIcon={<LocationOnIcon />}
            sx={{ px: 4, borderColor: '#fff', color: '#fff', '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' } }}
          >
            Find Us
          </Button>
        </Stack>
      </Stack>
    </Box>

    {/* About section */}
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack direction="column" spacing={3} sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Typography
          variant="h3"
          sx={{ fontFamily: 'Norwester, serif', letterSpacing: '0.04em' }}
        >
          Welcome to the Farm
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, lineHeight: 1.8, fontSize: '1.05rem' }}>
          Nestled in the Ozark hills of Dora, Missouri, Bad Axe Farmstead is a small family
          farm where we raise and grow what we sell. Fresh eggs, seasonal produce, and more
          — straight from our land to you.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, lineHeight: 1.8, fontSize: '1.05rem' }}>
          We're a working farm, so availability changes with the seasons. Reach out before
          making the drive and we'll let you know what's ready.
        </Typography>
        <Button
          component={RouterLink}
          to="/contact"
          variant="outlined"
          color="primary"
          size="large"
          startIcon={<EmailIcon />}
          sx={{ mt: 2 }}
        >
          Get in Touch
        </Button>
      </Stack>
    </Container>
  </Stack>
)

export default HomePage
