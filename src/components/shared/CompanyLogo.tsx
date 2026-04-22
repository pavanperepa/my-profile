import { getCompanyLogos, type CompanyLogoSource } from "@/data/companyLogos";
import { cn } from "@/lib/utils";

interface CompanyLogoProps {
  company: string;
  className?: string;
  logoUrl?: string;
}

export function CompanyLogo({
  company,
  className,
  logoUrl,
}: CompanyLogoProps) {
  const logos = getCompanyLogos(company);
  const fallbackLogo: CompanyLogoSource[] = logoUrl
    ? [{ alt: `${company} logo`, src: logoUrl }]
    : [];
  const displayLogos = logos.length > 0 ? logos : fallbackLogo;
  const initial = company.replace(/[^a-zA-Z]/g, "")[0]?.toUpperCase() ?? "?";
  const isMultiLogo = displayLogos.length > 1;

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-xl border border-border bg-white",
        isMultiLogo
          ? "flex h-12 w-[5.75rem] items-stretch"
          : "flex h-12 w-12 items-center justify-center",
        className
      )}
    >
      {displayLogos.length === 0 && (
        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-muted-foreground select-none">
          {initial}
        </span>
      )}

      {displayLogos.map((logo, index) => (
        <div
          key={`${logo.alt}-${index}`}
          className={cn(
            "relative z-10 bg-white",
            isMultiLogo
              ? "flex flex-1 items-center justify-center"
              : "absolute inset-0"
          )}
        >
          {isMultiLogo && index > 0 && (
            <span className="absolute inset-y-2 left-0 w-px bg-border" />
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo.src}
            alt={logo.alt}
            className={cn(
              "h-full w-full bg-white object-contain",
              isMultiLogo ? "p-2" : "p-1.5",
              logo.imageClassName
            )}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
