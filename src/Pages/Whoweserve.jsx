import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Sparkles, Globe } from "lucide-react";

const tabData = [
    {
        id: "property-owner",
        label: "PROPERTY OWNER",
        overline: "FOR PROPERTY OWNERS",
        titlePart1: "Your property works.",
        titlePart2: "You don't have to.",
        paragraphs: [
            "You have a vacation property in Georgia. It should be making money but managing guests, coordinating cleaners, setting prices, and answering messages at midnight isn't what you had in mind.",
            "We take that off your plate entirely. You hand us the keys. We handle the rest from the first listing photo to the monthly revenue report."
        ],
        buttonText: "GET MY FREE EARNINGS ESTIMATE",
        buttonLink: "#contact", // Or #revenue-estimator if active, fallback to contact
        cardBg: "bg-[#112c4e]", // Navy Blue
        icon: Home,
        quote: "I went from managing 47 messages a week to checking one monthly report.",
        author: "PROPERTY OWNER - LAKE LANIER, GA",
        subtext: "",
    },
    {
        id: "guest",
        label: "GUEST",
        overline: "FOR GUESTS",
        titlePart1: "A stay that",
        titlePart2: "feels like home.",
        paragraphs: [
            "When you stay at a Guest Prime Stays property, you're not taking a chance on a random listing. Every property we manage is cleaned, inspected, and ready before you arrive.",
            "We're available around the clock. Questions before check-in, directions, something not working we respond fast so your trip stays relaxing from start to finish."
        ],
        buttonText: "CONTACT OUR GUEST TEAM",
        buttonLink: "#contact",
        cardBg: "bg-[#133c24]", // Forest Green
        icon: Sparkles,
        quote: "Check-in was seamless, the place was spotless, and every question was answered in minutes.",
        author: "GUEST REVIEW - BLUE RIDGE, GA",
        subtext: "",
    },
    {
        id: "general",
        label: "GENERAL",
        overline: "ABOUT US",
        titlePart1: "A new kind of",
        titlePart2: "co-hosting company.",
        paragraphs: [
            "Guest Prime Stays is a professional short-term rental management company based in Georgia. We work with property owners to manage their vacation homes, handling every detail so they earn more with none of the day-to-day effort.",
            "We're selective, relationship-driven, and focused on doing this well in Georgia before growing anywhere else."
        ],
        buttonText: "GET IN TOUCH",
        buttonLink: "#contact",
        cardBg: "bg-[#34251d]", // Espresso Brown
        icon: Globe,
        quote: "Professional, transparent, and genuinely invested in making every property perform.",
        author: "GUEST PRIME STAYS - GEORGIA",
        subtext: "",
    }
];

export default function Whoweserve() {
    const [activeTab, setActiveTab] = useState("property-owner");
    const activeData = tabData.find((tab) => tab.id === activeTab);

    return (
        <section id="who-we-serve" className="bg-[#FAF9F6] py-10 md:py-20 border-b border-slate-100">
            <div className="mx-auto max-w-7xl px-6 md:px-12">

                {/* Intro Header */}
                <div className="max-w-2xl">
                    <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
                        WHO WE SERVE
                    </span>
                    <h2 className="mt-2 text-4xl md:text-5xl font-serif text-[#112c4e] leading-tight">
                        One company.{" "}
                        <span className="text-orange-700 italic font-normal">Three stories.</span>
                    </h2>
                    <p className="mt-2 text-neutral-500 text-lg leading-relaxed max-w-lg">
                        Depending on who you are, Guest Prime Stays means something
                        different. See your story below.
                    </p>
                </div>

                {/* Tab Buttons Selector */}
                <div className="mt-5 flex flex-wrap border border-slate-200/80 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] w-fit rounded-md overflow-hidden">
                    {tabData.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-4 text-xs font-extrabold uppercase tracking-widest transition-all duration-300 cursor-pointer ${isActive
                                    ? "bg-orange-600 text-white shadow-inner"
                                    : "bg-white text-slate-500 hover:text-slate-800 hover:bg-slate-50/50 border-r last:border-r-0 border-slate-100"
                                    }`}
                                style={{
                                    boxShadow: isActive ? "inset 0 -2px 0 0 #b57c1e" : "none"
                                }}
                            >
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Dynamic Content Details Container */}
                <div className="mt-2 min-h-120">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
                        >

                            {/* Text Side */}
                            <div className="lg:col-span-7 flex flex-col justify-center">
                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                                    {activeData.overline}
                                </span>

                                <h3 className="mt-2 text-3xl md:text-4xl font-serif text-[#112c4e] leading-tight">
                                    {activeData.titlePart1}<br />
                                    <span className="text-orange-700 italic font-normal">{activeData.titlePart2}</span>
                                </h3>

                                <div className="mt-3 space-y-4">
                                    {activeData.paragraphs.map((p, idx) => (
                                        <p key={idx} className="text-neutral-500 text-lg leading-relaxed font-light">
                                            {p}
                                        </p>
                                    ))}
                                </div>

                                <div className="mt-8">
                                    <a
                                        href={activeData.buttonLink}
                                        className="inline-block bg-orange-600 text-white font-bold text-xs uppercase tracking-widest px-6 py-4 rounded shadow-md shadow-[#b57c1e]/15 hover:bg-orange-700 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                                    >
                                        {activeData.buttonText}
                                    </a>
                                </div>
                            </div>

                            {/* Card Side */}
                            <div className="lg:col-span-5">
                                <motion.div
                                    initial={{ scale: 0.98, opacity: 0.9 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className={`relative flex flex-col justify-between p-10 md:p-14 text-white min-h-95 md:min-h-105 rounded-xl shadow-xl overflow-hidden ${activeData.cardBg}`}
                                >

                                    {/* Decorative Icon */}
                                    <div className="absolute top-8 right-8 text-white/10 pointer-events-none">
                                        <activeData.icon className="w-16 h-16 md:w-20 md:h-20" strokeWidth={1} />
                                    </div>

                                    {/* Bottom Text Content */}
                                    <div className="mt-auto flex flex-col">
                                        <div className="w-12 h-0.5 bg-[#b57c1e] mb-6"></div>

                                        <blockquote className="font-quote text-xl md:text-2xl font-light italic leading-relaxed text-slate-100 mb-6">
                                            "{activeData.quote}"
                                        </blockquote>

                                        <cite className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#b57c1e] not-italic">
                                            {activeData.author}
                                        </cite>

                                        {activeData.subtext && (
                                            <span className="text-[9px] italic text-white/40 mt-1">
                                                {activeData.subtext}
                                            </span>
                                        )}
                                    </div>

                                </motion.div>
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
