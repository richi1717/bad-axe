import { Link as RouterLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import EggIcon from '@mui/icons-material/Egg'
import GrassIcon from '@mui/icons-material/Grass'
import LocalDrinkIcon from '@mui/icons-material/LocalDrink'
import PetsIcon from '@mui/icons-material/Pets'
import PhoneIcon from '@mui/icons-material/Phone'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import SoapIcon from '@mui/icons-material/Soap'
import type { Product } from '../../types'
import { BUSINESS } from '../../constants/businessInfo'

const products: Product[] = [
  {
    id: 'eggs',
    name: 'Fresh Farm Eggs',
    description: 'Free-range eggs from our hens, collected fresh daily. Available by the dozen.',
    available: true,
    category: 'Eggs',
  },
  {
    id: 'milk',
    name: 'Fresh Milk',
    description: 'Farm fresh milk. Call ahead to check availability.',
    available: true,
    category: 'Dairy',
  },
  {
    id: 'beef',
    name: 'Beef & Cattle',
    description: 'We raise and sell cattle. Reach out to talk cuts, pricing, or buying a cow.',
    available: true,
    category: 'Livestock',
  },
  {
    id: 'chickens',
    name: 'Chickens & Baby Chicks',
    description: 'Live chickens and baby chicks available. Seasonal — call to check what we have.',
    available: true,
    category: 'Livestock',
  },
  {
    id: 'plant-starters',
    name: 'Plant Starters',
    description: 'Vegetable and garden starters grown on the farm. Availability changes with the season.',
    available: true,
    category: 'Garden',
  },
  {
    id: 'soap',
    name: 'Handmade Soap',
    description: 'Handcrafted soap made right here on the farm. New and growing — ask us what we have.',
    available: true,
    category: 'Goods',
  },
  {
    id: 'merch',
    name: 'Bad Axe Merch',
    description: "Branded gear is in the works. Check back soon or reach out if you're interested.",
    available: false,
    category: 'Merch',
  },
]

const categoryIcon = (category: string) => {
  if (category === 'Eggs') return <EggIcon />
  if (category === 'Dairy') return <LocalDrinkIcon />
  if (category === 'Livestock') return <AgricultureIcon />
  if (category === 'Garden') return <GrassIcon />
  if (category === 'Goods') return <SoapIcon />
  if (category === 'Merch') return <ShoppingBagIcon />
  return <PetsIcon />
}

const ShopPage = () => (
  <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
    <Stack direction="column" spacing={6}>
      {/* Header */}
      <Stack
        direction="column"
        spacing={1.5}
        sx={{ alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}
      >
        <Typography variant="h2" sx={{ fontFamily: 'Norwester, serif', letterSpacing: '0.04em' }}>
          What We Have
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560 }}>
          We are a small working farm — inventory changes with the seasons and the weather.
          Give us a call or send a message before making the trip to check current availability.
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

      {/* Product grid */}
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                opacity: product.available ? 1 : 0.6,
                transition: 'box-shadow 0.2s',
                '&:hover': product.available ? { boxShadow: 4 } : {},
              }}
            >
              <CardContent>
                <Stack direction="column" spacing={2}>
                  <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box sx={{ color: 'primary.main' }}>{categoryIcon(product.category)}</Box>
                    <Chip
                      label={product.available ? 'Available' : 'Coming Soon'}
                      size="small"
                      color={product.available ? 'success' : 'default'}
                      variant="outlined"
                    />
                  </Stack>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {product.description}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* CTA banner */}
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
            sx={{ color: '#fff', fontFamily: 'Norwester, serif', letterSpacing: '0.04em' }}
          >
            Want to order or check what is ready?
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', maxWidth: 500 }}>
            We love hearing from folks who want to buy local. Call us or send a message and
            we will get back to you.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              href={BUSINESS.phoneHref}
              variant="contained"
              startIcon={<PhoneIcon />}
              sx={{ bgcolor: '#fff', color: 'primary.dark', '&:hover': { bgcolor: '#f0e8d8' } }}
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
                '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.15)' },
              }}
            >
              Send a Message
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
)

export default ShopPage
