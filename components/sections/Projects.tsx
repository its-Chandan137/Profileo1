"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionWrapper from "@/components/ui/SectionWrapper";

const filters = ["All", "React", "Angular", "Vanilla JS"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <SectionWrapper
      id="projects"
      label="Projects"
      title="Selected Work"
      subtitle="Production projects across government, healthcare, ed-tech, and SaaS domains."
    >
      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition ${
              activeFilter === filter
                ? "border-gold bg-gold text-ink"
                : "border-line bg-panel text-muted hover:border-gold hover:text-gold"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
