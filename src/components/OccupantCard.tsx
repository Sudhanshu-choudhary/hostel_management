import React from 'react';
import { Occupant } from '../types';
import { MapPin, Calendar, CheckCircle, XCircle } from 'lucide-react';

interface OccupantCardProps {
  occupant: Occupant;
}

const OccupantCard: React.FC<OccupantCardProps> = ({ occupant }) => {
  // Format dates
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
      <div className="p-4">
        <div className="flex items-center">
          <img 
            src={occupant.imageUrl} 
            alt={occupant.name} 
            className="w-16 h-16 rounded-full object-cover mr-4" 
          />
          <div>
            <h3 className="text-lg font-bold text-gray-800">{occupant.name}</h3>
            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-1" />
              <span>Room {occupant.roomId}</span>
            </div>
          </div>
          <div className="ml-auto">
            {occupant.present ? (
              <div className="flex items-center text-green-600">
                <CheckCircle size={20} className="mr-1" />
                <span className="font-medium">Present</span>
              </div>
            ) : (
              <div className="flex items-center text-red-600">
                <XCircle size={20} className="mr-1" />
                <span className="font-medium">Absent</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar size={16} className="mr-1 text-teal-600" />
            <span>Check-in: {formatDate(occupant.checkIn)}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-1 text-orange-600" />
            <span>Check-out: {formatDate(occupant.checkOut)}</span>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between">
          <button className="bg-teal-600 hover:bg-teal-700 text-white py-1 px-3 rounded-md text-sm font-medium transition-colors duration-200">
            Contact
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-3 rounded-md text-sm font-medium transition-colors duration-200">
            View Details
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-3 rounded-md text-sm font-medium transition-colors duration-200">
            Update Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default OccupantCard;