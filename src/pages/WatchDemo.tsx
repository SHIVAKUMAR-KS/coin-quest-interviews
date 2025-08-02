
import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, CheckCircle, Users, Clock, Award } from "lucide-react";

const WatchDemo = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const features = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Real Interview Scenarios",
      description: "Experience authentic interview conditions with AI-powered questioning"
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      title: "Instant Feedback",
      description: "Get immediate insights on your performance and areas for improvement"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      title: "Skill Assessment",
      description: "Comprehensive evaluation of your technical and soft skills"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              See AI Interviews in
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Action</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Watch how our AI-powered platform transforms the interview experience. 
              See real examples of interview sessions, feedback, and skill assessments.
            </p>
          </div>

          {/* Demo Video Section */}
          <Card className="mb-12 overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                    <Play className="w-12 h-12 text-white ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Interactive Demo</h3>
                  <p className="text-blue-100 mb-6">See CoinQuest Interviews in action</p>
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Play Demo Video
                  </Button>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 right-4 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
              </div>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Demo Benefits */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-900">What You'll See in the Demo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Complete interview simulation from start to finish</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>AI-powered question generation and adaptation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Real-time performance analysis</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Detailed feedback and scoring system</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Resume and job description matching</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Progress tracking and analytics dashboard</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience It Yourself?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Start your AI-powered interview journey today and boost your confidence for real interviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setIsLoggedIn(true)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4"
              >
                Get Started Free
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WatchDemo;
