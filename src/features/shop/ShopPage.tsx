import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import PhoneIcon from '@mui/icons-material/Phone'
import type { Product } from '../../types'
import { BUSINESS } from '../../constants/businessInfo'
import ContactDialog from '../../components/ContactDialog/ContactDialog'

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
    description:
      'Our milk is raw A2/A2, full cream. Our girls are mostly grass-fed but receive oats and alfalfa at milking time. All feed is certified organic — no corn, no soy. No vaccinations, no antibiotics. Available by order.',
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
            We are a small family farmstead — inventory changes with the seasons
            and the weather. We do have a 24-hr self service farm stand available
            for easy, convenient pick up. Give us a call or send a message before
            making the trip to check current availability.
          </Typography>
          <Button
            variant="contained"
            startIcon={<PhoneIcon />}
            sx={{ mt: 1 }}
            onClick={() => setDialogOpen(true)}
          >
            Check Availability
          </Button>
        </Stack>

        <Grid container spacing={3}>
          {[...products]
            .sort((a, b) => Number(b.available) - Number(a.available))
            .map((product) => (
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
                    sx={{
                      height: '100%',
                      alignItems: 'flex-start',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                    }}
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
              Want to order or check availability?
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.85)',
                maxWidth: 500,
                whiteSpace: 'pre-line',
              }}
            >
              We love hearing from folks who want to buy local.{'\n'}Call us or
              send a message and we will get back to you.
            </Typography>
            <Button
              variant="contained"
              startIcon={<PhoneIcon />}
              onClick={() => setDialogOpen(true)}
              sx={{
                bgcolor: '#fff',
                color: 'primary.dark',
                '&:hover': { bgcolor: '#f0e8d8' },
              }}
            >
              {BUSINESS.phone}
            </Button>
          </Stack>
        </Box>
      </Stack>

      <ContactDialog
        open={dialogOpen}
        onClose={closeDialog}
        product={selected?.name}
      />
    </Container>
  )
}

export default ShopPage
