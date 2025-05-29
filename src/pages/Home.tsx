import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hotel, Users, Search, ArrowRight, Bed, Wifi, Coffee } from 'lucide-react';
import RoomCard from '../components/RoomCard';
import { roomsData } from '../data';

const Home: React.FC = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1');
  
  // Filter available rooms for display
  const availableRooms = roomsData.filter(room => room.available).slice(0, 3);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-4">
          <div className="flex items-center mb-4">
            <Hotel className="h-12 w-12 text-teal-400" />
            <h1 className="text-4xl md:text-6xl font-bold ml-2">SerenitySuites</h1>
          </div>
          <p className="text-xl md:text-2xl text-center max-w-2xl mb-8">Comfortable, affordable accommodations for your stay</p>
          <Link 
            to="/rooms" 
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 flex items-center"
          >
            Explore Rooms
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
      
      {/* Search Section */}
      <section className="bg-white py-8 px-4">
        <div className="max-w-5xl mx-auto -mt-24 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Your Room</h2>
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="checkIn" className="block text-gray-700 font-medium mb-1">Check-in Date</label>
              <input
                type="date"
                id="checkIn"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="checkOut" className="block text-gray-700 font-medium mb-1">Check-out Date</label>
              <input
                type="date"
                id="checkOut"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="guests" className="block text-gray-700 font-medium mb-1">Guests</label>
              <select
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                {[1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button 
                type="submit" 
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200 flex items-center justify-center"
              >
                <Search className="mr-2 h-5 w-5" />
                Search
              </button>
            </div>
          </form>
        </div>
      </section>
      
      {/* Available Rooms Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Available Rooms</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find the perfect accommodation for your stay, whether you're traveling alone or with a group.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableRooms.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/rooms" 
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience comfort, convenience, and exceptional service during your stay.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Bed size={48} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Comfortable Accommodations</h3>
              <p className="text-gray-600">Our rooms are designed with your comfort in mind, featuring quality bedding and amenities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Wifi size={48} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">High-Speed Wi-Fi</h3>
              <p className="text-gray-600">Stay connected with complimentary high-speed internet access throughout the property.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Coffee size={48} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Breakfast Service</h3>
              <p className="text-gray-600">Start your day right with our delicious continental breakfast, included with your stay.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 px-4 bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">What Our Guests Say</h2>
            <p className="max-w-2xl mx-auto text-teal-100">Don't just take our word for it. Here's what guests have to say about their experience with us.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-teal-700 p-6 rounded-lg">
              <p className="italic mb-4">"Clean rooms, friendly staff, and great amenities. I had a wonderful stay and would definitely come back!"</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center">
                  <span className="font-bold">JS</span>
                </div>
                <div className="ml-4">
                  <p className="font-bold">John Smith</p>
                  <p className="text-sm text-teal-300">New York, USA</p>
                </div>
              </div>
            </div>
            
            <div className="bg-teal-700 p-6 rounded-lg">
              <p className="italic mb-4">"Perfect location, comfortable beds, and excellent value for money. The common areas were also very nice."</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center">
                  <span className="font-bold">ML</span>
                </div>
                <div className="ml-4">
                  <p className="font-bold">Maria Lopez</p>
                  <p className="text-sm text-teal-300">Madrid, Spain</p>
                </div>
              </div>
            </div>
            
            <div className="bg-teal-700 p-6 rounded-lg">
              <p className="italic mb-4">"The staff went above and beyond to make my stay comfortable. The facilities were clean and well-maintained."</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center">
                  <span className="font-bold">AK</span>
                </div>
                <div className="ml-4">
                  <p className="font-bold">Alex Kim</p>
                  <p className="text-sm text-teal-300">Toronto, Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Book Your Stay?</h2>
          <p className="text-gray-600 mb-8">Secure your room today and experience the comfort and convenience of SerenitySuites.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/rooms" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
            >
              View Available Rooms
            </Link>
            <Link 
              to="/contact" 
              className="bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-md font-medium transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;