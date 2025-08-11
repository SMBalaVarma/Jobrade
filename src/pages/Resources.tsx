import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Video, Download, BookOpen, TrendingUp, Users } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      id: 1,
      title: "Resume Writing Guide",
      type: "Guide",
      icon: <FileText className="h-6 w-6" />,
      description: "Learn how to create a compelling resume that gets noticed by employers.",
      downloadCount: "12k downloads"
    },
    {
      id: 2,
      title: "Interview Preparation Course",
      type: "Video Course",
      icon: <Video className="h-6 w-6" />,
      description: "Master the art of interviewing with our comprehensive video course.",
      downloadCount: "8k views"
    },
    {
      id: 3,
      title: "Salary Negotiation Templates",
      type: "Templates",
      icon: <Download className="h-6 w-6" />,
      description: "Email templates and scripts for successful salary negotiations.",
      downloadCount: "5k downloads"
    },
    {
      id: 4,
      title: "Career Development Workbook",
      type: "Workbook",
      icon: <BookOpen className="h-6 w-6" />,
      description: "A step-by-step workbook to plan and advance your career.",
      downloadCount: "15k downloads"
    }
  ];

  const articles = [
    {
      id: 1,
      title: "Top 10 Skills Employers Want in 2024",
      category: "Career Tips",
      readTime: "5 min read",
      date: "Nov 15, 2024"
    },
    {
      id: 2,
      title: "How to Switch Careers Successfully",
      category: "Career Change",
      readTime: "8 min read",
      date: "Nov 12, 2024"
    },
    {
      id: 3,
      title: "Remote Work Best Practices",
      category: "Remote Work",
      readTime: "6 min read",
      date: "Nov 10, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Karriere-Ressourcen</h1>
            <p className="text-gray-600">Kostenlose Tools, Leitfäden und Beratung zur Beschleunigung Ihrer Karriere</p>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
              <TrendingUp className="h-12 w-12 text-pulse-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Career Growth</h3>
              <p className="text-gray-600">Tools and guides to advance your career</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
              <Users className="h-12 w-12 text-pulse-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Networking</h3>
              <p className="text-gray-600">Build professional relationships</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
              <BookOpen className="h-12 w-12 text-pulse-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Skill Development</h3>
              <p className="text-gray-600">Learn new skills and stay competitive</p>
            </div>
          </div>

          {/* Free Resources */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Free Downloads</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-pulse-500">{resource.icon}</div>
                    <span className="text-sm font-medium text-pulse-600 bg-pulse-50 px-2 py-1 rounded">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{resource.downloadCount}</span>
                    <button className="bg-pulse-500 hover:bg-pulse-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Articles */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              {articles.map((article, index) => (
                <div key={article.id} className={`p-6 ${index !== articles.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-pulse-600 bg-pulse-50 px-2 py-1 rounded">
                          {article.category}
                        </span>
                        <span className="text-sm text-gray-500">{article.readTime}</span>
                        <span className="text-sm text-gray-500">• {article.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                    </div>
                    <button className="text-pulse-500 hover:text-pulse-600 font-medium text-sm ml-4">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-pulse-500 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6">Get the latest career tips and resources delivered to your inbox</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-pulse-500 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;