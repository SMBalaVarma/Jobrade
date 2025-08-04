import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Building,
  Calendar,
  CalendarX,
  Briefcase,
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  Globe,
  User
} from "lucide-react";
import techInnovatorsLogo from "/assets/logos/tech-innovators-logo.webp";
import digitalSolutionsLogo from "/assets/logos/digital-solutions-logo.webp";
import creativeMindsLogo from "/assets/logos/creative-minds-logo.webp";

const JobDetail = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch job data from JSON file
    const fetchJobData = async () => {
      try {
        const response = await fetch('/data/jobs.json');
        const data = await response.json();
        const foundJob = data.jobs.find(j => j.id.toString() === jobId);
        setJob(foundJob);
      } catch (error) {
        console.error('Error fetching job data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobData();
  }, [jobId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="text-lg">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="text-lg">Job not found</div>
        </div>
        <Footer />
      </div>
    );
  }

  // Sample related jobs data
  const sampleJob = {
    id: jobId,
    title: "Product Designer / UI Designer",
    company: "InVision",
    location: "London, UK",
    type: "Full Time",
    salary: "$35k - $45k",
    posted: "11 hours ago",
    logo: "In",
    logoColor: "bg-blue-600",
    featured: true,
    urgent: true,
    private: true,
    description: "As a Product Designer, you will work within a Product Delivery Team tasked with UI, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to propel your career into the FinTech or Big Data arenas.",
    responsibilities: [
      "Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.",
      "Work with BAs, product managers and tech teams to lead the Product Design.",
      "Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.",
      "Accurately estimate design tickets during planning sessions.",
      "Contribute to developing reusable UI components/style. Design and consider UI deliverables including sketch files, style guides, high fidelity wireframes, prototypes, micro interactions and pattern libraries.",
      "Ensure design choices are data-led by identifying assumptions to test each sprint, and work with the analysts in your team to plan moderated usability test sessions.",
      "Design pixel perfect responsive UI's and understand the underlying browser behavior and limitations.",
      "Present your work to the wider business at Show & Tell sessions."
    ],
    skills: [
      "You have at least 3 years' experience working as a Product Designer.",
      "You have experience using Sketch and Invision or Figma &",
      "You have some previous experience working in an agile environment – Think two-week sprints.",
      "You are familiar using Jira and Confluence in your workflow."
    ],
    tags: ["administrative", "android", "wordpress", "design", "react"],
    expirationDate: "April 06, 2021",
    hours: "50h / week",
    rate: "$15 - $25 / hour",
    companySize: "501-1,000",
    founded: "2011",
    industry: "Software",
    phone: "+123 456 7890",
    email: "info@invision.com",
    website: "www.invisionapp.com"
  };

  const relatedJobs = [
    {
      id: 1,
      title: "Senior Full Stack Engineer, Creator Success",
      company: "MedHub",
      location: "London, UK",
      type: "Full Time",
      salary: "$50k - $70k",
      posted: "17 hours ago",
      logo: techInnovatorsLogo,
      logoColor: "bg-gray-900",
      isImage: true
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Figma",
      location: "London, UK",
      type: "Full Time",
      salary: "$30k - $50k",
      posted: "17 hours ago",
      logo: digitalSolutionsLogo,
      logoColor: "bg-orange-500",
      isImage: true
    },
    {
      id: 3,
      title: "Sr. Full Stack Engineer",
      company: "Invision",
      location: "London, UK",
      type: "Full Time",
      salary: "$50k - $70k",
      posted: "17 hours ago",
      logo: creativeMindsLogo,
      logoColor: "bg-red-600",
      isImage: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Job Header */}
      <div className="bg-card border-b shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              {/* Company Logo */}
              <div className={`w-20 h-20 ${job.logoColor} rounded-xl flex items-center justify-center text-white font-bold text-2xl shrink-0 shadow-lg`}>
                {job.logo}
              </div>

              {/* Job Details */}
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-foreground mb-4 leading-tight">{job.title}</h1>
                
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    <Link to="#" className="hover:text-primary font-medium transition-colors">{job.company}</Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-medium">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{job.posted}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">{job.salary}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-sm font-medium">Full Time</Badge>
                  <Badge className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 text-sm font-medium">Private</Badge>
                  <Badge className="bg-yellow-500 text-white hover:bg-yellow-600 px-4 py-2 text-sm font-medium">Urgent</Badge>
                </div>

                {/* Apply Button */}
                <div className="flex items-center gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                    Apply for job
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Heart className="h-5 w-5 mr-2" />
                    Save Job
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            {/* Left Column - Job Details (70% width) */}
            <div className="xl:col-span-2 space-y-8">
              {/* Hero Image */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                  alt="Team collaboration and coding workspace" 
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Job Description */}
              <div className="bg-card rounded-xl border shadow-sm p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-primary rounded-full"></div>
                  Job Description
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{job.description}</p>
              </div>

              {/* Key Responsibilities */}
              <div className="bg-card rounded-xl border shadow-sm p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-primary rounded-full"></div>
                  Key Responsibilities
                </h3>
                <ul className="space-y-4">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed text-lg">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skill & Experience */}
              <div className="bg-card rounded-xl border shadow-sm p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-primary rounded-full"></div>
                  Skills & Experience
                </h3>
                <ul className="space-y-4">
                  {job.skills.map((skill, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed text-lg">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Share */}
              <div className="bg-card rounded-xl border shadow-sm p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Share this job</h3>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                    <Facebook className="h-5 w-5 mr-2" />
                    Facebook
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3">
                    <Twitter className="h-5 w-5 mr-2" />
                    Twitter
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3">
                    Google+
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar (30% width) */}
            <div className="xl:col-span-1 space-y-6">
              {/* Job Overview */}
              <div className="bg-card rounded-xl border shadow-sm p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Job Overview</h3>
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm text-muted-foreground">Date Posted:</span>
                      <p className="text-sm font-medium text-foreground">Posted {job.posted}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CalendarX className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm text-muted-foreground">Expiration date:</span>
                      <p className="text-sm font-medium text-foreground">{job.expirationDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm text-muted-foreground">Location:</span>
                      <p className="text-sm font-medium text-foreground">{job.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm text-muted-foreground">Job Title:</span>
                      <p className="text-sm font-medium text-foreground">Designer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm text-muted-foreground">Hours:</span>
                      <p className="text-sm font-medium text-foreground">{job.hours}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm text-muted-foreground">Salary:</span>
                      <p className="text-sm font-medium text-foreground">{job.salary}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Location */}
              <div className="bg-card rounded-xl border shadow-sm p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Job Location</h3>
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/15"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-foreground font-semibold text-lg">{job.location}</span>
                  </div>
                </div>
              </div>

              {/* Job Skills */}
              <div className="bg-card rounded-xl border shadow-sm p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Job Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, index) => (
                    <Badge key={index} className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 capitalize">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Company Profile */}
              <div className="bg-card rounded-xl border shadow-sm p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 ${job.logoColor} rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                    {job.logo}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">{job.company}</h3>
                    <Link to="#" className="text-primary hover:text-primary/80 text-sm font-medium">View company profile</Link>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Primary Industry:</span>
                    <span className="text-foreground font-medium">{job.industry}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Company Size:</span>
                    <span className="text-foreground font-medium">{job.companySize}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Founded:</span>
                    <span className="text-foreground font-medium">{job.founded}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Phone:</span>
                    <span className="text-foreground font-medium">{job.phone}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Email:</span>
                    <span className="text-foreground font-medium">{job.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-6 pt-4 border-t">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary w-10 h-10 p-0">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary w-10 h-10 p-0">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary w-10 h-10 p-0">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary w-10 h-10 p-0">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-4">
                  <a href={`https://${job.website}`} className="text-primary hover:text-primary/80 text-sm flex items-center gap-2 font-medium">
                    <Globe className="h-4 w-4" />
                    {job.website}
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-xl border shadow-sm p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Contact Us</h3>
                
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Your Name</label>
                    <Input placeholder="Enter your name" className="border-border focus:border-primary" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                    <Input type="email" placeholder="Enter your email" className="border-border focus:border-primary" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                    <Textarea placeholder="Write your message..." rows={4} className="border-border focus:border-primary" />
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 font-semibold">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Jobs */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Related Jobs</h2>
              <p className="text-muted-foreground text-lg">2020 jobs live – 293 added today</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedJobs.map((relatedJob) => (
                <Link 
                  key={relatedJob.id}
                  to={`/job/${relatedJob.id}`}
                  className="block bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    {relatedJob.isImage ? (
                      <img 
                        src={relatedJob.logo} 
                        alt={`${relatedJob.company} logo`}
                        className="w-14 h-14 rounded-xl object-cover shadow-md"
                      />
                    ) : (
                      <div className={`w-14 h-14 ${relatedJob.logoColor} rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-md`}>
                        {relatedJob.logo}
                      </div>
                    )}
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {relatedJob.title}
                      </h3>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-primary" />
                          <span className="font-medium">{relatedJob.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{relatedJob.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-primary" />
                          <span className="font-semibold text-foreground">{relatedJob.salary}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary shrink-0">
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex gap-2">
                      <Badge className="bg-primary text-primary-foreground text-xs px-2 py-1">
                        {relatedJob.type}
                      </Badge>
                      <Badge className="bg-green-500 text-white text-xs px-2 py-1">
                        Urgent
                      </Badge>
                    </div>
                    <span className="text-xs text-muted-foreground">{relatedJob.posted}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetail;