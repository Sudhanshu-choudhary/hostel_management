import React, { useState } from 'react';
import GalleryImage, { GalleryLightbox } from '../components/GalleryImage';
import { galleryData } from '../data';
import { GalleryImage as GalleryImageType } from '../types';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImageType | null>(null);
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'rooms', name: 'Rooms' },
    { id: 'facilities', name: 'Facilities' },
    { id: 'events', name: 'Events' },
    { id: 'dining', name: 'Dining' }
  ];
  
  const filteredImages = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(image => image.category === activeFilter);
  
  const handleImageClick = (image: GalleryImageType) => {
    setSelectedImage(image);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  return (
    <div className="bg-gray-50 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto">Take a visual tour of our hostel facilities and accommodations.</p>
          </div>
        </div>
      </section>
      
      {/* Gallery Filter */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  activeFilter === category.id
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <GalleryImage 
                key={image.id} 
                image={image} 
                onClick={handleImageClick}
              />
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-gray-800 mb-2">No images in this category</h3>
              <p className="text-gray-600">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-teal-700 text-white mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Like What You See?</h2>
          <p className="text-teal-100 mb-8">Experience our hostel firsthand by booking your stay today.</p>
          <a 
            href="/rooms" 
            className="inline-block bg-white text-teal-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors duration-200"
          >
            Book Your Stay
          </a>
        </div>
      </section>
      
      {/* Lightbox */}
      <GalleryLightbox image={selectedImage} onClose={closeLightbox} />
    </div>
  );
};

export default Gallery;