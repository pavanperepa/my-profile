import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { newsEntries, type NewsCategory } from "@/data/news";

const categoryLabel: Record<NewsCategory, string> = {
  publication: "Publication",
  award: "Award",
  talk: "Talk",
  internship: "Internship",
  teaching: "Teaching",
  misc: "Update",
};

const categoryVariant: Record<
  NewsCategory,
  "default" | "secondary" | "outline"
> = {
  publication: "default",
  award: "default",
  teaching: "secondary",
  talk: "secondary",
  internship: "secondary",
  misc: "outline",
};

export function News() {
  const sorted = [...newsEntries].sort(
    (a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
  );

  return (
    <SectionWrapper id="news" title="News" subtitle="What's been happening lately.">
      <div className="space-y-0">
        {sorted.map((item, i) => (
          <div
            key={item.id}
            className={`flex flex-col sm:flex-row gap-2 sm:gap-6 py-4 ${
              i < sorted.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <span className="text-sm text-muted-foreground font-mono shrink-0 w-28">
              {item.date}
            </span>
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 flex-1">
              <Badge
                variant={categoryVariant[item.category]}
                className="text-xs w-fit shrink-0"
              >
                {categoryLabel[item.category]}
              </Badge>
              <div className="space-y-0.5">
                <p className="text-sm leading-relaxed">
                  {item.headline}
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1.5 inline-flex items-center text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </p>
                {item.detail && (
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
