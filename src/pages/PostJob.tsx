import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building, MapPin, DollarSign, Clock } from "lucide-react";
import postJobIllustration from "/assets/post-job.webp";

const PostJob = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    company: "",
    location: "",
    jobType: "",
    experience: "",
    salary: "",
    description: "",
    requirements: "",
    benefits: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle job posting logic here
    console.log("Job posting:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Job Inserieren</h1>
                <p className="text-gray-600">Finden Sie den perfekten Kandidaten für Ihr Team</p>
              </div>
              <div className="hidden lg:block">
                <img 
                  src={postJobIllustration} 
                  alt="Post job illustration" 
                  className="w-full h-auto max-w-md mx-auto"
                />
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto">

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Job Details Section */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Job-Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                        Jobtitel *
                      </label>
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                        placeholder="z.B. Senior Softwareentwickler"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Firmenname *
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                          placeholder="Ihr Firmenname"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        Standort *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                          placeholder="Stadt, Bundesland oder Remote"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-2">
                        Arbeitstyp *
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <select
                          id="jobType"
                          name="jobType"
                          value={formData.jobType}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent appearance-none"
                          required
                        >
                          <option value="">Arbeitstyp auswählen</option>
                          <option value="full-time">Vollzeit</option>
                          <option value="part-time">Teilzeit</option>
                          <option value="contract">Vertrag</option>
                          <option value="freelance">Freelance</option>
                          <option value="internship">Praktikum</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                        Erfahrungslevel
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent appearance-none"
                      >
                        <option value="">Erfahrungslevel auswählen</option>
                        <option value="entry">Einstiegslevel (0-2 Jahre)</option>
                        <option value="mid">Mittleres Level (2-5 Jahre)</option>
                        <option value="senior">Senior Level (5+ Jahre)</option>
                        <option value="executive">Führungsebene/Direktor</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-2">
                        Gehaltsbereich
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="salary"
                          name="salary"
                          value={formData.salary}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                          placeholder="z.B. 80.000 € - 120.000 €"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Job Description Section */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Jobbeschreibung</h2>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                        Jobbeschreibung *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                        placeholder="Beschreiben Sie die Rolle, Verantwortlichkeiten und was der Kandidat tun wird..."
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
                        Anforderungen & Qualifikationen
                      </label>
                      <textarea
                        id="requirements"
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                        placeholder="Listen Sie die erforderlichen Fähigkeiten, Ausbildung und Erfahrung auf..."
                      />
                    </div>

                    <div>
                      <label htmlFor="benefits" className="block text-sm font-medium text-gray-700 mb-2">
                        Vorteile & Benefits
                      </label>
                      <textarea
                        id="benefits"
                        name="benefits"
                        value={formData.benefits}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                        placeholder="Krankenversicherung, Remote-Arbeit, Urlaubszeit, etc."
                      />
                    </div>
                  </div>
                </div>

                {/* Pricing Section */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Job-Inserierungs-Paket</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-900 font-medium">30-Tage Premium Listing</p>
                      <p className="text-sm text-gray-600">Beinhaltet Featured-Platzierung und E-Mail-Benachrichtigungen an relevante Kandidaten</p>
                    </div>
                    <div className="text-2xl font-bold text-pulse-500">199 €</div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Als Entwurf Speichern
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-pulse-500 hover:bg-pulse-600 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                  >
                    Job Inserieren - 199 €
                  </button>
                </div>
              </form>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  Benötigen Sie Hilfe? <a href="#" className="text-pulse-500 hover:text-pulse-600">Kontaktieren Sie unser Support-Team</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostJob;