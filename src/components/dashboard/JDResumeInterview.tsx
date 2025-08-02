
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { FileText, Upload, Play, Check, AlertCircle, Download, Eye } from "lucide-react";

const JDResumeInterview = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jdFile, setJDFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [interviewReady, setInterviewReady] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'resume' | 'jd') => {
    const file = event.target.files?.[0];
    if (file) {
      if (type === 'resume') {
        setResumeFile(file);
      } else {
        setJDFile(file);
      }
      
      setIsUploading(true);
      let progress = 0;
      const interval = setInterval(() => {
        progress += 15;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadProgress(0);
          
          // Simulate analysis completion after upload
          setTimeout(() => {
            setAnalysisComplete(true);
            setInterviewReady(resumeFile && jdFile);
          }, 1000);
        }
      }, 200);
    }
  };

  const uploadedDocuments = [
    {
      id: 1,
      name: "Software_Engineer_Resume.pdf",
      type: "Resume",
      uploadDate: "2024-01-15",
      status: "analyzed",
      matchScore: 87
    },
    {
      id: 2,
      name: "Senior_Developer_JD.pdf",
      type: "Job Description",
      uploadDate: "2024-01-15",
      status: "analyzed",
      relevanceScore: 92
    },
    {
      id: 3,
      name: "Product_Manager_Resume.pdf",
      type: "Resume",
      uploadDate: "2024-01-12",
      status: "processed",
      matchScore: 78
    }
  ];

  const interviewHistory = [
    {
      id: 1,
      resumeFile: "Software_Engineer_Resume.pdf",
      jdFile: "Senior_Developer_JD.pdf",
      score: 89,
      duration: "42 min",
      date: "2024-01-15",
      matchPercentage: 87,
      keyStrengths: ["React", "Node.js", "Problem Solving"],
      improvements: ["System Design", "Leadership"]
    },
    {
      id: 2,
      resumeFile: "Product_Manager_Resume.pdf",
      jdFile: "PM_Job_Description.pdf",
      score: 76,
      duration: "38 min",
      date: "2024-01-12",
      matchPercentage: 78,
      keyStrengths: ["Strategy", "Analytics", "Communication"],
      improvements: ["Technical Knowledge", "Stakeholder Management"]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">JD/Resume Interview</h1>
        <p className="text-cyan-200">Upload your resume and job description for personalized AI-powered interview practice</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Upload Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upload Section */}
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Upload className="w-6 h-6" />
                <span>Document Upload</span>
              </CardTitle>
              <CardDescription className="text-gray-300">
                Upload your resume and target job description for AI analysis and personalized interview questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Resume Upload */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-white">Upload Resume</label>
                  <div className="border-2 border-dashed border-gray-400/50 rounded-lg p-6 text-center hover:border-blue-400/70 transition-colors cursor-pointer bg-white/5">
                    <input
                      type="file"
                      accept=".pdf,.docx,.doc"
                      onChange={(e) => handleFileUpload(e, 'resume')}
                      className="hidden"
                      id="resume-upload"
                    />
                    <label htmlFor="resume-upload" className="cursor-pointer">
                      {resumeFile ? (
                        <div className="space-y-2">
                          <Check className="w-8 h-8 text-green-400 mx-auto" />
                          <p className="text-sm text-green-400 font-medium">{resumeFile.name}</p>
                          <p className="text-xs text-gray-400">Successfully uploaded</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <FileText className="w-8 h-8 text-gray-400 mx-auto" />
                          <p className="text-sm text-white">Click to upload Resume</p>
                          <p className="text-xs text-gray-400">PDF, DOCX up to 10MB</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
                
                {/* JD Upload */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-white">Upload Job Description</label>
                  <div className="border-2 border-dashed border-gray-400/50 rounded-lg p-6 text-center hover:border-blue-400/70 transition-colors cursor-pointer bg-white/5">
                    <input
                      type="file"
                      accept=".pdf,.docx,.doc,.txt"
                      onChange={(e) => handleFileUpload(e, 'jd')}
                      className="hidden"
                      id="jd-upload"
                    />
                    <label htmlFor="jd-upload" className="cursor-pointer">
                      {jdFile ? (
                        <div className="space-y-2">
                          <Check className="w-8 h-8 text-green-400 mx-auto" />
                          <p className="text-sm text-green-400 font-medium">{jdFile.name}</p>
                          <p className="text-xs text-gray-400">Successfully uploaded</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <FileText className="w-8 h-8 text-gray-400 mx-auto" />
                          <p className="text-sm text-white">Click to upload Job Description</p>
                          <p className="text-xs text-gray-400">PDF, DOCX, TXT up to 10MB</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              </div>
              
              {/* Upload Progress */}
              {isUploading && (
                <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <div className="flex items-center space-x-3 mb-2">
                    <Upload className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium">Uploading and analyzing documents...</span>
                  </div>
                  <Progress value={uploadProgress} className="w-full" />
                  <p className="text-sm text-blue-300 mt-2">Processing... {uploadProgress}%</p>
                </div>
              )}

              {/* Analysis Complete */}
              {analysisComplete && (resumeFile || jdFile) && (
                <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <div className="flex items-center space-x-3 mb-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">Documents analyzed successfully!</span>
                  </div>
                  <p className="text-sm text-green-300">AI has analyzed your documents and created personalized interview questions.</p>
                </div>
              )}

              {/* Start Interview Button */}
              <Button 
                className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-6 text-lg font-semibold"
                disabled={!resumeFile || !jdFile || !analysisComplete}
              >
                <Play className="w-5 h-5 mr-2" />
                Start Personalized Interview (12 Coins)
              </Button>
            </CardContent>
          </Card>

          {/* Interview History */}
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Interview History</CardTitle>
              <CardDescription className="text-gray-300">
                Previous JD/Resume based interviews and their results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {interviewHistory.map((interview) => (
                  <div key={interview.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-blue-400 border-blue-400">
                            Match: {interview.matchPercentage}%
                          </Badge>
                          <Badge variant="secondary">Score: {interview.score}%</Badge>
                        </div>
                        <div className="text-sm text-gray-400">
                          {interview.resumeFile} × {interview.jdFile}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">{interview.score}%</div>
                        <div className="text-xs text-gray-400">{interview.duration}</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <div className="text-xs font-medium text-green-400 mb-1">Key Strengths</div>
                        <div className="flex flex-wrap gap-1">
                          {interview.keyStrengths.map((strength, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs text-green-400 border-green-400/50">
                              {strength}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-yellow-400 mb-1">Areas to Improve</div>
                        <div className="flex flex-wrap gap-1">
                          {interview.improvements.map((improvement, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs text-yellow-400 border-yellow-400/50">
                              {improvement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{interview.date}</span>
                      <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                        <Eye className="w-4 h-4 mr-1" />
                        View Report
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Document Library */}
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Document Library</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {uploadedDocuments.map((doc) => (
                <div key={doc.id} className="p-3 bg-white/5 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white truncate">{doc.name}</div>
                      <div className="text-xs text-gray-400">{doc.type}</div>
                    </div>
                    <Badge 
                      variant={doc.status === 'analyzed' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {doc.status}
                    </Badge>
                  </div>
                  {doc.matchScore && (
                    <div className="text-xs text-green-400 mb-1">
                      Match Score: {doc.matchScore}%
                    </div>
                  )}
                  {doc.relevanceScore && (
                    <div className="text-xs text-blue-400 mb-1">
                      Relevance: {doc.relevanceScore}%
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{doc.uploadDate}</span>
                    <Button variant="ghost" size="sm" className="text-xs p-1 h-6">
                      <Download className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <AlertCircle className="w-5 h-5" />
                <span>Upload Tips</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Upload complete, updated resumes for best results</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Use detailed job descriptions with requirements</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Supported formats: PDF, DOCX, DOC, TXT</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Maximum file size: 10MB per document</span>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white">JD/Resume Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Documents Uploaded</span>
                <span className="font-bold text-white">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Avg Match Score</span>
                <span className="font-bold text-green-400">84%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Interviews Completed</span>
                <span className="font-bold text-blue-400">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Best Score</span>
                <span className="font-bold text-purple-400">94%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JDResumeInterview;
