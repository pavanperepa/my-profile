import { ExternalLink } from "lucide-react";
import { CompanyLogo } from "@/components/shared/CompanyLogo";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { experienceItems } from "@/data/experience";

function TimelineItem({ item }: { item: (typeof experienceItems)[number] }) {
  return (
    <div className="relative pl-6">
      <div className="absolute -left-[1px] top-3 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background" />

      <div className="mb-3 space-y-1.5">
        <div className="flex items-start gap-2.5">
          <CompanyLogo
            logoUrl={item.logoUrl}
            company={item.company}
            className="mt-0.5"
          />
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-semibold leading-tight">{item.role}</h3>
              {item.endDate === "Present" && (
                <Badge variant="default" className="text-xs">
                  Current
                </Badge>
              )}
            </div>
            <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm text-muted-foreground">
              {item.companyUrl ? (
                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-foreground hover:underline"
                >
                  {item.company}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <span className="font-medium text-foreground">{item.company}</span>
              )}
              <span>&middot;</span>
              <span>{item.location}</span>
              <span>&middot;</span>
              <span>
                {item.startDate} &ndash; {item.endDate}
              </span>
            </div>
          </div>
        </div>
      </div>

      <ul className="mb-3 space-y-1">
        {item.description.map((point, index) => (
          <li key={index} className="flex gap-2 text-sm text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/60" />
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
    </div>
  );
}

export function Experience() {
  const industry = experienceItems
    .filter((item) => item.category === "industry")
    .sort((a, b) => {
      if (a.endDate === "Present") return -1;
      if (b.endDate === "Present") return 1;
      return 0;
    });

  const research = experienceItems
    .filter((item) => item.category === "research")
    .sort((a, b) => {
      if (a.endDate === "Present") return -1;
      if (b.endDate === "Present") return 1;
      return 0;
    });

  const teaching = experienceItems
    .filter((item) => item.category === "teaching")
    .sort((a, b) => {
      if (a.endDate === "Present") return -1;
      if (b.endDate === "Present") return 1;
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });

  return (
    <SectionWrapper id="experience" title="Experience">
      <div className="relative mb-12 space-y-8 border-l border-border pl-6">
        {industry.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mb-6 flex items-center gap-3">
        <p className="shrink-0 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Research
        </p>
        <Separator />
      </div>
      <div className="relative mb-12 space-y-8 border-l border-border pl-6">
        {research.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mb-6 flex items-center gap-3">
        <p className="shrink-0 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Teaching
        </p>
        <Separator />
      </div>
      <div className="relative space-y-8 border-l border-border pl-6">
        {teaching.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </SectionWrapper>
  );
}
