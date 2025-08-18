import React from "react";
import { ArrowLeft, MapPin, Users, Star, Globe, Mail, Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cloudTechLogo from "/assets/logos/cloudtech-logo.webp";

const CloudTech = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-pulse-600 hover:text-pulse-700 mb-6">
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>

          {/* Company Header */}
          <div className="bg-white rounded-xl shadow-elegant p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <img 
                src={cloudTechLogo} 
                alt="CloudTech Logo" 
                className="w-20 h-20 rounded-xl object-cover shadow-md"
              />
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">CloudTech</h1>
                <p className="text-lg text-gray-600 mb-4">
                  Cloud-Infrastrukturanbieter für Unternehmenskunden weltweit.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Stuttgart, Deutschland
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    1000-5000 Mitarbeiter
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    4.8 Bewertung
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Gegründet 2012
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pulse-600">34</div>
                <div className="text-sm text-gray-600">Offene Stellen</div>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* About */}
            <div className="bg-white rounded-xl shadow-elegant p-6">
              <h2 className="text-xl font-semibold mb-4">Über CloudTech</h2>
              <p className="text-gray-600 mb-4">
                CloudTech ist ein führender Anbieter von Cloud-Infrastrukturdiensten für Unternehmen aller Größenordnungen. Wir bieten skalierbare, sichere und zuverlässige Cloud-Lösungen für kritische Geschäftsanwendungen.
              </p>
              <p className="text-gray-600">
                Mit einem globalen Netzwerk von Rechenzentren und einem erfahrenen Team von Cloud-Experten helfen wir Unternehmen dabei, ihre digitale Transformation zu beschleunigen und ihre IT-Infrastruktur zu modernisieren.
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl shadow-elegant p-6">
              <h2 className="text-xl font-semibold mb-4">Vorteile & Benefits</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Aktienpaket</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Remote Work</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Lernen & Entwicklung</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Globale Projekte</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Cloud-Expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Internationale Kultur</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Open Positions */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Contact */}
            <div className="bg-white rounded-xl shadow-elegant p-6">
              <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">www.cloudtech.de</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">hr@cloudtech.de</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">+49 711 44556677</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl p-6 text-white">
              <h2 className="text-xl font-semibold mb-2">Cloud ist die Zukunft?</h2>
              <p className="mb-4 opacity-90">
                Gestalten Sie mit uns die Zukunft der Cloud-Infrastruktur und arbeiten Sie an globalen Projekten.
              </p>
              <Link 
                to="/browse-jobs"
                className="inline-block bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Alle Jobs anzeigen
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CloudTech;