import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Compliance", href: "#compliance" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 py-4 ${scrolled
        ? "bg-white/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-gray-100 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#"
          className={`text-xl font-extrabold tracking-tight transition-colors duration-300 ${scrolled ? "text-slate-900" : "text-white"
            }`}
        >
          GuestPrime <span className="text-yellow-400">Stays</span>
        </a>

        {/* Links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${scrolled
                ? "text-slate-600 hover:text-slate-950"
                : "text-white/80 hover:text-white hover:underline decoration-yellow-400 decoration-2 underline-offset-4"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className={`rounded-2xl px-6 py-2.5 text-sm font-bold shadow-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${scrolled
            ? "bg-slate-900 text-white hover:bg-coral"
            : "bg-white text-slate-900 hover:bg-yellow-400"
            }`}
        >
          List Your Property
        </a>
      </div>
    </motion.nav>
  );
}
