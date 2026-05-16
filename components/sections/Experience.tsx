"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      label="Experience"
      title="Work Timeline"
      subtitle="A focused frontend track across production systems, with ownership in React, Angular, real-time workflows, and role-heavy operational interfaces."
    >
      <div className="relative grid gap-8 lg:grid-cols-[0.28fr_1fr]">
        <div className="pointer-events-none hidden font-heading text-7xl font-bold uppercase text-copy/10 lg:block">
          DEV
        </div>
        <div className="relative pl-8">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-2 top-0 h-full w-px origin-top bg-gradient-to-b from-gold via-gold/60 to-transparent"
          />
          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.period}`}
                initial={{ opacity: 0, x: 46 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-lg border border-line bg-panel/90 p-6 md:p-8"
              >
                <span className="absolute -left-[2.05rem] top-8 h-3 w-3 rounded-full bg-gold shadow-[0_0_24px_rgba(245,197,24,0.85)]" />
                <p className="eyebrow">{item.period}</p>
                <div className="mt-5 grid gap-6 lg:grid-cols-[0.38fr_1fr]">
                  <div>
                    <h3 className="font-heading text-2xl font-bold uppercase leading-tight text-copy">
                      {item.company}
                    </h3>
                    <p className="mt-3 font-heading text-xs font-bold uppercase tracking-[0.22em] text-gold">
                      {item.role}
                    </p>
                  </div>
                  <ul className="space-y-4 text-sm leading-6 text-muted">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
