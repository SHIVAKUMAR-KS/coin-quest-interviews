
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Users, Play, Clock, Star, Brain, Code, MessageSquare, Target } from "lucide-react";

const InterviewPanel = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedSubLevel, setSelectedSubLevel] = useState("");
  const [selectedPanel, setSelectedPanel] = useState("");

  const subjects = [
    "Software Engineering",
    "Data Science",
    "Product Management",
    "Marketing",
    "Sales",
    "Finance",
    "HR"
  ];

  const levels = ["Entry Level", "Mid Level", "Senior Level", "Executive"];
  const subLevels = ["Behavioral", "Technical", "Case Study", "System Design"];
  
  const panelTypes = [
    {
      id: "behavioral",
      name: "Behavioral Panel",
      description: "Focus on soft skills, leadership, and cultural fit",
      icon: <MessageSquare className="w-6 h-6" />,
      duration: "30-45 min",
      cost: 15,
      color: "bg-blue-500"
    },
    {
      id: "technical",
      name: "Technical Panel",
      description: "Deep dive into technical skills and problem-solving",
      icon: <Code className="w-6 h-6" />,
      duration: "45-60 min",
      cost: 20,
      color: "bg-green-500"
    },
    {
      id: "hr",
      name: "HR Panel",
      description: "Company policies, benefits, and general HR questions",
      icon: <Users className="w-6 h-6" />,
      duration: "20-30 min",
      cost: 10,
      color: "bg-purple-500"
    },
    {
      id: "mixed",
      name: "Mixed Panel",
      description: "Combination of behavioral, technical, and HR questions",
      icon: <Target className="w-6 h-6" />,
      duration: "60-75 min",
      cost: 25,
      color: "bg-orange-500"
    }
  ];

  const upcomingInterviews = [
    {
      id: 1,
      type: "Technical Panel",
      subject: "Software Engineering",
      date: "2024-01-20",
      time: "2:00 PM",
      status: "scheduled"
    },
    {
      id: 2,
      type: "Behavioral Panel",
      subject: "Product Management",
      date: "2024-01-22",
      time: "10:30 AM",
      status: "confirmed"
    }
  ];

  const recentPanels = [
    {
      id: 1,
      type: "Mixed Panel",
      subject: "Data Science",
      score: 87,
      duration: "65 min",
      date: "2024-01-15",
      feedback: "Excellent technical knowledge, good communication skills"
    },
    {
      id: 2,
      type: "HR Panel",
      subject: "Marketing",
      score: 92,
      duration: "25 min",
      date: "2024-01-10",
      feedback: "Great cultural fit, strong interpersonal skills"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Interview Panel</h1>
        <p className="text-cyan-200">Practice with multiple interview panel formats and get comprehensive feedback</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Panel Selection */}
        <div className="lg:col-span-2 space-y-6">
          {/* Panel Types */}
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Users className="w-6 h-6" />
                <span>Select Interview Panel Type</span>
              </CardTitle>
              <CardDescription className="text-gray-300">
                Choose the type of interview panel you want to practice with
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {panelTypes.map((panel) => (
                  <div
                    key={panel.id}
                    onClick={() => setSelectedPanel(panel.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      selectedPanel === panel.id
                        ? 'border-cyan-400 bg-cyan-400/10'
                        : 'border-white/20 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-12 h-12 rounded-lg ${panel.color} flex items-center justify-center text-white`}>
                        {panel.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-1">{panel.name}</h3>
                        <p className="text-sm text-gray-400 mb-2">{panel.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-xs text-gray-300">
                            <Clock className="w-3 h-3" />
                            <span>{panel.duration}</span>
                          </div>
                          <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                            {panel.cost} coins
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Interview Configuration */}
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Interview Configuration</CardTitle>
              <CardDescription className="text-gray-300">
                Set up your interview parameters
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Experience Level" />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((level) => (
                      <SelectItem key={level} value={level}>{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Select value={selectedSubLevel} onValueChange={setSelectedSubLevel}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Interview Focus" />
                </SelectTrigger>
                <SelectContent>
                  {subLevels.map((subLevel) => (
                    <SelectItem key={subLevel} value={subLevel}>{subLevel}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 text-lg font-semibold"
                disabled={!selectedSubject || !selectedLevel || !selectedSubLevel || !selectedPanel}
              >
                <Play className="w-5 h-5 mr-2" />
                Start Panel Interview ({panelTypes.find(p => p.id === selectedPanel)?.cost || 0} Coins)
              </Button>
            </CardContent>
          </Card>

          {/* Recent Panel Results */}
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Recent Panel Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPanels.map((panel) => (
                  <div key={panel.id} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{panel.type}</Badge>
                        <Badge variant="outline">{panel.subject}</Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">{panel.score}%</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                      <span>{panel.duration}</span>
                      <span>{panel.date}</span>
                    </div>
                    <p className="text-sm text-gray-300">{panel.feedback}</p>
                    <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 mt-2">
                      View Detailed Report
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Interviews */}
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Scheduled Interviews</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingInterviews.map((interview) => (
                <div key={interview.id} className="p-3 bg-white/5 rounded-lg">
                  <div className="font-medium text-white mb-1">{interview.type}</div>
                  <div className="text-sm text-gray-400 mb-2">{interview.subject}</div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-300">{interview.date} at {interview.time}</span>
                    <Badge 
                      variant={interview.status === 'confirmed' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {interview.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Panel Tips */}
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Brain className="w-5 h-5" />
                <span>Panel Interview Tips</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span>Address all panel members during your responses</span>
              </div>
              <div className="flex items-start space-x-2">
                <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span>Make eye contact with each interviewer</span>
              </div>
              <div className="flex items-start space-x-2">
                <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span>Be prepared for different questioning styles</span>
              </div>
              <div className="flex items-start space-x-2">
                <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span>Ask questions to each panel member</span>
              </div>
            </CardContent>
          </Card>

          {/* Performance Stats */}
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Panel Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Panel Interviews</span>
                <span className="font-bold text-white">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Avg Panel Score</span>
                <span className="font-bold text-green-400">89%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Best Panel Type</span>
                <span className="font-bold text-blue-400">Technical</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Total Time</span>
                <span className="font-bold text-purple-400">6.2 hours</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InterviewPanel;
