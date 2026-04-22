import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/shared/BrandIcons";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { personalInfo, type SocialPlatform } from "@/data/personal";

const iconMap: Partial<Record<SocialPlatform, React.ElementType>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: Mail,
  twitter: XIcon,
};

export function Contact() {
  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      subtitle="Let's build something together."
      className="bg-muted/30"
    >
      <div className="max-w-lg">
        <p className="text-muted-foreground mb-8 leading-relaxed">
          I&apos;m always open to interesting conversations — research collaborations,
          internship opportunities, hackathon teams, or just a good chat. Feel free to
          reach out through any of the channels below.
        </p>
        <div className="flex flex-wrap gap-3">
          {personalInfo.socialLinks.map((link) => {
            const Icon = iconMap[link.platform];
            if (!Icon) return null;
            return (
              <Button
                key={link.platform}
                variant="outline"
                size="lg"
                render={<a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label} />}
              >
                <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
                {link.label}
              </Button>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
