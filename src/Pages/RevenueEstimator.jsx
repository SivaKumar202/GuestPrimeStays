import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Check,
  TrendingUp,
  ShieldCheck,
  MapPin,
  Sliders,
  DollarSign,
  Briefcase,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

// Georgia baseline parameters
const LOCATIONS = [
  { name: "Atlanta", baseRate: 235 },
  { name: "Savannah", baseRate: 215 },
  { name: "Blue Ridge Mountains", baseRate: 195 },
  { name: "Athens", baseRate: 145 },
  { name: "Golden Isles", baseRate: 255 },
];

const PROPERTY_TYPES = [
  { name: "Luxury Cabin", factor: 1.25 },
  { name: "Lakefront House", factor: 1.30 },
  { name: "Historic Mansion / Estate", factor: 1.45 },
  { name: "Modern Penthouse", factor: 1.35 },
  { name: "Cozy Cottage / Apartment", factor: 0.90 },
];

const AMENITIES = [
  { key: "pool", label: "Private Pool", premium: 45 },
  { key: "hotTub", label: "Hot Tub", premium: 25 },
  { key: "scenicView", label: "Scenic View", premium: 35 },
  { key: "gameRoom", label: "Game / Theatre Room", premium: 20 },
  { key: "petFriendly", label: "Pet Friendly", premium: 15 },
];

const SEASONALITY_CURVES = {
  Atlanta: [0.95, 0.98, 1.0, 1.05, 1.02, 1.08, 1.05, 1.0, 1.02, 1.05, 0.98, 0.96],
  Savannah: [0.65, 0.72, 0.90, 1.15, 1.20, 1.30, 1.35, 1.25, 1.0, 0.95, 0.80, 0.70],
  "Blue Ridge Mountains": [0.60, 0.65, 0.85, 0.95, 1.05, 1.15, 1.25, 1.10, 1.15, 1.40, 1.20, 0.85],
  Athens: [0.70, 0.75, 0.90, 1.10, 1.25, 0.60, 0.55, 0.80, 1.35, 1.40, 1.30, 0.75],
  "Golden Isles": [0.55, 0.62, 0.85, 1.10, 1.20, 1.35, 1.40, 1.30, 0.95, 0.85, 0.70, 0.60],
};

