"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group flex min-h-[22rem] flex-col justify-between rounded-lg border border-line bg-panel/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-gold md:p-8"
    >
      <div>
        <p className="eyebrow mb-5">Case Study {String(index + 1).padStart(2, "0")}</p>
        <h3 className="font-heading text-3xl font-bold uppercase leading-none text-copy md:text-4xl">
          {project.name}
        </h3>
        <p className="mt-3 font-heading text-xs font-bold uppercase tracking-[0.22em] text-gold">
          {project.domain}
        </p>
        <ul className="mt-8 space-y-4 text-sm leading-6 text-muted">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-line bg-ink px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-copy"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
