import React from 'react';
import { Room } from '../types';
import { Users, Check, X } from 'lucide-react';

interface RoomCardProps {
  room: Room;
  detailed?: boolean;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, detailed = false }) => {
  const occupancyPercentage = (room.occupants.length / room.capacity) * 100;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
      <div className="relative">
        <img 
          src={room.imageUrl} 
          alt={`Room ${room.number}`} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 right-0 m-2">
          <span className={`px-2 py-1 rounded-full text-sm font-semibold ${room.available ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            {room.available ? 'Available' : 'Occupied'}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-gray-800">Room {room.number}</h3>
          <span className="text-teal-600 font-semibold">${room.price}/night</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <Users size={18} className="mr-1" />
          <span>{room.type.charAt(0).toUpperCase() + room.type.slice(1)} Room ({room.capacity} {room.capacity > 1 ? 'persons' : 'person'})</span>
        </div>
        
        <div className="mb-3">
          <div className="flex justify-between text-sm mb-1">
            <span>Occupancy</span>
            <span>{room.occupants.length}/{room.capacity}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${occupancyPercentage === 100 ? 'bg-red-500' : 'bg-teal-500'}`} 
              style={{ width: `${occupancyPercentage}%` }}
            ></div>
          </div>
        </div>
        
        {detailed && (
          <>
            <div className="mb-3">
              <h4 className="font-semibold text-gray-700 mb-1">Amenities</h4>
              <div className="flex flex-wrap gap-1">
                {room.amenities.map((amenity, index) => (
                  <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
            
            {room.occupants.length > 0 && (
              <div className="mb-3">
                <h4 className="font-semibold text-gray-700 mb-1">Current Occupants</h4>
                <div className="space-y-2">
                  {room.occupants.map((occupant) => (
                    <div key={occupant.id} className="flex items-center">
                      <img 
                        src={occupant.imageUrl} 
                        alt={occupant.name} 
                        className="w-6 h-6 rounded-full mr-2" 
                      />
                      <span className="text-sm text-gray-600">{occupant.name}</span>
                      {occupant.present ? (
                        <Check size={16} className="ml-auto text-green-500" />
                      ) : (
                        <X size={16} className="ml-auto text-red-500" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
        
        <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md font-medium transition-colors duration-200 mt-2">
          {room.available ? 'Book Now' : 'Join Waitlist'}
        </button>
      </div>
    </div>
  );
};

export default RoomCard;