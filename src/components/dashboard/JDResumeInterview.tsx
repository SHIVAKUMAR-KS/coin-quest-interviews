import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, MessageSquare, Star, Clock, Target, ChevronRight, Zap } from "lucide-react";

const JDResumeInterview = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jdFile, setJdFile] = useState<File | null>(null);
  const [jdText, setJdText] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const roles = [
    "Software Engineer", "Product Manager", "Data Scientist", 
    "UX Designer", "Marketing Manager", "Sales Executive"
  ];
  
  const levels = ["Entry Level", "Mid Level", "Senior Level", "Lead/Principal"];

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setResumeFile(file);
    }
  };

  const handleJDUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setJdFile(file);
    }
  };

  const handleStartAnalysis = () => {
    if ((resumeFile && jdFile) || (resumeFile && jdText)) {
      setAnalysisComplete(true);
    }
  };

  const mockAnalysis = {
    matchScore: 87,
    strengths: [
      "Strong technical background matches JD requirements",
      "Relevant experience in similar roles",
      "Educational background aligns well"
    ],
    gaps: [
      "Missing experience with specific cloud platforms",
      "Could benefit from more leadership experience"
    ],
    recommendations: [
      "Highlight your problem-solving abilities",
      "Prepare examples of teamwork and collaboration",
      "Practice explaining technical concepts simply"
    ]
  };

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-cyan-500/10 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <div className="relative z-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 animate-fade-in">JD/Resume Interview</h1>
        <p className="text-cyan-200 text-sm sm:text-base animate-fade-in">Upload your resume and job description for personalized interview preparation</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 relative z-10">
        {/* Upload Section */}
        <div className="xl:col-span-2 space-y-4 sm:space-y-6">
          {/* Resume Upload */}
          <Card className="bg-white/10 border-white/20 hover-scale animate-fade-in">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-white flex items-center space-x-2 text-lg sm:text-xl">
                <Upload className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Upload Resume</span>
              </CardTitle>
              <CardDescription className="text-gray-300 text-sm">
                Upload your resume in PDF, DOC, or DOCX format
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-white/30 rounded-lg p-4 sm:p-8 text-center hover:border-white/50 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeUpload}
                  className="hidden"
                  id="resume-upload"
                />
                <label htmlFor="resume-upload" className="cursor-pointer">
                  <FileText className="w-8 h-8 sm:w-12 sm:h-12 text-cyan-400 mx-auto mb-4" />
                  <p className="text-white mb-2 text-sm sm:text-base">
                    {resumeFile ? resumeFile.name : "Click to upload or drag and drop"}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm">PDF, DOC, DOCX up to 10MB</p>
                </label>
              </div>
              {resumeFile && (
                <div className="flex items-center space-x-2 text-green-400 text-sm animate-fade-in">
                  <FileText className="w-4 h-4" />
                  <span>Resume uploaded successfully</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Job Description */}
          <Card className="bg-white/10 border-white/20 hover-scale animate-fade-in">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-white flex items-center space-x-2 text-lg sm:text-xl">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Job Description</span>
              </CardTitle>
              <CardDescription className="text-gray-300 text-sm">
                Upload JD file or paste the job description text
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border-2 border-dashed border-white/30 rounded-lg p-4 sm:p-6 text-center hover:border-white/50 transition-colors">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleJDUpload}
                    className="hidden"
                    id="jd-upload"
                  />
                  <label htmlFor="jd-upload" className="cursor-pointer">
                    <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mx-auto mb-2" />
                    <p className="text-white text-xs sm:text-sm">
                      {jdFile ? jdFile.name : "Upload JD File"}
                    </p>
                  </label>
                </div>
                <div className="text-center flex items-center justify-center text-gray-400 text-sm">
                  OR
                </div>
              </div>
              <Textarea
                placeholder="Paste job description here..."
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px] text-sm"
                value={jdText}
                onChange={(e) => setJdText(e.target.value)}
              />
            </CardContent>
          </Card>

          {/* Interview Configuration */}
          <Card className="bg-white/10 border-white/20 hover-scale animate-fade-in">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-white text-lg sm:text-xl">Interview Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role} value={role}>{role}</SelectItem>
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
              
              <Button 
                onClick={handleStartAnalysis}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 sm:py-6 text-base sm:text-lg font-semibold hover-scale"
                disabled={!resumeFile || (!jdFile && !jdText) || !selectedRole || !selectedLevel}
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Start Analysis & Interview (25 Coins)
              </Button>
            </CardContent>
          </Card>

          {/* Analysis Results */}
          {analysisComplete && (
            <Card className="bg-white/10 border-white/20 animate-fade-in">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-white flex items-center justify-between text-lg sm:text-xl">
                  <span>Analysis Results</span>
                  <Badge className="bg-green-500 text-white text-lg sm:text-xl px-3 py-1">
                    {mockAnalysis.matchScore}%
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-semibold text-green-400 mb-3 text-sm sm:text-base">Strengths</h4>
                    <ul className="space-y-2">
                      {mockAnalysis.strengths.map((strength, index) => (
                        <li key={index} className="text-gray-300 text-xs sm:text-sm flex items-start">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-3 text-sm sm:text-base">Areas to Address</h4>
                    <ul className="space-y-2">
                      {mockAnalysis.gaps.map((gap, index) => (
                        <li key={index} className="text-gray-300 text-xs sm:text-sm flex items-start">
                          <Target className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                          {gap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-400 mb-3 text-sm sm:text-base">Interview Recommendations</h4>
                  <ul className="space-y-2">
                    {mockAnalysis.recommendations.map((rec, index) => (
                      <li key={index} className="text-gray-300 text-xs sm:text-sm flex items-start">
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 sm:py-6 text-base sm:text-lg font-semibold hover-scale">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Start Personalized Interview
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-4 sm:space-y-6">
          {/* Quick Stats */}
          <Card className="bg-white/10 border-white/20 animate-fade-in">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-base sm:text-lg">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm">JD Analyses</span>
                <span className="font-bold text-white">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm">Avg Match Score</span>
                <span className="font-bold text-green-400">84%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm">Interviews Done</span>
                <span className="font-bold text-blue-400">8</span>
              </div>
            </CardContent>
          </Card>

          {/* Recent Analysis */}
          <Card className="bg-white/10 border-white/20 animate-fade-in">
            <CardHeader className="pb-3">
              <CardTitle className="text-white flex items-center space-x-2 text-base sm:text-lg">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Recent Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { role: "Frontend Developer", score: 91, date: "2024-01-15" },
                { role: "Product Manager", score: 78, date: "2024-01-10" },
                { role: "UX Designer", score: 85, date: "2024-01-08" }
              ].map((item, index) => (
                <div key={index} className="p-3 bg-white/5 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-white text-sm">{item.role}</span>
                    <Badge variant="secondary" className="text-xs">{item.score}%</Badge>
                  </div>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="bg-white/10 border-white/20 animate-fade-in">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-base sm:text-lg">Interview Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span>Tailor your responses to match the JD keywords</span>
              </div>
              <div className="flex items-start space-x-2">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span>Use STAR method for behavioral questions</span>
              </div>
              <div className="flex items-start space-x-2">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span>Prepare questions about the role and company</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JDResumeInterview;
