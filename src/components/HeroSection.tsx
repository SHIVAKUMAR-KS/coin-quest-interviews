
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Trophy, Brain, Sparkles } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

interface HeroSectionProps {
  setIsLoggedIn: (value: boolean) => void;
}

// ...imports remain the same

const HeroSection = ({ setIsLoggedIn }: HeroSectionProps) => {
  const navigate = useNavigate();

  const handleStartJourney = () => navigate('/login');
  const handleWatchDemo = () => {};

  const statistics = [
    { icon: Users, number: '10K+', label: 'Interviews Conducted' },
    { icon: Trophy, number: '95%', label: 'Success Rate' },
    { icon: Sparkles, number: '24/7', label: 'AI Availability' },
  ];

  return (
    <BackgroundBeamsWithCollision className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden min-h-screen">
        {/* Background floating effects (unchanged) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse delay-200" />
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-indigo-400/40 rounded-full animate-pulse delay-500" />
          <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-pulse delay-800" />
          <div className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-cyan-400/25 rounded-full animate-pulse delay-1200" />
          <div className="absolute top-1/6 right-1/3 w-1 h-1 bg-pink-400/35 rounded-full animate-pulse delay-300" />
        </div>

        <div className="max-w-7xl mx-auto w-full text-center relative z-10 px-2 sm:px-4">
          {/* ✅ Beta Badge - Visible and readable on all screens */}
          <div className="mb-6 sm:mb-8 mt-8 sm:mt-10 animate-fade-in">
            <Badge 
              variant="secondary" 
              className="bg-white/10 text-white border border-purple-300/40 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium hover:scale-105 transition-transform duration-200 backdrop-blur-md rounded-lg"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="block sm:hidden">AI Interview Platform - Beta</span>
              <span className="hidden sm:block">AI-Powered Interview Platform - Now in Beta</span>
            </Badge>
          </div>

          {/* ✅ Main Heading - fully responsive */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-in delay-100 leading-snug sm:leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Master Your
            </span>
            <br />
            <span className="relative inline-block w-max drop-shadow-md text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-pink-400 py-1 sm:py-2">
              Interview Skills
            </span>
          </h1>

          {/* ✅ Subtitle - Responsive and readable */}
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 sm:mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-200 px-2 sm:px-6">
            Practice with AI-powered mock interviews, get personalized feedback, 
            and land your dream job with confidence. Transform your career journey today.
          </p>

          {/* CTA Buttons - unchanged */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-300">
            <Button 
              size="lg"
              onClick={handleStartJourney}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleWatchDemo}
              className="border-2 border-gray-400/30 hover:border-purple-500/50 text-white hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 hover:bg-purple-500/20 backdrop-blur-sm"
            >
              Watch Demo
            </Button>
          </div>

          {/* Statistics - fully responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto animate-fade-in delay-400 px-2 sm:px-4">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-200">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg mb-4 group-hover:shadow-lg transition-shadow duration-200">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust section - unchanged, now spaced */}
          <div className="mt-12 sm:mt-16 animate-fade-in delay-500 px-2 sm:px-4">
            <p className="text-gray-400 mb-4 sm:mb-6 font-medium text-sm sm:text-base">Trusted by professionals from</p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 opacity-60">
              {["Google", "Microsoft", "Amazon", "Meta", "Netflix"].map((company, idx) => (
                <div key={idx} className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default HeroSection;

