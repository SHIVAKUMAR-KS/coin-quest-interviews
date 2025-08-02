
import { Card, CardContent } from "@/components/ui/card";

const TrustedBySection = () => {
  const trustedBrands = [
    { name: "TechCorp", logo: "🏢" },
    { name: "InnovateLab", logo: "🚀" },
    { name: "DataSoft", logo: "📊" },
    { name: "CloudTech", logo: "☁️" },
    { name: "AIVentures", logo: "🤖" },
    { name: "FutureSys", logo: "🔮" },
    { name: "QuantumCode", logo: "⚛️" },
    { name: "NexusPoint", logo: "🌐" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals who have successfully landed their dream jobs using our AI-powered interview platform.
          </p>
        </div>

        {/* Brand Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set */}
            {trustedBrands.map((brand, index) => (
              <Card 
                key={index}
                className="flex-shrink-0 w-48 mx-4 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-gray-200 hover:scale-105 cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{brand.logo}</div>
                  <div className="font-semibold text-gray-800">{brand.name}</div>
                </CardContent>
              </Card>
            ))}
            {/* Second set for seamless loop */}
            {trustedBrands.map((brand, index) => (
              <Card 
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-48 mx-4 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-gray-200 hover:scale-105 cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{brand.logo}</div>
                  <div className="font-semibold text-gray-800">{brand.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">Interviews Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Partner Companies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">24/7</div>
            <div className="text-gray-600">AI Support</div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default TrustedBySection;
