import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Free Earnings Call",
        description:
            "We run a data-backed revenue projection for your property using real comps in your market. No obligation — just clarity on what your home can earn.",
        image:
            "https://images.pexels.com/photos/36765988/pexels-photo-36765988.jpeg",
    },
    {
        number: "02",
        title: "We Set Everything Up",
        description:
            "Professional listing, great photos, and pricing configured from day one. We handle the full onboarding so your property launches ready to perform.",
        image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    },
    {
        number: "03",
        title: "You collect the revenue",
        description:
            "Guests, cleaning, check-ins, and issues — handled around the clock. Your job is to review your monthly report and check your bank account.",
        image:
            "https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="bg-paper py-25">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 max-w-2xl"
                >
                    <span className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                        How it works
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-serif text-[#112c4e] leading-tight">
                        Three Steps.{" "}
                        <span className="text-orange-700 italic font-normal">Zero Hassle.</span>
                    </h2>
                    <p className="mt-4 text-lg text-neutral-500">
                        From your first conversation to your first booking. Here's exactly what happens.
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
                            className={`grid items-center gap-12 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                                }`}
                        >
                            <div>
                                <span className="text-sm font-bold text-ink-faint">
                                    {step.number}
                                </span>
                                <h3 className="mt-3 text-3xl font-bold text-orange-600">
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