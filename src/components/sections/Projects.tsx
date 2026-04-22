import { ExternalLink, Code2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { projectItems } from "@/data/projects";

export function Projects() {
  const sorted = [...projectItems].sort((a, b) => b.year - a.year);

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Open-source work and personal builds."
    >
      <div className="space-y-4">
        {sorted.map((item) => (
          <Card key={item.id}>
            <CardHeader className="pb-2">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <Badge variant="outline" className="text-xs font-mono">
                  {item.type}
                </Badge>
                <span className="text-xs text-muted-foreground">{item.year}</span>
              </div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-1.5">
                {item.details.map((point, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground/60 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {item.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 pt-1">
                {item.githubUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    render={<a href={item.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`GitHub: ${item.name}`} />}
                  >
                    <Code2 className="mr-1.5 h-3 w-3" aria-hidden="true" />
                    GitHub
                  </Button>
                )}
                {item.liveUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    render={<a href={item.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Live demo: ${item.name}`} />}
                  >
                    <ExternalLink className="mr-1.5 h-3 w-3" aria-hidden="true" />
                    Live
                  </Button>
                )}
                {item.paperUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    render={<a href={item.paperUrl} target="_blank" rel="noopener noreferrer" aria-label={`Paper: ${item.name}`} />}
                  >
                    <ExternalLink className="mr-1.5 h-3 w-3" aria-hidden="true" />
                    Paper
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
