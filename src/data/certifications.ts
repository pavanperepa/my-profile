export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  logoUrl?: string;
}

export const certifications: Certification[] = [
  {
    id: "c1",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Aug 2024",
    logoUrl: "https://logo.clearbit.com/aws.amazon.com",
  },
];
