import { motion } from "framer-motion";
import karatly from "@/assets/ventures/karatly.png";
import uaip from "@/assets/ventures/uaip.png";
import sabbpe from "@/assets/ventures/sabbpe.jpeg";
import gift360 from "@/assets/ventures/gift360.jpeg";

const ventures = [
  { name: "SabbPe", src: sabbpe, tag: "Digital Payments" },
  { name: "Karatly", src: karatly, tag: "Digital Gold, Silver & Diamonds" },
  { name: "UAIP.AI", src: uaip, tag: "Universal API Intelligence" },
  { name: "Gift360", src: gift360, tag: "Smart Gifting Platform" },
];

export const Ventures = () => {
  const loop = [...ventures, ...ventures];
  return (
    <section className="py-12 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-14 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Founder & Builder</p>
          <h2 className="font-display text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            Ventures I{" "}
            <span className="italic text-gradient-gold">build & lead.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            From payments infrastructure to AI-native platforms — a portfolio of ventures
            shaping the next chapter of fintech, commerce, and intelligent software.
          </p>
        </motion.div>
      </div>

      {/* Horizontal marquee */}
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex gap-6 w-max animate-[hscroll_24s_linear_infinite]">
          {loop.map((v, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 flex items-center gap-6 border-gradient shadow-card w-[480px] shrink-0"
            >
              <div className="w-36 h-36 shrink-0 rounded-xl bg-background/60 flex items-center justify-center overflow-hidden">
                <img src={v.src} alt={v.name} className="w-full h-full object-contain p-2" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-xl truncate">{v.name}</h3>
                <p className="text-sm text-muted-foreground truncate">{v.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes hscroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};