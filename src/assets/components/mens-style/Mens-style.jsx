import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MensStyles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStyle, setSelectedStyle] = useState(null);

  const styles = [
    { name: "Buzz Cut", image: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2025/02/13-classy-mid-fade-buzz-cut.jpg?resize=1440%2C1565&ssl=1" },
    { name: "Fade", image: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2017/08/5-low-taper-fade-with-pompadour.jpg?resize=500%2C525&ssl=1" },
    { name: "Undercut", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwliiN4CeWM-z_fJrwKP5xV8Zu-T648LYpDg&s" }
    // Add more styles as needed
  ];

  // Filter styles based on search term
  const filteredStyles = styles.filter(style =>
    style.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-100 py-20">
      {/* Full-screen overlay */}
      {selectedStyle && (
        <div
          className="fixed inset-0 z-50 bg-black/90 p-4 flex items-center justify-center"
          onClick={() => setSelectedStyle(null)}
        >
          <div className="max-w-full max-h-full">
            <img
              src={selectedStyle.image}
              alt={selectedStyle.name}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-xl">
              {selectedStyle.name}
            </p>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search hairstyles..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search hairstyles"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredStyles.length > 0 ? (
            filteredStyles.map((style, index) => (
              <div 
                key={index} 
                className="relative group rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedStyle(style)}
              >
                <img 
                  src={style.image} 
                  alt={style.name} 
                  loading="lazy" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 p-4 text-white bg-gray-800 bg-opacity-75 w-full">
                  <h3 className="text-xl font-semibold">{style.name}</h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500 text-lg">No results found.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-2 text-blue-500 hover:underline"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MensStyles;
