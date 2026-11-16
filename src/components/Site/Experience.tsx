import { motion } from "framer-motion";
import { Ventures } from "@/components/Site/Ventures";

const roles = [
  { role: "Founder & Executive CEO", company: "One78 SabbPe Technology Solutions", time: "Jul 2024 – Present", current: true, desc: "Building a strong digital payments ecosystem across offline and online platforms — PSP Module, UPI Elite QuickPay, Integrated & Non-Integrated EDC, and card programs." },
  { role: "Startup Mentor — MAARG", company: "Startup India", time: "Aug 2023 – Present", current: true, desc: "Mentoring early-stage startups on business models, technology, GTM and compliance — improving readiness for funding and scale." },
  { role: "Independent Consultant", company: "Self-Employed", time: "Jan 2024 – Present", current: true, desc: "Strategic advisory for startups and MSMEs — combining deep industry knowledge, market research, and trend analysis to shape GTM and growth roadmaps." },
  { role: "Executive Director", company: "Cito Nidhi Limited", time: "Dec 2023 – Jul 2024", desc: "Built business operations and regulatory coordination across lending and insurance domains." },
  { role: "Executive Director", company: "Grats Technologies", time: "Jan 2023 – Nov 2023" },
  { role: "General Manager", company: "Paytm", time: "Nov 2020 – Jan 2023" },
  { role: "Regional Head", company: "Innoviti Payment Solutions", time: "Feb 2018 – Nov 2020" },
  { role: "Regional Head — East", company: "NeoGrowth Credit", time: "Sep 2017 – Feb 2018" },
  { role: "Sales Head — Jio Money", company: "Reliance Jio", time: "Mar 2016 – Aug 2017" },
  { role: "Regional Head — East", company: "Fiserv India", time: "May 2011 – Mar 2016" },
  { role: "Sales Manager — Retail Assets", company: "HDFC Bank", time: "Oct 2010 – May 2011" },
  { role: "Sales Manager — Retail Assets", company: "ICICI Bank", time: "Jul 2007 – Sep 2010" },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-card/20 border-y border-border/60">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Experience</p>
          <h2 className="font-display text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            Twenty Years{" "}
            <span className="italic text-gradient-gold">A trajectory of trust.</span>
          </h2>
        </motion.div>

        <Ventures />

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[15px] md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

          <div className="space-y-10">
            {roles.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.05 }}
                className={`relative grid md:grid-cols-2 gap-6 items-start ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[8px] md:left-1/2 -translate-x-1/2 top-2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10">
                  {r.current && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
                  )}
                </div>

                <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <p className="text-xs uppercase tracking-wider text-primary mb-2">{r.time}</p>
                  <h3 className="font-display text-xl">{r.role}</h3>
                  <p className="text-muted-foreground text-sm">{r.company}</p>
                </div>
                <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:text-right md:pr-12"}`}>
                  {r.desc && (
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
