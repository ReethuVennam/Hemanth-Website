import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";
import { useEffect, useState } from "react";
import award1 from "@/assets/gallery/award1.jpeg";
import award2 from "@/assets/gallery/award2.jpeg";
import doctorate from "@/assets/gallery/doctorate.png";
import iim from "@/assets/gallery/iim.jpeg";
import handover from "@/assets/gallery/handover.jpeg";
import team from "@/assets/gallery/team.jpeg";

const items = [
  {
    src: doctorate,
    tag: "Honoris Causa · 2026",
    title: "Honorary Doctorate",
    desc: "Conferred by the World Culture & Environment Protection Commission for leadership in FinTech, AI, Blockchain & Digital Innovation.",
    span: "lg:col-span-4 lg:row-span-2",
    ratio: "aspect-[3/4]",
  },
  {
    src: award1,
    tag: "Award Ceremony",
    title: "Recognition on Stage",
    desc: "Receiving the honorary award at the WCEPC ceremony, approved by the Govt. of India.",
    span: "lg:col-span-4",
    ratio: "aspect-[4/3]",
  },
  {
    src: iim,
    tag: "IIM Lucknow",
    title: "Startup Mentorship",
    desc: "At the IIML Incubator — mentoring the next wave of Indian founders.",
    span: "lg:col-span-4",
    ratio: "aspect-[4/3]",
  },
  {
    src: award2,
    tag: "Global Honour",
    title: "Certificate of Excellence",
    desc: "Presented for contributions to digital innovation and payments leadership.",
    span: "lg:col-span-4",
    ratio: "aspect-[4/3]",
  },
  {
    src: handover,
    tag: "Product Launch",
    title: "SabbPe Rollout",
    desc: "Handover of the SabbPe merchant device — expanding the digital payments footprint.",
    span: "lg:col-span-4",
    ratio: "aspect-[4/3]",
  },
  {
    src: team,
    tag: "Leadership",
    title: "With the Team",
    desc: "Strategy session — building resilient teams that ship at scale.",
    span: "lg:col-span-8",
    ratio: "aspect-[16/10]",
  },
];

export const Highlights = () => {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const current = active !== null ? items[active] : null;

  return (
    <section id="highlights" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between flex-wrap gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Highlights</p>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              Honours, moments &{" "}
              <span className="italic text-gradient-gold">milestones.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Award className="w-4 h-4 text-primary" />
            <span>A glimpse into recent recognition & leadership</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 auto-rows-auto">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-3xl glass cursor-zoom-in ${it.span}`}
            >
              <div className={`relative overflow-hidden ${it.ratio}`}>
                <img
                  src={it.src}
                  alt={it.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-primary/20 text-primary backdrop-blur-md border border-primary/30">
                    {it.tag}
                  </span>
                </div>
              </div>
              <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl lg:text-2xl leading-tight mb-1.5">
                  {it.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {it.desc}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-5 right-5 w-11 h-11 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl grid lg:grid-cols-[1.4fr_1fr] gap-0 rounded-3xl overflow-hidden glass border border-primary/20 shadow-2xl max-h-[90vh]"
            >
              <div className="relative bg-background/40 flex items-center justify-center min-h-[40vh] lg:min-h-[70vh]">
                <img
                  src={current.src}
                  alt={current.title}
                  className="w-full h-full object-contain max-h-[90vh]"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center gap-5 overflow-y-auto">
                <span className="self-start text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                  {current.tag}
                </span>
                <h3 className="font-display text-3xl lg:text-4xl leading-tight tracking-tight">
                  {current.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {current.desc}
                </p>
                <div className="pt-4 border-t border-border/40 text-xs text-muted-foreground/70 uppercase tracking-[0.2em]">
                  {active !== null ? `${active + 1} / ${items.length}` : ""}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

