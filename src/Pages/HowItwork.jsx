import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "We list your property",
    description:
      "Professional photos, a search optimized title, and a description written to convert lookers into bookers.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
  },
  {
    number: "02",
    title: "We manage every booking",
    description:
      "Guest screening, 24/7 messaging, and dynamic pricing that adjusts daily to demand all handled for you.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
  },
  {
    number: "03",
    title: "You collect the revenue",
    description:
      "Cleaning is coordinated automatically after checkout, and you get a clear monthly report of what you earned.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-paper py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-2xl"
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-coral">
            How it works
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
            Three steps. Zero hassle.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            From first photo to first guest, here's exactly what we take off
            your plate.
          </p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <span className="text-sm font-bold text-ink-faint">
                  {step.number}
                </span>
                <h3 className="mt-3 text-3xl font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl shadow-sm">
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-80 w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
