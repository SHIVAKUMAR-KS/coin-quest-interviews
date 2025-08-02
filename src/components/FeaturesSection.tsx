
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, BarChart3, Target, MessageSquare, Award } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Screening Interviews",
      description: "Simulate real hiring scenarios with intelligent feedback on communication, clarity, and confidence. Our AI adapts to your responses in real-time.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Training & Skill Assessments",
      description: "AI-driven training modules to enhance your skills with personalized feedback and targeted improvement recommendations.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track your performance with detailed insights, visual reports, and progress tracking to identify areas for improvement.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Panel Interview Simulation",
      description: "Experience multi-interviewer scenarios with our advanced panel interview system that mimics real-world hiring processes.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MessageSquare,
      title: "Instant Feedback System",
      description: "Receive immediate, actionable feedback on your answers, body language, and overall presentation skills.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Award,
      title: "Performance Certification",
      description: "Earn verified certificates and badges to showcase your interview skills and preparation level to potential employers.",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Interview Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI technology designed to transform your interview preparation and maximize your career potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 hover:scale-105 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
