
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
    <BackgroundBeamsWithCollision className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
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
          {/* Beta Badge */}
          <div className="mb-8 animate-fade-in">
            <Badge 
              variant="secondary" 
              className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-blue-200 px-4 py-2 text-sm font-medium hover:scale-105 transition-transform duration-200"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Interview Platform - Now in Beta
            </Badge>
          </div>

          {/* Main Heading with Beams Effect */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in delay-100">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Master Your
            </span>
            <br />
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Interview Skills</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">Interview Skills</span>
              </div>
            </div>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-200">
            Practice with AI-powered mock interviews, get personalized feedback, 
            and land your dream job with confidence. Transform your career journey today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-300">
            <Button 
              size="lg"
              onClick={handleStartJourney}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleWatchDemo}
              className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 hover:bg-blue-50"
            >
              Watch Demo
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in delay-400">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg mb-4 group-hover:shadow-lg transition-shadow duration-200">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-fade-in delay-500">
            <p className="text-gray-500 mb-6 font-medium">Trusted by professionals from</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Company logos would go here */}
              <div className="text-2xl font-bold text-gray-400">Google</div>
              <div className="text-2xl font-bold text-gray-400">Microsoft</div>
              <div className="text-2xl font-bold text-gray-400">Amazon</div>
              <div className="text-2xl font-bold text-gray-400">Meta</div>
              <div className="text-2xl font-bold text-gray-400">Netflix</div>
            </div>
          </div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default HeroSection;
