import React from 'react';
import { Service } from '../types';
import { Bed, Wifi, Coffee, Utensils, Tv, Bath, Fan, Flower } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getIcon = () => {
    switch (service.icon) {
      case 'Bed':
        return <Bed size={40} className="text-teal-600" />;
      case 'Wifi':
        return <Wifi size={40} className="text-teal-600" />;
      case 'Coffee':
        return <Coffee size={40} className="text-teal-600" />;
      case 'Utensils':
        return <Utensils size={40} className="text-teal-600" />;
      case 'Tv':
        return <Tv size={40} className="text-teal-600" />;
      case 'Bath':
        return <Bath size={40} className="text-teal-600" />;
      case 'Fan':
        return <Fan size={40} className="text-teal-600" />;
      case 'Flower':
        return <Flower size={40} className="text-teal-600" />;
      default:
        return <Bed size={40} className="text-teal-600" />;
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
      {service.imageUrl && (
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-48 object-cover" 
        />
      )}
      <div className="p-6">
        <div className="flex justify-center mb-4">
          {getIcon()}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{service.title}</h3>
        <p className="text-gray-600 text-center">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;