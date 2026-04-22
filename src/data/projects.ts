export interface ProjectItem {
  id: string;
  name: string;
  type: string;
  year: number;
  description: string;
  details: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  paperUrl?: string;
  featured?: boolean;
}

export const projectItems: ProjectItem[] = [
  {
    id: "p1",
    name: "LegacyGym",
    type: "Open-Source Research Project",
    year: 2026,
    description:
      "An OpenEnv-compatible benchmark for iterative COBOL-to-Python modernization. Agents interact with legacy code, normalized Python contracts, visible tests, and controlled execution rather than executing COBOL directly.",
    details: [
      "Built an OpenEnv-compatible environment interface supporting multi-step agent interactions with legacy COBOL codebases.",
      "Designed typed environment contracts, multi-step agent actions, and deterministic scoring across correctness, maintainability, and safety for reproducible evaluation of modernization agents.",
    ],
    techStack: ["Python", "OpenEnv", "COBOL", "AST Analysis", "Benchmarking"],
    githubUrl: "https://github.com/pavanperepa/legacygym",
    featured: true,
  },
];
