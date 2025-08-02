
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Coins, 
  Play, 
  Upload, 
  FileText, 
  BarChart3, 
  User, 
  Clock,
  Star,
  TrendingUp,
  Award,
  Target
} from "lucide-react";

const DashboardSection = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedSubLevel, setSelectedSubLevel] = useState("");
  const [coinBalance, setCoinBalance] = useState(200);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

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

  const previousResults = [
    { id: 1, subject: "Software Engineering", level: "Mid Level", score: 85, duration: "45 min", date: "2024-01-15" },
    { id: 2, subject: "Data Science", level: "Senior Level", score: 78, duration: "50 min", date: "2024-01-10" },
    { id: 3, subject: "Product Management", level: "Entry Level", score: 92, duration: "40 min", date: "2024-01-05" }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadProgress(0);
        }
      }, 200);
    }
  };

  const buyCoinPackages = [
    { coins: 100, price: "$9.99", popular: false },
    { coins: 500, price: "$39.99", popular: true },
    { coins: 1000, price: "$69.99", popular: false }
  ];

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex!</h1>
              <p className="text-gray-600">Ready to ace your next interview?</p>
            </div>
          </div>
          
          {/* Coin Balance */}
          <Card className="bg-gradient-to-r from-yellow-50 to-amber-50 border-amber-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center">
                  <Coins className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-800">{coinBalance} Coins</div>
                  <div className="text-sm text-amber-600">Fuel Your Adventure</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Start Interview Section */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Play className="w-6 h-6 text-blue-600" />
                  <span>Start New Interview</span>
                </CardTitle>
                <CardDescription>
                  Select your preferred interview parameters and begin your AI-powered practice session.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Main Level" />
                    </SelectTrigger>
                    <SelectContent>
                      {levels.map((level) => (
                        <SelectItem key={level} value={level}>{level}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Select value={selectedSubLevel} onValueChange={setSelectedSubLevel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sub Level" />
                    </SelectTrigger>
                    <SelectContent>
                      {subLevels.map((subLevel) => (
                        <SelectItem key={subLevel} value={subLevel}>{subLevel}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 text-lg font-semibold"
                  disabled={!selectedSubject || !selectedLevel || !selectedSubLevel}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Interview (10 Coins)
                </Button>
              </CardContent>
            </Card>

            {/* Upload Section */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="w-6 h-6 text-green-600" />
                  <span>Resume & Job Description Upload</span>
                </CardTitle>
                <CardDescription>
                  Upload your documents for AI-powered analysis and personalized feedback.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">Upload Resume</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                      <input
                        type="file"
                        accept=".pdf,.docx,.doc"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label htmlFor="resume-upload" className="cursor-pointer">
                        <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Click to upload Resume</p>
                        <p className="text-xs text-gray-500">PDF, DOCX up to 10MB</p>
                      </label>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">Upload Job Description</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                      <input
                        type="file"
                        accept=".pdf,.docx,.doc,.txt"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="jd-upload"
                      />
                      <label htmlFor="jd-upload" className="cursor-pointer">
                        <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Click to upload Job Description</p>
                        <p className="text-xs text-gray-500">PDF, DOCX, TXT up to 10MB</p>
                      </label>
                    </div>
                  </div>
                </div>
                
                {isUploading && (
                  <div className="mt-4">
                    <Progress value={uploadProgress} className="w-full" />
                    <p className="text-sm text-gray-600 mt-2">Uploading... {uploadProgress}%</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Previous Results */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                  <span>Previous Interview Results</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {previousResults.map((result) => (
                    <div key={result.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge variant="secondary">{result.subject}</Badge>
                          <Badge variant="outline">{result.level}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {result.duration}
                          </span>
                          <span>{result.date}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{result.score}%</div>
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Buy Coins */}
            <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-amber-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-amber-800">Fuel Your Adventure</CardTitle>
                <CardDescription className="text-amber-600">
                  Load Up on Coins Today!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {buyCoinPackages.map((pack, index) => (
                  <div key={index} className={`p-4 rounded-lg border-2 ${pack.popular ? 'border-amber-400 bg-amber-100' : 'border-amber-200 bg-white'} relative`}>
                    {pack.popular && (
                      <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-amber-500">
                        Popular
                      </Badge>
                    )}
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-lg text-amber-800">{pack.coins} Coins</div>
                        <div className="text-amber-600">{pack.price}</div>
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-amber-500 hover:bg-amber-600"
                        onClick={() => setCoinBalance(prev => prev + pack.coins)}
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Performance Stats */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  <span>Performance Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Average Score</span>
                  <span className="font-bold text-green-600">85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Interviews Completed</span>
                  <span className="font-bold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Time Spent</span>
                  <span className="font-bold">8.5 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Streak</span>
                  <span className="font-bold text-orange-600">5 days</span>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">Top Skills</span>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mr-2">Communication</Badge>
                    <Badge variant="secondary" className="mr-2">Problem Solving</Badge>
                    <Badge variant="secondary">Leadership</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
