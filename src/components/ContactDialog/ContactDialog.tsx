import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import SmsIcon from '@mui/icons-material/Sms'
import { BUSINESS } from '../../constants/businessInfo'

interface Props {
  open: boolean
  onClose: () => void
  product?: string
}

export default function ContactDialog({ open, onClose, product }: Props) {
  const smsBody = product ? `Hi, I'm interested in ${product}.` : 'Hi, I had a question for the farm.'
  const emailSubject = product ? `Inquiry: ${product}` : 'Farm Inquiry'
  const emailBody = product ? `Hi, I'm interested in ${product}.` : ''

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          {product ? `Interested in ${product}?` : 'Get in Touch'}
          <IconButton onClick={onClose} aria-label="close" size="small">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack direction="column" spacing={2} sx={{ pt: 1 }}>
          <Typography variant="body2" color="text.secondary">
            {product
              ? 'Give us a call, send a text, or shoot us an email — we\'ll get back to you.'
              : 'Give us a call or send a text — we\'d love to hear from you.'}
          </Typography>
          <Button
            href={`sms:${BUSINESS.phoneHref.replace('tel:', '')}?body=${encodeURIComponent(smsBody)}`}
            variant="contained"
            startIcon={<SmsIcon />}
            fullWidth
            onClick={onClose}
          >
            Send a Text
          </Button>
          <Button
            href={BUSINESS.phoneHref}
            variant="contained"
            color="secondary"
            startIcon={<PhoneIcon />}
            fullWidth
            onClick={onClose}
          >
            Call Us
          </Button>
          {product && (
            <Button
              href={`mailto:${BUSINESS.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
              variant="contained"
              color="secondary"
              startIcon={<EmailIcon />}
              fullWidth
              onClick={onClose}
            >
              Send an Email
            </Button>
          )}
        </Stack>
      </DialogContent>
    </Dialog>
  )
}
