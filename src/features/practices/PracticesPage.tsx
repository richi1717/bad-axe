import Box from '@mui/material/Box'
import BlockIcon from '@mui/icons-material/Block'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import cowImg from '../../assets/cow.jpg'

const doList = [
  {
    emoji: '🐓',
    heading: 'General Animal Care',
    body: 'We believe in letting chickens be chickens and cows be cows. We observe them and do our best to work within the natural systems God has put in place.\n\nOur chickens are genuinely free-ranged on pasture — trust us, they go everywhere and get into everything. Our cows are pasture raised, and mothers raise their young until a natural age of weaning.\n\nWe believe in using the gifts the Lord has created when supporting or treating any ailments within our family, and this includes our animals. Only natural, plant-based products are used daily in our milk barn, and only herbal and plant-based remedies are used to support their immune systems when needed.',
  },
  {
    emoji: '🐄',
    heading: 'Milk Barn Practices',
    body: 'Our cows are cleaned up and washed with hot water and Young Living Thieves cleaner/soap before and after milking. All products used for udder care, fly sprays, etc. are plant-based and essential oil infused.\n\nWe use YL Thieves Cleaner, 30% vinegar, and hot water when cleaning and flushing out all milking equipment daily. Deep cleaning includes the power of sunshine sanitization.\n\nAll milk is filtered into glass jars and quick-chilled in the freezer for one hour before refrigerating to ensure optimal freshness that lasts.\n\nIf any health issues arise for our sweet mommas, we opt for giving them turmeric, garlic, honey, and herbal supplements until cleared. They receive quality, certified organic feed and a combination of the best minerals, probiotics, etc. at milking time.\n\nBecause we believe God intended mothers to raise their young, and the breeds we raise still give more than enough milk, we opt for calf-sharing. This does mean the cream line on our milk varies by season. Once calves are of a natural age for weaning, get ready to make all the butter!',
  },
  {
    emoji: '🌱',
    heading: 'In the Garden',
    body: 'We use organic practices for all of our growing needs. Our primary method: compost, water, sunshine, and lots of TLC. We grow in a minimally tilled, deep-mulch garden system. Our compost and mulch are locally sourced.\n\nAll plants are grown from organic/non-GMO seeds.',
  },
  {
    emoji: '🤝',
    heading: 'Know Your Local Farmer',
    body: 'Because we value knowing where our food comes from and how it is raised, we encourage others to do the same. We are happy to have visitors to our farm anytime — just give us a heads up and we would be happy to meet you and show you around.',
  },
]

const doNotList = [
  'Vaccinate our animals.',
  'Use antibiotics to treat. All treatments — routine deworming, mastitis, etc. — are herbal and plant-based remedies.',
  'Use hormones to AI our cows. We have a handsome bull, Maximus, on our property who helps us out in that department.',
  'Spray our pastures with pesticides or herbicides.',
]

const PracticesPage = () => (
  <Container maxWidth="md" sx={{ py: { xs: 5, md: 8 } }}>
    <Stack direction="column" spacing={6}>
      <Stack direction="column" spacing={2}>
        <Typography
          variant="h2"
          sx={{ fontFamily: 'Norwester, serif', letterSpacing: '0.04em' }}
        >
          Our Practices
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 620, lineHeight: 1.8, fontSize: '1.05rem' }}
        >
          At Bad Axe Farmstead, we are as organic as you can get — without giving
          the government our money for a sticker.
        </Typography>
      </Stack>

      <Stack direction="column" spacing={5}>
        <Typography
          variant="h3"
          sx={{ fontFamily: 'Norwester, serif', letterSpacing: '0.04em' }}
        >
          What We Do
        </Typography>
        {doList.map((section) => (
          <Stack key={section.heading} direction="column" spacing={1.5}>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <Box component="span" sx={{ fontSize: '1.4rem', lineHeight: 1 }}>
                {section.emoji}
              </Box>
              <Typography variant="h6" sx={{ color: 'primary.main' }}>
                {section.heading}
              </Typography>
            </Stack>
            {section.body.split('\n\n').map((para, i) => (
              <Typography
                key={i}
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.8 }}
              >
                {para}
              </Typography>
            ))}
            <Divider sx={{ pt: 1 }} />
          </Stack>
        ))}
      </Stack>

      <Box
        component="img"
        src={cowImg}
        alt="One of our cows peeking through the fence"
        sx={{
          width: '100%',
          maxHeight: 420,
          objectFit: 'cover',
          objectPosition: 'center 30%',
          borderRadius: 2,
        }}
      />

      <Stack direction="column" spacing={3}>
        <Typography
          variant="h3"
          sx={{ fontFamily: 'Norwester, serif', letterSpacing: '0.04em' }}
        >
          What We Do Not Do
        </Typography>
        <Stack direction="column" spacing={2}>
          {doNotList.map((item, i) => (
            <Box key={i} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
              <BlockIcon sx={{ color: 'error.main', mt: '3px', flexShrink: 0, fontSize: '1.1rem' }} />
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Stack>
  </Container>
)

export default PracticesPage
