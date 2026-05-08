import { useState } from 'react'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import { BUSINESS } from '../../constants/businessInfo'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

const FORMSPREE_URL = 'https://formspree.io/f/mrejykdl'

const ContactPage = () => {
  const [successOpen, setSuccessOpen] = useState(false)
  const [errorOpen, setErrorOpen] = useState(false)

  const form = useForm({
    defaultValues: { name: '', email: '', message: '' },
    validators: { onChange: schema },
    onSubmit: async ({ value }) => {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(value),
      })

      if (response.ok) {
        form.reset()
        setSuccessOpen(true)
      } else {
        setErrorOpen(true)
      }
    },
  })

  return (
    <Container maxWidth="md" sx={{ py: { xs: 5, md: 8 } }}>
      <Stack direction="column" spacing={6}>
        <Stack direction="column" spacing={1}>
          <Typography variant="h2" sx={{ fontFamily: 'Norwester, serif', letterSpacing: '0.04em' }}>
            Get in Touch
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Questions about what we have, want to place an order, or just want to say
            hello — we'd love to hear from you.
          </Typography>
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
          <Stack direction="column" spacing={3} sx={{ flex: '0 0 auto', width: { md: 280 } }}>
            <Stack direction="column" spacing={0.5}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Phone
              </Typography>
              <Link
                href={BUSINESS.phoneHref}
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.primary' }}
              >
                <PhoneIcon fontSize="small" color="primary" />
                <Typography variant="body1" sx={{ fontWeight: 500 }}>{BUSINESS.phone}</Typography>
              </Link>
            </Stack>

            <Stack direction="column" spacing={0.5}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Email
              </Typography>
              <Link
                href={`mailto:${BUSINESS.email}`}
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.primary' }}
              >
                <EmailIcon fontSize="small" color="primary" />
                <Typography variant="body1" sx={{ fontWeight: 500, wordBreak: 'break-word' }}>
                  {BUSINESS.email}
                </Typography>
              </Link>
            </Stack>

            <Divider sx={{ display: { md: 'none' } }} />
          </Stack>

          <Paper variant="outlined" sx={{ flex: 1, p: { xs: 3, md: 4 }, borderRadius: 2 }}>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                form.handleSubmit()
              }}
            >
              <Stack direction="column" spacing={3}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Send a Message
                </Typography>

                <form.Field name="name">
                  {(field) => (
                    <TextField
                      label="Your Name"
                      fullWidth
                      required
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      error={field.state.meta.isDirty && field.state.meta.errors.length > 0}
                      helperText={
                        field.state.meta.isDirty
                          ? field.state.meta.errors.map((e) => e?.message).join(', ')
                          : undefined
                      }
                    />
                  )}
                </form.Field>

                <form.Field name="email">
                  {(field) => (
                    <TextField
                      label="Email Address"
                      type="email"
                      fullWidth
                      required
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      error={field.state.meta.isDirty && field.state.meta.errors.length > 0}
                      helperText={
                        field.state.meta.isDirty
                          ? field.state.meta.errors.map((e) => e?.message).join(', ')
                          : undefined
                      }
                    />
                  )}
                </form.Field>

                <form.Field name="message">
                  {(field) => (
                    <TextField
                      label="Message"
                      multiline
                      rows={4}
                      fullWidth
                      required
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      error={field.state.meta.isDirty && field.state.meta.errors.length > 0}
                      helperText={
                        field.state.meta.isDirty
                          ? field.state.meta.errors.map((e) => e?.message).join(', ')
                          : undefined
                      }
                    />
                  )}
                </form.Field>

                <form.Subscribe selector={(state) => ({ canSubmit: state.canSubmit, isSubmitting: state.isSubmitting })}>
                  {({ canSubmit, isSubmitting }) => (
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={!canSubmit || isSubmitting}
                      startIcon={isSubmitting ? <CircularProgress size={18} color="inherit" /> : <EmailIcon />}
                      sx={{ alignSelf: 'flex-start' }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  )}
                </form.Subscribe>
              </Stack>
            </form>
          </Paper>
        </Stack>
      </Stack>

      <Snackbar
        open={successOpen}
        autoHideDuration={5000}
        onClose={() => setSuccessOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={() => setSuccessOpen(false)}>
          Message sent! We'll get back to you soon.
        </Alert>
      </Snackbar>
      <Snackbar
        open={errorOpen}
        autoHideDuration={5000}
        onClose={() => setErrorOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="error" onClose={() => setErrorOpen(false)}>
          Something went wrong. Please try again or give us a call.
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default ContactPage
