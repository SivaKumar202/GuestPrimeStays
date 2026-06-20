import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaArrowRight,
} from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6f7fb] py-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-blue-600">
            Contact Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-6xl">
            Let's Talk About
            <br />
            Your Property
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            We'd love to hear from you. Reach out and our
            team will get back within 24 hours.
          </p>
        </motion.div>

        {/* Main Card */}
        {/* <Tilt
          tiltMaxAngleX={4}
          tiltMaxAngleY={4}
          glareEnable={true}
          glareMaxOpacity={0.15}
          className="mx-auto"
        > */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              overflow-hidden
              rounded-[40px]
              border
              border-white/50
              bg-white/80
              shadow-[0_40px_100px_rgba(0,0,0,0.08)]
              backdrop-blur-xl
            "
          >
            <div className="grid lg:grid-cols-2">
              {/* LEFT IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src="/contact-building.jpg"
                  alt=""
                  className="
                    h-full
                    min-h-150
                    w-full
                    object-cover
                    transition
                    duration-700
                    hover:scale-110
                  "
                />

                {/* Floating Badge */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                  }}
                  className="
                    absolute
                    left-6
                    top-6
                    rounded-2xl
                    bg-white/90
                    px-5
                    py-4
                    shadow-xl
                  "
                >
                  <p className="text-xs text-slate-500">
                    Average Revenue
                  </p>

                  <h4 className="text-2xl font-bold text-blue-600">
                    $4,950
                  </h4>
                </motion.div>
              </div>

              {/* FORM */}
              <div className="p-8 md:p-12">
                <h3 className="text-4xl font-bold text-slate-900">
                  Let's Get In Touch.
                </h3>

                <p className="mt-3 text-slate-500">
                  Fill out the form below and we'll contact
                  you shortly.
                </p>

                <form className="mt-10 space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="
                        rounded-2xl
                        border
                        border-slate-200
                        p-4
                        outline-none
                        transition
                        focus:border-blue-500
                      "
                    />

                    <input
                      type="text"
                      placeholder="Last Name"
                      className="
                        rounded-2xl
                        border
                        border-slate-200
                        p-4
                        outline-none
                        focus:border-blue-500
                      "
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      p-4
                      outline-none
                      focus:border-blue-500
                    "
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      p-4
                      outline-none
                      focus:border-blue-500
                    "
                  />

                  <textarea
                    rows="5"
                    placeholder="Tell us about your property..."
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      p-4
                      outline-none
                      focus:border-blue-500
                    "
                  />

                  <motion.button
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-2xl
                      bg-blue-600
                      py-4
                      font-semibold
                      text-white
                    "
                  >
                    Submit Inquiry
                    <FaArrowRight />
                  </motion.button>
                </form>

                {/* Contact Cards */}
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <FaEnvelope className="text-blue-600" />
                    <p className="mt-3 text-sm text-slate-600">
                      hello@stayscape.com
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <FaPhone className="text-blue-600" />
                    <p className="mt-3 text-sm text-slate-600">
                      +1 (404) 555-1234
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <FaLocationDot className="text-blue-600" />
                    <p className="mt-3 text-sm text-slate-600">
                      Atlanta, Georgia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        {/* </Tilt> */}
      </div>
    </section>
  );
}