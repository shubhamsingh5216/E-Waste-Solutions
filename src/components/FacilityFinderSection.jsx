import React, { useState } from 'react';
import { MapPin, Search, ArrowRight } from 'lucide-react';

const FacilityFinderSection = () => {
  const [zipCode, setZipCode] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);

  // Mock data for facilities
  const facilities = [
    {
      id: 1,
      name: 'Green Tech Recyclers',
      address: '123 Eco Street, Green City, 10001',
      distance: '1.2 miles',
      hours: 'Mon-Fri: 9AM-5PM, Sat: 10AM-2PM',
      phone: '(555) 123-4567',
      accepts: ['Computers', 'Phones', 'TVs', 'Batteries']
    },
    {
      id: 2,
      name: 'E-Cycle Solutions',
      address: '456 Recycle Ave, Eco Town, 10002',
      distance: '2.5 miles',
      hours: 'Mon-Sat: 8AM-6PM',
      phone: '(555) 987-6543',
      accepts: ['Computers', 'Printers', 'Small Appliances']
    },
    {
      id: 3,
      name: 'Tech Waste Management',
      address: '789 Sustainable Blvd, Green Valley, 10003',
      distance: '3.8 miles',
      hours: 'Mon-Fri: 10AM-7PM, Sun: 12PM-4PM',
      phone: '(555) 456-7890',
      accepts: ['All Electronics', 'Batteries', 'Light Bulbs']
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchPerformed(true);
  };

  return (
    <div className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Find Your Nearest E-Waste Facility</h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Locate the closest e-waste collection centers and recycling facilities in your area. Simply enter your zip code to get started.
          </p>
        </div>

        {/* Bigger Search Box */}
        <div className="max-w-3xl mx-auto mb-16">
          <form onSubmit={handleSearch} className="flex">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <MapPin className="h-8 w-8 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-16 pr-6 py-5 text-xl border border-gray-500 rounded-l-2xl focus:outline-none focus:ring-4 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your zip code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-10 py-5 text-xl rounded-r-2xl hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2"
            >
              <Search className="h-7 w-7" />
            </button>
          </form>
        </div>

        {/* Facility Cards Section */}
        {searchPerformed && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {facilities.map((facility) => (
              <div key={facility.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-10">
                  <h3 className="text-3xl font-semibold text-gray-900 mb-4">{facility.name}</h3>
                  <div className="flex items-start mb-4">
                    <MapPin className="h-7 w-7 text-green-600 mr-4 mt-1" />
                    <span className="text-xl text-gray-700">{facility.address}</span>
                  </div>
                  <p className="text-green-600 font-medium text-2xl mb-6">{facility.distance} away</p>
                  <div className="mb-6">
                    <p className="text-xl text-gray-700"><span className="font-semibold">Hours:</span> {facility.hours}</p>
                    <p className="text-xl text-gray-700"><span className="font-semibold">Phone:</span> {facility.phone}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 text-xl mb-4">Accepts:</p>
                    <div className="flex flex-wrap gap-3">
                      {facility.accepts.map((item, index) => (
                        <span key={index} className="bg-green-100 text-green-800 text-lg px-4 py-2 rounded-lg">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-10 py-6 bg-gray-50 border-t border-gray-200">
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-800 font-medium flex items-center justify-center text-2xl"
                  >
                    Get Directions
                    <ArrowRight className="ml-4 h-6 w-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Facilities */}
        <div className="text-center mt-14">
          <a
            href="#"
            className="inline-flex items-center text-green-600 hover:text-green-800 font-medium text-2xl"
          >
            View all facilities in your state
            <ArrowRight className="ml-4 h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FacilityFinderSection;
