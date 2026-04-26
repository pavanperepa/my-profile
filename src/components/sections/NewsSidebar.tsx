import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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

export function NewsSidebar() {
  const sorted = [...newsEntries].sort(
    (a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
  );

  return (
    <div id="news" className="py-20 pr-4">
      <h2 className="text-xl font-bold tracking-tight mb-1">News</h2>
      <p className="text-sm text-muted-foreground mb-4">What&apos;s been happening.</p>
      <div className="h-px bg-border mb-6" />
      <div className="space-y-0">
        {sorted.map((item, i) => (
          <div
            key={item.id}
            className={`py-3.5 ${i < sorted.length - 1 ? "border-b border-border" : ""}`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-muted-foreground font-mono">
                {item.date}
              </span>
              <Badge
                variant={categoryVariant[item.category]}
                className="text-[10px] px-1.5 py-0"
              >
                {categoryLabel[item.category]}
              </Badge>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {item.headline}
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 inline-flex items-center hover:text-foreground"
                >
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              )}
            </p>
            {item.detail && (
              <p className="text-[11px] text-muted-foreground/70 mt-0.5">{item.detail}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
