
import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "10 AI Interview Tips That Will Land You Your Dream Job",
      excerpt: "Discover the secrets to acing AI-powered interviews with these proven strategies from industry experts.",
      author: "Sarah Johnson",
      date: "2024-02-15",
      readTime: "5 min read",
      category: "Interview Tips",
      image: "🎯"
    },
    {
      id: 2,
      title: "How AI is Revolutionizing the Hiring Process",
      excerpt: "Explore how artificial intelligence is transforming recruitment and what it means for job seekers.",
      author: "Michael Chen",
      date: "2024-02-10",
      readTime: "8 min read",
      category: "Industry Insights",
      image: "🚀"
    },
    {
      id: 3,
      title: "Building Confidence for Virtual Interviews",
      excerpt: "Master the art of virtual interviews with practical tips for body language, setup, and communication.",
      author: "Emily Rodriguez",
      date: "2024-02-05",
      readTime: "6 min read",
      category: "Skills Development",
      image: "💪"
    },
    {
      id: 4,
      title: "The Psychology Behind Successful Interviews",
      excerpt: "Understand the psychological aspects of interviews and how to leverage them for success.",
      author: "Dr. James Wilson",
      date: "2024-01-28",
      readTime: "10 min read",
      category: "Psychology",
      image: "🧠"
    },
    {
      id: 5,
      title: "Resume Optimization in the Age of AI",
      excerpt: "Learn how to optimize your resume for AI-powered applicant tracking systems and recruiters.",
      author: "Lisa Park",
      date: "2024-01-20",
      readTime: "7 min read",
      category: "Resume Tips",
      image: "📄"
    },
    {
      id: 6,
      title: "Common Interview Mistakes and How to Avoid Them",
      excerpt: "Identify and avoid the most common interview mistakes that could cost you your next job opportunity.",
      author: "David Thompson",
      date: "2024-01-15",
      readTime: "6 min read",
      category: "Interview Tips",
      image: "⚠️"
    }
  ];

  const categories = ["All", "Interview Tips", "Industry Insights", "Skills Development", "Psychology", "Resume Tips"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Interview Success <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, tips, and strategies to help you master interviews and advance your career.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="hover:scale-105 transition-transform duration-200"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-6xl mb-4 text-center">{post.image}</div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="group-hover:bg-blue-100">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-4 group-hover:bg-blue-600 transition-colors duration-300"
                    variant="outline"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
