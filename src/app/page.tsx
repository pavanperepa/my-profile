import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Research } from "@/components/sections/Research";
import { CorporateHackathons } from "@/components/sections/CorporateHackathons";
import { Certifications } from "@/components/sections/Certifications";
import { Projects } from "@/components/sections/Projects";
import { Hackathons } from "@/components/sections/Hackathons";
import { News } from "@/components/sections/News";
import { NewsSidebar } from "@/components/sections/NewsSidebar";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Two-column layout: main content left, News sidebar right */}
        <div className="xl:grid xl:grid-cols-[1fr_300px] xl:items-start">
          {/* Main content column */}
          <div className="min-w-0">
            <About />
            <Experience />
            <Research />
            <CorporateHackathons />
            <Certifications />
            <Projects />
            <Hackathons />
            <Contact />
          </div>

          {/* News sidebar — sticky, desktop only */}
          <aside className="hidden xl:block border-l border-border">
            <div className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto pl-6">
              <NewsSidebar />
            </div>
          </aside>
        </div>

        {/* News at the bottom on smaller screens */}
        <div className="xl:hidden">
          <News />
        </div>
      </main>
      <Footer />
    </>
  );
}
