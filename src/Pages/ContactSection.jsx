import { motion } from "framer-motion";
import { Pointer } from "lucide-react";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaArrowRight,
} from "react-icons/fa6";

export default function ContactSection() {
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f6f7fb] py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-orange-600">
            Contact Us
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-serif text-[#112c4e] leading-tight">
            Let's Talk About{" "}
            <span className="text-orange-700 italic font-normal">
              Your Property
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-neutral-500 text-lg">
            Whether you're ready to get started or just want to ask a question,
            we'd love to hear from you. We respond within one business day.
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
                src="/images/contact_cabin.png"
                alt="GuestPrime Stays Lodge"
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
            </div>

            {/* FORM */}
            <div className="p-8 md:p-12">
              <h3 className="text-4xl font-bold text-slate-900">
                Let's Get In Touch.
              </h3>

              <p className="mt-3 text-slate-500">
                Fill out the form below and we'll contact you shortly.
              </p>

              <form className="mt-10 space-y-5" onSubmit={HandleSubmit}>
                <input
                  type="text"
                  placeholder="First Name and Last Name"
                  className="
                        w-full  
                        rounded-2xl
                        border
                        border-slate-200
                        p-4
                        outline-none
                        transition
                        focus:border-orange-500
                      "
                />

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
                      focus:border-orange-500
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
                      focus:border-orange-500
                    "
                />

                <input
                  type="text"
                  placeholder="Address"
                  className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      p-4
                      outline-none
                      focus:border-orange-500
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
                      focus:border-orange-500
                    "
                />

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    cursor: "pointer",
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
                      bg-orange-600
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
              <div className="mt-6 flex flex-wrap">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <a href="mailto:info@guestprimestays.com">
                    <FaEnvelope className="text-orange-600" />
                    <p className="mt-3 text-lg text-neutral-500">
                      info@guestprimestays.com
                    </p>
                  </a>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                    <a href="tel:+12405545254">
                  <FaPhone className="text-orange-600" />
                  <p className="mt-3 text-lg text-neutral-500">
                    +1 (240) 554 5254
                  </p>
                    </a>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <FaLocationDot className="text-orange-600" />
                  <p className="mt-3 text-lg text-neutral-500">
                    Atlanta, Georgia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
