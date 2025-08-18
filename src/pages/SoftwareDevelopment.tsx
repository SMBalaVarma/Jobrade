import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Building } from "lucide-react";

const SoftwareDevelopment = () => {
  const softwareJobs = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "CodeCraft Solutions",
      location: "Berlin",
      type: "Vollzeit",
      salary: "€60.000 - €80.000",
      description: "Entwicklung von Web-Anwendungen mit modernen Frameworks",
      skills: ["React", "Node.js", "MongoDB"],
      posted: "vor 1 Tag"
    },
    {
      id: 2,
      title: "Mobile App Developer",
      company: "AppVenture GmbH",
      location: "Frankfurt",
      type: "Vollzeit",
      salary: "€55.000 - €75.000",
      description: "Entwicklung nativer iOS und Android Anwendungen",
      skills: ["Swift", "Kotlin", "React Native"],
      posted: "vor 2 Tagen"
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "ServerTech AG",
      location: "Köln",
      type: "Vollzeit",
      salary: "€65.000 - €85.000",
      description: "Entwicklung skalierbarer Backend-Services und APIs",
      skills: ["Java", "Spring Boot", "PostgreSQL"],
      posted: "vor 1 Tag"
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
                Softwareentwicklung Jobs
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Finden Sie spannende Karrieremöglichkeiten in der Softwareentwicklung. 
                Von Frontend bis Backend, Mobile bis Web - hier finden Sie Ihren perfekten Entwicklerjob.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Frontend Development</Badge>
                <Badge variant="secondary">Backend Development</Badge>
                <Badge variant="secondary">Full Stack</Badge>
                <Badge variant="secondary">Mobile Development</Badge>
                <Badge variant="secondary">API Development</Badge>
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
                {softwareJobs.map((job) => (
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
                <Button size="lg">Alle Softwareentwicklung Jobs anzeigen</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SoftwareDevelopment;