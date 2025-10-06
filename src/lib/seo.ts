import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    default: 'Gashaw Mandie - Software Developer',
    template: '%s | Gashaw Mandie'
  },
  description:
    'Software Engineering student skilled in React, Redux, Java, JavaFX, Next.js, TypeScript, Tailwind CSS, HTML, CSS, and SQL. Passionate about full-stack development and open to opportunities.',
  keywords: [
    'software engineering student',
    'full stack web developer',
    'react developer',
    'java developer',
    'next.js portfolio',
    'typescript developer',
    'tailwind css',
    'bahir dar university software engineering'
  ],
  authors: [{ name: 'Gashaw Mandie' }],
  creator: 'Gashaw Mandie',
  alternates: {
    canonical: 'https://gashaw-portfolio.vercel.app'
  },
  themeColor: '#111827',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gashaw-portfolio.vercel.app',
    title: 'Gashaw Mandie - Software Developer',
    description:
      'Explore the portfolio of Gashaw Mandie, a Software Engineering student skilled in React, Redux, Java, JavaFX, Next.js, TypeScript, Tailwind CSS, and SQL. Passionate about building scalable full-stack applications.',
    siteName: 'Gashaw Mandie Portfolio',
    images: [
      {
        url: '/images/og/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Portrait of Gashaw Mandie, Software Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gashaw Mandie - Software Developer',
    description:
      'Hi, I am Gashaw Mandie, a Software Engineering student with full-stack skills in React, Redux, Java, SQL, Next.js, and more. Passionate about problem-solving and scalable development.',
    creator: '@GashuMa03',
    images: ['/images/og/og-image.webp']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: '1oyxveOKYQn4sMTrGhCR4_hog8PT8xPs1TbYgOfO3K8'
  }
}
