import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Truck, CheckCircle } from 'lucide-react';

const PickupRequestSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    pickupDate: '',
    pickupTime: '',
    itemsDescription: '',
    termsAccepted: false
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Request E-Waste Pickup</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Can't transport your e-waste? We'll come to you! Schedule a pickup from your home or office and we'll ensure your electronics are properly recycled.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {formSubmitted ? (
            <div className="p-8 text-center">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pickup Request Submitted!</h3>
              <p className="text-gray-600 mb-6">Thank you for scheduling an e-waste pickup. We'll contact you shortly to confirm the details.</p>
              <button onClick={() => setFormSubmitted(false)} className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['name', 'email', 'phone', 'zipCode', 'address', 'city'].map((field) => (
                  <div key={field} className={field === 'address' ? 'md:col-span-2' : ''}>
                    <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1 capitalize">{field.replace(/([A-Z])/g, ' $1')} *</label>
                    <input
                      type="text"
                      id={field}
                      name={field}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                      value={formData[field]}
                      onChange={handleChange}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700 mb-1">Preferred Pickup Date *</label>
                  <input
                    type="date"
                    id="pickupDate"
                    name="pickupDate"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                    value={formData.pickupDate}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="pickupTime" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time *</label>
                  <select
                    id="pickupTime"
                    name="pickupTime"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                    value={formData.pickupTime}
                    onChange={handleChange}
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 7PM)</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="itemsDescription" className="block text-sm font-medium text-gray-700 mb-1">Description of Items *</label>
                  <textarea
                    id="itemsDescription"
                    name="itemsDescription"
                    rows="4"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                    value={formData.itemsDescription}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="md:col-span-2 flex items-start">
                  <input
                    id="termsAccepted"
                    name="termsAccepted"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                  />
                  <label htmlFor="termsAccepted" className="ml-3 text-sm text-gray-600">
                    I agree to the <a href="#" className="text-green-600 hover:underline">terms and conditions</a> and privacy policy.
                  </label>
                </div>
              </div>
              
              <div className="mt-8">
                <button type="submit" className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center">
                  <Truck className="h-5 w-5 mr-2" />
                  Schedule Pickup
                </button>
              </div>
              
              <div className="mt-4 text-sm text-gray-500 flex items-center justify-center">
                <MapPin className="h-4 w-4 mr-1" />
                We currently offer pickup services in select areas only
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PickupRequestSection;
