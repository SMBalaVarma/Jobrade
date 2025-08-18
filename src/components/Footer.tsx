
import React from "react";
const Footer = () => {
  return <footer className="w-full bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-display font-bold text-pulse-500 mb-3 sm:mb-4">Jobard.de</h3>
            <p className="text-gray-300 text-sm">
              Verbindung talentierter Fachkräfte mit großartigen Möglichkeiten weltweit.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-base">Für Jobsuchende</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-pulse-500 transition-colors">Jobs Finden</a></li>
              <li><a href="#" className="hover:text-pulse-500 transition-colors">Karriereberatung</a></li>
              <li><a href="#" className="hover:text-pulse-500 transition-colors">Lebenslauf Builder</a></li>
              <li><a href="#" className="hover:text-pulse-500 transition-colors">Gehaltsrechner</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-base">Für Arbeitgeber</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-pulse-500 transition-colors">Job Inserieren</a></li>
              <li><a href="#" className="hover:text-pulse-500 transition-colors">Talent-Lösungen</a></li>
              <li><a href="#" className="hover:text-pulse-500 transition-colors">Employer Branding</a></li>
              <li><a href="#" className="hover:text-pulse-500 transition-colors">Preise</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-base">Unternehmen</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-pulse-500 transition-colors">Über Uns</a></li>
              <li><a href="#" className="hover:text-pulse-500 transition-colors">Kontakt</a></li>
              <li><a href="#" className="hover:text-pulse-500 transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-pulse-500 transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; 2024 Jobard.de. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
