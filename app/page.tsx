import type { Metadata } from 'next'
import Home from '@/components/Home'

export const metadata: Metadata = {
  description:
    'Portfólio, laboratório e vitrine de projetos criativos da Lumus Digital.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Home | Lumus Digital',
    description:
      'Portfólio, laboratório e vitrine de projetos criativos da Lumus Digital.',
    url: '/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home | Lumus Digital',
    description:
      'Portfólio, laboratório e vitrine de projetos criativos da Lumus Digital.',
  },
}

export default function Page() {
  return <Home />
}
