import { ExternalLink, Code2, Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { researchItems } from "@/data/research";
import { personalInfo } from "@/data/personal";

const typeLabel: Record<string, string> = {
  conference: "Conference",
  journal: "Journal",
  preprint: "Preprint",
  workshop: "Workshop",
};

export function Research() {
  const sorted = [...researchItems].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.year - a.year;
  });

  return (
    <SectionWrapper
      id="research"
      title="Research"
      subtitle="Papers, projects, and academic work."
      className="bg-muted/30"
    >
      <div className="space-y-4">
        {sorted.map((item) => (
          <Card key={item.id} className="relative">
            {item.featured && (
              <div className="absolute top-4 right-4">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
            )}
            <CardHeader className="pb-2">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <Badge variant="outline" className="text-xs font-mono">
                  {typeLabel[item.type]}
                </Badge>
                <span className="text-xs text-muted-foreground">{item.year}</span>
              </div>
              <h3 className="text-lg font-semibold leading-tight pr-8">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.authors.map((author, i) => (
                  <span key={i}>
                    {author === personalInfo.name ? (
                      <strong className="text-foreground">{author}</strong>
                    ) : (
                      author
                    )}
                    {i < item.authors.length - 1 && ", "}
                  </span>
                ))}
                {" · "}
                <span className="italic">{item.venue}</span>
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 pt-1">
                {item.paperUrl && (
                  <Button size="sm" variant="outline" render={<a href={item.paperUrl} target="_blank" rel="noopener noreferrer" aria-label={`Read paper: ${item.title}`} />}>
                    <ExternalLink className="mr-1.5 h-3 w-3" aria-hidden="true" />
                    Paper
                  </Button>
                )}
                {item.codeUrl && (
                  <Button size="sm" variant="outline" render={<a href={item.codeUrl} target="_blank" rel="noopener noreferrer" aria-label={`View code for: ${item.title}`} />}>
                    <Code2 className="mr-1.5 h-3 w-3" aria-hidden="true" />
                    Code
                  </Button>
                )}
                {item.projectUrl && (
                  <Button size="sm" variant="outline" render={<a href={item.projectUrl} target="_blank" rel="noopener noreferrer" aria-label={`View project: ${item.title}`} />}>
                    <ExternalLink className="mr-1.5 h-3 w-3" aria-hidden="true" />
                    Project
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
