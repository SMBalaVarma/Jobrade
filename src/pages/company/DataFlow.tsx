import React from "react";
import { ArrowLeft, MapPin, Users, Star, Globe, Mail, Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dataFlowLogo from "/assets/logos/dataflow-logo.webp";

const DataFlow = () => {
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
                src={dataFlowLogo} 
                alt="DataFlow Logo" 
                className="w-20 h-20 rounded-xl object-cover shadow-md"
              />
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">DataFlow</h1>
                <p className="text-lg text-gray-600 mb-4">
                  Datenanalyseplattform, die Unternehmen bei datengesteuerten Entscheidungen hilft.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Frankfurt, Deutschland
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    200-500 Mitarbeiter
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    4.9 Bewertung
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Gegründet 2016
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pulse-600">18</div>
                <div className="text-sm text-gray-600">Offene Stellen</div>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* About */}
            <div className="bg-white rounded-xl shadow-elegant p-6">
              <h2 className="text-xl font-semibold mb-4">Über DataFlow</h2>
              <p className="text-gray-600 mb-4">
                DataFlow ist ein führender Anbieter von Datenanalyselösungen, der Unternehmen dabei hilft, aus ihren Daten wertvolle Erkenntnisse zu gewinnen. Unsere Plattform ermöglicht es Unternehmen, datengesteuerte Entscheidungen zu treffen.
              </p>
              <p className="text-gray-600">
                Mit fortschrittlichen Analysetools und maschinellem Lernen transformieren wir komplexe Datenmengen in verständliche und handlungsorientierte Insights. Unser Ziel ist es, Daten für jeden zugänglich und nutzbar zu machen.
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl shadow-elegant p-6">
              <h2 className="text-xl font-semibold mb-4">Vorteile & Benefits</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Work-Life-Balance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Wachstumsmöglichkeiten</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Wettbewerbsfähiges Gehalt</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Modernste Technologie</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Datenorientierte Kultur</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-gray-700">Internationale Teams</span>
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
                  <span className="text-gray-700">www.dataflow.de</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">careers@dataflow.de</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">+49 69 99887766</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl p-6 text-white">
              <h2 className="text-xl font-semibold mb-2">Daten sind Ihre Leidenschaft?</h2>
              <p className="mb-4 opacity-90">
                Gestalten Sie mit uns die Zukunft der Datenanalyse und werden Sie Teil unseres Teams.
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

export default DataFlow;