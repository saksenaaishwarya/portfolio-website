export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  year?: string;
  tag: string;
}

/** Animated counters used in About / Achievements. All values are honest. */
export const stats: Stat[] = [
  { label: 'Certifications', value: 5, icon: 'BadgeCheck' },
  { label: 'National-level events', value: 10, suffix: '+', icon: 'Trophy' },
  { label: 'Open-source projects', value: 8, suffix: '+', icon: 'GitBranch' },
  { label: 'Years of disciplined service', value: 4, suffix: '+', icon: 'ShieldCheck' },
];

export const achievements: Achievement[] = [
  {
    title: 'SheFi Scholar',
    description:
      'Selected as a SheFi Scholar, joining a global community advancing women in technology and web3.',
    icon: 'Sparkles',
    tag: 'Scholarship',
  },
  {
    title: 'GSSoC ’26 Open-Source Developer',
    description:
      'Contributing to multiple maintained repositories through GirlScript Summer of Code 2026.',
    icon: 'GitBranch',
    year: '2026',
    tag: 'Open Source',
  },
  {
    title: '10+ National-Level Events',
    description:
      'Competed in over ten national-level events, including prestigious Inter-DPS and inter-school contests.',
    icon: 'Trophy',
    tag: 'Competition',
  },
  {
    title: 'Governor’s Award Track — Bharat Scouts & Guides',
    description:
      'Prepared for the Governor’s Award in 2023, building adaptability, leadership and confidence over six years of service.',
    icon: 'Award',
    year: '2023',
    tag: 'Leadership',
  },
  {
    title: 'NCC Cadet',
    description:
      'Nearly five years in the National Cadet Corps, building discipline, resilience and a commitment to service.',
    icon: 'ShieldCheck',
    tag: 'Service',
  },
  {
    title: 'Kathak Dancer & Performer',
    description:
      'A dedicated Kathak dancer since the age of three, mandala artist and national-level public speaker.',
    icon: 'Music',
    tag: 'Arts',
  },
];
