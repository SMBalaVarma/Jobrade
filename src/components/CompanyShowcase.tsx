import React from "react";
import { ArrowRight, Star, Users, MapPin } from "lucide-react";
import companyShowcase from "/assets/company-showcase.webp";
import techCorpLogo from "/assets/logos/techcorp-logo.webp";
import innovateCoLogo from "/assets/logos/innovateco-logo.webp";
import designStudioLogo from "/assets/logos/designstudio-logo.webp";
import dataFlowLogo from "/assets/logos/dataflow-logo.webp";
import growthLabsLogo from "/assets/logos/growthlabs-logo.webp";
import cloudTechLogo from "/assets/logos/cloudtech-logo.webp";

const CompanyShowcase = () => {
  const companies = [
    {
      name: "TechCorp",
      logo: techCorpLogo,
      description: "Leading technology company focused on innovation and cutting-edge solutions.",
      rating: 4.8,
      employees: "10,000+",
      location: "San Francisco, CA",
      openJobs: 45,
      benefits: ["Remote Work", "Great Benefits", "Stock Options"],
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "InnovateCo",
      logo: innovateCoLogo,
      description: "Fast-growing startup revolutionizing the way people work and collaborate.",
      rating: 4.6,
      employees: "500-1000",
      location: "New York, NY",
      openJobs: 23,
      benefits: ["Flexible Hours", "Learning Budget", "Health Insurance"],
      color: "from-green-500 to-teal-600"
    },
    {
      name: "DesignStudio",
      logo: designStudioLogo,
      description: "Creative agency specializing in digital experiences and brand design.",
      rating: 4.7,
      employees: "50-100",
      location: "Los Angeles, CA",
      openJobs: 12,
      benefits: ["Creative Freedom", "Remote First", "Unlimited PTO"],
      color: "from-pink-500 to-red-600"
    },
    {
      name: "DataFlow",
      logo: dataFlowLogo,
      description: "Data analytics platform helping businesses make data-driven decisions.",
      rating: 4.9,
      employees: "200-500",
      location: "Austin, TX",
      openJobs: 18,
      benefits: ["Work-Life Balance", "Growth Opportunities", "Competitive Pay"],
      color: "from-yellow-500 to-orange-600"
    },
    {
      name: "GrowthLabs",
      logo: growthLabsLogo,
      description: "Marketing technology company focused on helping businesses scale.",
      rating: 4.5,
      employees: "100-200",
      location: "Chicago, IL",
      openJobs: 15,
      benefits: ["Professional Development", "Team Events", "Flexible PTO"],
      color: "from-indigo-500 to-blue-600"
    },
    {
      name: "CloudTech",
      logo: cloudTechLogo,
      description: "Cloud infrastructure provider serving enterprise clients worldwide.",
      rating: 4.8,
      employees: "1000-5000",
      location: "Seattle, WA",
      openJobs: 34,
      benefits: ["Equity Package", "Remote Work", "Learning & Development"],
      color: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50" id="company-showcase">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-8 sm:mb-12">
            <div className="text-center lg:text-left">
              <div className="job-chip mx-auto lg:mx-0 mb-4">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
                <span>Top Companies</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                Work at Amazing Companies
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Join industry-leading companies that are shaping the future and offer exceptional career opportunities.
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src={companyShowcase} 
                alt="Company showcase illustration" 
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className="group bg-white rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:translate-y-[-4px] overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`}
                        className="w-12 h-12 rounded-lg object-cover shadow-md"
                      />
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">{company.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{company.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-pulse-600">{company.openJobs}</div>
                      <div className="text-sm text-gray-600">open jobs</div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mb-4">
                    {company.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{company.employees} employees</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{company.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {company.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="px-2 py-1 bg-pulse-50 text-pulse-600 text-xs rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="text-pulse-600 hover:text-pulse-700 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Jobs
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    
                    <div className={`w-8 h-1 bg-gradient-to-r ${company.color} rounded-full`}></div>
                  </div>
                </div>
                
                <div className={`h-1 bg-gradient-to-r ${company.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button className="bg-white border border-pulse-500 text-pulse-500 hover:bg-pulse-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
              View All Companies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyShowcase;