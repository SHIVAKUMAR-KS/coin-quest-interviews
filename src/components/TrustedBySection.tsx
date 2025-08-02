
import { Badge } from "@/components/ui/badge";

const TrustedBySection = () => {
  const trustedCompanies = [
    { name: "Google", logo: "🔍" },
    { name: "Microsoft", logo: "💻" },
    { name: "Amazon", logo: "📦" },
    { name: "Apple", logo: "🍎" },
    { name: "Meta", logo: "👥" },
    { name: "Netflix", logo: "🎬" },
    { name: "Tesla", logo: "⚡" },
    { name: "Spotify", logo: "🎵" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of professionals who have landed their dream jobs
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-pulse">
            <div className="flex space-x-8 animate-[slide_20s_linear_infinite]">
              {[...trustedCompanies, ...trustedCompanies].map((company, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 bg-gray-50 px-6 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap"
                >
                  <span className="text-2xl">{company.logo}</span>
                  <span className="font-semibold text-gray-800">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">50K+</div>
              <div className="text-gray-600">Job Seekers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Support</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default TrustedBySection;
