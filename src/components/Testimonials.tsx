
import React, { useRef } from "react";
import testimonialsIllustration from "/assets/testimonials.webp";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "Jobard.de hat mir geholfen, meinen Traumjob bei einem führenden Technologieunternehmen zu finden. Die personalisierten Jobempfehlungen und der einfache Bewerbungsprozess haben den Unterschied gemacht.",
  author: "Sarah Chen",
  role: "Softwareingenieurin bei TechCorp",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png"
}, {
  content: "Als frischer Absolvent war ich von der Jobsuche überwältigt. Diese Plattform hat mich mit fantastischen Möglichkeiten verbunden und großartige Karriereberatung geboten.",
  author: "Michael Rodriguez",
  role: "Marketing Manager bei InnovateCo",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png"
}, {
  content: "Die Qualität der Stellenausschreibungen und Unternehmensinformationen auf dieser Plattform ist außergewöhnlich. Ich habe meine aktuelle Stelle gefunden und könnte nicht glücklicher mit meinem Karrierewachstum sein.",
  author: "Dr. Amara Patel",
  role: "Data Scientist bei DataFlow",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.png"
}, {
  content: "Von der Bewerbung über das Vorstellungsgespräch bis zum Angebot - der gesamte Prozess war nahtlos. Die Gehaltseinblicke und Interview-Tipps waren unglaublich wertvoll.",
  author: "Jason Lee",
  role: "Produktmanager bei GrowthLabs",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/background-section1.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return <div className="bg-cover bg-center rounded-lg p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden min-h-[280px] sm:min-h-[320px]" style={{
    backgroundImage: `url('${backgroundImage}')`
  }}>
      <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white z-10"></div>
      
      <div className="relative z-0">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 font-medium leading-relaxed pr-12 sm:pr-16 md:pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-base sm:text-lg md:text-xl">{author}</h4>
          <p className="text-white/80 text-xs sm:text-sm md:text-base">{role}</p>
        </div>
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="py-8 sm:py-12 bg-white relative" id="testimonials" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12">
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-4 mb-4 sm:mb-6 justify-center lg:justify-start">
              <div className="job-chip">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
                <span>Erfolgsgeschichten</span>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">Erfolgsgeschichten</h2>
          </div>
          <div className="hidden lg:block">
            <img 
              src={testimonialsIllustration} 
              alt="Success stories illustration" 
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;
