import { motion } from "framer-motion";
import { CreditCard, Banknote, Building2, Compass } from "lucide-react";

const items = [
  {
    icon: CreditCard,
    title: "Digital Payments",
    points: [
      "UPI · POS (Integrated & Non-Integrated)",
      "Merchant Acquiring",
      "Payment Gateway (Domestic & International)",
      "Cross-Border Payments",
      "Payout & Disbursement Solutions",
      "AI-Enabled Sound Box Solutions",
    ],
  },
  {
    icon: Banknote,
    title: "Lending Solutions",
    points: [
      "Secured & Unsecured Lending",
      "Buy Now Pay Later (BNPL)",
      "Working Capital Solutions",
      "Credit Assessment",
      "Risk Management",
      "Microfinance & Cooperative Bank Lending",
    ],
  },
  {
    icon: Building2,
    title: "Banking & Enterprise",
    points: [
      "Retail Assets & Liabilities",
      "ERP & Financial System Integration",
      "SaaS & Enterprise Applications",
      "Core Banking & Financial Platforms",
      "Compliance & Governance Alignment",
    ],
  },
  {
    icon: Compass,
    title: "Strategy & Expansion",
    points: [
      "Go-To-Market (GTM) Strategy",
      "Partnerships & Ecosystem Building",
      "Market Entry & Scale",
      "Product Strategy & Monetization",
      "Regulatory Readiness",
    ],
  },
];

export const Expertise = () => {
  return (
    <section id="expertise" className="py-32 relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Expertise</p>
          <h2 className="font-display text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            Comprehensive fintech &{" "}
            <span className="italic text-gradient-gold">digital transformation</span>{" "}
            capabilities.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative rounded-3xl p-8 bg-card-gradient border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-secondary grid place-items-center mb-6 group-hover:bg-gradient-gold group-hover:text-primary-foreground transition-all">
                  <it.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl mb-5">{it.title}</h3>
                <ul className="space-y-2.5">
                  {it.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
