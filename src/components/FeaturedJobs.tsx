import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, DollarSign, Bookmark } from "lucide-react";
import featuredJobsIllustration from "/assets/featured-jobs.webp";
import techCorpLogo from "/assets/logos/techcorp-logo.webp";
import innovateCoLogo from "/assets/logos/innovateco-logo.webp";
import designStudioLogo from "/assets/logos/designstudio-logo.webp";
import dataFlowLogo from "/assets/logos/dataflow-logo.webp";
import growthLabsLogo from "/assets/logos/growthlabs-logo.webp";
import cloudTechLogo from "/assets/logos/cloudtech-logo.webp";

const FeaturedJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Software-Entwickler",
      company: "TechCorp",
      location: "Berlin, Deutschland",
      type: "Vollzeit",
      salary: "120.000 € - 180.000 €",
      logo: techCorpLogo,
      description: "Werden Sie Teil unseres innovativen Teams beim Aufbau von Software-Lösungen der nächsten Generation. Wir suchen einen leidenschaftlichen Entwickler mit 5+ Jahren Erfahrung.",
      tags: ["React", "TypeScript", "Node.js", "AWS"],
      posted: "vor 2 Tagen",
      featured: true
    },
    {
      id: 2,
      title: "Produktmanager",
      company: "InnovateCo",
      location: "München, Deutschland",
      type: "Vollzeit",
      salary: "100.000 € - 150.000 €",
      logo: innovateCoLogo,
      description: "Leiten Sie Produktstrategie und -umsetzung für unser Flaggschiff-Produkt. Erfahrung mit agilen Methoden und Nutzerforschung erforderlich.",
      tags: ["Produktstrategie", "Agile", "Analytik", "Führung"],
      posted: "vor 3 Tagen",
      featured: true
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignStudio",
      location: "Remote",
      type: "Freelance",
      salary: "80.000 € - 120.000 €",
      logo: designStudioLogo,
      description: "Erstellen Sie schöne und intuitive Benutzererfahrungen. Portfolio von Mobile- und Web-Design-Projekten erforderlich.",
      tags: ["UI/UX", "Figma", "Design Systeme", "Mobile"],
      posted: "vor 1 Woche",
      featured: false
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "DataFlow",
      location: "Frankfurt, Deutschland",
      type: "Vollzeit",
      salary: "110.000 € - 160.000 €",
      logo: dataFlowLogo,
      description: "Analysieren Sie komplexe Datensätze für Geschäftserkenntnisse. Starker Hintergrund in Python, Machine Learning und statistischer Analyse erforderlich.",
      tags: ["Python", "ML", "Statistik", "SQL"],
      posted: "vor 4 Tagen",
      featured: true
    },
    {
      id: 5,
      title: "Marketing Manager",
      company: "GrowthLabs",
      location: "Köln, Deutschland",
      type: "Vollzeit",
      salary: "70.000 € - 100.000 €",
      logo: growthLabsLogo,
      description: "Steuern Sie Marketing-Kampagnen und Markenbekanntheit. Erfahrung mit digitalem Marketing, Content-Erstellung und Analyse-Tools erforderlich.",
      tags: ["Digitales Marketing", "Content", "Analytik", "SEO"],
      posted: "vor 5 Tagen",
      featured: false
    },
    {
      id: 6,
      title: "DevOps-Ingenieur",
      company: "CloudTech",
      location: "Stuttgart, Deutschland",
      type: "Vollzeit",
      salary: "130.000 € - 170.000 €",
      logo: cloudTechLogo,
      description: "Verwalten Sie Cloud-Infrastruktur und CI/CD-Pipelines. Erfahrung mit Kubernetes, Docker und Cloud-Plattformen erforderlich.",
      tags: ["AWS", "Kubernetes", "Docker", "CI/CD"],
      posted: "vor 1 Tag",
      featured: true
    }
  ];

  const featuredJobs = jobs.filter(job => job.featured);

  return (
    <section className="py-12 sm:py-16 bg-gray-50" id="featured-jobs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-8 sm:mb-12">
            <div className="text-center lg:text-left">
              <div className="job-chip mx-auto lg:mx-0 mb-4">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
                <span>Top Jobs</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                Top Job-Möglichkeiten
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Entdecken Sie handverlesene Job-Möglichkeiten von führenden Unternehmen verschiedener Branchen.
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src={featuredJobsIllustration} 
                alt="Featured jobs illustration" 
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:translate-y-[-2px] overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={job.logo} 
                        alt={`${job.company} logo`}
                        className="w-12 h-12 rounded-lg object-cover shadow-md"
                      />
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">{job.title}</h3>
                        <p className="text-gray-600">{job.company}</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-pulse-500 transition-colors">
                      <Bookmark className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.type}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-pulse-600 font-semibold mb-4">
                    <DollarSign className="h-4 w-4" />
                    {job.salary}
                  </div>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-pulse-50 text-pulse-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{job.posted}</span>
                    <Link 
                      to={`/job/${job.id}`}
                      className="bg-pulse-500 hover:bg-pulse-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block"
                    >
                      Jetzt Bewerben
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button className="bg-white border border-pulse-500 text-pulse-500 hover:bg-pulse-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
              Alle Jobs Anzeigen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;