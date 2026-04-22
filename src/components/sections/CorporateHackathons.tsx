import { Code2, ExternalLink } from "lucide-react";
import { CompanyLogo } from "@/components/shared/CompanyLogo";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { hackathonItems, type HackathonPlacement } from "@/data/hackathons";

const placementVariant: Record<
  HackathonPlacement,
  "default" | "secondary" | "outline"
> = {
  "1st Place": "default",
  "2nd Place": "default",
  "3rd Place": "secondary",
  Winner: "default",
  Finalist: "secondary",
  "Honorable Mention": "outline",
  Participant: "outline",
};

export function CorporateHackathons() {
  const items = hackathonItems
    .filter((item) => item.type === "corporate")
    .sort((a, b) => b.year - a.year);

  if (items.length === 0) return null;

  return (
    <SectionWrapper
      id="corporate-hackathons"
      title="Corporate Hackathons"
      subtitle="Industry-sponsored competitions and challenges."
    >
      <div className="space-y-4">
        {items.map((item) => (
          <Card key={item.id}>
            <CardHeader className="pb-2">
              <div className="mb-1 flex items-start gap-2.5">
                <CompanyLogo
                  company={item.organizer}
                  className="h-12 w-12 rounded-xl"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      {item.organizer}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      &middot; {item.year}
                    </span>
                    <Badge
                      variant={placementVariant[item.placement]}
                      className="ml-auto text-xs"
                    >
                      {item.placement}
                    </Badge>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold">{item.event}</h3>
              <p className="text-sm font-medium text-muted-foreground">
                Project: {item.projectName}
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 pt-1">
                {item.projectUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    render={
                      <a
                        href={item.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub: ${item.projectName}`}
                      />
                    }
                  >
                    <Code2 className="mr-1 h-3 w-3" aria-hidden="true" />
                    GitHub
                  </Button>
                )}
                {item.devpostUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    render={
                      <a
                        href={item.devpostUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Devpost: ${item.projectName}`}
                      />
                    }
                  >
                    <ExternalLink className="mr-1 h-3 w-3" aria-hidden="true" />
                    Devpost
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
