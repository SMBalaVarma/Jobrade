
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
  content: "JobSearch Pro helped me land my dream job at a top tech company. The personalized job recommendations and easy application process made all the difference.",
  author: "Sarah Chen",
  role: "Software Engineer at TechCorp",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png"
}, {
  content: "As a recent graduate, I was overwhelmed by job searching. This platform connected me with amazing opportunities and provided great career guidance.",
  author: "Michael Rodriguez",
  role: "Marketing Manager at InnovateCo",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png"
}, {
  content: "The quality of job listings and company information on this platform is exceptional. I found my current role and couldn't be happier with my career growth.",
  author: "Dr. Amara Patel",
  role: "Data Scientist at DataFlow",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.png"
}, {
  content: "From application to interview to offer - the entire process was seamless. The salary insights and interview tips were incredibly valuable.",
  author: "Jason Lee",
  role: "Product Manager at GrowthLabs",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/background-section1.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return <div className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" style={{
    backgroundImage: `url('${backgroundImage}')`
  }}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10"></div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="job-chip">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
                <span>Success Stories</span>
              </div>
            </div>
            
            <h2 className="text-5xl font-display font-bold mb-6 text-left">Success Stories</h2>
          </div>
          <div className="hidden lg:block">
            <img 
              src={testimonialsIllustration} 
              alt="Success stories illustration" 
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;
