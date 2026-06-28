import { motion } from "framer-motion";
import ForterImage from "/images/Footerbackground.png";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071629]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ForterImage}
          alt="image"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#071629]/60 to-[#071629]" />
      </div>

      <div className="relative z-10">
        {/* CTA Section */}
        <div className="mx-auto max-w-7xl px-6 pt-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              text-4xl
              font-bold
              text-white
              md:text-6xl
              lg:text-7xl
            "
          >
            Ready to unlock
            <br />
            your property's
            <span className="text-orange-400"> full potential?</span>
          </motion.h2>
        </div>

        {/* Footer Content */}
        <div className="mx-auto mt-10 max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white">
                Guest Prime Stays
              </h3>

              <p className="mt-4 max-w-sm text-white/70">
                Bringing exceptional short-term rental experiences to property
                owners and travelers across Georgia.
              </p>

              <p className="mt-8 text-white/50">© Guest Prime Stays.</p>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
              }}
              viewport={{ once: true }}
            >
              <h4 className="mb-6 text-white font-semibold">Company</h4>

              <ul className="space-y-4">
                {["About", "Services", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="
                        text-white/70
                        transition
                        hover:text-yellow-400
                      "
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              viewport={{ once: true }}
            >
              <h4 className="mb-6 text-white font-semibold">Social</h4>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    text-white
                    backdrop-blur
                    transition-all
                    hover:scale-110
                    hover:bg-yellow-500
                  "
                >
                  <FaXTwitter />
                </a>

                <a
                  href="#"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    text-white
                    backdrop-blur
                    transition-all
                    hover:scale-110
                    hover:bg-yellow-500
                  "
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    text-white
                    backdrop-blur
                    transition-all
                    hover:scale-110
                    hover:bg-yellow-500
                  "
                >
                  <FaInstagram />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Huge Brand Text */}
        <motion.div
          initial={{

            opacity: 0,
          }}
          whileInView={{
            opacity: 0.08,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.2,
          }}
          className="
            mt-10
            text-center
            font-black
            leading-none
            text-white
            select-none
            pointer-events-none
          "
        >
          <h1
            className="
              text-[51px]
              sm:text-[66px]
              md:text-[80px]
              lg:text-[110px]
            "
          >
            Guest Prime Stays
          </h1>
        </motion.div>
      </div>
    </footer>
  );
}
