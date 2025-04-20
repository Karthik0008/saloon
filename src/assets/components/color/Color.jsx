import React, { useState } from 'react';

const hairColors = [
  {
    id: 1,
    name: "Blonde",
    image: "https://images.meesho.com/images/products/381014453/vccgi_512.webp",
  },
  {
    id: 2,
    name: "Brunette",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2KEhMLNVx8aDQoKKvNzCQa0WD2J_g7HuDkg&s",
  },
  {
    id: 3,
    name: "Redhead",
    image: "https://cdn.shopify.com/s/files/1/0750/3269/0982/files/1._Bright_Red.webp",
  },
  {
    id: 4,
    name: "Platinum",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSFfrvHsKBMNi5qXy851cu9NdqJSdt8aGwc7veKHWQolWe7AhRrigrPxUIjlAtgKZIhk&usqp=CAU",
  },
  {
    id: 5,
    name: "Balayage",
    image: "https://mr-cdn.imgix.net/content/images/2018/5/jif2zu87-lw-beforeafter-vanilla2/lw-beforeafter-vanilla2.jpeg?fit=crop&crop=faces&w=515&h=516&auto=format",
  },
];

const Color = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);

  const filteredColors = hairColors.filter(color =>
    color.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-100 py-20">
      {/* Full-screen overlay */}
      {selectedColor && (
        <div
          className="fixed inset-0 z-50 bg-black/90 p-4 flex items-center justify-center"
          onClick={() => setSelectedColor(null)}
        >
          <div className="max-w-full max-h-full">
            <img
              src={selectedColor.image}
              alt={selectedColor.name}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-2 text-lg">
              {selectedColor.name}
            </p>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Hair Color Gallery
        </h2>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="🔍 Search hair colors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/3 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 border border-gray-200"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredColors.map((color) => (
            <div
              key={color.id}
              className="transform hover:scale-105 transition-transform duration-300 bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedColor(color)}
            >
              <div className="relative">
                <img
                  src={color.image}
                  alt={color.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">{color.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredColors.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No colors found for "{searchQuery}"
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

export default Color;
