import React from "react";
import { motion, useSpring, useTransform } from "framer-motion";

const cn = (...classes) => classes.filter(Boolean).join(" ");

function FeatureCard({
    feature,
    className,
    zIndexOffset = 0,
    ...props
}) {
    const { title, category, imageUrl } = feature;

    const springValue = useSpring(0, {
        bounce: 0,
    });

    const zIndex = useTransform(
        springValue,
        (value) => Math.floor(value * 10) + 10 + zIndexOffset
    );

    const scale = useTransform(
        springValue,
        [0, 1],
        [1, 1.1]
    );

    const content = (
        <>
            <img
                src={imageUrl}
                alt={title}
                className="absolute inset-0 z-0 h-full w-full object-cover"
            />

            <div className=" z-10 flex h-full w-full flex-col gap-2 bg-linear-to-t from-zinc-800/40 from-15% to-transparent p-3">
                <small className="inline w-fit rounded-xl bg-orange-950/50 px-2 py-1 text-xs font-medium leading-none text-white">
                    {category}
                </small>

                <div className="flex-1" />

                <h3 className="rounded-xl bg-blue-950/30 p-3 text-base font-bold text-white backdrop-blur-sm text-center">
                    {title}
                </h3>
            </div>
        </>
    );

    const containerClassName = cn(
        "relative flex h-96 w-80 flex-col overflow-hidden rounded-2xl shadow-none transition-shadow duration-300 ease-in-out hover:shadow-xl",
        className
    );

    return (
        <>
            <motion.div
                className={cn(containerClassName, "hidden sm:flex")}
                onMouseEnter={() => springValue.set(1)}
                onMouseLeave={() => springValue.set(0)}
                style={{
                    zIndex,
                    scale,
                }}
                {...props}
            >
                {content}
            </motion.div>

            <motion.div
                className={cn(containerClassName, "flex sm:hidden")}
                initial={{ y: 100 }}
                whileInView={{
                    y: 0,
                    transition: { duration: 0.5 },
                }}
            >
                {content}
            </motion.div>
        </>
    );
}

export default function ProductFeatures() {
    const cardWidth = 48 * 4;
    const angle = 6;
    const yOffset = 20;

    return (
        <section className="flex w-full flex-col items-center gap-4 bg-orange-50 pt-28 pb-10">
            <motion.header
                className="flex max-w-md flex-col items-center gap-2 text-center"
                initial={{
                    y: 100,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                    },
                }}
            >
                <h1 className="text-3xl font-black text-orange-600">
                    Your Property, Earning More. Completely Hands-Free.
                </h1>

                <div className="text-lg text-neutral-500">
                    We manage your short-term rental from listing to checkout, so you collect the income without the work
                </div>
            </motion.header>

            <motion.div
                initial={{
                    y: 100,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                    },
                }}
            >
                <button className="inline-block h-11 cursor-pointer rounded-full bg-orange-600 px-4 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-2xl transition-all hover:brightness-110">
                    Get My Free Earning Estimation  →
                </button>
            </motion.div>

            <div className="relative flex w-full flex-wrap justify-center gap-8 px-4 py-12 sm:gap-0">
                <FeatureCard
                    feature={{
                        category: "Luxury Villas",
                        imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        title: "Premium Vacation Homes"
                    }}
                    initial={{
                        x: cardWidth,
                        y: yOffset,
                        opacity: 0,
                        rotate: 0,
                        scale: 0.9,
                    }}
                    animate={{
                        x: yOffset,
                        y: 10,
                        opacity: 1,
                        scale: 0.95,
                        rotate: -angle,
                        transition: {
                            type: "spring",
                            delay: 0.8,
                        },
                    }}
                />

                <FeatureCard
                    feature={{
                        category: "Family Homes",
                        title: "Perfect for Group Travel",
                        imageUrl:
                            // "https://assets.lummi.ai/assets/QmaUXibkkKYu6Y3TzwE71ytVrPqecXiG4URAPZuqqzxz6R?auto=format&w=400",
                            "https://plus.unsplash.com/premium_photo-1747326386378-5635788ea82c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    }}
                    initial={{
                        y: yOffset,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            type: "spring",
                            delay: 0.4,
                        },
                    }}
                    zIndexOffset={1}
                />

                <FeatureCard
                    feature={{
                        category: "Beach Houses",
                        title: "Oceanfront Getaways",
                        imageUrl:
                            "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    }}
                    initial={{
                        x: -cardWidth,
                        y: yOffset,
                        opacity: 0,
                        rotate: 0,
                        scale: 0.9,
                    }}
                    animate={{
                        x: -yOffset,
                        y: 10,
                        opacity: 1,
                        rotate: angle,
                        scale: 0.95,
                        transition: {
                            type: "spring",
                            delay: 0.6,
                        },
                    }}
                />
            </div>
        </section>
    );
}