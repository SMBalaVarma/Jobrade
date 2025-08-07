
import React from "react";
const Footer = () => {
  return <footer className="w-full bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold text-pulse-500 mb-4">Jobard.de</h3>
            <p className="text-gray-300 text-sm">
              Verbindung talentierter Fachkräfte mit großartigen Möglichkeiten weltweit.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Für Jobsuchende</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-pulse-500">Jobs Finden</a></li>
              <li><a href="#" className="hover:text-pulse-500">Karriereberatung</a></li>
              <li><a href="#" className="hover:text-pulse-500">Lebenslauf Builder</a></li>
              <li><a href="#" className="hover:text-pulse-500">Gehaltsrechner</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Für Arbeitgeber</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-pulse-500">Job Inserieren</a></li>
              <li><a href="#" className="hover:text-pulse-500">Talent-Lösungen</a></li>
              <li><a href="#" className="hover:text-pulse-500">Employer Branding</a></li>
              <li><a href="#" className="hover:text-pulse-500">Preise</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-pulse-500">Über Uns</a></li>
              <li><a href="#" className="hover:text-pulse-500">Kontakt</a></li>
              <li><a href="#" className="hover:text-pulse-500">Datenschutz</a></li>
              <li><a href="#" className="hover:text-pulse-500">AGB</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Jobard.de. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
