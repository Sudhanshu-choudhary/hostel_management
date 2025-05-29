import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data';

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">Enhancing your stay with comfort, convenience, and community.</p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At SerenitySuites, we provide a range of services designed to make your stay comfortable, convenient, and enjoyable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Packages Section */}
      <section className="py-16 px-4 bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Special Packages</h2>
            <p className="max-w-2xl mx-auto text-teal-100">Take advantage of our special offers and packages designed for different types of travelers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-teal-700 p-6 rounded-lg relative overflow-hidden">
              <div className="absolute -right-10 -top-10 bg-yellow-400 text-teal-800 text-sm font-bold py-1 px-12 transform rotate-45">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Student Package</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Discounted long-term stays</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Free breakfast Monday-Friday</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Weekly room cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Access to study room</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Student community events</span>
                </li>
              </ul>
              <p className="text-2xl font-bold mb-6">From $40/night</p>
              <button className="w-full bg-white text-teal-700 hover:bg-gray-100 py-2 rounded-md font-medium transition-colors duration-200">
                Learn More
              </button>
            </div>
            
            <div className="bg-teal-700 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Traveler Package</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Flexible booking options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Daily breakfast included</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Free city map and guide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Discounted local tours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Weekly social events</span>
                </li>
              </ul>
              <p className="text-2xl font-bold mb-6">From $55/night</p>
              <button className="w-full bg-white text-teal-700 hover:bg-gray-100 py-2 rounded-md font-medium transition-colors duration-200">
                Learn More
              </button>
            </div>
            
            <div className="bg-teal-700 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Group Package</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Group rates for 5+ people</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Private room options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Breakfast & dinner included</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Common room reservation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Transport arrangements</span>
                </li>
              </ul>
              <p className="text-2xl font-bold mb-6">From $35/person/night</p>
              <button className="w-full bg-white text-teal-700 hover:bg-gray-100 py-2 rounded-md font-medium transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our services and policies.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">What are your check-in and check-out times?</h3>
              <p className="text-gray-600">
                Check-in is from 2:00 PM to 10:00 PM. Check-out is by 11:00 AM. Early check-in or late check-out may be arranged in advance, subject to availability and additional charges.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Is breakfast included in the room rate?</h3>
              <p className="text-gray-600">
                Breakfast is included with most room rates and packages. Our continental breakfast is served daily from 7:00 AM to 10:00 AM in the dining area.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Do you have laundry facilities?</h3>
              <p className="text-gray-600">
                Yes, we have self-service laundry facilities available 24/7. Washing machines and dryers operate with tokens that can be purchased at the reception desk.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Is there a curfew?</h3>
              <p className="text-gray-600">
                No, there is no curfew. Guests have 24-hour access to the building using their key cards. However, we ask that noise be kept to a minimum between 10:00 PM and 8:00 AM out of respect for other guests.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">What's your cancellation policy?</h3>
              <p className="text-gray-600">
                For standard bookings, free cancellation is available up to 48 hours before the check-in date. For special packages and group bookings, please refer to the specific terms and conditions provided at the time of booking.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Have More Questions?</h2>
          <p className="text-gray-600 mb-8">Our friendly staff is ready to assist you with any inquiries you may have about our services.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
            >
              Contact Us
            </a>
            <a 
              href="/rooms" 
              className="bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-md font-medium transition-colors duration-200"
            >
              Book a Room
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;