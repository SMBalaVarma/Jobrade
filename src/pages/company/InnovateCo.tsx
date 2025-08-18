import React from "react";
import { ArrowLeft, MapPin, Users, Star, Globe, Mail, Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import innovateCoLogo from "/assets/logos/innovateco-logo.webp";

const InnovateCo = () => {
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
                src={innovateCoLogo} 
                alt="InnovateCo Logo" 
                className="w-20 h-20 rounded-xl object-cover shadow-md"
              />
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">InnovateCo</h1>
                <p className="text-lg text-gray-600 mb-4">
                  Schnell wachsendes Startup, das die Art revolutioniert, wie Menschen arbeiten und zusammenarbeiten.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    München, Deutschland
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    500-1000 Mitarbeiter
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    4.6 Bewertung
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Gegründet 2018
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pulse-600">23</div>
                <div className="text-sm text-gray-600">Offene Stellen</div>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* About */}
            <div className="bg-white rounded-xl shadow-elegant p-6">
              <h2 className="text-xl font-semibold mb-4">Über InnovateCo</h2>
              <p className="text-gray-600 mb-4">
                InnovateCo ist ein dynamisches Startup, das sich darauf spezialisiert hat, die Zukunft der Arbeit zu gestalten. Wir entwickeln innovative Lösungen für Remote-Zusammenarbeit und digitale Workflows.
              </p>
              <p className="text-gray-600">
                Mit einem starken Fokus auf Agilität und Innovation schaffen wir Tools, die Teams dabei helfen, produktiver und glücklicher zu arbeiten. Unser schnelles Wachstum spiegelt unseren Erfolg und unser Engagement für Exzellenz wider.
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl shadow-elegant p-6">
              <h2 className="text-xl font-semibold mb-4">Vorteile & Benefits</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Flexible Arbeitszeiten</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Weiterbildungsbudget</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Krankenversicherung</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Startup-Kultur</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Schnelles Wachstum</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Team Events</span>
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
                  <span className="text-gray-700">www.innovateco.de</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">jobs@innovateco.de</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">+49 89 87654321</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-6 text-white">
              <h2 className="text-xl font-semibold mb-2">Teil unserer Erfolgsgeschichte werden?</h2>
              <p className="mb-4 opacity-90">
                Entdecken Sie spannende Karrieremöglichkeiten in unserem wachsenden Team.
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

export default InnovateCo;