import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Building } from "lucide-react";

const Technology = () => {
  const techJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechInnovate GmbH",
      location: "Berlin",
      type: "Vollzeit",
      salary: "€65.000 - €85.000",
      description: "Entwicklung moderner Web-Anwendungen mit React und TypeScript",
      skills: ["React", "TypeScript", "Node.js"],
      posted: "vor 2 Tagen"
    },
    {
      id: 2,
      title: "DevOps Engineer",
      company: "CloudTech Solutions",
      location: "München",
      type: "Vollzeit",
      salary: "€70.000 - €90.000",
      description: "Automatisierung und Optimierung der Cloud-Infrastruktur",
      skills: ["AWS", "Docker", "Kubernetes"],
      posted: "vor 1 Tag"
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "AI Dynamics",
      location: "Hamburg",
      type: "Vollzeit",
      salary: "€75.000 - €95.000",
      description: "Entwicklung von Machine Learning Modellen und Datenanalyse",
      skills: ["Python", "Machine Learning", "SQL"],
      posted: "vor 3 Tagen"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Technologie Jobs
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Entdecken Sie die neuesten Stellenangebote in der Technologiebranche. 
                Von Startups bis zu Großunternehmen - finden Sie Ihren Traumjob in der Tech-Welt.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">AI & Machine Learning</Badge>
                <Badge variant="secondary">Cloud Computing</Badge>
                <Badge variant="secondary">Cybersecurity</Badge>
                <Badge variant="secondary">Blockchain</Badge>
                <Badge variant="secondary">IoT</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-8">Aktuelle Stellenangebote</h2>
              
              <div className="space-y-6">
                {techJobs.map((job) => (
                  <Card key={job.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                          <div className="flex items-center gap-4 text-muted-foreground mb-2">
                            <div className="flex items-center gap-1">
                              <Building className="w-4 h-4" />
                              <span>{job.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{job.posted}</span>
                            </div>
                          </div>
                          <div className="flex gap-2 mb-2">
                            <Badge variant="outline">{job.type}</Badge>
                            <Badge variant="outline">{job.salary}</Badge>
                          </div>
                        </div>
                        <Button>Jetzt bewerben</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">{job.description}</CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button size="lg">Alle Technologie Jobs anzeigen</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Technology;