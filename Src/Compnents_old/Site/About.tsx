import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-12 gap-12"
        >
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">— About</p>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              Transforming digital payments through{" "}
              <span className="italic text-gradient-gold">strategic leadership.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg text-foreground/90">
              Over 18 years across Digital Payments, Banking, SME Lending, Merchant Acquiring, and
              Government-led technology initiatives — building and scaling payment ecosystems
              across diverse markets.
            </p>
            <p>
              Holds a Ph.D. and MBA from AIMS, is Certified CPISI by SISA, and is currently
              pursuing a second Ph.D. from Golden Gate University, California — complemented by
              executive leadership programs from IIM Raipur and HarvardX.
            </p>
            <p>
              As CEO of One78 SabbPe Technology Solutions, leads strategic initiatives in payment
              technology and digital transformation — building secure, scalable, and future-ready
              financial solutions across international markets.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-8">
              {[
                { k: "Experience", v: "18+ Years" },
                { k: "Credentials", v: "Ph.D · MBA · LL.M" },
                { k: "Expertise", v: "Digital Payments" },
              ].map((it) => (
                <div key={it.k} className="glass rounded-2xl p-5">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{it.k}</p>
                  <p className="font-display text-lg mt-2">{it.v}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
