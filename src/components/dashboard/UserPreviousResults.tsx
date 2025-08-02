
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { 
  BarChart3, 
  Calendar, 
  Clock, 
  Play, 
  Download, 
  Eye, 
  Filter,
  TrendingUp,
  Award,
  Target,
  Search
} from "lucide-react";

const UserPreviousResults = () => {
  const [filterType, setFilterType] = useState("all");
  const [filterSubject, setFilterSubject] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const interviewResults = [
    {
      id: 1,
      type: "Technical Interview",
      subject: "Software Engineering",
      level: "Mid Level",
      subLevel: "System Design",
      score: 89,
      duration: "52 min",
      date: "2024-01-20",
      status: "completed",
      strengths: ["Problem Solving", "System Architecture", "Scalability"],
      improvements: ["Database Design", "Caching Strategies"],
      feedback: "Excellent approach to system design. Showed strong understanding of microservices architecture and load balancing.",
      videoUrl: "#",
      reportUrl: "#"
    },
    {
      id: 2,
      type: "Panel Interview",
      subject: "Product Management",
      level: "Senior Level",
      subLevel: "Behavioral",
      score: 85,
      duration: "45 min",
      date: "2024-01-18",
      status: "completed",
      strengths: ["Leadership", "Strategic Thinking", "Communication"],
      improvements: ["Data Analysis", "Stakeholder Management"],
      feedback: "Strong leadership qualities demonstrated. Good strategic thinking but could improve on data-driven decision making.",
      videoUrl: "#",
      reportUrl: "#"
    },
    {
      id: 3,
      type: "JD/Resume Interview",
      subject: "Data Science",
      level: "Entry Level",
      subLevel: "Technical",
      score: 78,
      duration: "40 min",
      date: "2024-01-15",
      status: "completed",
      strengths: ["Python", "Machine Learning", "Statistical Analysis"],
      improvements: ["Deep Learning", "MLOps", "Big Data"],
      feedback: "Good foundational knowledge in ML. Needs to strengthen deep learning concepts and practical deployment experience.",
      videoUrl: "#",
      reportUrl: "#"
    },
    {
      id: 4,
      type: "Technical Interview",
      subject: "Software Engineering",
      level: "Senior Level",
      subLevel: "Coding",
      score: 94,
      duration: "48 min",
      date: "2024-01-12",
      status: "completed",
      strengths: ["Algorithm Design", "Code Quality", "Problem Analysis"],
      improvements: ["Time Complexity Optimization"],
      feedback: "Outstanding coding skills and problem-solving approach. Clean, efficient code with excellent documentation.",
      videoUrl: "#",
      reportUrl: "#"
    },
    {
      id: 5,
      type: "Panel Interview",
      subject: "Marketing",
      level: "Mid Level",
      subLevel: "Case Study",
      score: 82,
      duration: "55 min",
      date: "2024-01-10",
      status: "completed",
      strengths: ["Market Analysis", "Campaign Strategy", "Creative Thinking"],
      improvements: ["Digital Marketing", "ROI Analysis"],
      feedback: "Creative approach to marketing challenges. Strong analytical skills but needs more focus on digital channels.",
      videoUrl: "#",
      reportUrl: "#"
    },
    {
      id: 6,
      type: "HR Panel",
      subject: "Human Resources",
      level: "Entry Level",
      subLevel: "Behavioral",
      score: 76,
      duration: "35 min",
      date: "2024-01-08",
      status: "completed",
      strengths: ["Empathy", "Communication", "Conflict Resolution"],
      improvements: ["HR Policies", "Legal Compliance", "Performance Management"],
      feedback: "Great interpersonal skills and emotional intelligence. Needs to develop technical HR knowledge and policy understanding.",
      videoUrl: "#",
      reportUrl: "#"
    }
  ];

  const performanceStats = {
    totalInterviews: 15,
    averageScore: 85,
    bestScore: 94,
    totalTimeSpent: "12.5 hours",
    improvementRate: "+12%",
    strongestArea: "Problem Solving",
    weakestArea: "System Design"
  };

  const filteredResults = interviewResults.filter(result => {
    const matchesType = filterType === "all" || result.type.toLowerCase().includes(filterType.toLowerCase());
    const matchesSubject = filterSubject === "all" || result.subject === filterSubject;
    const matchesSearch = searchQuery === "" || 
      result.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.level.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesType && matchesSubject && matchesSearch;
  });

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-400";
    if (score >= 80) return "text-blue-400";
    if (score >= 70) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreBadgeColor = (score: number) => {
    if (score >= 90) return "bg-green-500/20 text-green-400 border-green-500/50";
    if (score >= 80) return "bg-blue-500/20 text-blue-400 border-blue-500/50";
    if (score >= 70) return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
    return "bg-red-500/20 text-red-400 border-red-500/50";
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Previous Interview Results</h1>
        <p className="text-cyan-200">Track your progress and review detailed feedback from all your interview sessions</p>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <Card className="bg-white/10 border-white/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-white">{performanceStats.totalInterviews}</div>
            <div className="text-xs text-gray-300">Total Interviews</div>
          </CardContent>
        </Card>
        <Card className="bg-white/10 border-white/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">{performanceStats.averageScore}%</div>
            <div className="text-xs text-gray-300">Average Score</div>
          </CardContent>
        </Card>
        <Card className="bg-white/10 border-white/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-400">{performanceStats.bestScore}%</div>
            <div className="text-xs text-gray-300">Best Score</div>
          </CardContent>
        </Card>
        <Card className="bg-white/10 border-white/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">{performanceStats.totalTimeSpent}</div>
            <div className="text-xs text-gray-300">Time Practiced</div>
          </CardContent>
        </Card>
        <Card className="bg-white/10 border-white/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-400">{performanceStats.improvementRate}</div>
            <div className="text-xs text-gray-300">Improvement</div>
          </CardContent>
        </Card>
        <Card className="bg-white/10 border-white/20">
          <CardContent className="p-4 text-center">
            <div className="text-sm font-bold text-green-400">{performanceStats.strongestArea}</div>
            <div className="text-xs text-gray-300">Strongest Area</div>
          </CardContent>
        </Card>
        <Card className="bg-white/10 border-white/20">
          <CardContent className="p-4 text-center">
            <div className="text-sm font-bold text-red-400">{performanceStats.weakestArea}</div>
            <div className="text-xs text-gray-300">Needs Work</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="bg-white/10 border-white/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Filter className="w-5 h-5" />
            <span>Filter Results</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search interviews..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
            </div>
            
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Interview Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="technical">Technical Interview</SelectItem>
                <SelectItem value="panel">Panel Interview</SelectItem>
                <SelectItem value="jd">JD/Resume Interview</SelectItem>
                <SelectItem value="hr">HR Panel</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterSubject} onValueChange={setFilterSubject}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                <SelectItem value="Software Engineering">Software Engineering</SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
                <SelectItem value="Product Management">Product Management</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Human Resources">Human Resources</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Download className="w-4 h-4 mr-2" />
              Export Results
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results List */}
      <Card className="bg-white/10 border-white/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-6 h-6" />
              <span>Interview History ({filteredResults.length} results)</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredResults.map((result) => (
              <div key={result.id} className="border border-white/20 rounded-lg p-4 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline" className="text-blue-400 border-blue-400">
                        {result.type}
                      </Badge>
                      <Badge variant="secondary">{result.subject}</Badge>
                      <Badge variant="outline">{result.level}</Badge>
                      <Badge variant="outline">{result.subLevel}</Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{result.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{result.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold ${getScoreColor(result.score)} mb-1`}>
                      {result.score}%
                    </div>
                    <Badge className={getScoreBadgeColor(result.score)}>
                      {result.score >= 90 ? 'Excellent' : 
                       result.score >= 80 ? 'Good' : 
                       result.score >= 70 ? 'Average' : 'Needs Improvement'}
                    </Badge>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-sm text-gray-300 italic">"{result.feedback}"</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-xs font-medium text-green-400 mb-1">Key Strengths</div>
                    <div className="flex flex-wrap gap-1">
                      {result.strengths.map((strength, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs text-green-400 border-green-400/50">
                          {strength}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-yellow-400 mb-1">Areas for Improvement</div>
                    <div className="flex flex-wrap gap-1">
                      {result.improvements.map((improvement, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs text-yellow-400 border-yellow-400/50">
                          {improvement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                      <Eye className="w-4 h-4 mr-1" />
                      View Video
                    </Button>
                    <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300">
                      <Download className="w-4 h-4 mr-1" />
                      Download Report
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
                    <Play className="w-4 h-4 mr-1" />
                    Retake Interview
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserPreviousResults;
