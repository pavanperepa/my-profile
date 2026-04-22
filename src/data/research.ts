export type ResearchType = "conference" | "journal" | "preprint" | "workshop";

export interface ResearchItem {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: ResearchType;
  description: string;
  tags: string[];
  paperUrl?: string;
  codeUrl?: string;
  projectUrl?: string;
  featured?: boolean;
}

export const researchItems: ResearchItem[] = [
  {
    id: "r1",
    title:
      "Can LLMs Simulate Personas with Reversed Performance? A Systematic Investigation for Counterfactual Instruction Following in Math Reasoning Context",
    authors: [
      "Sai Adith Senthil Kumar",
      "Hao Yan",
      "Saipavan Perepa",
      "Murong Yue",
      "Ziyu Yao",
    ],
    venue: "COLM 2025",
    year: 2025,
    type: "conference",
    description:
      "A systematic investigation into whether LLMs can faithfully simulate personas whose performance is deliberately reversed — e.g., acting as a poor math reasoner despite strong base capability. Examines counterfactual instruction following in math reasoning settings.",
    tags: ["LLMs", "Persona Simulation", "Math Reasoning", "Counterfactual", "NLP"],
    paperUrl: "https://arxiv.org/abs/2504.06460",
    featured: true,
  },
  {
    id: "r2",
    title: "Designing Multi-Robot Ground Video Sensemaking with Public Safety Professionals",
    authors: ["Saipavan Perepa"],
    venue: "arXiv preprint",
    year: 2025,
    type: "preprint",
    description:
      "Contributor to research on multi-robot ground video sensemaking in public-safety settings. Supported dataset curation, robot vision tasks, and multimodal evaluation workflows for systems augmenting patrol video streams with prompt-engineered video understanding.",
    tags: ["Multi-Robot", "Video Understanding", "Public Safety", "Multimodal", "Vision-Language"],
    paperUrl: "https://arxiv.org/abs/2602.08882",
    featured: false,
  },
];
