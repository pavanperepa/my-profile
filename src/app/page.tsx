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
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <CorporateHackathons />
        <Certifications />
        <Projects />
        <Hackathons />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
