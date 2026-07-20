import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Years in Fintech" },
  { value: "10+", label: "Leadership Roles" },
  { value: "$1B+", label: "Payments Enabled" },
  { value: "7", label: "Global Markets" },
];

export const Stats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden glass"
    >
      {stats.map((s) => (
        <div key={s.label} className="px-6 py-8 bg-card/40 hover:bg-card transition-colors">
          <p className="font-display text-4xl lg:text-5xl text-gradient-gold">{s.value}</p>
          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-2">
            {s.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
};
