import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUpRaw from "react-countup";

const CountUp = typeof CountUpRaw === "function"
    ? CountUpRaw
    : (CountUpRaw.default || CountUpRaw);

import {
    FaHome,
    FaMapMarkerAlt,
    FaLock,
    FaHeadset,
    FaCheckCircle,
} from "react-icons/fa";

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, {
        once: true,
    });


    const stats = [
        { number: 1500, suffix: "+", title: "Properties" },
        { number: 60, suffix: "+", title: "Cities" },
        { number: 25000, suffix: "+", title: "Happy Guests" },
        { number: 4.9, suffix: "★", title: "Average Rating" },
    ];

    return (
        <section id="about" className="relative bg-slate-50 py-24 overflow-hidden">
            <div className="absolute w-96 h-96 bg-blue-100 rounded-full blur-[150px] top-0 left-0 opacity-50" />
            <div className="absolute w-96 h-96 bg-orange-100 rounded-full blur-[150px] bottom-0 right-0 opacity-50" />
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
                        About Us
                    </p>

                    <h2 className="text-5xl font-bold text-slate-900 mt-3">
                        Discover Luxury Stays Across America
                    </h2>

                    <p className="text-slate-500 mt-5 max-w-3xl mx-auto leading-8">
                        We connect travelers with exceptional vacation homes, premium
                        apartments, and unforgettable stays in the most beautiful
                        destinations throughout the USA.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* <Tilt glareEnable glareMaxOpacity={0.2}> */}
                    <motion.img
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
                        className="rounded-3xl shadow-2xl"
                    />
                    {/* </Tilt> */}

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-4xl font-bold text-slate-900 mb-6">
                            Your Trusted Travel Partner
                        </h3>

                        <p className="text-slate-600 leading-8 mb-8">
                            Whether you're planning a weekend getaway, business trip, or
                            family vacation, we provide thoughtfully selected accommodations
                            with exceptional comfort and personalized hospitality.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                "Verified Premium Properties",
                                "Flexible Booking Options",
                                "Exceptional Guest Experiences",
                                "24/7 Dedicated Support",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <FaCheckCircle className="text-orange-500" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-slate-900 text-white px-8 py-4 rounded-full hover:cursor-pointer"
                        >
                            Contact Us
                        </motion.button>
                    </motion.div>
                </div>

                {/* <div ref={ref} className="grid md:grid-cols-4 gap-8 mt-24">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.15,
                            }}
                            className="bg-white rounded-3xl p-10 text-center shadow-lg"
                        >
                            <h3 className="text-5xl font-bold text-orange-500">
                                {inView && (
                                    <CountUp
                                        end={stat.number}
                                        duration={3}
                                        decimals={stat.number === 4.9 ? 1 : 0}
                                    />
                                )}

                                {stat.suffix}
                            </h3>

                            <p className="mt-3 text-slate-600">{stat.title}</p>
                        </motion.div>
                    ))}
                </div> */}

                {/* <div className="grid lg:grid-cols-4 gap-8 mt-24">
                    {features.map((feature, index) => (
                        <Tilt key={index}>
                            <motion.div
                                whileHover={{
                                    y: -12,
                                }}
                                className="bg-white rounded-3xl p-10 shadow-xl group cursor-pointer"
                            >
                                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-2xl group-hover:rotate-12 transition">
                                    {feature.icon}
                                </div>

                                <h4 className="text-xl font-bold mt-6">{feature.title}</h4>

                                <p className="text-slate-500 mt-4 leading-7">{feature.text}</p>
                            </motion.div>
                        </Tilt>
                    ))}
                </div> */}
            </div>
        </section>
    );
}