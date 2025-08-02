import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MapPin, 
  Clock, 
  DollarSign, 
  Filter,
  Star,
  Heart,
  ArrowUpDown,
  ChevronDown 
} from "lucide-react";

const BrowseJobs = () => {
  const [salaryRange, setSalaryRange] = useState([50]);
  const [radiusRange, setRadiusRange] = useState([25]);
  const [activeSort, setActiveSort] = useState("newest");

  const jobs = [
    {
      id: 1,
      title: "Senior Web Developer",
      company: "Tech Innovators Inc.",
      location: "New York, NY",
      type: "Full Time",
      salary: "$80,000 - $120,000",
      posted: "2 days ago",
      logo: "TI",
      logoColor: "bg-emerald-500",
      featured: true,
      description: "Join our dynamic team building cutting-edge web applications with React and Node.js."
    },
    {
      id: 2,
      title: "Frontend Engineer",
      company: "Digital Solutions Co.",
      location: "Remote",
      type: "Full Time", 
      salary: "$70,000 - $100,000",
      posted: "1 day ago",
      logo: "DS",
      logoColor: "bg-blue-500",
      featured: false,
      description: "Work with modern frameworks to create beautiful user interfaces and experiences."
    },
    {
      id: 3,
      title: "Web Developer",
      company: "Creative Minds Media",
      location: "Los Angeles, CA",
      type: "Part Time",
      salary: "$60,000 - $90,000", 
      posted: "3 days ago",
      logo: "CM",
      logoColor: "bg-purple-500",
      featured: false,
      description: "Design and develop responsive websites for creative agencies and startups."
    },
    {
      id: 4,
      title: "Junior Web Developer", 
      company: "Startup Hub Inc.",
      location: "San Francisco, CA",
      type: "Full Time",
      salary: "$50,000 - $70,000",
      posted: "1 week ago", 
      logo: "SH",
      logoColor: "bg-orange-500",
      featured: false,
      description: "Perfect opportunity for recent graduates to learn and grow in a fast-paced environment."
    },
    {
      id: 5,
      title: "Senior Frontend Developer",
      company: "Innovative Software Ltd.",
      location: "London, UK",
      type: "Full Time",
      salary: "$90,000 - $130,000",
      posted: "5 days ago",
      logo: "IS",
      logoColor: "bg-indigo-500",
      featured: true,
      description: "Lead frontend development initiatives using the latest technologies and best practices."
    },
    {
      id: 6,
      title: "React Developer",
      company: "Global Tech Corp.",
      location: "Austin, TX",
      type: "Contract",
      salary: "$85,000 - $115,000",
      posted: "4 days ago",
      logo: "GT",
      logoColor: "bg-gray-700",
      featured: false,
      description: "Develop and maintain large-scale React applications for enterprise clients."
    }
  ];

  const jobTypes = ["Full Time", "Part Time", "Freelance", "Internship"];
  const experienceLevels = ["Entry Level", "Mid Level", "Senior Level"];
  const datePosted = ["Any", "Last Hour", "Last 24 Hours", "Last 7 Days", "Last 14 Days", "Last 30 Days"];
  const popularTags = ["React", "Angular", "Vue", "Node", "Express", "JavaScript", "TypeScript", "Python"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-6 py-4">
          <nav className="text-sm text-muted-foreground">
            Home › <span className="text-foreground">Search Results</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="xl:w-80 space-y-6">
            
            {/* Location Filter */}
            <div className="bg-card rounded-lg border p-6">
              <h3 className="font-semibold text-lg mb-4 text-foreground">Location</h3>
              <div className="space-y-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Enter location" 
                    className="pl-10"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Within Radius: {radiusRange[0]} miles
                  </label>
                  <Slider
                    value={radiusRange}
                    onValueChange={setRadiusRange}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0</span>
                    <span>100 miles</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Type Filter */}
            <div className="bg-card rounded-lg border p-6">
              <h3 className="font-semibold text-lg mb-4 text-foreground">Job Type</h3>
              <div className="space-y-3">
                {jobTypes.map((type) => (
                  <label key={type} className="flex items-center cursor-pointer group">
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        className="sr-only"
                      />
                      <div className="w-5 h-5 border-2 border-border rounded transition-colors group-hover:border-primary">
                        <div className="w-full h-full bg-primary rounded-sm scale-0 transition-transform" />
                      </div>
                    </div>
                    <span className="ml-3 text-sm text-foreground group-hover:text-primary transition-colors">
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Date Posted Filter */}
            <div className="bg-card rounded-lg border p-6">
              <h3 className="font-semibold text-lg mb-4 text-foreground">Date Posted</h3>
              <div className="space-y-3">
                {datePosted.map((option) => (
                  <label key={option} className="flex items-center cursor-pointer group">
                    <input 
                      type="radio" 
                      name="datePosted"
                      className="w-4 h-4 text-primary border-border focus:ring-primary"
                      defaultChecked={option === "Any"}
                    />
                    <span className="ml-3 text-sm text-foreground group-hover:text-primary transition-colors">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Experience Level */}
            <div className="bg-card rounded-lg border p-6">
              <h3 className="font-semibold text-lg mb-4 text-foreground">Experience Level</h3>
              <div className="space-y-3">
                {experienceLevels.map((level) => (
                  <label key={level} className="flex items-center cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                    />
                    <span className="ml-3 text-sm text-foreground group-hover:text-primary transition-colors">
                      {level}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Salary Range */}
            <div className="bg-card rounded-lg border p-6">
              <h3 className="font-semibold text-lg mb-4 text-foreground">Salary Range</h3>
              <div className="space-y-4">
                <label className="text-sm font-medium text-foreground">
                  Up to ${salaryRange[0]}k per year
                </label>
                <Slider
                  value={salaryRange}
                  onValueChange={setSalaryRange}
                  max={200}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>$0k</span>
                  <span>$200k+</span>
                </div>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-card rounded-lg border p-6">
              <h3 className="font-semibold text-lg mb-4 text-foreground">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Recruiting CTA */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border p-6 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Recruiting?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Advertise your jobs to millions of monthly users
                </p>
              </div>
              <Button className="w-full">
                Get Started
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search Header */}
            <div className="bg-card rounded-lg border p-6 mb-6">
              <h1 className="text-2xl font-bold text-foreground mb-4">Search Results</h1>
              
              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Job title, keywords, or company" 
                    className="pl-10"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="City, state, or remote" 
                    className="pl-10"
                  />
                </div>
                <Button size="lg" className="px-8">
                  Search Jobs
                </Button>
              </div>

              {/* Results Info and Sort */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <p className="text-muted-foreground">
                  Showing 1-{jobs.length} of 243 jobs
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <div className="flex bg-muted rounded-lg p-1">
                    <button
                      onClick={() => setActiveSort("newest")}
                      className={`px-3 py-1 text-sm rounded transition-colors ${
                        activeSort === "newest" 
                          ? "bg-background text-foreground shadow-sm" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Newest
                    </button>
                    <button
                      onClick={() => setActiveSort("oldest")}
                      className={`px-3 py-1 text-sm rounded transition-colors ${
                        activeSort === "oldest" 
                          ? "bg-background text-foreground shadow-sm" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Oldest
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
              {jobs.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-card rounded-lg border p-6 hover:shadow-lg transition-all duration-200 hover:border-primary/20 group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    {/* Company Logo */}
                    <div className={`w-12 h-12 ${job.logoColor} rounded-lg flex items-center justify-center text-white font-semibold text-sm shrink-0`}>
                      {job.logo}
                    </div>

                    {/* Job Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {job.title}
                            </h3>
                            {job.featured && (
                              <Badge variant="secondary" className="bg-primary/10 text-primary">
                                Featured
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground font-medium">
                            {job.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button asChild>
                            <Link to={`/job/${job.id}`}>Apply Now</Link>
                          </Button>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {job.salary}
                        </div>
                        <span>• {job.posted}</span>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg" className="px-8">
                Show More Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BrowseJobs;