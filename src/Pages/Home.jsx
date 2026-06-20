import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Background from "/images/image9.jpg";
import Side1 from "/images/image2.jpg";
import Side2 from "/images/image8.jpg";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

export default function Hero() {
  const heroRef = useRef();

  useEffect(() => {
    const hero = heroRef.current;

    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;

      gsap.to(".parallax-bg", {
        x,
        y,
        duration: 1,
        ease: "power3.out",
      });
    };

    hero.addEventListener("mousemove", handleMouseMove);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* Background */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 15,
          ease: "easeOut",
        }}
        className="parallax-bg absolute inset-0"
      >
        <img
          src={Background}
          alt="Background"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/60" />

      {/* Navbar */}
      <div className="absolute top-0 left-0 z-50 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <h1 className="text-2xl font-bold text-white">
            StayScape
          </h1>

          <div className="hidden md:flex items-center gap-10 rounded-full border border-white/20 bg-white/10 px-8 py-4 backdrop-blur-xl">
            <a href="#" className="text-white">
              Stays
            </a>
            <a href="#" className="text-white">
              Destinations
            </a>
            <a href="#" className="text-white">
              About
            </a>
            <a href="#" className="text-white">
              Contact
            </a>
          </div>

          <button className="rounded-full bg-white px-6 py-3 font-medium">
            Book Now
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex h-full items-center justify-center px-6">
        <div className="max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300 backdrop-blur">
              Luxury Vacation Rentals
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
            className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl"
          >
            Discover
            <span className="block text-yellow-400">
              Extraordinary Stays
            </span>
            Across Georgia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
            }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
          >
            Handpicked luxury cabins, lake houses,
            mountain retreats and unforgettable stays.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
            }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <button className="group flex items-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:scale-105">
              Explore Stays

              <FaArrowRight className="transition group-hover:translate-x-1" />
            </button>

            <button className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-white backdrop-blur-xl">
              Watch Video
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Property Card Left */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute left-10 top-1/2 hidden w-64 rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl lg:block"
      >
        <img
          src={Side1}
          alt="Left"
          className="h-40 w-full rounded-2xl object-cover"
        />

        <div className="mt-4">
          <h3 className="font-semibold text-white">
            Luxury Cabin
          </h3>

          <div className="mt-2 flex items-center gap-2 text-white/80">
            <FaMapMarkerAlt />
            Blue Ridge
          </div>

          <div className="mt-2 flex items-center gap-2 text-yellow-400">
            <FaStar />
            4.9 Rating
          </div>
        </div>
      </motion.div>

      {/* Floating Property Card Right */}
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute right-10 top-1/3 hidden w-64 rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl lg:block"
      >
        <img
          src={Side2}
          alt=""
          className="h-40 w-full rounded-2xl object-cover"
        />

        <div className="mt-4">
          <h3 className="font-semibold text-white">
            Lake House
          </h3>

          <div className="mt-2 flex items-center gap-2 text-white/80">
            <FaMapMarkerAlt />
            Savannah
          </div>

          <div className="mt-2 flex items-center gap-2 text-yellow-400">
            <FaStar />
            5.0 Rating
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      {/* <div className="absolute bottom-12 left-1/2 z-30 flex -translate-x-1/2 gap-10 rounded-full border border-white/20 bg-white/10 px-8 py-4 backdrop-blur-xl">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white">
            500+
          </h3>
          <p className="text-sm text-white/70">
            Properties
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white">
            25K+
          </h3>
          <p className="text-sm text-white/70">
            Guests
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white">
            4.9★
          </h3>
          <p className="text-sm text-white/70">
            Rating
          </p>
        </div>
      </div> */}
    </section>
  );
}