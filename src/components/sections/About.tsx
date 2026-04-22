import { ExternalLink } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { personalInfo } from "@/data/personal";

export function About() {
  const { education, venture } = personalInfo;

  return (
    <SectionWrapper id="about" title="About">
      <div className="grid items-start gap-10 md:grid-cols-[200px_1fr]">
        <div className="flex justify-center md:justify-start">
          <img
            src={personalInfo.avatarUrl}
            alt={personalInfo.name}
            className="h-44 w-44 shrink-0 rounded-full border-4 border-border object-cover object-top"
          />
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card/60 p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  Operator-Built
                </p>
                <h3 className="text-lg font-semibold">{venture.name}</h3>
                <p className="text-sm text-muted-foreground">{venture.location}</p>
              </div>
              <a
                href={venture.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Visit site
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {venture.summary}
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Education
            </h3>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold">{education.school}</p>
                <p className="text-sm text-muted-foreground">
                  {education.degree}
                </p>
              </div>
              <p className="shrink-0 text-sm text-muted-foreground">
                {education.startDate} &ndash; {education.endDate} &middot;{" "}
                {education.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
