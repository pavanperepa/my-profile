import { Trophy, ExternalLink, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
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

const trophyColor: Record<HackathonPlacement, string> = {
  "1st Place": "text-yellow-500",
  "2nd Place": "text-slate-400",
  "3rd Place": "text-amber-600",
  Winner: "text-yellow-500",
  Finalist: "text-blue-500",
  "Honorable Mention": "text-muted-foreground",
  Participant: "text-muted-foreground",
};

export function Hackathons() {
  const items = hackathonItems
    .filter((i) => i.type === "open")
    .sort((a, b) => b.year - a.year);

  return (
    <SectionWrapper
      id="hackathons"
      title="Hackathons"
      subtitle="Building fast, learning faster."
      className="bg-muted/30"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <Card key={item.id} className="flex flex-col">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-2">
                <Trophy
                  className={`h-5 w-5 mt-0.5 shrink-0 ${trophyColor[item.placement]}`}
                />
                <Badge
                  variant={placementVariant[item.placement]}
                  className="text-xs ml-auto"
                >
                  {item.placement}
                </Badge>
              </div>
              <h3 className="text-base font-semibold leading-tight mt-2">
                {item.projectName}
              </h3>
              <div className="text-xs text-muted-foreground">
                {item.event} · {item.year}
              </div>
              {item.track && (
                <div className="flex flex-wrap gap-1 mt-1">
                  {item.track.split("·").map((t) => (
                    <Badge key={t} variant="outline" className="text-xs font-normal">
                      {t.trim()}
                    </Badge>
                  ))}
                </div>
              )}
            </CardHeader>
            <CardContent className="flex flex-col flex-1 gap-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {item.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1">
                {item.teamSize && (
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {item.teamSize} members
                  </span>
                )}
                <div className="flex gap-2 ml-auto">
                  {item.projectUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      render={<a href={item.projectUrl} target="_blank" rel="noopener noreferrer" aria-label={`Demo: ${item.projectName}`} />}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" aria-hidden="true" />
                      Demo
                    </Button>
                  )}
                  {item.devpostUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      render={<a href={item.devpostUrl} target="_blank" rel="noopener noreferrer" aria-label={`Devpost: ${item.projectName}`} />}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" aria-hidden="true" />
                      Devpost
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
