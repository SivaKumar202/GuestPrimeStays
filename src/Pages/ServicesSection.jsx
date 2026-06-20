import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  TrendingUp,
  MessageCircle,
  Sparkles,
  ClipboardCheck,
  Shield,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Dynamic pricing",
    description:
      "Rates adjust daily based on demand, local events, and market data — so you never leave money on the table.",
  },
  {
    icon: MessageCircle,
    title: "24/7 guest messaging",
    description:
      "Instant, professional responses at any hour. Guests feel taken care of, day or night.",
  },
  {
    icon: Sparkles,
    title: "Listing optimization",
    description:
      "Search-ranking titles, persuasive descriptions, and photo ordering built to convert.",
  },
  {
    icon: ClipboardCheck,
    title: "Cleaning coordination",
    description:
      "Vetted local cleaners scheduled automatically after every single checkout.",
  },
  {
    icon: Shield,
    title: "Guest screening",
    description:
      "Every booking is reviewed before confirmation, so your property stays protected.",
  },
  {
    icon: BarChart3,
    title: "Monthly reporting",
    description:
      "Clear, simple revenue breakdowns and booking performance, sent every month.",
  },
];

// Spotlight Card component with coordinate tracking for cursor-glowing effects
function SpotlightCard({ children, className = "", isHovered, onMouseEnter, onMouseLeave, onMouseMove, coords }) {
  return (
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      scale={1.02}
      transitionSpeed={800}
      className="h-full rounded-3xl"
    >
      <div
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`relative h-full overflow-hidden rounded-4xl border border-gray-150 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-emerald-500/20 ${className}`}
      >
        {/* Glow Spotlight Effect */}
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(16, 185, 129, 0.09), transparent 80%)`,
          }}
        />

        {/* Content Wrapper */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          {children}
        </div>
      </div>
    </Tilt>
  );
}

export default function ServicesSection() {
  // We keep tracking state for cards individually to avoid coordinate cross-talk
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const cardRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const cardVariants = {
    initial: { opacity: 0, y: 40 },
    animate: (idx) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: idx * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const iconVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: {
      rotate: 15,
      scale: 1.15,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  return (
    <section id="services" className="relative overflow-hidden bg-slate-50 py-28">
      {/* Decorative background glow circles */}
      <div className="absolute top-1/3 left-1/10 h-96 w-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-600">
            WHAT WE HANDLE
          </span>
          <h2 className="mt-4 text-4xl font-sans font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Full Service Cohosting
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            From styling and photo shoots to guest screenings and automatic checkouts, we handle every details of your short-term vacation rental.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={service.title}
                custom={index}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
                variants={cardVariants}
                className="h-full"
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <SpotlightCard
                  isHovered={isHovered}
                  coords={coords}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      {/* Icon with Spring Micro-Animation on hover */}
                      <motion.div
                        variants={iconVariants}
                        className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 transition-colors duration-300"
                      >
                        <Icon size={24} className="text-emerald-600" />
                      </motion.div>

                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                        {service.title}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-slate-500 md:text-base">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-emerald-600">
                      <span>Professional Support</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
