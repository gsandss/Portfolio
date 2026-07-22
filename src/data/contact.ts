export interface ContactLink {
  label: string
  value: string
  href: string
}

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: 'gavinsands11@gmail.com',
    href: 'mailto:gavinsands11@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/gsandss',
    href: 'https://github.com/gsandss',
  },
   {
    label: 'LinkedIn',
    value: 'Professional Profile',
    href: 'https://www.linkedin.com/in/gavin-sands'
  },
  {
    label: 'Location',
    value: 'Ames, Iowa',
    href: 'https://www.google.com/maps?q=Ames,+Iowa',
  },
 
]
