export interface Skill {
  name: string;
  /** Proficiency 0–100 used by the animated bars. */
  level: number;
}

export interface SkillCategory {
  id: string;
  label: string;
  /** Lucide icon name resolved in the Skills component. */
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript', level: 82 },
      { name: 'C++', level: 75 },
      { name: 'HTML / CSS', level: 88 },
    ],
  },
  {
    id: 'aiml',
    label: 'AI / ML',
    icon: 'BrainCircuit',
    skills: [
      { name: 'scikit-learn', level: 82 },
      { name: 'NLP & TF-IDF', level: 78 },
      { name: 'Recommender Systems', level: 75 },
      { name: 'Azure Machine Learning', level: 72 },
      { name: 'Applied AI', level: 80 },
    ],
  },
  {
    id: 'web',
    label: 'Web & Full-Stack',
    icon: 'Layout',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 86 },
      { name: 'FastAPI', level: 72 },
      { name: 'Streamlit', level: 78 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'CLI / Automation', level: 80 },
      { name: 'Supabase', level: 68 },
      { name: 'Salesforce Agentforce', level: 65 },
      { name: 'Vercel / CI-CD', level: 75 },
    ],
  },
];

/** Aggregated values for the radar chart — one axis per category. */
export const skillRadar = skillCategories.map((category) => ({
  category: category.label,
  value: Math.round(
    category.skills.reduce((sum, skill) => sum + skill.level, 0) /
      category.skills.length,
  ),
}));

/** Quick scannable focus areas (mirrors the CV "Top Skills"). */
export const focusAreas = [
  'Machine Learning Research',
  'Industrial / Applied Research',
  'Full-Stack Development',
  'Open-Source Engineering',
];
