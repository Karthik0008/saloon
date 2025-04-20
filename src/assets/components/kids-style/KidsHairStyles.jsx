import React, { useState } from 'react';

const KidsHairStyles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStyle, setSelectedStyle] = useState(null);

  // Sample data (replace with your actual images)
  const styles = [
    { 
      id: 1,
      name: "Cute Ponytails", 
      image: "https://www.cutegirlshairstyles.com/wp-content/uploads/2018/05/Thumbnail-Twist-Wrap-Pony-768x512-2.jpg",
      description: "Adorable ponytail styles for everyday wear"
    },
    { 
      id: 2,
      name: "Braided Crown", 
      image: "https://missysue.com/wp-content/uploads/2024/11/half-up-dutch-crown-braid-4-1440x2016.jpg",
      description: "Elegant braided crown for special occasions"
    },
    { 
      id: 3,
      name: "Pigtails", 
      image: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2015/09/9-criss-crossing-pigtails-and-lacy-buns.jpg?w=500&ssl=1",
      description: "Classic pigtails with colorful accessories"
    },
    { 
      id: 4,
      name: "Top Knot", 
      image: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2016/02/4-blonde-twisted-top-knot-1.jpg?resize=500%2C695&ssl=1",
      description: "Simple and practical top knot style"
    },
    { 
      id: 5,
      name: "French Braids", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToApNqkc5qEobWfPnShUFhGhD-zk2Im2BkrA&s",
      description: "Neat french braids for active kids"
    },
    { 
      id: 6,
      name: "Bubble Braids", 
      image: "https://i.ytimg.com/vi/Fgzk_vzzJ3k/sddefault.jpg",
      description: "Fun bubble braids with elastic bands"
    },
    { 
      id: 7,
      name: "Half-Up Styles", 
      image: "https://www.littlegreencares.com/assets/media_library/halfup-halfdown82.jpg",
      description: "Versatile half-up styles for any occasion"
    },
    { 
      id: 8,
      name: "Bow Bun", 
      image: "https://www.cutegirlshairstyles.com/wp-content/uploads/2015/05/N0A4517.jpg",
      description: "Cute bun with bow decoration"
    }
  ];

  // Filter styles based on search term
  const filteredStyles = styles.filter(style =>
    style.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-pink-50 py-8">
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
            <div className="text-center mt-4 text-white">
              <h3 className="text-2xl font-bold">{selectedStyle.name}</h3>
              <p className="mt-2 max-w-prose mx-auto text-lg">
                {selectedStyle.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Kids Hair Style Gallery
        </h1>
        
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="🔍 Search hairstyles..."
            className="w-full md:w-1/3 p-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredStyles.length > 0 ? (
            filteredStyles.map((style) => (
              <div
                key={style.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedStyle(style)}
              >
                <div className="relative">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {style.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{style.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No hairstyles found for "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 text-pink-500 hover:underline"
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

export default KidsHairStyles;
