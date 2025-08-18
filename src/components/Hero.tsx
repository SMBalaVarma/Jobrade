
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Search, MapPin, Briefcase } from "lucide-react";
import heroBackground from "/assets/hero-background.webp";

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
      className="overflow-hidden relative min-h-screen pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8" 
      id="hero" 
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-3 sm:mb-4 md:mb-6 opacity-0 animate-fade-in text-white px-2" 
            style={{ animationDelay: "0.1s" }}
          >
            Finden Sie Ihren Traumjob
          </h1>
          
          <p 
            style={{ animationDelay: "0.3s" }} 
            className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in px-2"
          >
            Verbinden Sie sich mit Top-Arbeitgebern und entdecken Sie Möglichkeiten, die zu Ihren Fähigkeiten und Ambitionen passen.
          </p>

          {/* Job Search Bar */}
          <div 
            className="max-w-4xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-elegant p-3 sm:p-4 md:p-6 opacity-0 animate-fade-in mx-2"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Jobtitel, Schlüsselwörter oder Unternehmen"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Stadt, Bundesland oder Remote"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                />
              </div>
              
              <button
                onClick={handleSearch}
                className="bg-pulse-500 hover:bg-pulse-600 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap"
              >
                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Jobs Finden</span>
                <span className="sm:hidden">Suchen</span>
              </button>
            </div>
          </div>

          {/* Popular Categories */}
          <div 
            className="mt-6 sm:mt-8 md:mt-12 opacity-0 animate-fade-in px-2"
            style={{ animationDelay: "0.7s" }}
          >
            <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">Beliebte Kategorien:</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
              {["Technologie", "Gesundheitswesen", "Finanzen", "Marketing", "Vertrieb", "Remote"].map((category) => (
                <button
                  key={category}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/20 hover:border-white/50 transition-colors duration-300 text-xs sm:text-sm font-medium"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
