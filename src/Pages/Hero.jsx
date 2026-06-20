import { motion } from "framer-motion";

import Background from "/images/image9.jpg";
export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12 }}
        className="absolute inset-0"
      >
        <img
          src={Background}
          alt="Luxury Stay"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="relative z-20 flex h-full items-center justify-center px-6">
        <div className="max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              text-white
              font-bold
              leading-tight
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Your property deserves
            <br />
            maximum returns.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-white/90
              text-sm
              sm:text-base
              md:text-lg
            "
          >
            We handle every detail listing, pricing, guests, and cleaning so
            your property earns more while you do nothing.
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
            onClick={() => document.getElementById("revenue-estimator")?.scrollIntoView({ behavior: "smooth" })}
            className="
              mt-10
              inline-flex
              items-center
              m-7
              rounded-2xl
              bg-yellow-400
              px-8
              py-4
              font-semibold
              text-black
              shadow-xl
              cursor-pointer
            "
          >
            Get My Free Revenue Estimation
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
            }}
            onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            className="
              mt-10
              inline-flex
              items-center
              m-7
              rounded-2xl
              bg-white/10
              border
              border-white/20
              px-8
              py-4
              font-semibold
              text-white
              shadow-xl
              backdrop-blur-md
              cursor-pointer
            "
          >
            See How It Works
          </motion.button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-linear-to-t from-black/60 to-transparent" />
    </section>
  );
}
