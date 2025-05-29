import React, { useState } from 'react';
import { GalleryImage as GalleryImageType } from '../types';
import { X } from 'lucide-react';

interface GalleryImageProps {
  image: GalleryImageType;
  onClick: (image: GalleryImageType) => void;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ image, onClick }) => {
  return (
    <div 
      className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]" 
      onClick={() => onClick(image)}
    >
      <img 
        src={image.url} 
        alt={image.alt} 
        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" 
      />
    </div>
  );
};

interface GalleryLightboxProps {
  image: GalleryImageType | null;
  onClose: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ image, onClose }) => {
  if (!image) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4\" onClick={onClose}>
      <div className="relative max-w-4xl w-full">
        <button 
          className="absolute top-4 right-4 bg-white rounded-full p-1 hover:bg-gray-200 transition-colors duration-200"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <img 
          src={image.url} 
          alt={image.alt} 
          className="w-full rounded-lg" 
          onClick={(e) => e.stopPropagation()}
        />
        <p className="text-white text-center mt-4 text-lg">{image.alt}</p>
      </div>
    </div>
  );
};

export default GalleryImage;