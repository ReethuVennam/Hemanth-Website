import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin, Briefcase } from "lucide-react";
import portrait from "@/assets/hero-portrait.png";
import { HonorsCarousel } from "@/components/Site/HonorsCarousel";

const stats = [
  { value: "20", label: "Years in Fintech" },
  { value: "10+", label: "Leadership Roles" },
  { value: "$1B+", label: "Payments Enabled" },
  { value: "7", label: "Global Markets" },
];

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-20 bg-hero overflow-hidden grain">
      {/* Decorative orbs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.2em] text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Available for advisory engagements
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight"
              >
                <span className="block text-gradient">Dr. Hemanth</span>
                <span className="block italic font-light text-gradient-gold">Veeramalla</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-xl"
              >
                CEO of <span className="text-foreground">One78 SabbPe Technology Solutions</span>.
                Architecting the next chapter of digital payments across global markets through
                <span className="text-primary"> 20 years</span> of fintech leadership.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all"
              >
                Schedule Consultation
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all"
              >
                View Profile
              </a>
            </motion.div>

            {/* Meta strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-border/60 max-w-xl"
            >
              <div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  <MapPin className="w-3 h-3" /> Location
                </div>
                <p className="text-sm">Gurugram, IN</p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  <Briefcase className="w-3 h-3" /> Experience
                </div>
                <p className="text-sm">20 Years</p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  <Calendar className="w-3 h-3" /> Status
                </div>
                <p className="text-sm">Active CEO</p>
              </div>
            </motion.div>
          </div>

          {/* Right: portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <img
                src={portrait}
                alt="Dr. Hemanth Veeramalla, CEO of One78 SabbPe Technology Solutions"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <div className="text-xs">
                  <p className="text-foreground">Currently building</p>
                  <p className="text-muted-foreground">UPI Elite QuickPay · EDC · PSP Module</p>
                </div>
              </div>
            </div>
            {/* Floating chip */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-6 hidden md:block glass rounded-2xl p-4 shadow-elegant"
            >
              <p className="text-xs text-muted-foreground">Ph.D · MBA · LL.M</p>
              <p className="font-display text-lg">Harvard X · IIM</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Honors Carousel */}
        <HonorsCarousel />

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden glass"
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
      </div>
    </section>
  );
};
