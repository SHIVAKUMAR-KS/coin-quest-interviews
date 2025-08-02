
import { Button } from "@/components/ui/button";
import { Play, Zap, Brain } from "lucide-react";

interface HeroSectionProps {
  setIsLoggedIn: (value: boolean) => void;
}

const HeroSection = ({ setIsLoggedIn }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-4 left-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-medium mb-8 animate-fade-in">
            <Zap className="w-4 h-4 mr-2" />
            Experience AI-Powered Mock Interviews
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Master Every Interview
            </span>
            <br />
            <span className="text-gray-800">
              with AI Precision
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Ace every interview with confidence. Automated interviews that evaluate your skills instantly, 
            along with real-time feedback and growth tracking.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              onClick={() => setIsLoggedIn(true)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-6 text-lg font-semibold rounded-full border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Interviews Conducted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
