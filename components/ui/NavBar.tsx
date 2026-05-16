"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { id: "intro", label: "Intro" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export default function NavBar() {
  const [active, setActive] = useState("intro");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateActive = () => {
      const current = links.reduce((nearest, link) => {
        const section = document.getElementById(link.id);
        if (!section) return nearest;

        const distance = Math.abs(section.getBoundingClientRect().top - 96);
        return distance < nearest.distance ? { id: link.id, distance } : nearest;
      }, { id: "intro", distance: Number.POSITIVE_INFINITY });

      setActive(current.id);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-line bg-ink/80 px-4 py-3 backdrop-blur-xl md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#intro" className="font-heading text-sm font-bold tracking-[0.22em] text-gold">
          C.SWARNAKAR
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-[0.68rem] font-bold uppercase tracking-[0.24em] transition ${
                active === link.id ? "text-gold" : "text-muted hover:text-copy"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-line md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`h-px w-5 bg-copy transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-copy transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-5 bg-copy transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-4 grid max-w-7xl gap-2 border-t border-line py-4 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`py-2 text-sm font-bold uppercase tracking-[0.2em] ${
                active === link.id ? "text-gold" : "text-muted"
              }`}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      ) : null}
    </header>
  );
}
