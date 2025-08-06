
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Search, MapPin, Briefcase } from "lucide-react";
import heroIllustration from "/assets/hero-illustration.png";

const Hero = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSearch = () => {
    // Handle job search logic
    console.log("Searching for:", searchKeyword, "in", location);
  };
  
  return (
    <section 
      className="overflow-hidden relative bg-gradient-to-br from-pulse-50 via-white to-pulse-100" 
      id="hero" 
      style={{
        padding: isMobile ? '100px 12px 40px' : '120px 20px 60px'
      }}
    >
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      {/* Hero illustration */}
      <div className="absolute top-1/2 right-20 transform -translate-y-1/2 hidden lg:block opacity-80">
        <img 
          src={heroIllustration} 
          alt="Professional job search illustration" 
          className="w-[500px] h-[400px] object-contain"
        />
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4 sm:mb-6 opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.1s" }}
          >
            Find Your Dream Job Today
          </h1>
          
          <p 
            style={{ animationDelay: "0.3s" }} 
            className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in"
          >
            Connect with top employers and discover opportunities that match your skills and ambitions.
          </p>

          {/* Job Search Bar */}
          <div 
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-elegant p-4 sm:p-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="City, state, or remote"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                />
              </div>
              
              <button
                onClick={handleSearch}
                className="bg-pulse-500 hover:bg-pulse-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Search className="h-5 w-5" />
                Search Jobs
              </button>
            </div>
          </div>

          {/* Popular Categories */}
          <div 
            className="mt-8 sm:mt-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <p className="text-gray-600 mb-4">Popular Categories:</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {["Technology", "Healthcare", "Finance", "Marketing", "Sales", "Remote"].map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-full hover:border-pulse-500 hover:text-pulse-500 transition-colors duration-300 text-sm"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
