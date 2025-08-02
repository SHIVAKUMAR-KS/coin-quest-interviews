
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Users, 
  BarChart3, 
  Upload, 
  Play, 
  Star, 
  Coins, 
  Menu, 
  X,
  FileText,
  Target,
  Zap,
  Award,
  ChevronDown,
  Clock,
  Shield,
  MessageSquare
} from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DashboardSection from "@/components/DashboardSection";
import TrustedBySection from "@/components/TrustedBySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      {isLoggedIn ? (
        <DashboardSection />
      ) : (
        <>
          <HeroSection setIsLoggedIn={setIsLoggedIn} />
          <FeaturesSection />
          <HowItWorksSection />
          <TrustedBySection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection setIsLoggedIn={setIsLoggedIn} />
        </>
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
