import Navbar from "./Components/Navbar";
import Footer from "./Pages/Footer";
import Hero from "./Pages/Hero";
import HowItWorks from "./Pages/HowItwork";
import RevenueEstimator from "./Pages/RevenueEstimator";
import ServicesSection from "./Pages/ServicesSection";
import ContactSection from "./Pages/ContactSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <ServicesSection />
      {/* <RevenueEstimator /> */}
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
