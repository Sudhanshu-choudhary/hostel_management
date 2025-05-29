import React, { useState } from 'react';
import { Filter, RefreshCw } from 'lucide-react';
import RoomCard from '../components/RoomCard';
import { roomsData } from '../data';
import { Room } from '../types';

const Rooms: React.FC = () => {
  const [filters, setFilters] = useState({
    type: '',
    capacity: '',
    available: false,
    priceRange: [0, 200],
    amenities: [] as string[]
  });
  
  const [showFilters, setShowFilters] = useState(false);
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  const resetFilters = () => {
    setFilters({
      type: '',
      capacity: '',
      available: false,
      priceRange: [0, 200],
      amenities: []
    });
  };
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      if (name === 'available') {
        setFilters(prev => ({
          ...prev,
          [name]: checkbox.checked
        }));
      } else if (name.startsWith('amenity-')) {
        const amenity = name.replace('amenity-', '');
        setFilters(prev => {
          const amenities = [...prev.amenities];
          if (checkbox.checked) {
            amenities.push(amenity);
          } else {
            const index = amenities.indexOf(amenity);
            if (index !== -1) {
              amenities.splice(index, 1);
            }
          }
          return {
            ...prev,
            amenities
          };
        });
      }
    } else {
      setFilters(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  // Get all unique amenities
  const allAmenities = Array.from(
    new Set(roomsData.flatMap(room => room.amenities))
  ).sort();
  
  // Filter rooms based on criteria
  const filteredRooms = roomsData.filter(room => {
    // Type filter
    if (filters.type && room.type !== filters.type) {
      return false;
    }
    
    // Capacity filter
    if (filters.capacity && room.capacity < parseInt(filters.capacity)) {
      return false;
    }
    
    // Availability filter
    if (filters.available && !room.available) {
      return false;
    }
    
    // Price range filter
    if (room.price < filters.priceRange[0] || room.price > filters.priceRange[1]) {
      return false;
    }
    
    // Amenities filter
    if (filters.amenities.length > 0) {
      return filters.amenities.every(amenity => room.amenities.includes(amenity));
    }
    
    return true;
  });
  
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Rooms</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our range of comfortable accommodations designed to suit your needs and preferences.</p>
        </div>
        
        <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
          <button 
            onClick={toggleFilters}
            className="flex items-center bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
          >
            <Filter size={20} className="mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
          
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">
              Showing {filteredRooms.length} of {roomsData.length} rooms
            </span>
            <button 
              onClick={resetFilters}
              className="flex items-center text-teal-600 hover:text-teal-800 transition-colors duration-200"
            >
              <RefreshCw size={16} className="mr-1" />
              Reset
            </button>
          </div>
        </div>
        
        {showFilters && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 transition-all duration-300">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Filter Rooms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label htmlFor="type" className="block text-gray-700 font-medium mb-1">Room Type</label>
                <select
                  id="type"
                  name="type"
                  value={filters.type}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">All Types</option>
                  <option value="single">Single</option>
                  <option value="double">Double</option>
                  <option value="triple">Triple</option>
                  <option value="quad">Quad</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="capacity" className="block text-gray-700 font-medium mb-1">Min Capacity</label>
                <select
                  id="capacity"
                  name="capacity"
                  value={filters.capacity}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Any</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="priceRange" className="block text-gray-700 font-medium mb-1">Price Range</label>
                <div className="flex items-center">
                  <span className="mr-2">$0</span>
                  <input
                    type="range"
                    id="priceRange"
                    name="priceRange"
                    min="0"
                    max="200"
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters(prev => ({ ...prev, priceRange: [0, parseInt(e.target.value)] }))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="ml-2">${filters.priceRange[1]}</span>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-1">Availability</label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="available"
                    checked={filters.available}
                    onChange={handleFilterChange}
                    className="rounded text-teal-600 focus:ring-teal-500 h-4 w-4 mr-2"
                  />
                  Show only available rooms
                </label>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-gray-700 font-medium mb-2">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {allAmenities.map(amenity => (
                  <label key={amenity} className="flex items-center">
                    <input
                      type="checkbox"
                      name={`amenity-${amenity}`}
                      checked={filters.amenities.includes(amenity)}
                      onChange={handleFilterChange}
                      className="rounded text-teal-600 focus:ring-teal-500 h-4 w-4 mr-2"
                    />
                    {amenity}
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.length > 0 ? (
            filteredRooms.map(room => (
              <RoomCard key={room.id} room={room} detailed={true} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-bold text-gray-800 mb-2">No rooms match your filters</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filter criteria or reset filters to see all rooms.</p>
              <button 
                onClick={resetFilters}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rooms;