export default function RevenueEstimator() {
  const [selectedLocation, setSelectedLocation] = useState("Blue Ridge Mountains");
  const [bedrooms, setBedrooms] = useState(3);
  const [propertyType, setPropertyType] = useState("Luxury Cabin");
  const [occupancy, setOccupancy] = useState(65);
  const [activeAmenities, setActiveAmenities] = useState({
    pool: false,
    hotTub: true,
    scenicView: true,
    gameRoom: false,
    petFriendly: false,
  });

  const locationData = useMemo(() => {
    return LOCATIONS.find((loc) => loc.name === selectedLocation) || LOCATIONS[0];
  }, [selectedLocation]);

  const typeData = useMemo(() => {
    return PROPERTY_TYPES.find((t) => t.name === propertyType) || PROPERTY_TYPES[0];
  }, [propertyType]);

  const toggleAmenity = (key) => {
    setActiveAmenities((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Nightly Rate calculation
  const nightlyRate = useMemo(() => {
    // base rate * bedroom multiplier * property type multiplier
    const bedMultiplier = 1 + (bedrooms - 1) * 0.35; // 1bed=1.0, 2bed=1.35, 3bed=1.7, etc.
    const base = locationData.baseRate * bedMultiplier * typeData.factor;

    // add amenities premiums
    const amenitiesPremium = AMENITIES.reduce((sum, amenity) => {
      return sum + (activeAmenities[amenity.key] ? amenity.premium : 0);
    }, 0);

    return Math.round(base + amenitiesPremium);
  }, [locationData, bedrooms, typeData, activeAmenities]);

  // Annual Gross Revenue
  const annualGross = useMemo(() => {
    return Math.round(nightlyRate * 365 * (occupancy / 100));
  }, [nightlyRate, occupancy]);

  // Net share splitting (80% Owner / 20% Managed Fee)
  const ownerShare = useMemo(() => Math.round(annualGross * 0.8), [annualGross]);
  const hostShare = useMemo(() => Math.round(annualGross * 0.2), [annualGross]);

  // Monthly Revenue breakdown for Chart
  const chartData = useMemo(() => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const curve = SEASONALITY_CURVES[selectedLocation] || SEASONALITY_CURVES["Atlanta"];
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return months.map((month, idx) => {
      const monthMultiplier = curve[idx];
      const monthlyADR = nightlyRate * monthMultiplier;
      const val = Math.round(monthlyADR * (occupancy / 100) * daysInMonth[idx]);
      return {
        name: month,
        Revenue: val,
      };
    });
  }, [selectedLocation, nightlyRate, occupancy]);

  const benefits = [
    "No long-term lock-in contracts",
    "Retain full title & booking control",
    "Expert local Georgia on-the-ground support",
    "Dynamic nightly rate booking optimization",
    "Professional styling & photography support",
    "Transparent monthly profit statements",
  ];

  const handleRequestAnalysis = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        const textarea = document.querySelector("textarea[placeholder*='Tell us about your property']");
        if (textarea) {
          const listAmenities = Object.keys(activeAmenities)
            .filter((k) => activeAmenities[k])
            .map((k) => AMENITIES.find((a) => a.key === k)?.label || k)
            .join(", ");

          textarea.value = `Hi GuestPrime team! I just ran a revenue estimation on your site. I have a ${bedrooms}-bedroom ${propertyType} in ${selectedLocation} with occupancy expectations around ${occupancy}%. Featured amenities: ${listAmenities || "None"}. I'd love to request my free full analysis and schedule a co-hosting consultation!`;

          // Trigger change event to update React state in contact form
          textarea.dispatchEvent(new Event("input", { bubbles: true }));
          textarea.focus();
        }
      }, 850);
    }
  };

  return (
    <section id="revenue-estimator" className="relative overflow-hidden bg-[#071629] py-28 text-white">
      {/* Glow effects */}
      <div className="absolute left-1/4 top-0 h-150 w-150 rounded-full bg-emerald-500/5 blur-[180px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-0 h-150 w-150 rounded-full bg-yellow-500/5 blur-[180px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-12">
          
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-yellow-400">
                DYNAMIC PRICING & REVENUE
              </span>

              <h2 className="mt-6 text-4xl font-serif font-semibold tracking-tight text-white sm:text-5xl md:text-6xl leading-tight">
                Unlock your
                <br />
                property's
                <br />
                <span className="text-yellow-400 font-extrabold italic">true yield.</span>
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/70">
                We are more than just a listing service. We deploy localized dynamic market pricing across Georgia to ensure your property hits maximum booking values every single night.
              </p>

              <div className="mt-10 space-y-4">
                {benefits.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-500/10">
                      <Check size={16} className="text-yellow-400" />
                    </div>
                    <span className="text-white/80 text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE ESTIMATOR CARD */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[40px] border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-xl shadow-2xl"
            >
              {/* Floating Badge */}
              <div className="absolute -right-4 -top-4 hidden sm:flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0c223c] p-3 shadow-xl pointer-events-none">
                <ShieldCheck className="text-emerald-400" size={20} />
                <span className="text-xs font-semibold text-white">Verified Local Rates</span>
              </div>

              <div className="mb-8 flex items-center gap-3">
                <div className="rounded-xl bg-yellow-500/10 p-3">
                  <Sliders className="text-yellow-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  Revenue Estimator
                </h3>
              </div>

              {/* Form Inputs Grid */}
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Location */}
                <div className="flex flex-col">
                  <label className="mb-2 text-xs font-bold uppercase tracking-wider text-white/50 flex items-center gap-1.5">
                    <MapPin size={12} className="text-yellow-400" /> Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white focus:outline-hidden focus:border-yellow-400 transition cursor-pointer"
                  >
                    {LOCATIONS.map((loc) => (
                      <option key={loc.name} value={loc.name} className="bg-[#0b1b2d] text-white">
                        {loc.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Bedrooms */}
                <div className="flex flex-col">
                  <label className="mb-2 text-xs font-bold uppercase tracking-wider text-white/50">
                    Bedrooms
                  </label>
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(Number(e.target.value))}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white focus:outline-hidden focus:border-yellow-400 transition cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num} className="bg-[#0b1b2d] text-white">
                        {num} {num === 1 ? "Bedroom" : "Bedrooms"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Property Type */}
                <div className="flex flex-col sm:col-span-2">
                  <label className="mb-2 text-xs font-bold uppercase tracking-wider text-white/50">
                    Property Type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white focus:outline-hidden focus:border-yellow-400 transition cursor-pointer"
                  >
                    {PROPERTY_TYPES.map((type) => (
                      <option key={type.name} value={type.name} className="bg-[#0b1b2d] text-white">
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Occupancy Rate Slider */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-white/50">
                    Target Occupancy Rate
                  </label>
                  <span className="text-lg font-bold text-yellow-400">{occupancy}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="95"
                  value={occupancy}
                  onChange={(e) => setOccupancy(Number(e.target.value))}
                  className="w-full accent-yellow-400 cursor-pointer h-2 bg-white/10 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[10px] text-white/40 mt-1">
                  <span>20% (Conservative)</span>
                  <span>65% (Average)</span>
                  <span>95% (Peak)</span>
                </div>
              </div>

              {/* Amenities Selector */}
              <div className="mt-8">
                <label className="mb-3 block text-xs font-bold uppercase tracking-wider text-white/50">
                  Featured Amenities
                </label>
                <div className="flex flex-wrap gap-3">
                  {AMENITIES.map((amenity) => {
                    const active = activeAmenities[amenity.key];
                    return (
                      <button
                        key={amenity.key}
                        onClick={() => toggleAmenity(amenity.key)}
                        type="button"
                        className={`rounded-xl px-4 py-2 text-xs font-semibold border transition-all duration-300 ${
                          active
                            ? "bg-yellow-400 text-black border-yellow-400 shadow-md"
                            : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        {amenity.label} (+${amenity.premium}/n)
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Live Calculations / Results Cards */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {/* Nightly Rate */}
                <div className="rounded-3xl bg-white/5 border border-white/10 p-5 flex flex-col justify-between">
                  <div className="text-xs font-bold uppercase tracking-wider text-white/40 flex items-center gap-1">
                    <DollarSign size={12} className="text-yellow-400" /> Est. Avg Nightly Rate
                  </div>
                  <div className="mt-2 text-3xl font-extrabold text-white">
                    ${nightlyRate}
                  </div>
                </div>

                {/* Gross Revenue */}
                <div className="rounded-3xl bg-linear-to-r from-emerald-950/40 to-emerald-900/30 border border-emerald-500/20 p-5 flex flex-col justify-between">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400/80 flex items-center gap-1">
                    <TrendingUp size={12} className="text-emerald-400" /> Est. Gross Annual Revenue
                  </div>
                  <div className="mt-2 text-3xl font-extrabold text-emerald-400">
                    $
                    <CountUp
                      end={annualGross}
                      duration={0.8}
                      separator=","
                    />
                  </div>
                </div>
              </div>

              {/* Earnings Split */}
              <div className="mt-4 rounded-3xl bg-[#091a2e]/60 border border-blue-500/10 p-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">
                  Earnings Breakdown (80/20 Host Split)
                </h4>
                <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                      <DollarSign size={18} className="text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-white/40 tracking-wider">Your Take-Home Profit (80%)</p>
                      <p className="text-lg font-bold text-white">
                        $
                        <CountUp end={ownerShare} duration={0.8} separator="," />
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:block h-8 w-px bg-white/10" />

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10">
                      <Briefcase size={16} className="text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-white/40 tracking-wider">Management & Support (20%)</p>
                      <p className="text-lg font-bold text-white/70">
                        $
                        <CountUp end={hostShare} duration={0.8} separator="," />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recharts Area Chart */}
              <div className="mt-8 border-t border-white/5 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
                  Estimated Monthly Seasonality Trend
                </h4>
                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#FBBD23" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#FBBD23" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis
                        dataKey="name"
                        stroke="rgba(255, 255, 255, 0.4)"
                        fontSize={10}
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#0d223c",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          borderRadius: "16px",
                          color: "#fff",
                        }}
                        formatter={(value) => [`$${value.toLocaleString()}`, "Est. Revenue"]}
                        labelStyle={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "11px", fontWeight: "bold" }}
                      />
                      <Area
                        type="monotone"
                        dataKey="Revenue"
                        stroke="#FBBD23"
                        strokeWidth={2.5}
                        fillOpacity={1}
                        fill="url(#colorRev)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* CTA Action Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleRequestAnalysis}
                type="button"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 py-4 font-bold text-black shadow-lg shadow-yellow-400/10 hover:bg-yellow-300 hover:shadow-yellow-400/20 transition duration-300 cursor-pointer"
              >
                <TrendingUp size={18} />
                Get My Free Full Analysis
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}