import { Nav } from "@/components/Site/Nav";
import { Hero } from "@/components/Site/Hero";
import { Stats } from "@/components/Site/Stats";
import { Marquee } from "@/components/Site/Marquee";
import { About } from "@/components/Site/About";
import { Expertise } from "@/components/Site/Expertise";
import { Experience } from "@/components/Site/Experience";
import { Education } from "@/components/Site/Education";
import { Highlights } from "@/components/Site/Highlights";
import { Contact } from "@/components/Site/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Dr. Hemanth Veeramalla — Founder & Executive CEO, Fintech Leader";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "Dr. Hemanth Veeramalla — Founder and Executive CEO of One78 SabbPe Technology Solutions. 20+ years experience scaling digital payments, lending, and fintech ecosystems globally.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Highlights />
      <Stats />
      <Marquee />
      <About />
      <Expertise />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
};

export default Index;