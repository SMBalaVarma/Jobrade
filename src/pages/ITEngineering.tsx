import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Building } from "lucide-react";

const ITEngineering = () => {
  const itJobs = [
    {
      id: 1,
      title: "IT Systems Engineer",
      company: "TechSystems GmbH",
      location: "München",
      type: "Vollzeit",
      salary: "€55.000 - €75.000",
      description: "Administration und Wartung von IT-Infrastrukturen",
      skills: ["Windows Server", "Linux", "VMware"],
      posted: "vor 1 Tag"
    },
    {
      id: 2,
      title: "Network Engineer",
      company: "NetWork Solutions",
      location: "Hamburg",
      type: "Vollzeit",
      salary: "€60.000 - €80.000",
      description: "Design und Implementierung von Netzwerk-Architekturen",
      skills: ["Cisco", "Routing", "Switching"],
      posted: "vor 3 Tagen"
    },
    {
      id: 3,
      title: "Security Engineer",
      company: "CyberSafe AG",
      location: "Düsseldorf",
      type: "Vollzeit",
      salary: "€70.000 - €90.000",
      description: "Implementierung von IT-Sicherheitslösungen",
      skills: ["Cybersecurity", "Penetration Testing", "SIEM"],
      posted: "vor 2 Tagen"
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
                IT und Ingenieurwesen Jobs
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Entdecken Sie Karrieremöglichkeiten in IT und Ingenieurwesen. 
                Von Systemadministration bis Netzwerk-Engineering - finden Sie Ihren idealen Job.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">System Administration</Badge>
                <Badge variant="secondary">Network Engineering</Badge>
                <Badge variant="secondary">IT Security</Badge>
                <Badge variant="secondary">Cloud Infrastructure</Badge>
                <Badge variant="secondary">DevOps</Badge>
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
                {itJobs.map((job) => (
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
                <Button size="lg">Alle IT und Ingenieurwesen Jobs anzeigen</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ITEngineering;