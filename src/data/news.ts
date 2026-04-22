export type NewsCategory =
  | "publication"
  | "award"
  | "talk"
  | "internship"
  | "teaching"
  | "misc";

export interface NewsEntry {
  id: string;
  date: string;
  isoDate: string;
  category: NewsCategory;
  headline: string;
  detail?: string;
  url?: string;
}

export const newsEntries: NewsEntry[] = [
  {
    id: "n1",
    date: "Apr 2026",
    isoDate: "2026-04-01",
    category: "misc",
    headline: "Released LegacyGym — an open-source OpenEnv-compatible benchmark for COBOL-to-Python modernization agents.",
    url: "https://github.com/pavanperepa/legacygym",
  },
  {
    id: "n_cs483",
    date: "Jan 2026",
    isoDate: "2026-01-10",
    category: "teaching",
    headline: "Started as Teaching Assistant for CS 483 — Analysis of Algorithms at George Mason University.",
  },
  {
    id: "n2",
    date: "Sept 2025",
    isoDate: "2025-09-01",
    category: "internship",
    headline: "Joined GFT Technologies (Google Public Sector) full-time as an AI Engineer in New York City.",
  },
  {
    id: "n3",
    date: "July 2025",
    isoDate: "2025-07-01",
    category: "publication",
    headline: "Paper accepted at COLM 2025 — \"Can LLMs Simulate Personas with Reversed Performance?\"",
    detail: "arXiv:2504.06460 — Co-authored with Sai Adith Senthil Kumar, Hao Yan, Murong Yue, and Ziyu Yao.",
    url: "https://arxiv.org/abs/2504.06460",
  },
  {
    id: "n4",
    date: "May 2025",
    isoDate: "2025-05-01",
    category: "internship",
    headline: "Joining USAA as Data Scientist / AI Intern for Summer 2025 — grateful to Fidelity Investments and Peraton for their generous offers.",
  },
  {
    id: "n_mlops",
    date: "Mar 2025",
    isoDate: "2025-03-01",
    category: "teaching",
    headline: "Joined MLOps Club as an AWS / Python Teaching Assistant, mentoring 30+ students on cloud ML infrastructure.",
    url: "https://mlops-club.org/",
  },
  {
    id: "n_bike",
    date: "Spring 2025",
    isoDate: "2025-02-01",
    category: "misc",
    headline: "Taking the spring semester off — had a spirited disagreement with the pavement mid-ride and gravity won, decisively. Healing up, reading papers, and developing very strong opinions about helmets.",
  },
  {
    id: "n_robot",
    date: "Feb 2025",
    isoDate: "2025-02-15",
    category: "publication",
    headline: "Multi-robot ground video sensemaking paper accepted — contributed to dataset curation and robot vision evaluation workflows.",
    url: "https://arxiv.org/abs/2602.08882",
  },
  {
    id: "n_alignment",
    date: "Oct 2024",
    isoDate: "2024-10-01",
    category: "misc",
    headline: "Joined George Mason University Alignment Lab as a Research Assistant, supporting multi-robot public-safety video sensemaking research.",
  },
  {
    id: "n6",
    date: "Summer 2024",
    isoDate: "2024-06-01",
    category: "misc",
    headline: "Joined George Mason University NLP Lab as an AI Research Assistant.",
    detail: "Working on MathVC multi-agent platform and vision-language model benchmarking.",
  },
  {
    id: "n5",
    date: "May 2024",
    isoDate: "2024-05-01",
    category: "internship",
    headline: "Started as Data and Machine Learning Intern at GFT Technologies / Ford Motor Company.",
  },
  {
    id: "n_math",
    date: "Jan 2024",
    isoDate: "2024-01-10",
    category: "teaching",
    headline: "Started as Instructor for MATH 113 — Calculus 1 at George Mason University.",
  },
];
