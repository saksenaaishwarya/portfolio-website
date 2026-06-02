export interface EducationItem {
  institution: string;
  degree: string;
  field?: string;
  start: string;
  end: string;
  location?: string;
  detail?: string;
}

export const education: EducationItem[] = [
  {
    institution: 'Banasthali Vidyapith',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science',
    start: 'Jul 2024',
    end: 'Jul 2028',
    location: 'Rajasthan, India',
    detail:
      'Pursuing Computer Science Engineering with a focus on machine learning, full-stack development and applied research.',
  },
  {
    institution: 'Delhi Public School, NTPC Vidyut Nagar',
    degree: 'Schooling',
    field: 'Science',
    start: '—',
    end: '2024',
    location: 'Uttar Pradesh, India',
    detail:
      'Built a strong academic and creative foundation while competing in 10+ national-level events.',
  },
];
