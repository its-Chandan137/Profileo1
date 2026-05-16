"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      label="Skills"
      title="Tools I Reach For"
      subtitle="I work close to the interface layer: fast product screens, reliable state, responsive layouts, and real-time experiences that stay understandable as they grow."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((category, index) => (
          <motion.article
            key={category.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-64 rounded-lg border border-line bg-panel/90 p-6 transition duration-300 hover:border-gold hover:shadow-gold"
          >
            <p className="eyebrow">{category.number}</p>
            <h3 className="mt-5 font-heading text-3xl font-bold uppercase leading-none text-copy">
              {category.name}
            </h3>
            <div className="mt-8 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-line bg-ink px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-copy"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
