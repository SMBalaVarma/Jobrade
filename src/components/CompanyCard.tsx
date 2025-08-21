import React from "react";
import { Link } from "react-router-dom";
import { Star, Users, MapPin } from "lucide-react";

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

const images = import.meta.glob('../assets/logos/*.{png,jpg,jpeg,webp,svg}', { eager: true }) as Record<string, { default: string }>;

function resolveLogo(logo?: string) {
  if (!logo) return null;
  // if absolute web path or already in public (starts with / or http), use as-is
  if (logo.startsWith('http') || logo.startsWith('/')) {
    // If JSON gives "/src/assets/..." try to use the filename to match an imported asset
    if (logo.startsWith('/src') || logo.startsWith('/src/')) {
      const filename = logo.split('/').pop();
      if (filename) {
        const match = Object.entries(images).find(([path]) => path.endsWith(filename));
        if (match) return match[1].default;
      }
    }
    return logo;
  }

  // If JSON gives a path relative to src like "src/assets/..." or "assets/..."
  const filename = logo.split('/').pop();
  if (filename) {
    const match = Object.entries(images).find(([path]) => path.endsWith(filename));
    if (match) return match[1].default;
  }

  // fallback to the provided string (may fail)
  return logo;
}

const CompanyCard: React.FC<{ company: Company }> = ({ company }) => {
  const logoSrc = resolveLogo(company.logo);

  return (
    <Link
      to={`/company/${company.id}`}
      className="block bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {logoSrc ? (
            <img src={logoSrc} alt={`${company.name} logo`} className="w-12 h-12 rounded object-cover" />
          ) : (
            <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center text-2xl">🏢</div>
          )}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
            <p className="text-sm text-gray-600">{company.industry}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{company.rating ?? "-"}</span>
          </div>
          <div className="text-sm text-pulse-600 font-medium">{company.openJobs ?? 0} offene Stellen</div>
        </div>
      </div>

      <div className="space-y-2 mb-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          {company.employees ?? "—"}
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          {company.location ?? "—"}
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{company.description}</p>

      <div className="flex items-center justify-between">
        <span className="text-pulse-600 font-medium text-sm">Mehr erfahren →</span>
        <span className="text-sm text-gray-500">{company.industry}</span>
      </div>
    </Link>
  );
};

export default CompanyCard;