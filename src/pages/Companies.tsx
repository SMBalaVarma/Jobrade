import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Users, MapPin, Star } from "lucide-react";

const Companies = () => {
  const companies = [
    {
      id: 1,
      name: "TechCorp",
      logo: "🏢",
      industry: "Technology",
      size: "1,000-5,000 employees",
      location: "San Francisco, CA",
      rating: 4.5,
      openJobs: 23,
      description: "Leading technology company building innovative solutions for the future."
    },
    {
      id: 2,
      name: "InnovateLabs",
      logo: "🔬",
      industry: "Research & Development",
      size: "500-1,000 employees",
      location: "New York, NY",
      rating: 4.7,
      openJobs: 15,
      description: "Cutting-edge research lab focused on breakthrough innovations."
    },
    {
      id: 3,
      name: "DesignStudio",
      logo: "🎨",
      industry: "Design & Creative",
      size: "50-200 employees",
      location: "Los Angeles, CA",
      rating: 4.3,
      openJobs: 8,
      description: "Award-winning design studio creating beautiful digital experiences."
    },
    {
      id: 4,
      name: "DataFlow",
      logo: "📊",
      industry: "Data & Analytics",
      size: "200-500 employees",
      location: "Austin, TX",
      rating: 4.6,
      openJobs: 12,
      description: "Data analytics company helping businesses make informed decisions."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Companies</h1>
            <p className="text-gray-600 mb-6">Discover top employers and find your next workplace</p>
            
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search companies..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                />
              </div>
              <button className="bg-pulse-500 hover:bg-pulse-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">{companies.length} companies found</p>
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pulse-500 focus:border-transparent">
              <option>Sort by: Most Popular</option>
              <option>Sort by: Rating</option>
              <option>Sort by: Company Size</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <div key={company.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{company.logo}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                      <p className="text-sm text-gray-600">{company.industry}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{company.rating}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    {company.size}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    {company.location}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{company.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-pulse-600 font-medium text-sm">
                    {company.openJobs} open positions
                  </span>
                  <button className="bg-pulse-500 hover:bg-pulse-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    View Jobs
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Companies Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Companies</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                {["🏢", "🔬", "🎨", "📊", "💼", "🚀"].map((logo, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-2">{logo}</div>
                    <p className="text-sm text-gray-600">Company {index + 1}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Companies;