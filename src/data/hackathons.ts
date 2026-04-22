export type HackathonPlacement =
  | "1st Place"
  | "2nd Place"
  | "3rd Place"
  | "Winner"
  | "Finalist"
  | "Honorable Mention"
  | "Participant";

export type HackathonType = "open" | "corporate";

export interface HackathonItem {
  id: string;
  event: string;
  organizer: string;
  placement: HackathonPlacement;
  projectName: string;
  description: string;
  year: number;
  techStack: string[];
  type: HackathonType;
  track?: string;
  projectUrl?: string;
  devpostUrl?: string;
  teamSize?: number;
}

export const hackathonItems: HackathonItem[] = [
  // ── Open Hackathons ───────────────────────────────────────────────────────
  {
    id: "h1",
    event: "wellSpent — UNC Chapel Hill",
    organizer: "UNC Chapel Hill",
    placement: "Winner",
    projectName: "wellSpent",
    description:
      "Built an ML-powered personal finance platform that analyzed spending patterns, categorized purchases, and surfaced personalized budgeting insights for users.",
    year: 2024,
    techStack: ["Python", "React", "ML", "PostgreSQL"],
    type: "open",
    devpostUrl: "https://devpost.com/software/wellspent",
  },
  {
    id: "h2",
    event: "Asclepius — GMU",
    organizer: "George Mason University",
    placement: "Winner",
    projectName: "Asclepius",
    description:
      "Built an AI-assisted medication and prescription management platform with personalized reminders, health guidance, and secure care workflows.",
    year: 2024,
    techStack: ["Python", "FastAPI", "OpenAI", "React"],
    type: "open",
    devpostUrl: "https://devpost.com/software/asclepius-nq629j",
  },
  {
    id: "h3",
    event: "MediCognize — GMU",
    organizer: "George Mason University",
    placement: "Winner",
    projectName: "MediCognize",
    description:
      "Built an AI healthcare platform for faster diagnostics, multilingual patient support, and specialist-access workflows.",
    year: 2023,
    techStack: ["Python", "NLP", "React", "FastAPI"],
    type: "open",
    devpostUrl: "https://devpost.com/software/medicognize",
  },
  {
    id: "h4",
    event: "Smart Building Hackathon — GMU",
    organizer: "George Mason University",
    placement: "Winner",
    projectName: "SmartBuilding",
    description:
      "Built a smart building platform leveraging IoT and AI for automated energy management, occupancy detection, and operational workflows.",
    year: 2024,
    techStack: ["Python", "IoT", "React", "FastAPI", "Azure"],
    type: "open",
    track: "Microsoft Track · Cloudforce Track",
    devpostUrl: "https://devpost.com/software/smartbuilding",
  },
  {
    id: "h5",
    event: "Patriot Help Service — GMU",
    organizer: "George Mason University",
    placement: "Winner",
    projectName: "Patriot Help Service",
    description:
      "Built an AI-driven student support platform that analyzed course and interest signals to improve recommendations and campus assistance workflows.",
    year: 2023,
    techStack: ["Python", "ML", "React", "Firebase"],
    type: "open",
    devpostUrl: "https://devpost.com/software/patriot-help-services",
  },

  // ── Corporate Hackathons ──────────────────────────────────────────────────
  {
    id: "c1",
    event: "JPMorgan Chase Code for Good",
    organizer: "JPMorgan Chase",
    placement: "Participant",
    projectName: "NGO Volunteer Matching System",
    description:
      "Built an AI-powered recruiting and interest-based matching system for an NGO, aligning volunteer and candidate profiles with organizational needs using structured attributes, interest signals, and matching logic.",
    year: 2024,
    techStack: ["Python", "FastAPI", "OpenAI", "PostgreSQL"],
    type: "corporate",
    projectUrl: "https://github.com/cfgdelaware24/Team-4",
  },
];
