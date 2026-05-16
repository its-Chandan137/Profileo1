import { ReactNode } from "react";

type SectionWrapperProps = {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function SectionWrapper({
  id,
  label,
  title,
  subtitle,
  children,
  className = ""
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`border-t border-line px-5 py-24 md:px-8 md:py-32 ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow mb-5">{label}</p>
        <div className="mb-12 grid gap-5 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <h2 className="section-heading">{title}</h2>
          {subtitle ? (
            <p className="max-w-xl text-sm leading-7 text-muted md:text-base">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
