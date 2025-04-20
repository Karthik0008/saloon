import React, { useState } from 'react';

const BoyKids = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStyle, setSelectedStyle] = useState(null);

  // Boys' hairstyles data
  const styles = [
    { 
      id: 1,
      name: "Buzz Cut", 
      description: "Classic low-maintenance crew cut",
      image: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2025/02/13-classy-mid-fade-buzz-cut.jpg",
    },
    { 
      id: 2,
      name: "Fade Cut", 
      description: "Modern taper fade with textured top",
      image: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2017/08/5-low-taper-fade-with-pompadour.jpg",
    },
    { 
      id: 3,
      name: "Spiky Hair", 
      description: "Fun textured spikes with gel",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwliiN4CeWM-z_fJrwKP5xV8Zu-T648LYpDg&s",
    },
    { 
      id: 4,
      name: "Side Swept", 
      description: "Casual swept style with natural flow",
      image: "https://www.menshairstyletrends.com/wp-content/uploads/2017/08/cool-haircuts-for-boys-e1504194150777.jpg",
    },
    { 
      id: 5,
      name: "Mohawk", 
      description: "Edgy style with shaved sides",
      image: "https://www.menshairstylesnow.com/wp-content/uploads/2018/08/Boys-Mohawk-Hairstyles.jpg",
    },
    { 
      id: 6,
      name: "Crew Cut", 
      description: "Timeless short tapered style",
      image: "https://www.menshairstylestoday.com/wp-content/uploads/2016/05/Crew-Cuts.jpg",
    },
    { 
      id: 7,
      name: "Curly Top", 
      description: "Natural curls with tapered sides",
      image: "https://www.thetrendspotter.net/wp-content/uploads/2020/04/Cute-Boys-Hairstyles.jpg",
    },
    { 
      id: 8,
      name: "Undercut", 
      description: "Sharp contrast cut with long top",
      image: "https://menshaircuts.com/wp-content/uploads/2018/12/boys-haircuts-undercut.jpg",
    },
  ];

  // Filter styles based on search term
  const filteredStyles = styles.filter(style =>
    style.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-50 py-8">
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
          Boys Hair Style Gallery
        </h1>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="🔍 Search hairstyles..."
            className="w-full md:w-1/3 p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="mt-4 text-blue-500 hover:underline"
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

export default BoyKids;
