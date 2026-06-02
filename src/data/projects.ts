export type ProjectCategory =
  | 'AI / ML'
  | 'Web'
  | 'Open Source'
  | 'Game';

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  /** Honest framing of what was hard / what it set out to solve. */
  challenge: string;
  impact: string;
  github: string;
  demo?: string;
  featured?: boolean;
  /** Role for clearly-marked open-source contributions. */
  role?: string;
}

export const projects: Project[] = [
  {
    slug: 'spot-the-scam',
    title: 'Spot the Scam',
    tagline: 'ML-powered job-fraud detection',
    description:
      'A machine-learning web app that classifies job postings as legitimate or fraudulent, helping job seekers avoid online employment scams. Built with NLP text preprocessing (stopword removal, TF-IDF) and a supervised Logistic Regression model behind an interactive Streamlit interface.',
    category: 'AI / ML',
    tech: ['Python', 'scikit-learn', 'NLP', 'TF-IDF', 'Streamlit'],
    challenge:
      'Job-scam text is noisy and imbalanced — separating genuine postings from fraud meant careful feature engineering and threshold tuning rather than raw accuracy.',
    impact:
      'Gives job seekers a fast, explainable signal on whether a listing is safe to trust.',
    github: 'https://github.com/saksenaaishwarya/Scam-Spotter',
    demo: 'https://spothescamai.streamlit.app',
    featured: true,
  },
  {
    slug: 'hybrid-recommender',
    title: 'Hybrid Recommender System',
    tagline: 'Content-based + collaborative filtering',
    description:
      'A recommender engine that blends content-based similarity with collaborative filtering, served through a FastAPI backend with a Supabase/PostgreSQL data layer and a data adapter that adapts to dynamic datasets.',
    category: 'AI / ML',
    tech: ['Python', 'FastAPI', 'scikit-learn', 'NLTK', 'Supabase'],
    challenge:
      'Cold-start and sparse interactions make pure collaborative filtering brittle — combining it with content signals required a flexible adapter over changing data.',
    impact:
      'Produces relevant recommendations even when user-interaction history is thin.',
    github: 'https://github.com/saksenaaishwarya/hybrid-recommender',
    featured: true,
  },
  {
    slug: 'arnio',
    title: 'Arnio',
    tagline: 'C++ data-prep engine for Python',
    description:
      'A compiled C++ data-preparation engine for messy CSV and pandas workflows. Arnio parses, infers types, strips whitespace, deduplicates, validates and profiles data, then hands clean results back to the Python data stack (pandas, NumPy, scikit-learn, DuckDB, Arrow).',
    category: 'Open Source',
    role: 'GSSoC ’26 Contributor',
    tech: ['C++', 'Python', 'pandas', 'PyPI'],
    challenge:
      'Bridging a high-performance C++ core with an ergonomic Python API meant getting the bindings, type inference and packaging right across platforms.',
    impact:
      'Speeds up data cleaning before and alongside pandas for the everyday Python data stack.',
    github: 'https://github.com/saksenaaishwarya/arnio',
    demo: 'https://arniolib.vercel.app',
  },
  {
    slug: 'gitbun',
    title: 'Gitbun',
    tagline: 'AI-assisted Git commit messages',
    description:
      'A high-performance CLI that analyses staged changes and generates clean, context-aware Conventional Commits in milliseconds. Supports local LLMs and remote APIs, with a robust rule-based fallback and an interactive review mode.',
    category: 'Open Source',
    role: 'GSSoC ’26 Contributor',
    tech: ['Node.js', 'CLI', 'Conventional Commits', 'LLM'],
    challenge:
      'Generating commit messages that are genuinely useful — not generic — required understanding diffs and degrading gracefully when no AI backend is available.',
    impact:
      'Turns vague commits into structured, professional history and speeds up everyday Git workflows.',
    github: 'https://github.com/saksenaaishwarya/gitbun',
    demo: 'https://gitbun-5n9d.vercel.app',
  },
  {
    slug: 'legalmind',
    title: 'LegalMind',
    tagline: 'AI legal-intelligence platform',
    description:
      'A hackathon project: an AI-powered platform for contract analysis and legal research built on Gemini 2.0 Flash, with a FastAPI backend, a Next.js frontend and Firestore for storage.',
    category: 'AI / ML',
    tech: ['Python', 'FastAPI', 'Next.js', 'Gemini', 'Firestore'],
    challenge:
      'Making legal language searchable and trustworthy meant grounding model output in source documents rather than free-form generation.',
    impact:
      'Demonstrates how generative AI can accelerate contract review and legal research.',
    github: 'https://github.com/saksenaaishwarya/gemini-hackathon',
  },
  {
    slug: 'subway-surfer-clone',
    title: 'Subway Surfer Clone',
    tagline: 'Browser endless-runner game',
    description:
      'A browser-based clone of the classic endless-runner, built with plain HTML, CSS and JavaScript to explore game loops, collision detection and responsive canvas rendering.',
    category: 'Game',
    tech: ['HTML', 'CSS', 'JavaScript'],
    challenge:
      'Keeping the game loop smooth and inputs responsive in the browser without a game engine.',
    impact:
      'A fun, from-scratch study in core game-development fundamentals.',
    github: 'https://github.com/saksenaaishwarya/Subwaysurferclone',
  },
];

export const projectCategories: ('All' | ProjectCategory)[] = [
  'All',
  'AI / ML',
  'Open Source',
  'Game',
];
