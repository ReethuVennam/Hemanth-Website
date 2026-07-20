import { motion } from "framer-motion";
import { Calendar, Clock, Mail, MapPin, ArrowUpRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Let's Connect</p>
          <h2 className="font-display text-5xl lg:text-7xl leading-[1] tracking-tight">
            Empowering the future of{" "}
            <span className="italic text-gradient-gold">digital payments.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Ready to discuss fintech innovation, strategic partnerships, or executive
            opportunities — let's start a conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Consultation card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 relative rounded-3xl p-8 lg:p-10 bg-card-gradient border-gradient overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Executive Consultation</p>
              <h3 className="font-display text-3xl lg:text-4xl mt-3 mb-6">
                One-on-one with Dr. Veeramalla
              </h3>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="rounded-2xl bg-background/40 p-4 border border-border/60">
                  <Clock className="w-4 h-4 text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="text-sm font-medium">60 minutes</p>
                </div>
                <div className="rounded-2xl bg-background/40 p-4 border border-border/60">
                  <Calendar className="w-4 h-4 text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Format</p>
                  <p className="text-sm font-medium">Video call</p>
                </div>
                <div className="rounded-2xl bg-background/40 p-4 border border-border/60">
                  <p className="text-xs text-muted-foreground mt-1">Fee</p>
                  <p className="text-sm font-medium">₹22,452 / $250</p>
                </div>
              </div>

              <a
                href="mailto:mail@hemanthveeramalla.com"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition-transform"
              >
                Book a Session
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href="mailto:mail@hemanthveeramalla.com"
              className="block glass rounded-2xl p-6 hover:border-primary/40 transition-colors group"
            >
              <Mail className="w-5 h-5 text-primary mb-3" />
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Email</p>
              <p className="font-medium group-hover:text-primary transition-colors">
                mail@hemanthveeramalla.com
              </p>
            </a>
            <div className="glass rounded-2xl p-6">
              <MapPin className="w-5 h-5 text-primary mb-3" />
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Location</p>
              <p className="font-medium">Gurugram, Haryana, India</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Pillars</p>
              <div className="flex flex-wrap gap-2">
                {["Innovation", "Security", "Inclusion"].map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Dr. Hemanth Veeramalla. All rights reserved.</p>
          <p>Crafted with intent · Fintech leadership reimagined</p>
        </div>
      </div>
    </section>
  );
};
