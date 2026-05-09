import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import SmsIcon from '@mui/icons-material/Sms'
import type { Product } from '../../types'
import { BUSINESS } from '../../constants/businessInfo'

const products: Product[] = [
  {
    id: 'eggs',
    name: 'Farm Fresh Eggs',
    description:
      'Our chickens are genuinely free-range and pasture-raised. Supplemental feed is certified organic, soy-free, and corn-free. Eggs are collected fresh daily — available by the dozen.',
    available: true,
    category: 'Eggs',
  },
  {
    id: 'milk',
    name: 'Raw Milk',
    description: 'Our milk is raw A2/A2, full cream. Our girls are mostly grass-fed but receive oats and alfalfa at milking time. All feed is certified organic — no corn, no soy. No vaccinations, no antibiotics. Available by order.',
    available: true,
    category: 'Dairy',
  },
  {
    id: 'beef',
    name: 'Beef',
    description:
      'Our beef is primarily grass-fed. Any supplemental feed given is certified organic. Due to our small supply, beef is available on a first-come, first-served basis — please inquire for availability.',
    available: true,
    category: 'Beef',
  },
  {
    id: 'chickens',
    name: 'Poultry',
    description:
      'Live poultry (includes chicks, ducks, and guineas) and hatching eggs available. Availability varies by season — please inquire for current stock.',
    available: true,
    category: 'Poultry',
  },
  {
    id: 'plant-starters',
    name: 'Plant Starts',
    description:
      'Vegetable and garden starts, organically grown from organic/non-GMO seeds. Availability changes with the season.',
    available: true,
    category: 'Garden',
  },
  {
    id: 'soap',
    name: 'Handmade Soap',
    description:
      'Locally crafted soap branded for Bad Axe Farmstead — coming soon.',
    available: false,
    category: 'Goods',
  },
  {
    id: 'event-space',
    name: 'Event Space',
    description:
      'The Hall is a private room available for gatherings, receptions, and events. Indoor seating is around 60, with tables, chairs, a projector, and audio equipment provided. Additional outdoor space is available, including picnic tables, a firepit, and lawn games. Please inquire for availability and pricing.',
    available: true,
    category: 'Venue',
  },
  {
    id: 'merch',
    name: 'Bad Axe Merch',
    description:
      "Branded gear is in the works. Check back soon or reach out if you're interested.",
    available: false,
    category: 'Merch',
  },
]

const categoryEmoji: Record<string, string> = {
  Eggs: '🥚',
  Dairy: '🥛',
  Beef: '🥩',
  Poultry: '🐔',
  Garden: '🌱',
  Goods: '🧼',
  Venue: '🎉',
  Merch: '🛍️',
}

const categoryIcon = (category: string) => (
  <Box component="span" sx={{ fontSize: '1.5rem', lineHeight: 1 }}>
    {categoryEmoji[category] ?? '🐾'}
  </Box>
)

const ShopPage = () => {
  const [selected, setSelected] = useState<Product | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const openDialog = (product: Product) => {
    setSelected(product)
    setDialogOpen(true)
  }

  const closeDialog = () => setDialogOpen(false)

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
      <Stack direction="column" spacing={6}>
        <Stack
          direction="column"
          spacing={1.5}
          sx={{
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontFamily: 'Norwester, serif', letterSpacing: '0.04em' }}
          >
            What We Have
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 560 }}
          >
            We are a small working farm — inventory changes with the seasons and
            the weather. Give us a call or send a message before making the trip
            to check current availability.
          </Typography>
          <Button
            href={BUSINESS.phoneHref}
            variant="contained"
            startIcon={<PhoneIcon />}
            sx={{ mt: 1 }}
          >
            Call to Check Availability
          </Button>
        </Stack>

        <Grid container spacing={3}>
          {[...products].sort((a, b) => Number(b.available) - Number(a.available)).map((product) => (
            <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  opacity: product.available ? 1 : 0.6,
                }}
              >
                <CardActionArea
                  disabled={!product.available}
                  onClick={() => openDialog(product)}
                  sx={{ height: '100%', alignItems: 'flex-start' }}
                >
                  <CardContent>
                    <Stack direction="column" spacing={2}>
                      <Stack
                        direction="row"
                        sx={{
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                        }}
                      >
                        <Box sx={{ color: 'primary.main' }}>
                          {categoryIcon(product.category)}
                        </Box>
                        <Chip
                          label={
                            product.available ? 'Available' : 'Coming Soon'
                          }
                          size="small"
                          color={product.available ? 'success' : 'default'}
                          variant="outlined"
                        />
                      </Stack>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.7 }}
                      >
                        {product.description}
                      </Typography>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            bgcolor: 'primary.main',
            borderRadius: 2,
            p: { xs: 3, md: 4 },
            textAlign: 'center',
          }}
        >
          <Stack direction="column" spacing={2} sx={{ alignItems: 'center' }}>
            <Typography
              variant="h5"
              sx={{
                color: '#fff',
                fontFamily: 'Norwester, serif',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Want to order or check what is ready?
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'rgba(255,255,255,0.85)', maxWidth: 500 }}
            >
              We love hearing from folks who want to buy local. Call us or send
              a message and we will get back to you.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                href={BUSINESS.phoneHref}
                variant="contained"
                startIcon={<PhoneIcon />}
                sx={{
                  bgcolor: '#fff',
                  color: 'primary.dark',
                  '&:hover': { bgcolor: '#f0e8d8' },
                }}
              >
                {BUSINESS.phone}
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                sx={{
                  borderColor: '#fff',
                  color: '#fff',
                  '&:hover': {
                    borderColor: '#fff',
                    bgcolor: 'rgba(255,255,255,0.15)',
                  },
                }}
              >
                Send a Message
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      <Dialog
        open={dialogOpen}
        onClose={closeDialog}
        maxWidth="xs"
        fullWidth
        slotProps={{ transition: { onExited: () => setSelected(null) } }}
      >
        <DialogTitle>
          <Stack
            direction="row"
            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            Interested in {selected?.name}?
            <IconButton onClick={closeDialog} aria-label="close" size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <Stack direction="column" spacing={2} sx={{ pt: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Give us a call, send a text, or shoot us an email — we'll get back
              to you.
            </Typography>
            <Button
              href={`sms:${BUSINESS.phoneHref.replace('tel:', '')}?body=Hi, I'm interested in ${selected?.name}.`}
              variant="contained"
              startIcon={<SmsIcon />}
              fullWidth
              onClick={closeDialog}
            >
              Send a Text
            </Button>
            <Button
              href={BUSINESS.phoneHref}
              variant="contained"
              color="secondary"
              startIcon={<PhoneIcon />}
              fullWidth
              onClick={closeDialog}
            >
              Call Us
            </Button>
            <Button
              href={`mailto:${BUSINESS.email}?subject=Inquiry: ${selected?.name}&body=Hi, I'm interested in ${selected?.name}.`}
              variant="contained"
              color="secondary"
              startIcon={<EmailIcon />}
              fullWidth
              onClick={closeDialog}
            >
              Send an Email
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </Container>
  )
}

export default ShopPage
