import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import AppleIcon from '@mui/icons-material/Apple'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import { BUSINESS } from '../../constants/businessInfo'

const LocationPage = () => (
  <Container maxWidth="md" sx={{ py: { xs: 5, md: 8 } }}>
    <Stack direction="column" spacing={5}>
      {/* Header */}
      <Stack direction="column" spacing={1}>
        <Typography variant="h2" sx={{ fontFamily: 'Norwester, serif', letterSpacing: '0.04em' }}>
          Find Us
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We're tucked away in the Ozarks — here's everything you need to get here.
        </Typography>
      </Stack>

      {/* GPS warning */}
      <Paper
        variant="outlined"
        sx={{ p: 3, borderColor: 'warning.main', bgcolor: 'warning.main', opacity: 0.9, borderRadius: 2 }}
      >
        <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
          <WarningAmberIcon sx={{ color: 'warning.contrastText', mt: 0.25, flexShrink: 0 }} />
          <Stack direction="column" spacing={0.5}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'warning.contrastText' }}>
              Heads up — GPS may not find our address
            </Typography>
            <Typography variant="body2" sx={{ color: 'warning.contrastText' }}>
              Rural route addresses can confuse navigation apps. Use the map links below
              for accurate directions, and give us a call if you get turned around.
            </Typography>
          </Stack>
        </Stack>
      </Paper>

      {/* Map buttons */}
      <Stack direction="column" spacing={2}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Open in Maps
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            href={BUSINESS.mapLinks.google}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="large"
            startIcon={
              <Box
                component="img"
                src="https://www.gstatic.com/images/branding/product/1x/maps_24dp.png"
                alt=""
                sx={{ width: 20, height: 20 }}
              />
            }
            sx={{ flex: 1, maxWidth: { sm: 260 } }}
          >
            Open in Google Maps
          </Button>
          <Button
            href={BUSINESS.mapLinks.apple}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="large"
            startIcon={<AppleIcon />}
            sx={{ flex: 1, maxWidth: { sm: 260 } }}
          >
            Open in Apple Maps
          </Button>
        </Stack>
      </Stack>

      <Divider />

      {/* Details */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={4}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Stack direction="column" spacing={1.5} sx={{ flex: 1 }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <LocationOnIcon color="primary" />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>Address</Typography>
          </Stack>
          <Typography variant="body1">{BUSINESS.address.street}</Typography>
          <Typography variant="body1">
            {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
          </Typography>
        </Stack>

        <Stack direction="column" spacing={1.5} sx={{ flex: 1 }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <AccessTimeIcon color="primary" />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>Hours</Typography>
          </Stack>
          <Typography variant="body1">{BUSINESS.hours.days}</Typography>
          <Typography variant="body1">{BUSINESS.hours.display}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
            {BUSINESS.hours.note}
          </Typography>
        </Stack>

        <Stack direction="column" spacing={1.5} sx={{ flex: 1 }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <PhoneIcon color="primary" />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>Lost?</Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            Give us a call and we'll talk you in.
          </Typography>
          <Button
            href={BUSINESS.phoneHref}
            variant="contained"
            startIcon={<PhoneIcon />}
            size="small"
            sx={{ alignSelf: 'flex-start' }}
          >
            {BUSINESS.phone}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  </Container>
)

export default LocationPage
