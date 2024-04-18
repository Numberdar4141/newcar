
import CTASectiont from "../components/homepage/CTASectiont";

import ContactSection from "../components/homepage/ContactSection";
import ContactUsSection from "../components/homepage/ContactUsSection";
import CounterSection from "../components/homepage/CounterSection";
import Features from "../components/homepage/Features";
import Hero from "../components/homepage/Hero";

import Testimonial from "../components/homepage/Testimonial";

import HealthCareSection from "../components/services/HealthCareSection";
import NerverWorrySection from "../components/services/NerverWorrySection";
//import UnlimitedPayrolls from "../components/services/UnlimitedPayrolls";
import WeHelpSection from "../components/services/WeHelpSection";

function HomePage() {
  return (
    <main>
      <Hero />
      <HealthCareSection/>
      <ContactUsSection />
     <NerverWorrySection/>
     
      <Features />
     <WeHelpSection/>
      <CounterSection />
      <Testimonial />
      <ContactSection />
      <CTASectiont />
    </main>
  );
}

export default HomePage;
