import { Mail, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/shared/BrandIcons";
import { personalInfo, type SocialPlatform } from "@/data/personal";

const iconMap: Record<SocialPlatform, React.ElementType> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: Mail,
  twitter: XIcon,
  scholar: Download,
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-start justify-center px-4 pt-16"
    >
      <div className="max-w-5xl w-full mx-auto">
        <p className="font-mono text-sm text-muted-foreground mb-3 tracking-widest uppercase">
          Hi, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-none">
          {personalInfo.name}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-light">
          {personalInfo.tagline}
        </p>
        <p className="text-base text-muted-foreground max-w-xl mb-10 leading-relaxed">
          {personalInfo.bio}
        </p>
        <div className="flex flex-wrap gap-3">
          {personalInfo.resumeUrl && (
            <Button size="lg" render={<a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" aria-label="Download resume" />}>
              <Download className="mr-2 h-4 w-4" aria-hidden="true" />
              Resume
            </Button>
          )}
          {personalInfo.socialLinks.map((link) => {
            const Icon = iconMap[link.platform];
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

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </div>
    </section>
  );
}
