import { personalInfo } from "@/data/personal";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {personalInfo.name}. Built with Next.js &amp; shadcn/ui.
        </p>
        <div className="flex gap-4">
          {personalInfo.socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
