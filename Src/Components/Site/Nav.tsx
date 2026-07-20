import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/Logo.jpeg";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className={`mx-auto max-w-6xl px-6 transition-all duration-500 ${scrolled ? "" : ""}`}>
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-elegant" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <img src={logo} alt="Logo" className="w-9 h-9 rounded-full object-cover" />
            <span className="font-display text-sm tracking-wide hidden sm:block">
              Dr. Hemanth Veeramalla
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="text-xs sm:text-sm px-4 py-2 rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Schedule
          </a>
        </nav>
      </div>
    </motion.header>
  );
};
