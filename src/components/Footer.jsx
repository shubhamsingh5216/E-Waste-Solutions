import React from 'react';
import { Recycle, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Recycle className="h-8 w-8 mr-2 text-green-400" />
              <span className="font-bold text-xl">E-Waste Solutions</span>
            </div>
            <p className="text-gray-400 mb-4">
              Dedicated to responsible e-waste management and environmental sustainability through proper recycling and disposal of electronic devices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#intro" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#facility-finder" className="text-gray-400 hover:text-white transition-colors">Find Facility</a></li>
              <li><a href="#news" className="text-gray-400 hover:text-white transition-colors">News & Articles</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#ai-assistant" className="text-gray-400 hover:text-white transition-colors">AI Assistant</a></li>
              <li><a href="#pickup-request" className="text-gray-400 hover:text-white transition-colors">Request Pickup</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">E-Waste Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Recycling Process</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Environmental Impact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Data Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Corporate Programs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Educational Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-green-400 mt-0.5" />
                <span className="text-gray-400">123 Green Street, Eco City, EC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green-400" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-400" />
                <a href="mailto:info@ewastesolutions.com" className="text-gray-400 hover:text-white transition-colors">info@ewastesolutions.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 E-Waste Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 focus:outline-none"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
