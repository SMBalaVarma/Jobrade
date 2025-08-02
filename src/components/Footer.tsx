
import React from "react";
const Footer = () => {
  return <footer className="w-full bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold text-pulse-500 mb-4">JobSearch Pro</h3>
            <p className="text-gray-300 text-sm">
              Connecting talented professionals with amazing opportunities worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-pulse-500">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-pulse-500">Career Advice</a></li>
              <li><a href="#" className="hover:text-pulse-500">Resume Builder</a></li>
              <li><a href="#" className="hover:text-pulse-500">Salary Calculator</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-pulse-500">Post a Job</a></li>
              <li><a href="#" className="hover:text-pulse-500">Talent Solutions</a></li>
              <li><a href="#" className="hover:text-pulse-500">Employer Branding</a></li>
              <li><a href="#" className="hover:text-pulse-500">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-pulse-500">About Us</a></li>
              <li><a href="#" className="hover:text-pulse-500">Contact</a></li>
              <li><a href="#" className="hover:text-pulse-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pulse-500">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 JobSearch Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
