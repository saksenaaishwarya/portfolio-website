import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Link as LinkIcon,
  type LucideIcon,
} from 'lucide-react';

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  icon: LucideIcon;
}

export const profile = {
  name: 'Aishwarya Saksena',
  firstName: 'Aishwarya',
  /** Rotating roles used by the hero typing animation. */
  roles: [
    'ML Researcher',
    'Software Engineer',
    'Open-Source Developer',
    'Speaker & Performer',
  ],
  headline: 'Building intelligent systems through research & engineering',
  /** Short tagline rendered under the hero headline (generated, not copied from CV). */
  tagline:
    'Computer Science engineer turning machine-learning research and full-stack craft into products people can trust — coding by logic, Kathak by heart.',
  location: 'Uttar Pradesh, India',
  email: 'saksenaaishwarya@gmail.com',
  availability: 'Open to research & software roles',
  /** Longer narrative bio for the About section. */
  bio: [
    'I am a Computer Science Engineering student at Banasthali Vidyapith who lives at the intersection of research and engineering. My days move between training machine-learning models as a Research Intern at IIIT Ranchi and shipping production software as an engineer at advuman.',
    'My foundation was built at Delhi Public School, where discipline and creativity grew side by side. A Kathak dancer since the age of three, a mandala artist, and a national-level speaker, I have learned that the same focus that lands a rhythm also debugs a model — precision, patience, and presence.',
    'Today I build with Python and TypeScript, contribute to open source through GSSoC, and chase problems where AI can make everyday decisions safer and smarter. I am driven by curiosity, sharpened by competition, and committed to making meaningful contributions to the teams I join.',
  ],
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/saksenaaishwarya',
      handle: '@saksenaaishwarya',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aishwaryasaksena',
      handle: 'in/aishwaryasaksena',
      icon: Linkedin,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/that_flying_bird_',
      handle: '@that_flying_bird_',
      icon: Instagram,
    },
    {
      label: 'Linktree',
      href: 'https://linktr.ee/AishwaryaSaksena',
      handle: 'linktr.ee/AishwaryaSaksena',
      icon: LinkIcon,
    },
    {
      label: 'Email',
      href: 'mailto:saksenaaishwarya@gmail.com',
      handle: 'saksenaaishwarya@gmail.com',
      icon: Mail,
    },
  ] satisfies SocialLink[],
} as const;

export const siteUrl = 'https://saksenaaishwarya.github.io/portfolio-website';
