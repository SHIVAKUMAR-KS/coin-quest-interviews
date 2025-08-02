
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Code, Lightbulb } from "lucide-react";

const DashboardHome = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "AI Interview Coach",
      description: "Practice with our AI interviewer that adapts to your responses, provides real-time feedback, and helps you ace technical interviews.",
      buttonText: "Start Practicing",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-green-500" />,
      title: "Smart Learning",
      description: "AI-driven systems evaluate individual strengths and areas for improvement, enabling the development of personalized learning paths.",
      buttonText: "Explore Paths",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: "AI Code Mentor",
      description: "Leverage intelligent AI tools to receive immediate code evaluations, real-time debugging support, and optimization guidance.",
      buttonText: "Try Coding",
      buttonColor: "bg-orange-600 hover:bg-orange-700"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to AI Interview
        </h1>
        <p className="text-cyan-200 text-lg max-w-2xl mx-auto">
          Sharpen your interview skills with our AI-powered platform. Receive instant, 
          personalized feedback and boost your confidence for real-world interviews!
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <CardTitle className="text-white">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-300 mb-6">
                {feature.description}
              </CardDescription>
              <Button className={`w-full ${feature.buttonColor} text-white`}>
                {feature.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Card className="bg-white/10 border-white/20 text-white">
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-300">Interviews Completed</span>
              <span className="font-bold">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Average Score</span>
              <span className="font-bold">--</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Time Practiced</span>
              <span className="font-bold">0 hours</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 text-white">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs">1</div>
              <span className="text-gray-300">Complete your profile</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-xs">2</div>
              <span className="text-gray-300">Take your first AI interview</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-xs">3</div>
              <span className="text-gray-300">Review feedback and improve</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
