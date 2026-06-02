export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  /** "work" entries appear in the professional timeline; "leadership" are
   * service / co-curricular roles shown with a subtler treatment. */
  type: 'work' | 'leadership';
  summary: string;
  highlights: string[];
  tags?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Research Intern',
    company: 'Indian Institute of Information Technology, Ranchi',
    location: 'Ranchi, India',
    start: 'Apr 2026',
    end: 'Present',
    type: 'work',
    summary:
      'Machine-learning research internship under the guidance of Dr. Gaurav Sundaram, focused on applied ML methods and experimentation.',
    highlights: [
      'Designing and running machine-learning experiments under faculty mentorship.',
      'Translating research questions into reproducible data and modelling pipelines.',
      'Bridging academic rigor with hands-on implementation in Python.',
    ],
    tags: ['Machine Learning', 'Research', 'Python'],
  },
  {
    role: 'Software Engineer',
    company: 'advuman',
    location: 'London, United Kingdom (Remote)',
    start: 'Jan 2026',
    end: 'Present',
    type: 'work',
    summary:
      'Building and shipping production software for an international team while collaborating across time zones.',
    highlights: [
      'Developing full-stack features with a focus on clean, maintainable code.',
      'Collaborating remotely with a distributed engineering team.',
      'Owning work end-to-end from implementation through delivery.',
    ],
    tags: ['Full-Stack', 'TypeScript', 'Remote'],
  },
  {
    role: 'Open Source Developer',
    company: 'GirlScript Summer of Code (GSSoC ’26)',
    location: 'Remote',
    start: 'Apr 2026',
    end: 'Present',
    type: 'work',
    summary:
      'Contributing to open-source projects across the GSSoC program — from C++ data tooling to developer CLIs.',
    highlights: [
      'Contributing code, tests and docs to multiple maintained repositories.',
      'Working with maintainers through reviews, issues and pull requests.',
      'Strengthening collaboration and Git workflow skills on real projects.',
    ],
    tags: ['Open Source', 'Collaboration', 'Git'],
  },
  {
    role: 'Event Manager',
    company: 'OSCode — Banasthali Vidyapith Chapter',
    location: 'Banasthali, India',
    start: 'Aug 2024',
    end: 'Jun 2025',
    type: 'leadership',
    summary:
      'Led planning and execution of technical events for the campus open-source community.',
    highlights: [
      'Managed project planning, strategy and team coordination for tech events.',
      'Sharpened technical communication and data-informed decision making.',
      'Grew leadership skills essential for engineering teamwork.',
    ],
    tags: ['Leadership', 'Project Management'],
  },
  {
    role: 'Cadet',
    company: 'National Cadet Corps (NCC), India',
    start: 'Aug 2019',
    end: 'May 2024',
    type: 'leadership',
    summary:
      'Nearly five years of disciplined training that shaped resilience, punctuality and teamwork.',
    highlights: [
      'Completed rigorous drills that built discipline and physical resilience.',
      'Learned the power of teamwork and service to the community.',
      'Carried a deep sense of responsibility and commitment forward.',
    ],
    tags: ['Discipline', 'Teamwork'],
  },
  {
    role: 'Guide',
    company: 'The Bharat Scouts and Guides',
    location: 'Noida, India',
    start: 'Jan 2018',
    end: 'Apr 2024',
    type: 'leadership',
    summary:
      'Six years of service and skill-building, including preparation for the Governor’s Award (2023).',
    highlights: [
      'Prepared for the Governor’s Award, building adaptability and confidence.',
      'Engaged in service and skill-building that reinforced duty and teamwork.',
      'Developed character and resilience through sustained commitment.',
    ],
    tags: ['Service', 'Leadership'],
  },
];
