import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Search & Discover",
    description:
      "Browse handpicked vacation rentals, luxury cabins and unique stays across Georgia.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
  },
  {
    number: "02",
    title: "Book Your Stay",
    description:
      "Choose your dates, secure your booking and receive instant confirmation.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
  },
  {
    number: "03",
    title: "Enjoy The Experience",
    description:
      "Arrive, relax and enjoy unforgettable moments with local hospitality.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef();

  useEffect(() => {
    const cards = gsap.utils.toArray(".step-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#08111F] py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 h-150 w-150 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white md:text-7xl">
            Your Perfect Stay
            <br />
            In Three Simple Steps
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Finding the perfect vacation rental has never been easier.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-32">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step-card grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Content */}
              <div>
                <span className="text-8xl font-bold text-white/10">
                  {step.number}
                </span>

                <h3 className="mt-4 text-4xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-white/70">
                  {step.description}
                </p>

                <div className="mt-8">
                  <button className="rounded-2xl bg-yellow-400 px-6 py-4 font-semibold text-black transition-all hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Image */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                className="group relative"
              >
                <div className="absolute -inset-4 rounded-[40px] bg-yellow-400/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <img
                  src={step.image}
                  alt={step.title}
                  className="relative h-125 w-full rounded-[40px] object-cover shadow-2xl"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}