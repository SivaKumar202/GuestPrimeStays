import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Herooo from "./Components/animata/Herooo";
import Marqueee from "./Components/animata/Marquee/Marquee";
import Serve from "./Pages/Whoweserve";
import HowItWorks from "./Pages/HowItwork";
import ServicesSection from "./Pages/ServicesSection";
import About from "./Pages/About";
import ContactSection from "./Pages/ContactSection";
import { Phone } from 'lucide-react';
import { FileText } from 'lucide-react';
import { ClockCheck } from 'lucide-react';
import { Star } from 'lucide-react';
import Footer from "./Pages/Footer";

function App() {
  useEffect(() => {
    // Disable native browser scroll restoration on refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Force scroll to top on page load/refresh unless a URL hash is active
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Herooo />
      <Marqueee speed="fast" pauseOnHover={true}>
        <span className="mx-4 text-lg font-semibold flex items-center gap-2"><Star color="#FFD700" />Airbnb Co-Host Certified</span>
        <span className="mx-4 text-lg font-semibold flex items-center gap-2"><Phone color=" #008000" /> 24 / 7 Guest Support</span>
        <span className="mx-4 text-lg font-semibold flex items-center gap-2"> <FileText color="#E3963E" /> Monthly Owner Reports</span>
        <span className="mx-4 text-lg font-semibold flex items-center gap-2"><ClockCheck color="#00FF00" /> Response Within 24 Hours</span>
      </Marqueee>
      <Marqueee speed="fast" pauseOnHover={true} reverse={true}>
        <span className="mx-4 text-lg font-semibold flex items-center gap-2"><Star color="#FFD700" />Airbnb Co-Host Certified</span>
        <span className="mx-4 text-lg font-semibold flex items-center gap-2"><Phone color=" #008000" /> 24 / 7 Guest Support</span>
        <span className="mx-4 text-lg font-semibold flex items-center gap-2"> <FileText color="#E3963E" /> Monthly Owner Reports</span>
        <span className="mx-4 text-lg font-semibold flex items-center gap-2"><ClockCheck color="#0FFF50" /> Response Within 24 Hours</span>
      </Marqueee>
      <Serve />
      <HowItWorks />
      <ServicesSection />
      <About />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
