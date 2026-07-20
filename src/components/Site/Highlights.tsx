import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import doctorate from "@/assets/gallery/doctorate.png";
import award1 from "@/assets/gallery/award1.jpeg";
import award2 from "@/assets/gallery/award2.jpeg";
import iim from "@/assets/gallery/iim.jpeg";
import handover from "@/assets/gallery/handover.jpeg";
import team from "@/assets/gallery/team.jpeg";
import finalimage from "@/assets/gallery/finalimage.png";

const slides = [
  { src: doctorate, caption: "Honorary Doctorate — FinTech, AI & Blockchain" },
  { src: award1, caption: "WCEPC Recognition Ceremony" },
  { src: award2, caption: "Certificate of Excellence" },
  { src: iim, caption: "IIM Lucknow — Startup Mentorship" },
  { src: handover, caption: "SabbPe Merchant Rollout" },
  { src: team, caption: "Leadership & Team" },
  { src: finalimage, caption: "Founder & Executive Director — SabbPe, Karatly, UAIP.AI", hideCaption: true },
];

export const Highlights = () => {
  const [index, setIndex] = useState(0);
  const n = slides.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % n), 3000);
    return () => clearInterval(id);
  }, [n]);

  const prev = (index - 1 + n) % n;
  const next = (index + 1) % n;

  return (
    <section id="highlights" className="py-16 relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Carousel */}

        <div className="relative h-[380px] md:h-[460px] flex items-center justify-center">
          <motion.div
            key={`l-${prev}`}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 0.5, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block absolute left-0 md:left-4 lg:left-10 top-1/2 -translate-y-1/2 w-[28%] aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <img src={slides[prev].src} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-background/30" />
          </motion.div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[92%] md:w-[50%] aspect-[16/10] rounded-3xl overflow-hidden z-10"
            >
              <img
                src={slides[index].src}
                alt={slides[index].caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
              {!slides[index].hideCaption && (
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-primary mb-2">Milestone</p>
                  <h3 className="font-display text-xl md:text-2xl leading-tight">
                    {slides[index].caption}
                  </h3>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <motion.div
            key={`r-${next}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 0.5, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block absolute right-0 md:right-4 lg:right-10 top-1/2 -translate-y-1/2 w-[28%] aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <img src={slides[next].src} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-background/30" />
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-10 bg-primary" : "w-4 bg-border hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
