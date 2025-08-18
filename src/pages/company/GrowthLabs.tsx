import React from "react";
import { ArrowLeft, MapPin, Users, Star, Globe, Mail, Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import growthLabsLogo from "/assets/logos/growthlabs-logo.webp";

const GrowthLabs = () => {
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
                src={growthLabsLogo} 
                alt="GrowthLabs Logo" 
                className="w-20 h-20 rounded-xl object-cover shadow-md"
              />
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">GrowthLabs</h1>
                <p className="text-lg text-gray-600 mb-4">
                  Marketing-Technologieunternehmen mit Fokus auf Unternehmenswachstum.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Köln, Deutschland
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    100-200 Mitarbeiter
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    4.5 Bewertung
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Gegründet 2017
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pulse-600">15</div>
                <div className="text-sm text-gray-600">Offene Stellen</div>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* About */}
            <div className="bg-white rounded-xl shadow-elegant p-6">
              <h2 className="text-xl font-semibold mb-4">Über GrowthLabs</h2>
              <p className="text-gray-600 mb-4">
                GrowthLabs ist ein innovatives Marketing-Technologieunternehmen, das sich auf nachhaltiges Unternehmenswachstum spezialisiert hat. Wir entwickeln datengetriebene Marketing-Strategien und Tools.
              </p>
              <p className="text-gray-600">
                Unser Expertenteam kombiniert traditionelle Marketing-Weisheit mit modernster Technologie, um messbare Ergebnisse für unsere Kunden zu erzielen. Wir glauben an intelligentes, nachhaltiges Wachstum.
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl shadow-elegant p-6">
              <h2 className="text-xl font-semibold mb-4">Vorteile & Benefits</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Berufliche Entwicklung</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Team Events</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Flexibler Urlaub</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Marketing-Expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Wachstumsorientiert</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Innovative Projekte</span>
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
                  <span className="text-gray-700">www.growthlabs.de</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">talent@growthlabs.de</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">+49 221 55443322</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl p-6 text-white">
              <h2 className="text-xl font-semibold mb-2">Wachstum ist Ihr Ding?</h2>
              <p className="mb-4 opacity-90">
                Treiben Sie mit uns das Wachstum von Unternehmen voran und entwickeln Sie innovative Marketing-Lösungen.
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

export default GrowthLabs;