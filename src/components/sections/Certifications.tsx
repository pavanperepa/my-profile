import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { certifications } from "@/data/certifications";

export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Industry-recognized credentials."
    >
      <div className="space-y-3">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card/60 px-5 py-4"
          >
            {cert.logoUrl && (
              <img
                src={cert.logoUrl}
                alt={`${cert.issuer} logo`}
                className="h-10 w-10 shrink-0 rounded-xl object-contain"
              />
            )}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold">{cert.name}</span>
                <Badge variant="default" className="text-xs">
                  Certified
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {cert.issuer} &middot; {cert.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
