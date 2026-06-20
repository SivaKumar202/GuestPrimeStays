import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Check,
  Home,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

export default function RevenueEstimator() {
  const [bedrooms, setBedrooms] = useState(3);
  const [occupancy, setOccupancy] = useState(55);

  const revenue = useMemo(() => {
    return Math.round(
      bedrooms * occupancy * 24
    );
  }, [bedrooms, occupancy]);

  const chartData = [
    { month: "Jan", value: revenue * 0.75 },
    { month: "Feb", value: revenue * 0.82 },
    { month: "Mar", value: revenue * 0.9 },
    { month: "Apr", value: revenue * 1.05 },
    { month: "May", value: revenue * 1.12 },
    { month: "Jun", value: revenue },
  ];

  const benefits = [
    "No long-term contracts",
    "Full ownership retained",
    "Dedicated local manager",
    "Real-time booking dashboard",
    "Georgia market expertise",
    "Transparent reporting",
  ];
  

  return (
    <section className="relative overflow-hidden bg-[#071629] py-32">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-175 w-175 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.4em] text-yellow-400">
              WHY OWNERS CHOOSE US
            </span>

            <h2 className="mt-6 text-5xl font-serif text-white md:text-7xl">
              You keep full
              <br />
              ownership.
              <br />
              We do all
              <br />
              the work.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
              We're not a platform — we're your dedicated
              local co-hosting partner operating right here
              in Georgia.
            </p>

            <div className="mt-12 space-y-4">
              {benefits.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: i * 0.08,
                  }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/10">
                    <Check
                      size={18}
                      className="text-yellow-400"
                    />
                  </div>

                  <span className="text-white/80">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              relative
              rounded-[40px]
              border
              border-white/10
              bg-white/4
              p-8
              backdrop-blur-xl
            "
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-xl bg-yellow-500/10 p-3">
                <Home className="text-yellow-400" />
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Revenue Estimator
              </h3>
            </div>

            {/* Bedrooms */}
            <div className="mb-6">
              <label className="mb-2 block text-sm text-white/60">
                BEDROOMS
              </label>

              <select
                value={bedrooms}
                onChange={(e) =>
                  setBedrooms(Number(e.target.value))
                }
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                  text-white
                "
              >
                <option value={1}>1 Bedroom</option>
                <option value={2}>2 Bedrooms</option>
                <option value={3}>3 Bedrooms</option>
                <option value={4}>4 Bedrooms</option>
                <option value={5}>5 Bedrooms</option>
              </select>
            </div>

            {/* Occupancy */}
            <div className="mb-10">
              <label className="mb-4 block text-sm text-white/60">
                TARGET OCCUPANCY
              </label>

              <input
                type="range"
                min="20"
                max="100"
                value={occupancy}
                onChange={(e) =>
                  setOccupancy(e.target.value)
                }
                className="w-full accent-yellow-500"
              />

              <div className="mt-2 text-yellow-400">
                {occupancy}%
              </div>
            </div>

            {/* Revenue Card */}
            <motion.div
              layout
              className="
                rounded-3xl
                bg-linear-to-r
                from-[#0B1730]
                to-[#172B57]
                p-8
              "
            >
              <p className="text-sm tracking-widest text-white/50 uppercase">
                Estimated Gross Revenue
              </p>

              <div className="mt-4 text-6xl font-bold text-yellow-400">
                $
                <CountUp
                  end={revenue.toLocaleString()}
                  duration={1}
                  separator=","
                />
              </div>

              <p className="mt-3 text-white/60">
                Based on current Georgia market rates
              </p>
            </motion.div>

            {/* Chart */}
            {/* <div className="mt-8 h-44">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <AreaChart data={chartData}>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#D4AF37"
                    fill="#D4AF3720"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div> */}

            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                mt-8
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-yellow-500
                py-4
                font-semibold
                text-black
              "
            >
              <TrendingUp size={18} />
              Get My Free Full Analysis
            </motion.button>

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
                -right-6
                -top-6
                hidden
                rounded-2xl
                border
                border-white/10
                bg-white/10
                p-4
                backdrop-blur-xl
                lg:block
              "
            >
              <ShieldCheck
                className="text-yellow-400"
                size={24}
              />

              <p className="mt-2 text-sm text-white">
                Verified Revenue
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}