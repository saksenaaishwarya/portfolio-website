import type { Metadata } from 'next';

import { profile, siteUrl } from '@/data/profile';

const description =
  'Aishwarya Saksena — Machine Learning Researcher, Software Engineer and Open-Source Developer. Building intelligent systems through research and full-stack engineering.';

const ogImage = `${siteUrl}/og-image.png`;

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ML Researcher & Software Engineer`,
    template: `%s · ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    'Aishwarya Saksena',
    'Machine Learning',
    'Software Engineer',
    'ML Researcher',
    'Full-Stack Developer',
    'Open Source',
    'GSSoC',
    'Portfolio',
    'Python',
    'Next.js',
    'Banasthali Vidyapith',
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'profile',
    siteName: `${profile.name} Portfolio`,
    title: `${profile.name} — ML Researcher & Software Engineer`,
    description,
    url: siteUrl,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${profile.name} — Portfolio`,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ML Researcher & Software Engineer`,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/** JSON-LD Person structured data for rich results. */
export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: siteUrl,
    image: `${siteUrl}/aishwarya-profile.jpg`,
    jobTitle: 'Machine Learning Researcher & Software Engineer',
    email: `mailto:${profile.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: profile.location,
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Banasthali Vidyapith',
      },
    ],
    worksFor: [
      { '@type': 'Organization', name: 'advuman' },
      {
        '@type': 'Organization',
        name: 'Indian Institute of Information Technology, Ranchi',
      },
    ],
    knowsAbout: [
      'Machine Learning',
      'Artificial Intelligence',
      'Full-Stack Development',
      'Open Source',
      'Python',
      'TypeScript',
    ],
    sameAs: profile.socials
      .filter((social) => social.label !== 'Email')
      .map((social) => social.href),
  };
}
