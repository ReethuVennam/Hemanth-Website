import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const items = [
  { title: "Ph.D. — AI & Machine Learning", org: "Golden Gate University, California, USA", status: "In Progress" },
  { title: "Harvard X", org: "Executive Program", status: "Completed" },
  { title: "Ph.D. — Management", org: "Sri Satya Sai University of Technology & Medical Sciences", status: "Completed" },
  { title: "Executive Program — Leadership & Change", org: "IIM Raipur", status: "Completed" },
  { title: "CPISI", org: "SISA", status: "Certified" },
  { title: "NISM — Mutual Fund", org: "Licence valid 2025–2027", status: "Certified" },
  { title: "LL.M. — Corporate Law", org: "Mansarovar Global University", status: "Completed" },
];

export const Education = () => {
  return (
    <section id="education" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Education</p>
          <h2 className="font-display text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            Academic excellence,{" "}
            <span className="italic text-gradient-gold">continually pursued.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative rounded-2xl p-6 glass hover:border-primary/40 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center">
                  {it.status === "In Progress" ? (
                    <GraduationCap className="w-5 h-5 text-primary" />
                  ) : (
                    <Award className="w-5 h-5 text-primary" />
                  )}
                </div>
                <span
                  className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    it.status === "In Progress"
                      ? "bg-accent/15 text-accent"
                      : "bg-primary/15 text-primary"
                  }`}
                >
                  {it.status}
                </span>
              </div>
              <h3 className="font-display text-lg leading-snug mb-1">{it.title}</h3>
              <p className="text-sm text-muted-foreground">{it.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
