import React from "react";
import { ArrowRight } from "lucide-react";

const JobCategories = () => {
  const categories = [
    {
      title: "Technology",
      description: "Software development, IT, and engineering roles",
      jobCount: "2,847",
      icon: "💻",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Healthcare",
      description: "Medical, nursing, and healthcare administration",
      jobCount: "1,923",
      icon: "🏥",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Finance",
      description: "Banking, accounting, and financial services",
      jobCount: "1,456",
      icon: "💰",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Marketing",
      description: "Digital marketing, brand management, and advertising",
      jobCount: "1,234",
      icon: "📊",
      color: "from-pink-500 to-red-600"
    },
    {
      title: "Sales",
      description: "Inside sales, business development, and account management",
      jobCount: "1,098",
      icon: "🛍️",
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "Education",
      description: "Teaching, training, and educational administration",
      jobCount: "876",
      icon: "📚",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Customer Service",
      description: "Support, success, and customer experience roles",
      jobCount: "743",
      icon: "🎧",
      color: "from-teal-500 to-cyan-600"
    },
    {
      title: "Human Resources",
      description: "Recruiting, talent management, and HR operations",
      jobCount: "564",
      icon: "👥",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Operations",
      description: "Project management, logistics, and business operations",
      jobCount: "487",
      icon: "⚙️",
      color: "from-gray-500 to-gray-700"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white" id="job-categories">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="job-chip mx-auto mb-4">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
              <span>Job Categories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Explore Career Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect role in your field of expertise or explore new career paths with our diverse job categories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.title}
                className="group bg-white rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:translate-y-[-4px] overflow-hidden cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{category.icon}</div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-800">{category.jobCount}</div>
                      <div className="text-sm text-gray-600">open positions</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pulse-600 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <button className="text-pulse-600 hover:text-pulse-700 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Browse Jobs
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    
                    <div className={`w-8 h-1 bg-gradient-to-r ${category.color} rounded-full`}></div>
                  </div>
                </div>
                
                <div className={`h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button className="bg-pulse-500 hover:bg-pulse-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              View All Categories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;