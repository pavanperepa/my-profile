import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

export function SectionWrapper({ id, title, subtitle, className, children }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 px-4", className)}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
          <Separator className="mt-4" />
        </div>
        {children}
      </div>
    </section>
  );
}
