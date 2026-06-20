import { motion } from "framer-motion";
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
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    description:
      "Revenue-maximizing rates that adjust daily based on demand, local events, and market data.",
  },
  {
    icon: MessageCircle,
    title: "24/7 guest communication",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    description:
      "Instant, professional responses at any hour. Guests feel taken care of.",
  },
  {
    icon: Sparkles,
    title: "Listing optimization",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200",
    description:
      "Search-ranking titles, persuasive descriptions, and high-conversion photo ordering.",
  },
  {
    icon: ClipboardCheck,
    title: "Cleaning coordination",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200",
    description:
      "Vetted cleaners scheduled automatically after every checkout.",
  },
  {
    icon: Shield,
    title: "Guest screening",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200",
    description:
      "Every booking carefully reviewed before confirmation.",
  },
  {
    icon: BarChart3,
    title: "Monthly reporting",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    description:
      "Clear revenue breakdowns, booking performance, and insights.",
  },
];

export default function Services() {
  return (
    <section className="relative bg-[#071629] py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-175 w-175 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-yellow-400">
            WHAT WE HANDLE
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-serif text-white">
            Full-Service
            <br />
            Co-Hosting
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Every part of the short-term rental experience — from
            first inquiry to five-star review — is fully managed.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-yellow-500/20 blur-[90px]" />
                </div>

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10">
                    <Icon className="text-yellow-400" />
                  </div>

                  <h3 className="text-2xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-white/60">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-yellow-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span>Learn More</span>
                    <span>→</span>
                  </div>
                </div>

                {/* Bottom Line Animation */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}