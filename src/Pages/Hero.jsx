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

      {/* Navbar */}
      <nav className="absolute top-0 left-0 z-50 w-full px-4 md:px-8 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white text-xl md:text-2xl font-semibold"
          >
            {/* LivinEase® */} Guest Prime Stays
          </motion.h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-white">
            <li className="cursor-pointer hover:text-gray-300 transition">
              How It Works
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition">
              Services
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition">
              Compliance
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition">
              About
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition">
              Contact
            </li>
          </ul>

          {/* Button */}
          <button className="rounded-2xl bg-white px-5 py-3 text-sm md:text-base font-medium text-black shadow-lg transition-all hover:scale-105">
            List Your Property
          </button>
        </div>
      </nav>

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
            className="
              mt-10
              inline-flex
              items-center
              m-7
              rounded-2xl
              bg-white
              px-8
              py-4
              font-semibold
              text-black
              shadow-xl
            "
          >
            Get My free Revenue Estimation
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
            className="
              mt-10
              inline-flex
              items-center
              m-7
              rounded-2xl
              bg-white
              px-8
              py-4
              font-semibold
              text-black
              shadow-xl
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
