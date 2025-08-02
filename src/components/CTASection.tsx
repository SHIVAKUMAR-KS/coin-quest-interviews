
import { Button } from "@/components/ui/button";
import { Play, Zap, ArrowRight } from "lucide-react";

interface CTASectionProps {
  setIsLoggedIn: (value: boolean) => void;
}

const CTASection = ({ setIsLoggedIn }: CTASectionProps) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium mb-8 animate-fade-in">
          <Zap className="w-4 h-4 mr-2" />
          Ready to Transform Your Career?
        </div>

        {/* Main Headline */}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Start Your Digital
          <br />
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Talent Journey
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Join thousands of professionals who have already transformed their careers with AI-powered interview preparation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            onClick={() => setIsLoggedIn(true)}
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Play className="w-5 h-5 mr-2" />
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="px-8 py-6 text-lg font-semibold rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-md"
          >
            Book a Demo
          </Button>
        </div>

        {/* Features List */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Instant Setup</h3>
            <p className="text-white/80">Start practicing in under 2 minutes</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
            <p className="text-white/80">Advanced AI provides real-time feedback</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Career Growth</h3>
            <p className="text-white/80">Land your dream job faster</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <p className="text-white/70 text-sm mb-4">Trusted by 50,000+ professionals worldwide</p>
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            ))}
            <span className="text-white/90 ml-2 text-sm">4.9/5 from 5000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
