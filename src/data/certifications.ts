export interface Certification {
  title: string;
  issuer: string;
  category: 'AI' | 'ML' | 'Cloud' | 'Platform';
}

export const certifications: Certification[] = [
  {
    title: 'Machine Learning in Azure',
    issuer: 'Microsoft',
    category: 'Cloud',
  },
  {
    title: 'Introduction to Machine Learning Concepts',
    issuer: 'Microsoft',
    category: 'ML',
  },
  {
    title: 'Introduction to AI Concepts',
    issuer: 'Microsoft',
    category: 'AI',
  },
  {
    title: 'Introduction to Artificial Intelligence',
    issuer: 'Certification',
    category: 'AI',
  },
  {
    title: 'Salesforce Agentforce',
    issuer: 'Salesforce',
    category: 'Platform',
  },
];
