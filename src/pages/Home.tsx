
import { useState } from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TrustedBySection from "@/components/TrustedBySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-400/15 to-blue-400/15 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-pink-400/10 to-rose-400/10 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <main className="pt-16">
          <HeroSection setIsLoggedIn={setIsLoggedIn} />
          <FeaturesSection />
          <HowItWorksSection />
          <TrustedBySection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection setIsLoggedIn={setIsLoggedIn} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
