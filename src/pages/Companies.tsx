import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, MapPin } from "lucide-react";
import CompanyCard from "@/components/CompanyCard";

type Company = {
  id: string;
  name: string;
  logo?: string;
  industry?: string;
  employees?: string;
  location?: string;
  rating?: number;
  openJobs?: number;
  description?: string;
};

const Companies = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/companies.json")
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data);
      })
      .catch((err) => {
        console.error("Failed to load companies.json", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Unternehmen</h1>
            <p className="text-gray-600 mb-6">Entdecken Sie Top-Arbeitgeber und finden Sie Ihren nächsten Arbeitsplatz</p>

            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Unternehmen suchen..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Standort"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                />
              </div>
              <button className="bg-pulse-500 hover:bg-pulse-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Suchen
              </button>
            </div>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">{loading ? "Lade..." : `${companies.length} Unternehmen gefunden`}</p>
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pulse-500 focus:border-transparent">
              <option>Sortieren: Beliebteste</option>
              <option>Sortieren: Bewertung</option>
              <option>Sortieren: Unternehmensgröße</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>

          {/* Featured Companies Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Empfohlene Unternehmen</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                {["🏢", "🔬", "🎨", "📊", "💼", "🚀"].map((logo, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-2">{logo}</div>
                    <p className="text-sm text-gray-600">Unternehmen {index + 1}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Companies;