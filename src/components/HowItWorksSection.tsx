
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Calendar, Brain, BarChart3 } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "Generate Role-Specific Questions",
      description: "Our AI analyzes your target role and generates personalized interview questions instantly, tailored to your industry and experience level.",
      color: "from-blue-500 to-cyan-500",
      step: 1
    },
    {
      icon: Calendar,
      title: "Eliminate Manual Scheduling",
      description: "Skip the back-and-forth emails. Our on-demand interview system is available 24/7, allowing you to practice whenever you're ready.",
      color: "from-indigo-500 to-purple-500",
      step: 2
    },
    {
      icon: Brain,
      title: "AI-Powered Interview Experience",
      description: "Experience adaptive questioning that evaluates your responses, body language, and communication skills with precision and fairness.",
      color: "from-purple-500 to-pink-500",
      step: 3
    },
    {
      icon: BarChart3,
      title: "Detailed Performance Analysis",
      description: "Receive comprehensive feedback with actionable insights, performance metrics, and personalized recommendations for improvement.",
      color: "from-green-500 to-emerald-500",
      step: 4
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to transform your interview skills and land your dream job with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative group hover:shadow-xl transition-all duration-500 border-0 bg-white hover:scale-105 cursor-pointer animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Step Number Badge */}
              <div className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm`}>
                {step.step}
              </div>
              
              {/* Gradient Line at Top */}
              <div className={`h-1 bg-gradient-to-r ${step.color} w-full`}></div>
              
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>

              {/* Connection Line for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-y-1/2 z-10"></div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
