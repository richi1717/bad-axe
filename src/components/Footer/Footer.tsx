import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import PhoneIcon from '@mui/icons-material/Phone'
import { BUSINESS } from '../../constants/businessInfo'

const Footer = () => (
  <Stack
    component="footer"
    sx={{
      bgcolor: 'background.paper',
      borderTop: '1px solid',
      borderColor: 'divider',
      mt: 'auto',
      py: 4,
    }}
  >
    <Container maxWidth="lg">
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={3}
        sx={{ justifyContent: 'space-between', alignItems: { xs: 'center', sm: 'flex-start' }, textAlign: { xs: 'center', sm: 'left' } }}
      >
        <Stack spacing={0.5}>
          <Typography
            variant="h6"
            sx={{ fontFamily: 'Norwester, serif', letterSpacing: '0.05em', textTransform: 'uppercase' }}
          >
            {BUSINESS.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {BUSINESS.address.full}
          </Typography>

          <Stack direction="row" spacing={0.5} sx={{ pt: 0.5 }}>
            {BUSINESS.social.facebook && (
              <Tooltip title="Facebook">
                <IconButton
                  href={BUSINESS.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  color="inherit"
                  aria-label="Facebook"
                >
                  <FacebookIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
            {BUSINESS.social.instagram && (
              <Tooltip title="Instagram">
                <IconButton
                  href={BUSINESS.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  color="inherit"
                  aria-label="Instagram"
                >
                  <InstagramIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
          </Stack>
        </Stack>

        <Stack spacing={1}>
          <Link
            href={BUSINESS.phoneHref}
            color="text.secondary"
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}
          >
            <PhoneIcon fontSize="small" />
            <Typography variant="body2">{BUSINESS.phone}</Typography>
          </Link>
          <Link
            href={`mailto:${BUSINESS.email}`}
            color="text.secondary"
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}
          >
            <EmailIcon fontSize="small" />
            <Typography variant="body2">{BUSINESS.email}</Typography>
          </Link>
        </Stack>
      </Stack>

      <Divider sx={{ my: 3 }} />

      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center' }}>
        © {new Date().getFullYear()} Bad Axe LLC · {BUSINESS.tagline}
      </Typography>
    </Container>
  </Stack>
)

export default Footer
