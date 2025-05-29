import React from 'react';
import { Star, Users, Clock, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About SerenitySuites</h1>
            <p className="text-xl max-w-3xl mx-auto">Providing comfortable and affordable accommodation for travelers and students since 2010.</p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                SerenitySuites was founded in 2010 with a simple mission: to provide comfortable, affordable accommodation in a welcoming environment where travelers and students can feel at home.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small hostel with just 10 beds has grown into a beloved establishment with multiple room types and modern amenities, while still maintaining our commitment to personalized service and community atmosphere.
              </p>
              <p className="text-gray-600">
                Over the years, we've welcomed guests from over 100 countries, creating a vibrant international community and a place where lasting friendships are formed. Our team is dedicated to ensuring each guest has a memorable and comfortable stay.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Hostel room" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Communal kitchen" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/5061594/pexels-photo-5061594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Lounge area" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/2811648/pexels-photo-2811648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Garden area" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 px-4 bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="max-w-2xl mx-auto text-teal-100">These core principles guide everything we do at SerenitySuites.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-teal-700 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Star size={40} className="text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-teal-100">We maintain high standards in everything from cleanliness to customer service.</p>
            </div>
            
            <div className="bg-teal-700 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Users size={40} className="text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-teal-100">We create spaces that foster connection and build meaningful relationships.</p>
            </div>
            
            <div className="bg-teal-700 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Award size={40} className="text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-teal-100">We operate with honesty, transparency, and respect in all our interactions.</p>
            </div>
            
            <div className="bg-teal-700 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Clock size={40} className="text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-teal-100">We're committed to environmentally responsible practices in our operations.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our dedicated staff works tirelessly to ensure your stay is comfortable and memorable.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="David Chen" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-1">David Chen</h3>
              <p className="text-teal-600 font-medium mb-2">General Manager</p>
              <p className="text-gray-600">With over 15 years in hospitality, David ensures everything runs smoothly.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img 
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Sarah Johnson" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-1">Sarah Johnson</h3>
              <p className="text-teal-600 font-medium mb-2">Front Desk Manager</p>
              <p className="text-gray-600">Sarah's friendly demeanor makes every guest feel welcome from check-in.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img 
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Miguel Rodriguez" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-1">Miguel Rodriguez</h3>
              <p className="text-teal-600 font-medium mb-2">Housekeeping Manager</p>
              <p className="text-gray-600">Miguel maintains our high standards of cleanliness and comfort.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img 
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Emma Patel" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-1">Emma Patel</h3>
              <p className="text-teal-600 font-medium mb-2">Events Coordinator</p>
              <p className="text-gray-600">Emma organizes our community events that make stays memorable.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-4xl font-bold text-teal-600 mb-2">13+</h3>
              <p className="text-gray-700 font-medium">Years in Operation</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-4xl font-bold text-teal-600 mb-2">10,000+</h3>
              <p className="text-gray-700 font-medium">Happy Guests</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-4xl font-bold text-teal-600 mb-2">100+</h3>
              <p className="text-gray-700 font-medium">Countries Represented</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-4xl font-bold text-teal-600 mb-2">4.8/5</h3>
              <p className="text-gray-700 font-medium">Average Rating</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 px-4 bg-teal-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Experience SerenitySuites Yourself</h2>
          <p className="text-teal-100 mb-8">Book your stay today and become part of our international community.</p>
          <a 
            href="/rooms" 
            className="inline-block bg-white text-teal-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors duration-200"
          >
            Browse Our Rooms
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;