import React from 'react';
import { ArrowRight } from 'lucide-react';

const IntroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-700 to-green-500 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Responsible E-Waste Management for a Greener Future
            </h1>
            <p className="text-lg mb-8">
              Electronic waste is the fastest growing waste stream globally. Learn how to properly dispose of your electronic devices and contribute to a sustainable environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#facility-finder"
                className="bg-white text-green-700 px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                Find Nearest Facility
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#pickup-request"
                className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                Request Pickup
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="E-waste recycling"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
