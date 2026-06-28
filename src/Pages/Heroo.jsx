import React from "react";
import { motion } from "framer-motion";

const cn = (...classes) => classes.filter(Boolean).join(" ");

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
    borderRadius = 16,
}) {
    return (
        <motion.div
            className={cn("absolute", className)}
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
        >
            <motion.div
                className="relative"
                style={{
                    width,
                    height,
                }}
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <div
                    className={cn(
                        "absolute inset-0",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[1px]",
                        "ring - 1 ring - white / 10",
                        "shadow-[0_0_50px_rgba(99,102,241,0.15)]",
                        "after:absolute after:inset-0",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_70%)]",
                        "after:rounded-[inherit]"
                    )}
                    style={{ borderRadius }}
                />
            </motion.div>
        </motion.div>
    );
}

export default function ShapeHero({
    title1 = "Your property,",
    title2 = " earning more. Hands-free.",
}) {
    const fadeUpVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    borderRadius={24}
                    className="top-[-10%] left-[-15%]"
                    delay={0.3}
                    gradient="from-indigo-500/[0.25] dark:from-indigo-500/[0.35]"
                    height={500}
                    rotate={-8}
                    width={300}
                />

                <ElegantShape
                    borderRadius={20}
                    className="right-[-20%] bottom-[-5%]"
                    delay={0.5}
                    gradient="from-rose-500/[0.25] dark:from-rose-500/[0.35]"
                    height={200}
                    rotate={15}
                    width={600}
                />

                <ElegantShape
                    borderRadius={32}
                    className="top-[40%] left-[-5%]"
                    delay={0.4}
                    gradient="from-violet-500/[0.25] dark:from-violet-500/[0.35]"
                    height={300}
                    rotate={24}
                    width={300}
                />

                <ElegantShape
                    borderRadius={12}
                    className="top-[5%] right-[10%]"
                    delay={0.6}
                    gradient="from-amber-500/[0.25] dark:from-amber-500/[0.35]"
                    height={100}
                    rotate={-20}
                    width={250}
                />

                <ElegantShape
                    borderRadius={16}
                    className="top-[45%] right-[-10%]"
                    delay={0.7}
                    gradient="from-emerald-500/[0.25] dark:from-emerald-500/[0.35]"
                    height={150}
                    rotate={35}
                    width={400}
                />

                <ElegantShape
                    borderRadius={28}
                    className="bottom-[10%] left-[20%]"
                    delay={0.2}
                    gradient="from-blue-500/[0.25] dark:from-blue-500/[0.35]"
                    height={200}
                    rotate={-25}
                    width={200}
                />

                <ElegantShape
                    borderRadius={10}
                    className="top-[15%] left-[40%]"
                    delay={0.8}
                    gradient="from-purple-500/[0.25] dark:from-purple-500/[0.35]"
                    height={80}
                    rotate={45}
                    width={150}
                />

                <ElegantShape
                    borderRadius={18}
                    className="top-[60%] left-[25%]"
                    delay={0.9}
                    gradient="from-teal-500/[0.25] dark:from-teal-500/[0.35]"
                    height={120}
                    rotate={-12}
                    width={450}
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        variants={fadeUpVariants}
                    >
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:mb-8 md:text-8xl">
                            <span
                                className="bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent"
                            >
                                {title1}
                            </span>

                            <br />

                            <span
                                className={cn(
                                    "bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent dark:from-indigo-300 dark:via-white/90 dark:to-rose-300",
                                    "font-pacifico"
                                )}
                                style={{ fontFamily: "'Pacifico', cursive" }}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        custom={2}
                        variants={fadeUpVariants}
                    >
                        <p className="mx-auto mb-8 max-w-xl px-4 text-base font-light leading-relaxed tracking-wide text-gray-400 sm:text-lg md:text-xl dark:text-white/40">
                            UI Components built with Tailwind CSS.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
        </div>
    );
}