"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const contactItems = [
  { label: "Email", value: "chandanswarnakar13@gmail.com", href: "mailto:chandanswarnakar13@gmail.com" },
  { label: "Location", value: "Hyderabad, Telangana, India", href: "https://maps.google.com/?q=Hyderabad%2C%20Telangana%2C%20India" },
  { label: "GitHub", value: "github.com/its-Chandan137", href: "https://github.com/its-Chandan137" },
  { label: "LinkedIn", value: "linkedin.com/in/chandanswarnakar", href: "https://linkedin.com/in/chandanswarnakar" },
  { label: "Web", value: "myportfolio137.netlify.app", href: "https://myportfolio137.netlify.app" }
];

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      label="Contact"
      title="Let's Work Together"
      subtitle="Open to frontend opportunities where thoughtful UI, real product complexity, and fast-moving teams meet."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-3">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.value}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="grid grid-cols-[5rem_1fr] gap-4 rounded-lg border border-line bg-panel/90 p-4 text-sm transition hover:border-gold"
            >
              <span className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-gold">
                {item.label}
              </span>
              <span className="break-words text-copy">{item.value}</span>
            </motion.a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-lg border border-line bg-panel/90 p-5 md:p-8"
        >
          {["Name", "Email"].map((label, index) => (
            <motion.label
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="mb-5 block"
            >
              <span className="mb-2 block font-heading text-[0.68rem] font-bold uppercase tracking-[0.2em] text-muted">
                {label}
              </span>
              <input
                type={label === "Email" ? "email" : "text"}
                placeholder={label === "Email" ? "you@example.com" : "Your name"}
                className="w-full rounded-lg border border-line bg-ink px-4 py-3 text-sm text-copy outline-none transition placeholder:text-muted/60 focus:border-gold"
              />
            </motion.label>
          ))}
          <motion.label
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="block"
          >
            <span className="mb-2 block font-heading text-[0.68rem] font-bold uppercase tracking-[0.2em] text-muted">
              Message
            </span>
            <textarea
              rows={7}
              placeholder="Tell me about your project, role, or team."
              className="w-full resize-none rounded-lg border border-line bg-ink px-4 py-3 text-sm text-copy outline-none transition placeholder:text-muted/60 focus:border-gold"
            />
          </motion.label>
          <button
            type="button"
            className="mt-6 rounded-full bg-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-ink transition hover:bg-copy"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
