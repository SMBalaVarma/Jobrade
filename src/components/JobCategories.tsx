import React from "react";
import { ArrowRight } from "lucide-react";
import jobCategoriesIllustration from "/assets/job-categories.webp";

const JobCategories = () => {
  const categories = [
    {
      title: "Technologie",
      description: "Softwareentwicklung, IT und Ingenieurwesen",
      jobCount: "2,847",
      icon: "💻",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Gesundheitswesen",
      description: "Medizin, Pflege und Gesundheitsverwaltung",
      jobCount: "1,923",
      icon: "🏥",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Finanzen",
      description: "Banking, Buchhaltung und Finanzdienstleistungen",
      jobCount: "1,456",
      icon: "💰",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Marketing",
      description: "Digitales Marketing, Markenmanagement und Werbung",
      jobCount: "1,234",
      icon: "📊",
      color: "from-pink-500 to-red-600"
    },
    {
      title: "Vertrieb",
      description: "Innendienst, Geschäftsentwicklung und Kundenbetreuung",
      jobCount: "1,098",
      icon: "🛍️",
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "Bildung",
      description: "Lehre, Ausbildung und Bildungsverwaltung",
      jobCount: "876",
      icon: "📚",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Kundendienst",
      description: "Support, Betreuung und Kundenerfahrung",
      jobCount: "743",
      icon: "🎧",
      color: "from-teal-500 to-cyan-600"
    },
    {
      title: "Personalwesen",
      description: "Recruiting, Talentmanagement und HR-Operationen",
      jobCount: "564",
      icon: "👥",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Operations",
      description: "Projektmanagement, Logistik und Geschäftsabläufe",
      jobCount: "487",
      icon: "⚙️",
      color: "from-gray-500 to-gray-700"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white" id="job-categories">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-8 sm:mb-12">
            <div className="text-center lg:text-left">
              <div className="job-chip mx-auto lg:mx-0 mb-4">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
                <span>Job-Kategorien</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                Entdecken Sie Karrieremöglichkeiten
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Finden Sie die perfekte Rolle in Ihrem Fachgebiet oder entdecken Sie neue Karrierewege mit unseren vielfältigen Job-Kategorien.
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src={jobCategoriesIllustration} 
                alt="Job categories illustration" 
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
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
                      <div className="text-sm text-gray-600">offene Stellen</div>
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
                      Jobs Durchsuchen
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
              Alle Kategorien Anzeigen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;