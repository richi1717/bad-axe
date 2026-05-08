export const BUSINESS = {
  name: 'Bad Axe Farmstead',
  tagline: 'Dora, Missouri',
  address: {
    street: 'RR 1 Box 3025',
    city: 'Dora',
    state: 'MO',
    zip: '65637',
    full: 'RR 1 Box 3025, Dora, MO 65637',
  },
  phone: '417-257-4474',
  phoneHref: 'tel:+14172574474',
  email: 'britty.jeffery@thebadaxe.com',
  hours: {
    display: '8:00 AM – 5:00 PM',
    days: 'Daily',
    note: "It's a farm — we're usually around. Give us a call before making a trip.",
  },
  mapLinks: {
    google: 'https://maps.app.goo.gl/hkxKS6yX3zNggmPF9',
    apple: 'https://maps.apple.com/p/-oer6eAazS2UVQ',
  },
  social: {
    facebook: 'https://www.facebook.com/badaxe.britty',
    instagram: null as string | null,
  },
} as const
