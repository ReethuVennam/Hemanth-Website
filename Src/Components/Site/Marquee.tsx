const logos = [
  "Paytm", "Reliance Jio", "HDFC Bank", "ICICI Bank", "Fiserv", "Innoviti",
  "NeoGrowth", "Cito Nidhi", "Grats Tech", "Startup India", "IIM Raipur", "Harvard X",
];

export const Marquee = () => {
  return (
    <section className="py-8 border-y border-border/60 bg-card/20">
      <div className="mx-auto max-w-6xl px-6 mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Leadership across industry-defining institutions
        </p>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="font-display text-2xl md:text-3xl whitespace-nowrap text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              {name}
              <span className="mx-12 text-primary/40">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
