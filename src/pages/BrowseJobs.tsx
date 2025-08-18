import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import browseJobsIllustration from "/assets/browse-jobs.webp";
import techInnovatorsLogo from "/assets/logos/tech-innovators-logo.webp";
import digitalSolutionsLogo from "/assets/logos/digital-solutions-logo.webp";
import creativeMindsLogo from "/assets/logos/creative-minds-logo.webp";
import startupHubLogo from "/assets/logos/startup-hub-logo.webp";
import innovativeSoftwareLogo from "/assets/logos/innovative-software-logo.webp";
import globalTechLogo from "/assets/logos/global-tech-logo.webp";
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
      title: "Senior Web-Entwickler",
      company: "Tech Innovators Inc.",
      location: "Berlin, Deutschland",
      type: "Vollzeit",
      salary: "80.000 € - 120.000 €",
      posted: "vor 2 Tagen",
      logo: techInnovatorsLogo,
      logoColor: "bg-emerald-500",
      featured: true,
      description: "Werden Sie Teil unseres dynamischen Teams beim Aufbau modernster Webanwendungen mit React und Node.js."
    },
    {
      id: 2,
      title: "Frontend-Entwickler",
      company: "Digital Solutions Co.",
      location: "Remote",
      type: "Vollzeit", 
      salary: "70.000 € - 100.000 €",
      posted: "vor 1 Tag",
      logo: digitalSolutionsLogo,
      logoColor: "bg-blue-500",
      featured: false,
      description: "Arbeiten Sie mit modernen Frameworks, um schöne Benutzeroberflächen und Erfahrungen zu schaffen."
    },
    {
      id: 3,
      title: "Web-Entwickler",
      company: "Creative Minds Media",
      location: "München, Deutschland",
      type: "Teilzeit",
      salary: "60.000 € - 90.000 €", 
      posted: "vor 3 Tagen",
      logo: creativeMindsLogo,
      logoColor: "bg-purple-500",
      featured: false,
      description: "Entwerfen und entwickeln Sie responsive Websites für Kreativagenturen und Startups."
    },
    {
      id: 4,
      title: "Junior Web-Entwickler", 
      company: "Startup Hub Inc.",
      location: "Hamburg, Deutschland",
      type: "Vollzeit",
      salary: "50.000 € - 70.000 €",
      posted: "vor 1 Woche", 
      logo: startupHubLogo,
      logoColor: "bg-orange-500",
      featured: false,
      description: "Perfekte Gelegenheit für Absolventen, in einer schnelllebigen Umgebung zu lernen und zu wachsen."
    },
    {
      id: 5,
      title: "Senior Frontend-Entwickler",
      company: "Innovative Software Ltd.",
      location: "Frankfurt, Deutschland",
      type: "Vollzeit",
      salary: "90.000 € - 130.000 €",
      posted: "vor 5 Tagen",
      logo: innovativeSoftwareLogo,
      logoColor: "bg-indigo-500",
      featured: true,
      description: "Leiten Sie Frontend-Entwicklungsinitiativen mit den neuesten Technologien und Best Practices."
    },
    {
      id: 6,
      title: "React-Entwickler",
      company: "Global Tech Corp.",
      location: "Köln, Deutschland",
      type: "Freelance",
      salary: "85.000 € - 115.000 €",
      posted: "vor 4 Tagen",
      logo: globalTechLogo,
      logoColor: "bg-gray-700",
      featured: false,
      description: "Entwickeln und warten Sie große React-Anwendungen für Unternehmenskunden."
    }
  ];

  const jobTypes = ["Vollzeit", "Teilzeit", "Freelance", "Praktikum"];
  const experienceLevels = ["Einstiegslevel", "Mittleres Level", "Senior Level"];
  const datePosted = ["Alle", "Letzte Stunde", "Letzten 24 Stunden", "Letzten 7 Tage", "Letzten 14 Tage", "Letzten 30 Tage"];
  const popularTags = ["React", "Angular", "Vue", "Node", "Express", "JavaScript", "TypeScript", "Python"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30 pt-16 sm:pt-20 md:pt-24">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <nav className="text-xs sm:text-sm text-muted-foreground">
            Startseite › <span className="text-foreground">Suchergebnisse</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-80 space-y-4 sm:space-y-6">
            
            {/* Location Filter */}
            <div className="bg-card rounded-lg border p-4 sm:p-6">
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-foreground">Standort</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-2.5 sm:top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Standort eingeben" 
                    className="pl-10 text-sm sm:text-base py-2 sm:py-3"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                    Im Umkreis von: {radiusRange[0]} km
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
                    <span>100 km</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Type Filter */}
            <div className="bg-card rounded-lg border p-4 sm:p-6">
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-foreground">Arbeitstyp</h3>
              <div className="space-y-2 sm:space-y-3">
                {jobTypes.map((type) => (
                  <label key={type} className="flex items-center cursor-pointer group">
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        className="sr-only"
                      />
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-border rounded transition-colors group-hover:border-primary">
                        <div className="w-full h-full bg-primary rounded-sm scale-0 transition-transform" />
                      </div>
                    </div>
                    <span className="ml-2 sm:ml-3 text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors">
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Date Posted Filter */}
            <div className="bg-card rounded-lg border p-4 sm:p-6">
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-foreground">Veröffentlichungsdatum</h3>
              <div className="space-y-2 sm:space-y-3">
                {datePosted.map((option) => (
                  <label key={option} className="flex items-center cursor-pointer group">
                    <input 
                      type="radio" 
                      name="datePosted"
                      className="w-3 h-3 sm:w-4 sm:h-4 text-primary border-border focus:ring-primary"
                      defaultChecked={option === "Any"}
                    />
                    <span className="ml-2 sm:ml-3 text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Experience Level */}
            <div className="bg-card rounded-lg border p-4 sm:p-6">
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-foreground">Erfahrungslevel</h3>
              <div className="space-y-2 sm:space-y-3">
                {experienceLevels.map((level) => (
                  <label key={level} className="flex items-center cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="w-3 h-3 sm:w-4 sm:h-4 text-primary border-border rounded focus:ring-primary"
                    />
                    <span className="ml-2 sm:ml-3 text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors">
                      {level}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Salary Range */}
            <div className="bg-card rounded-lg border p-4 sm:p-6">
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-foreground">Gehaltsbereich</h3>
              <div className="space-y-3 sm:space-y-4">
                <label className="text-xs sm:text-sm font-medium text-foreground">
                  Bis zu {salaryRange[0]}k € pro Jahr
                </label>
                <Slider
                  value={salaryRange}
                  onValueChange={setSalaryRange}
                  max={200}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0k €</span>
                  <span>200k+ €</span>
                </div>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-card rounded-lg border p-4 sm:p-6">
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-foreground">Tags</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {popularTags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors text-xs sm:text-sm px-2 py-1"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Recruiting CTA */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border p-4 sm:p-6 text-center">
              <div className="mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">
                  Recruiting?
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  Bewerben Sie Ihre Jobs bei Millionen von monatlichen Nutzern
                </p>
              </div>
              <Button className="w-full text-sm sm:text-base py-2 sm:py-3">
                Jetzt Starten
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search Header */}
            <div className="bg-card rounded-lg border p-4 sm:p-6 mb-4 sm:mb-6">
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center mb-4 sm:mb-6">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-4">Suchergebnisse</h1>
                </div>
                <div className="hidden lg:block">
                  <img 
                    src={browseJobsIllustration} 
                    alt="Browse jobs illustration" 
                    className="w-full h-auto max-w-sm mx-auto"
                  />
                </div>
              </div>
              
              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-2.5 sm:top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Jobtitel, Schlüsselwörter oder Unternehmen" 
                    className="pl-10 text-sm sm:text-base py-2 sm:py-3"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-2.5 sm:top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Stadt, Bundesland oder remote" 
                    className="pl-10 text-sm sm:text-base py-2 sm:py-3"
                  />
                </div>
                <Button size="lg" className="px-4 sm:px-8 text-sm sm:text-base py-2 sm:py-3">
                  Jobs Suchen
                </Button>
              </div>

              {/* Results Info and Sort */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
                <p className="text-muted-foreground text-sm">
                  Zeige 1-{jobs.length} von 243 Jobs
                </p>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <span className="text-xs sm:text-sm text-muted-foreground">Sortieren nach:</span>
                  <div className="flex bg-muted rounded-lg p-1 flex-1 sm:flex-initial">
                    <button
                      onClick={() => setActiveSort("newest")}
                      className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded transition-colors flex-1 sm:flex-initial text-center ${
                        activeSort === "newest" 
                          ? "bg-background text-foreground shadow-sm" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Neueste
                    </button>
                    <button
                      onClick={() => setActiveSort("oldest")}
                      className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded transition-colors flex-1 sm:flex-initial text-center ${
                        activeSort === "oldest" 
                          ? "bg-background text-foreground shadow-sm" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Älteste
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-3 sm:space-y-4">
              {jobs.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-card rounded-lg border p-4 sm:p-6 hover:shadow-lg transition-all duration-200 hover:border-primary/20 group cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    {/* Company Logo */}
                    <img 
                      src={job.logo} 
                      alt={`${job.company} logo`}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover shadow-md shrink-0"
                    />

                    {/* Job Info */}
                    <div className="flex-1 min-w-0 w-full">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 sm:mb-2 gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                            <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                              {job.title}
                            </h3>
                            {job.featured && (
                              <Badge variant="secondary" className="bg-primary/10 text-primary text-xs w-fit">
                                Empfohlen
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground font-medium text-sm sm:text-base truncate">
                            {job.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-between sm:justify-end">
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground p-2">
                            <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                          <Button asChild size="sm" className="text-xs sm:text-sm px-3 sm:px-4">
                            <Link to={`/job/${job.id}`}>Jetzt Bewerben</Link>
                          </Button>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
                          <span className="truncate">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
                          <span className="truncate">{job.salary}</span>
                        </div>
                        <span className="hidden sm:inline">• {job.posted}</span>
                        <span className="sm:hidden text-xs">{job.posted}</span>
                      </div>

                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">
                        {job.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-6 sm:mt-8">
              <Button variant="outline" size="lg" className="px-6 sm:px-8 text-sm sm:text-base">
                Mehr Jobs Anzeigen
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