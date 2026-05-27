export type ExperienceCategory = "industry" | "research" | "teaching";

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  techStack: string[];
  companyUrl?: string;
  logoUrl?: string;
  category: ExperienceCategory;
}

export const experienceItems: ExperienceItem[] = [
  {
    id: "e0",
    company: "USAA",
    role: "Data Scientist 2",
    location: "Plano, TX",
    startDate: "May 2026",
    endDate: "Present",
    description: [
      "Data science and AI.",
    ],
    techStack: ["Python", "Machine Learning", "Generative AI", "Data Science"],
    companyUrl: "https://www.usaa.com",
    logoUrl: "/logos/usaa.png",
    category: "industry",
  },
  // ── Industry ──────────────────────────────────────────────────────────────
  {
    id: "e1",
    company: "GFT Technologies (Google Public Sector)",
    role: "AI Engineer",
    location: "New York City, NY",
    startDate: "Sept 2025",
    endDate: "May 2026",
    description: [
      "Building manufacturing platform for the US Navy.",
    ],
    techStack: ["FastAPI", "PostgreSQL", "LangGraph", "GCP", "Cloud Run", "Document AI", "Gemini"],
    companyUrl: "https://www.gft.com",
    logoUrl: "https://logo.clearbit.com/gft.com",
    category: "industry",
  },
  {
    id: "e2",
    company: "USAA",
    role: "Data Scientist / AI Intern",
    location: "San Antonio, TX",
    startDate: "May 2025",
    endDate: "Aug 2025",
    description: [
      "Enterprise GenAI.",
    ],
    techStack: ["Python", "TF-IDF", "spaCy", "Embeddings", "Gemini", "HDBSCAN", "BigQuery"],
    companyUrl: "https://www.usaa.com",
    logoUrl: "https://logo.clearbit.com/usaa.com",
    category: "industry",
  },
  {
    id: "e3",
    company: "GFT Technologies / Ford Motor Company",
    role: "Data and Machine Learning Intern",
    location: "New York City, NY",
    startDate: "May 2024",
    endDate: "Aug 2024",
    description: [
      "Image search and AI Agents in Ford.",
    ],
    techStack: ["CLIP", "FAISS", "LangChain", "OpenAI", "Python", "FastAPI"],
    companyUrl: "https://www.ford.com",
    logoUrl: "https://logo.clearbit.com/ford.com",
    category: "industry",
  },

  // ── Teaching ─────────────────────────────────────────────────────────────
  {
    id: "t1",
    company: "George Mason University",
    role: "Teaching Assistant — CS 483: Analysis of Algorithms",
    location: "Fairfax, VA",
    startDate: "Jan 2026",
    endDate: "Present",
    description: [
      "Supporting students in algorithm design, complexity analysis, and problem-solving for Analysis of Algorithms.",
    ],
    techStack: ["Algorithms", "Data Structures", "Complexity Theory"],
    logoUrl: "https://logo.clearbit.com/gmu.edu",
    category: "teaching",
  },
  {
    id: "t2",
    company: "MLOps Club",
    role: "AWS / Python Teaching Assistant",
    location: "Remote",
    startDate: "Mar 2025",
    endDate: "Present",
    description: [
      "Mentored 30+ students on MLOps fundamentals, AWS cloud infrastructure, and Python engineering practices.",
    ],
    techStack: ["AWS", "Python", "MLflow", "Docker", "SageMaker"],
    companyUrl: "https://mlops-club.org/",
    category: "teaching",
  },
  {
    id: "t3",
    company: "George Mason University",
    role: "Instructor — MATH 113: Calculus 1",
    location: "Fairfax, VA",
    startDate: "Jan 2024",
    endDate: "May 2024",
    description: [
      "Independently taught Calculus 1, covering limits, derivatives, and integrals for a full semester.",
    ],
    techStack: ["Calculus", "Instruction", "Curriculum Design"],
    logoUrl: "https://logo.clearbit.com/gmu.edu",
    category: "teaching",
  },

  // ── Research ──────────────────────────────────────────────────────────────
  {
    id: "r1",
    company: "George Mason University, NLP Lab",
    role: "AI Research Assistant",
    location: "Fairfax, VA",
    startDate: "Summer 2024",
    endDate: "Present",
    description: [
      "Built the application and multi-agent orchestration stack for MathVC and supported VLM benchmarking workflows for hard STEM reasoning research.",
    ],
    techStack: ["LangChain", "LangGraph", "OpenAI APIs", "Python", "FastAPI"],
    logoUrl: "https://logo.clearbit.com/gmu.edu",
    category: "research",
  },
  {
    id: "r2",
    company: "George Mason University, Alignment Lab",
    role: "Research Assistant",
    location: "Fairfax, VA",
    startDate: "Oct 2024",
    endDate: "May 2025",
    description: [
      "Supported dataset curation, robot vision tasks, and multimodal evaluation workflows for multi-robot public-safety video sensemaking research.",
    ],
    techStack: ["Python", "Multimodal Models", "Video Understanding", "Prompt Engineering"],
    logoUrl: "https://logo.clearbit.com/gmu.edu",
    category: "research",
  },
];
