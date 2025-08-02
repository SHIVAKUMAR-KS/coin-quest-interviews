
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BarChart3, FileText, Target, TrendingUp, AlertTriangle, CheckCircle, Upload, RefreshCw } from "lucide-react";

const ResumeJDScore = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);

  const handleAnalyzeDocuments = () => {
    setIsAnalyzing(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 12;
      setAnalysisProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsAnalyzing(false);
        setAnalysisProgress(0);
      }
    }, 300);
  };

  const resumeScores = [
    {
      id: 1,
      resumeName: "Software_Engineer_Resume.pdf",
      overallScore: 87,
      uploadDate: "2024-01-15",
      analysis: {
        skills: { score: 92, status: "excellent", details: "Strong technical skills alignment" },
        experience: { score: 85, status: "good", details: "Relevant experience with growth potential" },
        education: { score: 78, status: "average", details: "Education meets basic requirements" },
        keywords: { score: 94, status: "excellent", details: "Excellent keyword optimization" },
        formatting: { score: 89, status: "good", details: "Professional formatting with minor improvements needed" }
      },
      strengths: ["React/Node.js expertise", "Strong problem-solving skills", "Leadership experience"],
      improvements: ["Add more quantifiable achievements", "Include system design experience", "Expand on leadership roles"]
    },
    {
      id: 2,
      resumeName: "Product_Manager_Resume.pdf",
      overallScore: 76,
      uploadDate: "2024-01-12",
      analysis: {
        skills: { score: 82, status: "good", details: "Good product management skills" },
        experience: { score: 74, status: "average", details: "Experience aligns but could be stronger" },
        education: { score: 85, status: "good", details: "Strong educational background" },
        keywords: { score: 68, status: "average", details: "Needs better keyword optimization" },
        formatting: { score: 79, status: "average", details: "Formatting is acceptable but could be improved" }
      },
      strengths: ["Strategic thinking", "Data analysis", "Cross-functional collaboration"],
      improvements: ["Add more PM-specific keywords", "Include metrics and KPIs", "Highlight product launch successes"]
    }
  ];

  const jdScores = [
    {
      id: 1,
      jdName: "Senior_Developer_JD.pdf",
      overallScore: 92,
      uploadDate: "2024-01-15",
      analysis: {
        clarity: { score: 95, status: "excellent", details: "Very clear job requirements" },
        requirements: { score: 88, status: "good", details: "Well-defined technical requirements" },
        responsibilities: { score: 93, status: "excellent", details: "Clear role responsibilities" },
        keywords: { score: 91, status: "excellent", details: "Good use of relevant keywords" },
        attractiveness: { score: 89, status: "good", details: "Appealing to candidates" }
      },
      strengths: ["Clear technical stack", "Well-defined growth path", "Competitive benefits"],
      improvements: ["Add more about company culture", "Include diversity statement", "Specify remote work options"]
    }
  ];

  const matchingResults = [
    {
      id: 1,
      resumeName: "Software_Engineer_Resume.pdf",
      jdName: "Senior_Developer_JD.pdf",
      matchScore: 89,
      date: "2024-01-15",
      keyMatches: ["React", "Node.js", "AWS", "Agile", "Team Leadership"],
      gaps: ["GraphQL", "Docker", "System Design"],
      recommendations: [
        "Add GraphQL experience to resume",
        "Highlight containerization knowledge",
        "Include system design projects"
      ]
    },
    {
      id: 2,
      resumeName: "Product_Manager_Resume.pdf",
      jdName: "PM_Job_Description.pdf",
      matchScore: 78,
      date: "2024-01-12",
      keyMatches: ["Product Strategy", "Analytics", "Roadmapping"],
      gaps: ["A/B Testing", "User Research", "SQL"],
      recommendations: [
        "Add A/B testing experience",
        "Include user research methodologies",
        "Highlight data analysis skills"
      ]
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-400";
    if (score >= 70) return "text-yellow-400";
    return "text-red-400";
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent":
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case "good":
        return <CheckCircle className="w-4 h-4 text-blue-400" />;
      case "average":
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-red-400" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Resume and JD Score</h1>
          <p className="text-cyan-200">AI-powered analysis of your resume and job descriptions with detailed scoring</p>
        </div>
        
        <Button
          onClick={handleAnalyzeDocuments}
          disabled={isAnalyzing}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
        >
          {isAnalyzing ? (
            <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <BarChart3 className="w-4 h-4 mr-2" />
          )}
          {isAnalyzing ? 'Analyzing...' : 'Re-analyze Documents'}
        </Button>
      </div>

      {/* Analysis Progress */}
      {isAnalyzing && (
        <Card className="bg-white/10 border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-2">
              <BarChart3 className="w-5 h-5 text-purple-400" />
              <span className="text-white font-medium">AI Analysis in Progress...</span>
            </div>
            <Progress value={analysisProgress} className="w-full" />
            <p className="text-sm text-purple-300 mt-2">Analyzing documents and generating scores... {analysisProgress}%</p>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Resume Scores */}
        <div className="space-y-6">
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <FileText className="w-6 h-6 text-blue-400" />
                <span>Resume Scores</span>
              </CardTitle>
              <CardDescription className="text-gray-300">
                Detailed analysis of your resume performance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {resumeScores.map((resume) => (
                <div key={resume.id} className="border border-white/20 rounded-lg p-4 bg-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-white truncate">{resume.resumeName}</h3>
                      <p className="text-xs text-gray-400">{resume.uploadDate}</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${getScoreColor(resume.overallScore)}`}>
                        {resume.overallScore}%
                      </div>
                      <Badge variant="outline" className="text-xs">Overall Score</Badge>
                    </div>
                  </div>

                  {/* Detailed Breakdown */}
                  <div className="space-y-3 mb-4">
                    {Object.entries(resume.analysis).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(value.status)}
                          <span className="text-sm text-white capitalize">{key}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className={`font-semibold ${getScoreColor(value.score)}`}>
                            {value.score}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Strengths & Improvements */}
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <div className="text-xs font-medium text-green-400 mb-1">Strengths</div>
                      <div className="flex flex-wrap gap-1">
                        {resume.strengths.map((strength, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs text-green-400 border-green-400/50">
                            {strength}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-yellow-400 mb-1">Improvements</div>
                      <div className="space-y-1">
                        {resume.improvements.map((improvement, idx) => (
                          <div key={idx} className="text-xs text-gray-300 flex items-start space-x-1">
                            <span className="text-yellow-400">•</span>
                            <span>{improvement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* JD Scores */}
        <div className="space-y-6">
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Target className="w-6 h-6 text-green-400" />
                <span>Job Description Scores</span>
              </CardTitle>
              <CardDescription className="text-gray-300">
                Analysis of job description effectiveness
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {jdScores.map((jd) => (
                <div key={jd.id} className="border border-white/20 rounded-lg p-4 bg-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-white truncate">{jd.jdName}</h3>
                      <p className="text-xs text-gray-400">{jd.uploadDate}</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${getScoreColor(jd.overallScore)}`}>
                        {jd.overallScore}%
                      </div>
                      <Badge variant="outline" className="text-xs">JD Quality</Badge>
                    </div>
                  </div>

                  {/* Detailed Breakdown */}
                  <div className="space-y-3 mb-4">
                    {Object.entries(jd.analysis).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(value.status)}
                          <span className="text-sm text-white capitalize">{key}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className={`font-semibold ${getScoreColor(value.score)}`}>
                            {value.score}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Strengths & Improvements */}
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <div className="text-xs font-medium text-green-400 mb-1">Strengths</div>
                      <div className="flex flex-wrap gap-1">
                        {jd.strengths.map((strength, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs text-green-400 border-green-400/50">
                            {strength}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-yellow-400 mb-1">Improvements</div>
                      <div className="space-y-1">
                        {jd.improvements.map((improvement, idx) => (
                          <div key={idx} className="text-xs text-gray-300 flex items-start space-x-1">
                            <span className="text-yellow-400">•</span>
                            <span>{improvement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Resume-JD Matching Results */}
      <Card className="bg-white/10 border-white/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <TrendingUp className="w-6 h-6 text-purple-400" />
            <span>Resume-JD Matching Analysis</span>
          </CardTitle>
          <CardDescription className="text-gray-300">
            How well your resumes match with job descriptions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {matchingResults.map((match) => (
              <div key={match.id} className="border border-white/20 rounded-lg p-4 bg-white/5">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm">
                    <div className="text-white font-medium">{match.resumeName}</div>
                    <div className="text-gray-400 text-xs">vs {match.jdName}</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xl font-bold ${getScoreColor(match.matchScore)}`}>
                      {match.matchScore}%
                    </div>
                    <Badge variant="outline" className="text-xs">Match Score</Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-xs font-medium text-green-400 mb-1">Key Matches</div>
                    <div className="flex flex-wrap gap-1">
                      {match.keyMatches.map((matchItem, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs text-green-400 border-green-400/50">
                          {matchItem}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-medium text-red-400 mb-1">Missing Skills</div>
                    <div className="flex flex-wrap gap-1">
                      {match.gaps.map((gap, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs text-red-400 border-red-400/50">
                          {gap}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-medium text-blue-400 mb-1">AI Recommendations</div>
                    <div className="space-y-1">
                      {match.recommendations.slice(0, 2).map((rec, idx) => (
                        <div key={idx} className="text-xs text-gray-300 flex items-start space-x-1">
                          <span className="text-blue-400">•</span>
                          <span>{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{match.date}</span>
                    <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 text-xs">
                      Detailed Analysis
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeJDScore;
