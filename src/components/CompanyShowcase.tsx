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
      description: "Führendes Technologieunternehmen mit Fokus auf Innovation und modernste Lösungen.",
      rating: 4.8,
      employees: "10,000+",
      location: "Berlin, Deutschland",
      openJobs: 45,
      benefits: ["Remote Work", "Tolle Benefits", "Aktienoptionen"],
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "InnovateCo",
      logo: innovateCoLogo,
      description: "Schnell wachsendes Startup, das die Art revolutioniert, wie Menschen arbeiten und zusammenarbeiten.",
      rating: 4.6,
      employees: "500-1000",
      location: "München, Deutschland",
      openJobs: 23,
      benefits: ["Flexible Arbeitszeiten", "Weiterbildungsbudget", "Krankenversicherung"],
      color: "from-green-500 to-teal-600"
    },
    {
      name: "DesignStudio",
      logo: designStudioLogo,
      description: "Kreativagentur spezialisiert auf digitale Erlebnisse und Markendesign.",
      rating: 4.7,
      employees: "50-100",
      location: "Hamburg, Deutschland",
      openJobs: 12,
      benefits: ["Kreative Freiheit", "Remote First", "Unbegrenzter Urlaub"],
      color: "from-pink-500 to-red-600"
    },
    {
      name: "DataFlow",
      logo: dataFlowLogo,
      description: "Datenanalyseplattform, die Unternehmen bei datengesteuerten Entscheidungen hilft.",
      rating: 4.9,
      employees: "200-500",
      location: "Frankfurt, Deutschland",
      openJobs: 18,
      benefits: ["Work-Life-Balance", "Wachstumsmöglichkeiten", "Wettbewerbsfähiges Gehalt"],
      color: "from-yellow-500 to-orange-600"
    },
    {
      name: "GrowthLabs",
      logo: growthLabsLogo,
      description: "Marketing-Technologieunternehmen mit Fokus auf Unternehmenswachstum.",
      rating: 4.5,
      employees: "100-200",
      location: "Köln, Deutschland",
      openJobs: 15,
      benefits: ["Berufliche Entwicklung", "Team Events", "Flexibler Urlaub"],
      color: "from-indigo-500 to-blue-600"
    },
    {
      name: "CloudTech",
      logo: cloudTechLogo,
      description: "Cloud-Infrastrukturanbieter für Unternehmenskunden weltweit.",
      rating: 4.8,
      employees: "1000-5000",
      location: "Stuttgart, Deutschland",
      openJobs: 34,
      benefits: ["Aktienpaket", "Remote Work", "Lernen & Entwicklung"],
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
                <span>Top Unternehmen</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                Arbeiten Sie bei fantastischen Unternehmen
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Schließen Sie sich branchenführenden Unternehmen an, die die Zukunft gestalten und außergewöhnliche Karrieremöglichkeiten bieten.
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
                      <div className="text-sm text-gray-600">offene Jobs</div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mb-4">
                    {company.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{company.employees} Mitarbeiter</span>
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
                      Jobs Anzeigen
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
              Alle Unternehmen Anzeigen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyShowcase;