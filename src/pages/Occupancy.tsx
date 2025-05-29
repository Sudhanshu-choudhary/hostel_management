import React, { useState } from 'react';
import { Search, Filter, RefreshCw, User, UserX } from 'lucide-react';
import OccupantCard from '../components/OccupantCard';
import { occupantsData } from '../data';
import { Occupant } from '../types';

const Occupancy: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    presence: 'all', // 'all', 'present', 'absent'
    roomId: '',
  });
  
  const [showFilters, setShowFilters] = useState(false);
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  const resetFilters = () => {
    setFilters({
      presence: 'all',
      roomId: '',
    });
    setSearchTerm('');
  };
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Get all unique room IDs
  const roomIds = Array.from(
    new Set(occupantsData.map(occupant => occupant.roomId))
  ).sort((a, b) => a - b);
  
  // Filter occupants based on criteria
  const filteredOccupants = occupantsData.filter(occupant => {
    // Search term filter
    if (searchTerm && !occupant.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Presence filter
    if (filters.presence === 'present' && !occupant.present) {
      return false;
    }
    
    if (filters.presence === 'absent' && occupant.present) {
      return false;
    }
    
    // Room ID filter
    if (filters.roomId && occupant.roomId !== parseInt(filters.roomId)) {
      return false;
    }
    
    return true;
  });
  
  // Calculate statistics
  const totalOccupants = occupantsData.length;
  const presentOccupants = occupantsData.filter(occupant => occupant.present).length;
  const absentOccupants = totalOccupants - presentOccupants;
  const occupancyRate = (presentOccupants / totalOccupants) * 100;
  
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Occupancy Status</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">View and manage current occupants and their status.</p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-600 font-medium mb-1">Total Occupants</h3>
            <p className="text-3xl font-bold text-gray-800">{totalOccupants}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-600 font-medium mb-1">Present</h3>
            <div className="flex items-center">
              <p className="text-3xl font-bold text-green-600">{presentOccupants}</p>
              <User className="ml-2 h-6 w-6 text-green-600" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-600 font-medium mb-1">Absent</h3>
            <div className="flex items-center">
              <p className="text-3xl font-bold text-red-500">{absentOccupants}</p>
              <UserX className="ml-2 h-6 w-6 text-red-500" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-600 font-medium mb-1">Occupancy Rate</h3>
            <div className="flex flex-col">
              <p className="text-3xl font-bold text-teal-600">{occupancyRate.toFixed(1)}%</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-teal-600 h-2 rounded-full" 
                  style={{ width: `${occupancyRate}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            
            <button 
              onClick={toggleFilters}
              className="flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
            >
              <Filter size={20} className="mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            
            <button 
              onClick={resetFilters}
              className="flex items-center justify-center border border-gray-300 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-md font-medium transition-colors duration-200"
            >
              <RefreshCw size={20} className="mr-2" />
              Reset
            </button>
          </div>
          
          {showFilters && (
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="presence" className="block text-gray-700 font-medium mb-1">Presence Status</label>
                  <select
                    id="presence"
                    name="presence"
                    value={filters.presence}
                    onChange={handleFilterChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="all">All Statuses</option>
                    <option value="present">Present Only</option>
                    <option value="absent">Absent Only</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="roomId" className="block text-gray-700 font-medium mb-1">Room Number</label>
                  <select
                    id="roomId"
                    name="roomId"
                    value={filters.roomId}
                    onChange={handleFilterChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">All Rooms</option>
                    {roomIds.map(id => (
                      <option key={id} value={id}>Room {id}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Occupant Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredOccupants.length > 0 ? (
            filteredOccupants.map(occupant => (
              <OccupantCard key={occupant.id} occupant={occupant} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">No occupants match your filters</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search criteria or reset filters to see all occupants.</p>
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

export default Occupancy;