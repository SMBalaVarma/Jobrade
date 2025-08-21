import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Users,
  Star,
  Globe,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Job = { title: string; location?: string; type?: string; link?: string };
type Review = {
  name: string;
  avatar?: string;
  rating?: number;
  date?: string;
  comment?: string;
};
type Company = {
  id: string;
  name: string;
  logo?: string;
  description?: string;
  rating?: number;
  employees?: string;
  location?: string;
  openJobs?: number;
  founded?: number;
  industry?: string;
  website?: string;
  email?: string;
  phone?: string;
  benefits?: string[];
  about?: string;
  jobs?: Job[];
  reviews?: Review[];
  gallery?: string[];
};

const images = import.meta.glob(
  "../../assets/logos/*.{png,jpg,jpeg,webp,svg}",
  { eager: true }
) as Record<string, { default: string }>;

function resolveLogo(logo?: string) {
  if (!logo) return null;
  // public path (served from public/) - use as-is
  if (logo.startsWith("/assets/") || logo.startsWith("http")) return logo;
  // handle values like "/src/assets/..." or "src/assets/..." or just filename
  const filename = logo.split("/").pop();
  if (filename) {
    const match = Object.entries(images).find(([p]) => p.endsWith(filename));
    if (match) return (match[1] as any).default;
  }
  return logo;
}

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700">
    {children}
  </span>
);

const CompanyProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch("/data/companies.json")
      .then((res) => res.json())
      .then((data: Company[]) => {
        const found = data.find(
          (c) =>
            c.id === id ||
            c.id === id.toLowerCase() ||
            c.name?.toLowerCase() === id.toLowerCase()
        );
        setCompany(found ?? null);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  const logoSrc = useMemo(() => resolveLogo(company?.logo), [company]);

  const ratingRounded = Math.round(company?.rating ?? 0);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Lade...
      </div>
    );
  if (!company)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Unternehmen nicht gefunden
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-pulse-600 hover:text-pulse-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>

          <header className="bg-gradient-to-r from-white/80 via-white/60 to-white/80 rounded-xl shadow-elegant p-6 mb-6 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                {logoSrc ? (
                  <img
                    src={logoSrc}
                    alt={`${company.name} Logo`}
                    className="w-24 h-24 rounded-xl object-cover shadow-md"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center text-3xl">
                    🏢
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 truncate">
                  {company.name}
                </h1>
                <p className="text-gray-600 mt-2 line-clamp-2">
                  {company.description ?? company.about}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {company.industry && <Pill>{company.industry}</Pill>}
                  {company.location && (
                    <Pill>
                      <MapPin className="mr-2 h-4 w-4" /> {company.location}
                    </Pill>
                  )}
                  {company.employees && (
                    <Pill>
                      <Users className="mr-2 h-4 w-4" /> {company.employees}
                    </Pill>
                  )}
                  {company.founded && (
                    <Pill>
                      <Calendar className="mr-2 h-4 w-4" /> Gegründet {company.founded}
                    </Pill>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-end gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < ratingRounded ? "text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    {company.rating ?? "—"} • {company.openJobs ?? 0} offene
                    Stellen
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href={company.jobs && company.jobs.length ? company.jobs[0].link : "/browse-jobs"}
                    className="inline-flex items-center px-4 py-2 bg-pulse-600 text-white rounded-lg hover:opacity-95 text-sm"
                  >
                    Jetzt bewerben
                  </a>

                  {company.website && (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50"
                    >
                      <Globe className="mr-2 h-4 w-4" /> Webseite
                    </a>
                  )}

                  {company.email && (
                    <a
                      href={`mailto:${company.email}`}
                      className="inline-flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50"
                    >
                      <Mail className="mr-2 h-4 w-4" /> Kontakt
                    </a>
                  )}
                </div>
              </div>
            </div>
          </header>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-elegant p-6">
                <h2 className="text-lg font-semibold mb-3">Über {company.name}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {company.about ?? company.description}
                </p>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Branche</div>
                    <div className="font-medium">{company.industry ?? "—"}</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Mitarbeiter</div>
                    <div className="font-medium">{company.employees ?? "—"}</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Standort</div>
                    <div className="font-medium">{company.location ?? "—"}</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Gegründet</div>
                    <div className="font-medium">{company.founded ?? "—"}</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-elegant p-6">
                <h3 className="text-lg font-semibold mb-4">Offene Stellen</h3>
                <div className="space-y-3">
                  {(company.jobs ?? []).length > 0 ? (
                    (company.jobs ?? []).map((job, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:shadow-sm"
                      >
                        <div>
                          <div className="font-medium">{job.title}</div>
                          <div className="text-sm text-gray-500">
                            {job.location} • {job.type}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <a
                            href={job.link}
                            className="px-3 py-2 bg-pulse-600 text-white rounded-md text-sm"
                          >
                            Details
                          </a>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">Derzeit keine offenen Stellen.</p>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-elegant p-6">
                <h3 className="text-lg font-semibold mb-4">Bewertungen</h3>
                <div className="space-y-4">
                  {(company.reviews ?? []).length > 0 ? (
                    (company.reviews ?? []).map((r, i) => (
                      <div
                        key={i}
                        className="flex gap-4 bg-gray-50 rounded-lg p-4 items-start"
                      >
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center text-sm">
                          {r.avatar ? (
                            <img
                              src={r.avatar}
                              alt={r.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-gray-600">
                              {r.name?.split(" ").map(n => n[0]).slice(0,2).join("")}
                            </span>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-3">
                            <div className="font-medium">{r.name}</div>
                            <div className="text-yellow-400">
                              {"★".repeat(r.rating ?? 0)}
                            </div>
                            <div className="text-sm text-gray-400">{r.date}</div>
                          </div>
                          <div className="mt-2 text-gray-700">{r.comment}</div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">Noch keine Bewertungen.</p>
                  )}
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="bg-white rounded-xl shadow-elegant p-4">
                <h4 className="text-sm text-gray-500 mb-3">Vorteile & Benefits</h4>
                <div className="grid grid-cols-1 gap-2">
                  {(company.benefits ?? []).length > 0 ? (
                    (company.benefits ?? []).map((b, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-gray-50 p-3 rounded-md text-sm"
                      >
                        <div className="w-2 h-2 bg-pulse-600 rounded-full" />
                        <div className="text-gray-700">{b}</div>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 text-sm">Keine Angaben</div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-elegant p-4">
                <h4 className="text-sm text-gray-500 mb-3">Kontakt</h4>
                <div className="space-y-2 text-sm">
                  {company.website && (
                    <div className="flex items-center gap-3">
                      <Globe className="h-4 w-4 text-gray-400" />
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-pulse-600"
                      >
                        {company.website}
                      </a>
                    </div>
                  )}
                  {company.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <a className="text-gray-700" href={`mailto:${company.email}`}>
                        {company.email}
                      </a>
                    </div>
                  )}
                  {company.phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <div className="text-gray-700">{company.phone}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-elegant p-4">
                <h4 className="text-sm text-gray-500 mb-3">Galerie</h4>
                <div className="grid grid-cols-3 gap-2">
                  {(company.gallery ?? []).length > 0 ? (
                    (company.gallery ?? []).slice(0, 6).map((g, i) => (
                      <a key={i} href={g} target="_blank" rel="noreferrer">
                        <img
                          src={g}
                          alt={`${company.name} gallery ${i + 1}`}
                          className="w-full h-20 object-cover rounded-md"
                        />
                      </a>
                    ))
                  ) : logoSrc ? (
                    <img
                      src={logoSrc}
                      alt={`${company.name} logo`}
                      className="w-full h-20 object-cover rounded-md col-span-3"
                    />
                  ) : (
                    <div className="text-gray-500 text-sm">Keine Bilder verfügbar</div>
                  )}
                </div>
              </div>
            </aside>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CompanyProfile;