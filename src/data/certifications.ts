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
    logoUrl: "https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/brand-marketing/approved/images/855539fec390cef7d6ba553ad4cf6818-aws-logo-black-text-600x400.f842ee8576dbf17c316c3f82e4604f704a6224fc.png",
  },
];
