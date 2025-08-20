import React from "react";
import { ArrowLeft, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import techCorpLogo from "/assets/logos/techcorp-logo.webp";

const TechCorp = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="px-40 flex flex-1 justify-center py-5 pt-24">
        <div className="flex flex-col max-w-[960px] flex-1">
          {/* Company Header */}
          <div className="flex p-4">
            <div className="flex w-full flex-col gap-4 md:flex-row md:justify-between">
              <div className="flex gap-4">
                <div className="w-32 h-32 rounded-lg overflow-hidden">
                  <img 
                    src={techCorpLogo} 
                    alt="TechCorp Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-gray-900">TechCorp</h1>
                  <p className="text-base font-normal leading-normal text-gray-600">
                    Führendes Technologieunternehmen mit Fokus auf Innovation und modernste Lösungen.
                  </p>
                  <p className="text-base font-normal leading-normal text-gray-600">
                    10,000+ Mitarbeiter · Information Technology & Services · Berlin, Deutschland
                  </p>
                </div>
              </div>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 text-gray-900 text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] md:w-auto">
                <span className="truncate">Follow</span>
              </button>
            </div>
          </div>

          {/* About Us */}
          <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-gray-900">Über uns</h2>
          <p className="text-gray-900 text-base font-normal leading-normal pb-3 pt-1 px-4">
            TechCorp ist ein führendes Technologieunternehmen, das sich auf die Entwicklung innovativer Lösungen für komplexe Geschäftsprobleme spezialisiert hat. Mit über 10.000 Mitarbeitern weltweit sind wir stolz darauf, an der Spitze der technologischen Innovation zu stehen. Unser Fokus liegt auf Cloud-Computing, künstlicher Intelligenz und modernster Softwareentwicklung.
          </p>

          {/* Job Listings */}
          <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-gray-900">Stellenanzeigen</h2>
          <div className="px-4 py-3">
            <div className="flex overflow-hidden rounded-lg border border-gray-200 bg-white">
              <table className="flex-1">
                <thead>
                  <tr className="bg-white">
                    <th className="px-4 py-3 text-left text-gray-900 w-[400px] text-sm font-medium leading-normal">
                      Stellenbezeichnung
                    </th>
                    <th className="px-4 py-3 text-left text-gray-900 w-[400px] text-sm font-medium leading-normal">
                      Standort
                    </th>
                    <th className="px-4 py-3 text-left text-gray-900 w-[400px] text-sm font-medium leading-normal">Typ</th>
                    <th className="px-4 py-3 text-left text-gray-900 w-60 text-gray-600 text-sm font-medium leading-normal"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="h-[72px] px-4 py-2 w-[400px] text-gray-900 text-sm font-normal leading-normal">
                      Senior Software Engineer
                    </td>
                    <td className="h-[72px] px-4 py-2 w-[400px] text-gray-600 text-sm font-normal leading-normal">
                      Berlin, Deutschland
                    </td>
                    <td className="h-[72px] px-4 py-2 w-[400px] text-gray-600 text-sm font-normal leading-normal">
                      Vollzeit
                    </td>
                    <td className="h-[72px] px-4 py-2 w-60 text-gray-600 text-sm font-bold leading-normal tracking-[0.015em]">
                      Bewerben
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="h-[72px] px-4 py-2 w-[400px] text-gray-900 text-sm font-normal leading-normal">
                      UX/UI Designer
                    </td>
                    <td className="h-[72px] px-4 py-2 w-[400px] text-gray-600 text-sm font-normal leading-normal">
                      Berlin, Deutschland
                    </td>
                    <td className="h-[72px] px-4 py-2 w-[400px] text-gray-600 text-sm font-normal leading-normal">
                      Vollzeit
                    </td>
                    <td className="h-[72px] px-4 py-2 w-60 text-gray-600 text-sm font-bold leading-normal tracking-[0.015em]">
                      Bewerben
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="h-[72px] px-4 py-2 w-[400px] text-gray-900 text-sm font-normal leading-normal">
                      Data Scientist
                    </td>
                    <td className="h-[72px] px-4 py-2 w-[400px] text-gray-600 text-sm font-normal leading-normal">
                      Berlin, Deutschland
                    </td>
                    <td className="h-[72px] px-4 py-2 w-[400px] text-gray-600 text-sm font-normal leading-normal">
                      Vollzeit
                    </td>
                    <td className="h-[72px] px-4 py-2 w-60 text-gray-600 text-sm font-bold leading-normal tracking-[0.015em]">
                      Bewerben
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="h-[72px] px-4 py-2 w-[400px] text-gray-900 text-sm font-normal leading-normal">
                      DevOps Engineer
                    </td>
                    <td className="h-[72px] px-4 py-2 w-[400px] text-gray-600 text-sm font-normal leading-normal">
                      Berlin, Deutschland
                    </td>
                    <td className="h-[72px] px-4 py-2 w-[400px] text-gray-600 text-sm font-normal leading-normal">
                      Vollzeit
                    </td>
                    <td className="h-[72px] px-4 py-2 w-60 text-gray-600 text-sm font-bold leading-normal tracking-[0.015em]">
                      Bewerben
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Reviews & Ratings */}
          <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-gray-900">Bewertungen & Ratings</h2>
          <div className="flex flex-wrap gap-x-8 gap-y-6 p-4">
            <div className="flex flex-col gap-2">
              <p className="text-gray-900 text-4xl font-black leading-tight tracking-[-0.033em]">4.8</p>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-[18px] h-[18px] ${star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-900 text-base font-normal leading-normal">127 Bewertungen</p>
            </div>
            <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-3">
              <p className="text-gray-900 text-sm font-normal leading-normal">5</p>
              <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                <div className="rounded-full bg-gray-900" style={{width: '68%'}}></div>
              </div>
              <p className="text-gray-600 text-sm font-normal leading-normal text-right">68%</p>
              
              <p className="text-gray-900 text-sm font-normal leading-normal">4</p>
              <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                <div className="rounded-full bg-gray-900" style={{width: '22%'}}></div>
              </div>
              <p className="text-gray-600 text-sm font-normal leading-normal text-right">22%</p>
              
              <p className="text-gray-900 text-sm font-normal leading-normal">3</p>
              <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                <div className="rounded-full bg-gray-900" style={{width: '7%'}}></div>
              </div>
              <p className="text-gray-600 text-sm font-normal leading-normal text-right">7%</p>
              
              <p className="text-gray-900 text-sm font-normal leading-normal">2</p>
              <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                <div className="rounded-full bg-gray-900" style={{width: '2%'}}></div>
              </div>
              <p className="text-gray-600 text-sm font-normal leading-normal text-right">2%</p>
              
              <p className="text-gray-900 text-sm font-normal leading-normal">1</p>
              <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                <div className="rounded-full bg-gray-900" style={{width: '1%'}}></div>
              </div>
              <p className="text-gray-600 text-sm font-normal leading-normal text-right">1%</p>
            </div>
          </div>

          <div className="flex px-4 py-3 justify-start">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 text-gray-900 text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Bewertung schreiben</span>
            </button>
          </div>

          {/* Individual Reviews */}
          <div className="flex flex-col gap-8 overflow-x-hidden bg-white p-4">
            <div className="flex flex-col gap-3 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-sm font-medium">AK</span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 text-base font-medium leading-normal">Anna Klein</p>
                  <p className="text-gray-600 text-sm font-normal leading-normal">vor 2 Wochen</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-900 text-base font-normal leading-normal">
                Großartiges Unternehmen mit innovativer Kultur und exzellenten Karrieremöglichkeiten. Das Team ist sehr unterstützend und die Projekte sind herausfordernd und lohnend.
              </p>
            </div>

            <div className="flex flex-col gap-3 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-sm font-medium">MH</span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 text-base font-medium leading-normal">Michael Hoffmann</p>
                  <p className="text-gray-600 text-sm font-normal leading-normal">vor 1 Monat</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="w-5 h-5 text-gray-300" />
              </div>
              <p className="text-gray-900 text-base font-normal leading-normal">
                Guter Arbeitsplatz mit freundlicher Atmosphäre. Die Projekte sind interessant und das Team arbeitet gut zusammen. Es gibt Raum für Verbesserungen bei der Work-Life-Balance.
              </p>
            </div>
          </div>

          {/* Gallery */}
          <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-gray-900">Galerie</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/059cbced-4a85-4f87-aa86-7a3a818a3647.png"
                alt="TechCorp Büro"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png"
                alt="TechCorp Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png"
                alt="TechCorp Workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png"
                alt="TechCorp Innovation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TechCorp;