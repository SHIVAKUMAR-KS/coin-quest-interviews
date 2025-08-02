
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "How long do AI interviews typically take?",
      answer: "AI interviews typically range from 15-60 minutes, depending on the role and interview type. Behavioral interviews are usually shorter (15-30 min), while technical interviews can be longer (30-60 min). You can practice as many times as you want!"
    },
    {
      question: "Is it fair to use AI for interview assessments?",
      answer: "Absolutely! AI provides unbiased, consistent evaluation criteria for all candidates. It removes human bias and focuses purely on your responses, skills, and communication abilities. The AI is trained on thousands of successful interviews to provide fair, accurate feedback."
    },
    {
      question: "What types of interviews can I practice?",
      answer: "You can practice behavioral interviews, technical interviews, case studies, system design, panel interviews, and role-specific questions. Our AI adapts to different industries including tech, finance, healthcare, consulting, and more."
    },
    {
      question: "How accurate is the AI feedback?",
      answer: "Our AI has been trained on over 100,000 successful interviews and maintains a 95% accuracy rate in predicting interview success. The feedback includes detailed analysis of your responses, communication style, confidence level, and specific areas for improvement."
    },
    {
      question: "Can I retake interviews to improve my score?",
      answer: "Yes! You can retake any interview as many times as you'd like. Each attempt costs coins, but you'll get fresh questions and updated feedback. We recommend practicing the same interview type multiple times to track your improvement over time."
    },
    {
      question: "What formats do you support for resume uploads?",
      answer: "We support PDF, DOCX, and DOC formats for resumes and job descriptions. Files should be under 10MB. Our AI will analyze your resume against the job description and provide a compatibility score with specific recommendations."
    },
    {
      question: "How does the coin system work?",
      answer: "Coins are used to access premium features like AI interviews, detailed analytics, and resume analysis. You start with free coins, and can purchase more as needed. Different features cost different amounts - basic interviews cost 10 coins, while advanced panel interviews cost 25 coins."
    },
    {
      question: "Is my data secure and private?",
      answer: "Yes, absolutely. We use enterprise-grade encryption for all data storage and transmission. Your interview recordings and personal information are never shared with third parties. You can delete your data at any time from your dashboard."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our AI-powered interview platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className="border-0 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6 animate-accordion-down">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="text-blue-600 hover:text-blue-800 font-medium underline">
            Contact our support team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
