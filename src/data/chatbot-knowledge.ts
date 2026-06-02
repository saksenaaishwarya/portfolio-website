/**
 * Local knowledge base for the portfolio AI assistant. No API key required —
 * the widget keyword-matches a visitor's question against these intents and
 * returns the best answer, with a graceful fallback. All content is derived
 * from the CV + real GitHub projects (the single source of truth).
 */
export interface Intent {
  id: string;
  /** Lowercase keywords/phrases that signal this intent. */
  keywords: string[];
  answer: string;
}

export const suggestedQuestions: string[] = [
  'Tell me about Aishwarya',
  'What projects has she built?',
  'What technologies does she know?',
  'What is her experience?',
  'How can I contact her?',
];

export const greeting =
  "Hi! I'm Aishwarya's portfolio assistant. Ask me about her background, skills, projects, experience, or how to get in touch. Try one of the suggestions below 👇";

export const fallback =
  "I'm not sure about that one yet! I can tell you about Aishwarya's background, skills, projects, experience, education, achievements, or contact details. Try rephrasing, or reach out directly at saksenaaishwarya@gmail.com.";

export const intents: Intent[] = [
  {
    id: 'about',
    keywords: [
      'about',
      'who is',
      'who are',
      'tell me about',
      'introduce',
      'yourself',
      'background',
      'summary',
      'bio',
    ],
    answer:
      'Aishwarya Saksena is a Computer Science Engineering student at Banasthali Vidyapith who works at the intersection of research and engineering. She is currently a Machine Learning Research Intern at IIIT Ranchi and a Software Engineer at advuman (London, remote), and contributes to open source through GSSoC ’26. Beyond code, she is a Kathak dancer of 20+ years, a mandala artist and a national-level speaker.',
  },
  {
    id: 'projects',
    keywords: [
      'project',
      'projects',
      'built',
      'build',
      'work on',
      'worked on',
      'portfolio',
      'github',
      'repositories',
      'repos',
    ],
    answer:
      'Some highlights: • Spot the Scam — an ML web app that flags fraudulent job postings using NLP + Logistic Regression (Streamlit). • Hybrid Recommender — content-based + collaborative filtering over FastAPI/Supabase. • Arnio — a C++ data-prep engine for the Python data stack (GSSoC contribution, on PyPI). • Gitbun — a CLI that writes context-aware Conventional Commits. • LegalMind — a Gemini-powered legal-AI hackathon project. Check the Projects section for live demos and code.',
  },
  {
    id: 'skills',
    keywords: [
      'skill',
      'skills',
      'technolog',
      'tech stack',
      'languages',
      'tools',
      'know',
      'programming',
      'stack',
    ],
    answer:
      'Languages: Python, TypeScript, JavaScript, C++, HTML/CSS. AI/ML: scikit-learn, NLP & TF-IDF, recommender systems, Azure ML, applied AI. Web/Full-Stack: React, Next.js, Tailwind, FastAPI, Streamlit. Tools: Git/GitHub, CLI automation, Supabase, Salesforce Agentforce, Vercel & CI/CD. Her focus areas are ML research, applied research and full-stack development.',
  },
  {
    id: 'experience',
    keywords: [
      'experience',
      'work',
      'job',
      'role',
      'roles',
      'intern',
      'internship',
      'company',
      'advuman',
      'iiit',
      'employment',
      'career',
    ],
    answer:
      'Aishwarya is a Research Intern at IIIT Ranchi (ML research under Dr. Gaurav Sundaram, 2026–present) and a Software Engineer at advuman in London (remote, 2026–present). She is also an Open-Source Developer with GSSoC ’26. Earlier she was Event Manager at OSCode (Banasthali chapter), an NCC cadet for nearly five years, and a Bharat Scouts & Guides member for six years.',
  },
  {
    id: 'education',
    keywords: [
      'education',
      'study',
      'degree',
      'college',
      'university',
      'school',
      'banasthali',
      'btech',
      'graduate',
      'cgpa',
    ],
    answer:
      'She is pursuing a B.Tech in Computer Science at Banasthali Vidyapith (2024–2028). She completed her schooling at Delhi Public School, NTPC Vidyut Nagar, where she also competed in 10+ national-level events.',
  },
  {
    id: 'certifications',
    keywords: ['certification', 'certificate', 'certified', 'azure', 'microsoft', 'salesforce'],
    answer:
      'Aishwarya holds five certifications: Microsoft — Machine Learning in Azure, Microsoft — Introduction to ML Concepts, Microsoft — Introduction to AI Concepts, Introduction to Artificial Intelligence, and Salesforce Agentforce.',
  },
  {
    id: 'research',
    keywords: ['research', 'paper', 'publication', 'academic', 'ml research', 'sundaram'],
    answer:
      'Aishwarya is a Machine Learning Research Intern at IIIT Ranchi, working under the guidance of Dr. Gaurav Sundaram. Her research focuses on applied machine-learning methods — designing experiments and building reproducible data and modelling pipelines that bridge academic rigor with practical implementation.',
  },
  {
    id: 'achievements',
    keywords: [
      'achievement',
      'award',
      'accomplishment',
      'shefi',
      'scholar',
      'ncc',
      'scout',
      'guide',
      'governor',
      'competition',
      'hackathon',
    ],
    answer:
      'Highlights include being a SheFi Scholar, a GSSoC ’26 open-source contributor, competing in 10+ national-level events, and preparing for the Governor’s Award with the Bharat Scouts & Guides (2023). She was also an NCC cadet for nearly five years and is a lifelong Kathak dancer and public speaker.',
  },
  {
    id: 'contact',
    keywords: [
      'contact',
      'email',
      'reach',
      'hire',
      'connect',
      'linkedin',
      'get in touch',
      'collaborate',
      'available',
      'message',
    ],
    answer:
      'You can email Aishwarya at saksenaaishwarya@gmail.com, connect on LinkedIn (in/aishwaryasaksena), or find her on GitHub (@saksenaaishwarya). The Contact section at the bottom of the page also has a quick message form. She is open to research and software opportunities.',
  },
  {
    id: 'hobbies',
    keywords: ['hobby', 'hobbies', 'dance', 'kathak', 'art', 'mandala', 'speaker', 'passion', 'fun'],
    answer:
      'Outside of tech, Aishwarya is a Kathak dancer (since age three), a mandala artist and a passionate public speaker. She believes the focus that lands a dance rhythm is the same focus that debugs a model — precision, patience and presence.',
  },
  {
    id: 'location',
    keywords: ['where', 'location', 'based', 'live', 'from', 'city', 'country'],
    answer:
      'Aishwarya is based in Uttar Pradesh, India. She works remotely with advuman (London, UK) and on-site/hybrid for her research at IIIT Ranchi.',
  },
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good evening'],
    answer:
      'Hello! 👋 I can tell you about Aishwarya’s background, skills, projects, experience, research and how to reach her. What would you like to know?',
  },
];
