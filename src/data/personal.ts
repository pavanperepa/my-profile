export type SocialPlatform =
  | "github"
  | "linkedin"
  | "email"
  | "twitter"
  | "scholar";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label: string;
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface Venture {
  name: string;
  url: string;
  location: string;
  summary: string;
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  bio: string;
  avatarUrl: string;
  resumeUrl?: string;
  socialLinks: SocialLink[];
  education: Education;
  venture: Venture;
}

export const personalInfo: PersonalInfo = {
  name: "Saipavan Perepa",
  tagline: "AI / NLP Engineer · CS @ George Mason University",
  bio: "Applied AI and NLP engineer with experience building retrieval, document-intelligence, multimodal, and evaluation systems across industry and research settings.",
  avatarUrl: "/avatar.jpg",
  resumeUrl: "/resume.pdf",
  socialLinks: [
    {
      platform: "github",
      url: "https://github.com/pavanperepa",
      label: "GitHub",
    },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/saipavan-perepa-121a43265/",
      label: "LinkedIn",
    },
    {
      platform: "email",
      url: "mailto:pperepa9@gmail.com",
      label: "Email",
    },
  ],
  education: {
    school: "George Mason University",
    degree: "B.S. in Computer Science",
    location: "Fairfax, VA",
    startDate: "Aug 2022",
    endDate: "May 2026",
  },
  venture: {
    name: "Enerze",
    url: "https://www.enerze.in",
    location: "Hyderabad, India",
    summary:
      "One person, every layer — architected the platform, ships the code, and manages supplier relationships and on-ground logistics in Hyderabad. Often from 9,000 miles away.",
  },
};
