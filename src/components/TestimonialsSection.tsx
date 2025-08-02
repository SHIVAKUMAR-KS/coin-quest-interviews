
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "Google",
      image: "👩‍💻",
      rating: 5,
      quote: "CoinQuest Interviews helped me land my dream job at Google! The AI feedback was incredibly detailed and helped me identify exactly what I needed to improve.",
      improvement: "3x Faster Learning",
      stat: "Reduced prep time by 50%"
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager",
      company: "Meta",
      image: "👨‍💼",
      rating: 5,
      quote: "The panel interview simulations were game-changing. I felt completely prepared for my actual interviews and the confidence boost was incredible.",
      improvement: "95% Success Rate",
      stat: "Aced 19 out of 20 interviews"
    },
    {
      name: "Emily Johnson",
      role: "Data Scientist",
      company: "Netflix",
      image: "👩‍🔬",
      rating: 5,
      quote: "The real-time analytics showed me exactly where I was struggling. The personalized feedback helped me improve my technical communication skills dramatically.",
      improvement: "2x Better Performance",
      stat: "Increased interview scores by 40%"
    },
    {
      name: "Alex Park",
      role: "UX Designer",
      company: "Apple",
      image: "🎨",
      rating: 5,
      quote: "I was nervous about behavioral interviews, but the AI coaching helped me structure my answers perfectly. The STAR method became second nature!",
      improvement: "Confidence Boost",
      stat: "From anxiety to excitement"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories from 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Real People</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI-powered platform has transformed careers and helped thousands land their dream jobs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-500 border-0 bg-white hover:scale-105 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200 group-hover:text-blue-300 transition-colors duration-300" />
                
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Improvement Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {testimonial.improvement}
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.stat}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
            <div className="text-gray-600">Interview Success Rate</div>
            <div className="text-sm text-gray-500 mt-2">Based on 10,000+ interviews</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-indigo-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
            <div className="text-sm text-gray-500 mt-2">From 5,000+ reviews</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-purple-600 mb-2">50%</div>
            <div className="text-gray-600">Faster Job Placement</div>
            <div className="text-sm text-gray-500 mt-2">Compared to traditional prep</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
