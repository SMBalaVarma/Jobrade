import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingBag, Users, Building, MapPin, Clock, Euro } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Sales = () => {
  const salesJobs = [
    {
      id: 1,
      title: "Sales Manager (m/w/d)",
      company: "Siemens AG",
      location: "Berlin",
      type: "Vollzeit",
      salary: "65.000 - 85.000 €",
      posted: "vor 1 Tag",
      featured: true
    },
    {
      id: 2,
      title: "Account Executive",
      company: "Salesforce",
      location: "München",
      type: "Vollzeit",
      salary: "70.000 - 95.000 €",
      posted: "vor 2 Tagen",
      urgent: true
    },
    {
      id: 3,
      title: "Business Development Representative",
      company: "HubSpot",
      location: "Berlin",
      type: "Vollzeit",
      salary: "45.000 - 65.000 €",
      posted: "vor 3 Tagen"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-6">
                <ShoppingBag className="h-4 w-4" />
                <span className="font-medium">Vertriebs Karrieren</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Erfolg im <span className="text-indigo-600">Vertrieb</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Entdecken Sie spannende Positionen im Innendienst, der Geschäftsentwicklung und Kundenbetreuung. 
                Bauen Sie starke Kundenbeziehungen auf und treiben Sie das Unternehmenswachstum voran.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="px-4 py-2">
                  <Users className="h-4 w-4 mr-2" />
                  1.098 offene Stellen
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Building className="h-4 w-4 mr-2" />
                  300+ Arbeitgeber
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Aktuelle Stellenangebote</h2>
            
            <div className="grid gap-6 max-w-4xl mx-auto">
              {salesJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 flex items-center gap-2">
                          {job.title}
                          {job.urgent && <Badge variant="destructive">Dringend</Badge>}
                          {job.featured && <Badge variant="default">Top Job</Badge>}
                        </CardTitle>
                        <p className="text-muted-foreground font-medium">{job.company}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <Euro className="h-4 w-4" />
                        {job.salary}
                      </div>
                      <span>{job.posted}</span>
                    </div>
                    <Button className="w-full">Jetzt Bewerben</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sales;