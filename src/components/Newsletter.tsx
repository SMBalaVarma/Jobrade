import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import newsletterIllustration from "/assets/newsletter.webp";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Bitte geben Sie Ihre E-Mail-Adresse ein",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
                title: "Job-Benachrichtigungen aktiviert!",
                description: "Sie erhalten personalisierte Jobempfehlungen in Ihrem Posteingang."
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };
  return <section id="newsletter" className="bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="job-chip">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">06</span>
                  <span>Job-Benachrichtigungen</span>
                </div>
              </div>
              
              <h2 className="text-5xl font-display font-bold mb-4 text-left">Bleiben Sie mit Job-Benachrichtigungen auf dem Laufenden</h2>
              <p className="text-xl text-gray-700 mb-10 text-left">
                Erhalten Sie personalisierte Jobempfehlungen und verpassen Sie nie Ihre Traumchance
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="relative flex-grow">
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Geben Sie Ihre E-Mail für Job-Benachrichtigungen ein" className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700" required />
                </div>
                <button type="submit" disabled={isSubmitting} className="bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-4 px-10 rounded-full transition-all duration-300 md:ml-4">
                  {isSubmitting ? "Aktivierung..." : "Job-Benachrichtigungen erhalten"}
                </button>
              </form>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src={newsletterIllustration} 
                alt="Newsletter subscription illustration" 
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Newsletter;