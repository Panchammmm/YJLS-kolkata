import React, { useState } from 'react';

// Photography 
import Photo1 from "../../../assets/galary/photo1.jpg";
import Photo2 from "../../../assets/galary/photo2.jpg";
import Photo3 from "../../../assets/galary/photo3.jpg";
import Photo4 from "../../../assets/galary/photo4.jpg";
import Photo5 from "../../../assets/galary/photo5.jpg";
import Photo6 from "../../../assets/galary/photo6.jpg";
import Photo7 from "../../../assets/galary/photo7.jpg";
import Photo8 from "../../../assets/galary/photo8.jpg";
import Photo9 from "../../../assets/galary/photo9.jpg";
import Photo10 from "../../../assets/galary/photo10.jpg";

// Students
import Student1 from "../../../assets/galary/student1.jpg";
import Student2 from "../../../assets/galary/student2.jpg";
import Student3 from "../../../assets/galary/student3.jpg";
import Student4 from "../../../assets/galary/student4.jpg";
import Student5 from "../../../assets/galary/student5.jpg";
import Student6 from "../../../assets/galary/student6.jpg";

// Class
import Class1 from "../../../assets/galary/class1.jpg";
import Class2 from "../../../assets/galary/class2.jpg";
import Class3 from "../../../assets/galary/class3.jpg";
import Class4 from "../../../assets/galary/class4.jpg";
import Class5 from "../../../assets/galary/class5.jpg";
import Class6 from "../../../assets/galary/class6.jpg";

// Define images for each category
const Photography = [
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
  Photo7,
  Photo8,
  Photo9,
  Photo10,
];

const Students = [
  Student1,
  Student2,
  Student3,
  Student4,
  Student5,
  Student6,
];

const Class = [
  Class1,
  Class2,
  Class3,
  Class4,
  Class5,
  Class6,
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
  const [visibleCount, setVisibleCount] = useState(8); // Initial number of images to display
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCategoryChange = (category) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(category);
      setVisibleCount(8); // Reset visible count when category changes
      setIsTransitioning(false);
    }, 300); // Adjust timing to match transition duration
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
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 mx-2 rounded-lg font-semibold shadow-md 
              ${activeCategory === category ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'} 
              hover:bg-orange-500 hover:text-white`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid with Transition */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 place-items-center
          transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
      >
        {currentImages.map((image, index) => (
          <div key={index} className="w-full h-[200px] overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
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
            {visibleCount >= images[activeCategory].length ? 'See Less' : 'See More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;