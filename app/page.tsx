import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import NavBar from "@/components/ui/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-copy">
      <NavBar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="border-t border-gold/35 px-5 py-8 text-xs uppercase tracking-[0.22em] text-muted md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <span className="font-heading text-copy">Chandan Swarnakar</span>
          <span>Next.js 14 + Three.js + Framer Motion</span>
          <span>(c) 2025</span>
        </div>
      </footer>
    </main>
  );
}
