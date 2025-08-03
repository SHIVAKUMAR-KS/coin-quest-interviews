
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Trophy, Brain, Sparkles } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

interface HeroSectionProps {
  setIsLoggedIn: (value: boolean) => void;
}

const HeroSection = ({ setIsLoggedIn }: HeroSectionProps) => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/login');
  };

  const handleWatchDemo = () => {
    // Implement logic to navigate to demo page
  };

  const statistics = [
    { icon: Users, number: '10K+', label: 'Interviews Conducted' },
    { icon: Trophy, number: '95%', label: 'Success Rate' },
    { icon: Sparkles, number: '24/7', label: 'AI Availability' }
  ];

  return (
    <BackgroundBeamsWithCollision className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Additional floating animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-indigo-400/40 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-pulse delay-800"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-cyan-400/25 rounded-full animate-pulse delay-1200"></div>
          <div className="absolute top-1/6 right-1/3 w-1 h-1 bg-pink-400/35 rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Beta Badge - Made fully responsive */}
          <div className="mb-6 sm:mb-8 animate-fade-in">
            <Badge 
              variant="secondary" 
              className="bg-gradient-to-r from-purple-100/20 to-blue-100/20 text-white border-purple-300/30 px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium hover:scale-105 transition-transform duration-200 backdrop-blur-sm"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">AI-Powered Interview Platform - Now in Beta</span>
              <span className="sm:hidden">AI Interview Platform - Beta</span>
            </Badge>
          </div>

          {/* Main Heading with Beams Effect */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-in delay-100">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Master Your
            </span>
            <br />
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-2 sm:py-4 from-purple-400 via-violet-400 to-pink-400 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Interview Skills</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-400 via-violet-400 to-pink-400 py-2 sm:py-4">
                <span className="">Interview Skills</span>
              </div>
            </div>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-200">
            Practice with AI-powered mock interviews, get personalized feedback, 
            and land your dream job with confidence. Transform your career journey today.
          </p>

          {/* CTA Buttons */}
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

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto animate-fade-in delay-400">
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

          {/* Trust Indicators */}
          <div className="mt-12 sm:mt-16 animate-fade-in delay-500">
            <p className="text-gray-400 mb-4 sm:mb-6 font-medium text-sm sm:text-base">Trusted by professionals from</p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 opacity-60">
              {/* Company logos would go here */}
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">Google</div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">Microsoft</div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">Amazon</div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">Meta</div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">Netflix</div>
            </div>
          </div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default HeroSection;
