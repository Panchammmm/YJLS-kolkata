import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Define images for each category
const Photography = [
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/photo1.jpg?raw=true",
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/photo2.jpg?raw=true",
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/photo3.jpg?raw=true",
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/photo4.jpg?raw=true",
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/photo5.jpg?raw=true",
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/photo6.jpg?raw=true",
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/photo7.jpg?raw=true",
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/photo8.jpg?raw=true",
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/photo9.jpg?raw=true",
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/photo10.jpg?raw=true",
];

const Students = [
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/student1.jpg?raw=true",
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/student2.jpg?raw=true",
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/student3.jpg?raw=true",
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/student4.jpg?raw=true",
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/student5.jpg?raw=true",
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/student6.jpg?raw=true",
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/student7.jpg?raw=true",
];

const Class = [
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/class1.jpg?raw=true",
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/class2.jpg?raw=true",
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/class3.jpg?raw=true",
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/class4.jpg?raw=true",
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/class5.jpg?raw=true",
  "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/galary/class6.jpg?raw=true",
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
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8); // Initial number of images to display
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload images on component mount
  useEffect(() => {
    const preloadImages = () => {
      Object.values(images).flat().forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };
    preloadImages();
  }, []);

  const handleCategoryChange = (category) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(category);
      setVisibleCount(8); // Reset visible count when category changes
      setIsTransitioning(false);
    }, 150); // Adjusted timing to match reduced transition duration
  };

  const handleSeeMore = () => {
    if (visibleCount >= images[activeCategory].length) {
      setVisibleCount(8); // Reset to initial visible count
    } else {
      setVisibleCount((prevCount) => prevCount + 8); // Show more images
    }
  };

  const currentImages = images[activeCategory].slice(0, visibleCount);

  return (
    <div className="bg-gray-100 py-24 lg:py-32">
      <h2 className="text-2xl lg:text-4xl font-bold text-center mb-4">
        {t('Photo Gallery')}
      </h2>
      <p className="text-center text-gray-600 mb-8 px-4">
        {t('Explore our diverse gallery across various categories.')}
      </p>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-3 py-2 md:px-4 md:py-2 mx-1 md:mx-2 rounded-lg font-semibold shadow-md 
              ${activeCategory === category ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'} 
              hover:bg-orange-500 hover:text-white`}
          >
            {t(category)}
          </button>
        ))}
      </div>

      {/* Gallery Grid with Transition */}
      <div
        className={`mx-4 lg:mx-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 place-items-center
          transition-opacity duration-150 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
      >
        {currentImages.map((image, index) => (
          <div key={index} className="w-full h-[150px] sm:h-[180px] md:h-[200px] overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              loading="lazy"
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* See More/See Less Button */}
      {images[activeCategory].length > 8 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSeeMore}
            className="px-6 py-2 rounded-lg font-semibold bg-orange-500 text-white shadow-md hover:bg-orange-600"
          >
            {visibleCount >= images[activeCategory].length ? t('See Less') : t('See More')}
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;