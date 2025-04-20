import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WomensStyle = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); // New state for full-screen

  const styles = [  { name: "Long Layers", image: "https://www.latest-hairstyles.com/wp-content/uploads/long-layered-hairstyles.jpg" },
    { name: "Bob Cut", image: "https://www.latest-hairstyles.com/wp-content/uploads/chin-length-bob.jpg" },
    { name: "Pixie Cut", image: "https://www.latest-hairstyles.com/wp-content/uploads/short-pixie-cut.jpg" },
    { name: "Lob Haircut", image: "https://content.latest-hairstyles.com/wp-content/uploads/air-dried-lob-with-curtain-bangs.jpg" },
    { name: "Blunt Cut", image: "https://www.latest-hairstyles.com/wp-content/uploads/blunt-cut-bob.jpg" }, ];

  const filteredStyles = styles.filter(style =>
    style.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Full-screen overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 p-4 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-full max-h-full">
            <img
              src={selectedImage.image}
              alt={selectedImage.name}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-2 text-lg">
              {selectedImage.name}
            </p>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        {/* Search Bar (unchanged) */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="🔍 Search women's hairstyles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/3 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 border border-gray-200"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredStyles.map((style, index) => (
            <div
              key={index}
              className="transform hover:scale-105 transition-transform duration-300 bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(style)} // Click handler here
            >
              <div className="relative">
                <img
                  src={style.image}
                  alt={style.name}
                  loading="lazy"
                  className="w-full h-48 md:h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">{style.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message (unchanged) */}
        {filteredStyles.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No hairstyles found for "{searchQuery}"
            <button
              onClick={() => setSearchQuery('')}
              className="block mt-2 text-pink-500 hover:underline"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WomensStyle;
