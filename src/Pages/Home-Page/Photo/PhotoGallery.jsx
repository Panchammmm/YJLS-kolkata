import React, { useState } from 'react';

// Define images for each category
const Photography = [
  'https://via.placeholder.com/300x200?text=Photography+1',
  'https://via.placeholder.com/300x200?text=Photography+2',
  'https://via.placeholder.com/300x200?text=Photography+3',
  'https://via.placeholder.com/300x200?text=Photography+4',
];

const Students = [
  'https://via.placeholder.com/300x200?text=Students+1',
  'https://via.placeholder.com/300x200?text=Students+2',
  'https://via.placeholder.com/300x200?text=Students+3',
  'https://via.placeholder.com/300x200?text=Students+4',
];

const Class = [
  'https://via.placeholder.com/300x200?text=Class+1',
  'https://via.placeholder.com/300x200?text=Class+2',
  'https://via.placeholder.com/300x200?text=Class+3',
  'https://via.placeholder.com/300x200?text=Class+4',
];

// Combine categories for the 'All' category
const All = [...Photography, ...Students, ...Class];

const images = {
  All,
  Photography,
  Students,
  Class,
};

const categories = ['All', 'Photography', 'Students', 'Class'];

const PhotoGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="bg-gray-100 p-8 pt-[120px] pb-[120px]">
      <h2 className="text-3xl font-bold text-center mb-4">
        Photo <span className="text-orange-500">Gallery</span>
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Explore our diverse gallery across various categories.
      </p>

      {/* Category Buttons */}
      <div className="flex justify-center mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 mx-2 rounded-lg font-semibold shadow-md 
              ${activeCategory === category ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'} 
              hover:bg-orange-500 hover:text-white`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images[activeCategory].map((image, index) => (
          <div key={index} className="w-full h-[200px] overflow-hidden rounded-lg shadow-lg">
            <img src={image} alt={`Gallery Image ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;