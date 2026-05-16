"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HeroSphere = dynamic(() => import("@/components/three/HeroSphere"), {
  ssr: false,
  loading: () => <div className="h-full min-h-[23rem] rounded-lg border border-gold/25 bg-panel" />
});

const chips = ["React", "Angular", "Socket.io", "NgRx"];
const contact = [
  "chandanswarnakar13@gmail.com",
  "+91 6201513851",
  "Hyderabad, India",
  "LinkedIn"
];

export default function Hero() {
  return (
    <section id="intro" className="px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(380px,0.92fr)] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="min-w-0"
        >
          <p className="eyebrow mb-5">Hyderabad, India</p>
          <h1 className="font-heading text-[clamp(4rem,8vw,7.2rem)] font-bold uppercase leading-[0.78] text-copy">
            Chandan
            <br />
            Swarnakar
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-gold px-5 py-2 font-heading text-xs font-bold uppercase tracking-[0.2em] text-ink">
              Frontend Developer
            </span>
            <span className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-muted">
              React &middot; Angular &middot; JavaScript &middot; Three.js
            </span>
          </div>
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted md:text-lg">
            Building responsive, real-time web applications end-to-end. 2+ years across government,
            healthcare, and ed-tech domains.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-ink transition hover:bg-copy"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="rounded-full border border-line px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-copy transition hover:border-gold hover:text-gold"
            >
              Download Resume
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {contact.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-line bg-panel/80 px-4 py-3 text-xs text-muted"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-w-0"
        >
          <HeroSphere />
          {chips.map((chip, index) => (
            <motion.span
              key={chip}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              className={`absolute rounded-full border border-gold/45 bg-ink/80 px-4 py-2 font-heading text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gold backdrop-blur ${
                index === 0
                  ? "-left-3 top-8"
                  : index === 1
                    ? "right-4 top-16"
                    : index === 2
                      ? "bottom-8 left-6"
                      : "right-0 bottom-20"
              }`}
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
