import React, { useState } from 'react';

const categories = ['All', 'Photography', 'Class', 'Students'];

const images = {
  All: [
    'https://via.placeholder.com/300x200?text=All+1',
    'https://via.placeholder.com/300x200?text=All+2',
    'https://via.placeholder.com/300x200?text=All+3',
    'https://via.placeholder.com/300x200?text=All+4',
    'https://via.placeholder.com/300x200?text=All+5',
    'https://via.placeholder.com/300x200?text=All+6',
    'https://via.placeholder.com/300x200?text=All+7',
    'https://via.placeholder.com/300x200?text=All+8',
  ],
  Photography: [
    'https://via.placeholder.com/300x200?text=Branding+1',
    'https://via.placeholder.com/300x200?text=Branding+2',
    'https://via.placeholder.com/300x200?text=Branding+3',
    'https://via.placeholder.com/300x200?text=Branding+4',
  ],
  Class: [
    'https://via.placeholder.com/300x200?text=Design+1',
    'https://via.placeholder.com/300x200?text=Design+2',
    'https://via.placeholder.com/300x200?text=Design+3',
    'https://via.placeholder.com/300x200?text=Design+4',
  ],
  Students: [
    'https://via.placeholder.com/300x200?text=Photography+1',
    'https://via.placeholder.com/300x200?text=Photography+2',
    'https://via.placeholder.com/300x200?text=Photography+3',
    'https://via.placeholder.com/300x200?text=Photography+4',
  ],
};

const PhotoGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="bg-gray-100 p-8  pt-[120px] pb-[120px]">
      <h2 className="text-3xl font-bold text-center mb-4">Photo <span className="text-orange-500">Gallery</span></h2>
      <p className="text-center text-gray-600 mb-8">
        Explore our diverse gallery across various categories.
      </p>

      <div className="flex justify-center mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryChange(category)}
            className={`${activeCategory === category ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'
              } px-4 py-2 mx-2 rounded-lg font-semibold shadow-md hover:bg-orange-500 hover:text-white`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images[activeCategory].map((image, index) => (
          <div
            key={index}
            className="w-full h-[200px] overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;