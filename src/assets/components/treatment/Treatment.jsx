import React, { useState } from 'react';

const Treatment = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  // Hair treatments data
  const treatments = [
    { 
      id: 1,
      name: "Keratin Treatment", 
      description: "Smooths and straightens hair, reducing frizz.",
      image: "https://ashtamudi.org/wp-content/uploads/2023/05/InShot_20220720_120958836-1024x1024.jpg"
    },
    { 
      id: 2,
      name: "Scalp Treatment", 
      description: "Detoxes and nourishes the scalp for healthy hair growth.",
      image: "https://i.ytimg.com/vi/p8xfGTehQZI/maxresdefault.jpg"
    },
    { 
      id: 3,
      name: "Hot Oil Treatment", 
      description: "Hydrates and smoothens dry, brittle hair.",
      image: "https://api.daburinternational.com/wp-content/uploads/2024/11/Vatika-Naturals-Onion-Hammam-Zaith-3.jpg"
    },
    { 
      id: 4,
      name: "Deep Conditioning", 
      description: "Intensely moisturizes and improves hair texture.",
      image: "https://img.buzzfeed.com/buzzfeed-static/static/2019-03/8/16/asset/buzzfeed-prod-web-03/sub-buzz-30009-1552081366-1.jpg"
    },
    { 
      id: 5,
      name: "Hair Botox", 
      description: "Repairs damaged hair, enhancing shine and reducing frizz.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRos4JPPyuuTjjkZ3pG-8sCpk7mHeAmZ7ARJg&s"
    },
    { 
      id: 6,
      name: "Protein Treatment", 
      description: "Strengthens hair structure and prevents breakage.",
      image: "https://www.lorealparisusa.com/-/media/project/loreal/brand-sites/oap/americas/us/articles/2021/08_aug/08_18/hair-protein-treatment/hpt-hero.jpg"
    },
    { 
      id: 7,
      name: "Color Protection Treatment", 
      description: "Preserves hair color vibrancy and shine.",
      image: "https://cdn.shopify.com/s/files/1/0253/6521/3045/files/color-protect-hero.jpg?v=1589231688"
    },
    { 
      id: 8,
      name: "Anti-Frizz Treatment", 
      description: "Tames unruly hair and controls frizz.",
      image: "https://www.lorealprofessionnel.co.in/-/media/project/loreal/brand-sites/professionnel/global/articles/antifrizz-treat/antifrizz-treatments/antifrizz-treatments-hero.jpg"
    }
  ];

  // Filter treatments based on search term
  const filteredTreatments = treatments.filter(treatment =>
    treatment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Full-screen overlay */}
      {selectedTreatment && (
        <div
          className="fixed inset-0 z-50 bg-black/90 p-4 flex items-center justify-center"
          onClick={() => setSelectedTreatment(null)}
        >
          <div className="max-w-full max-h-full">
            <img
              src={selectedTreatment.image}
              alt={selectedTreatment.name}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="text-2xl font-bold">{selectedTreatment.name}</h3>
              <p className="mt-2 max-w-prose mx-auto text-lg">
                {selectedTreatment.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Hair Treatment Gallery
        </h1>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="🔍 Search treatments..."
            className="w-full md:w-1/3 p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTreatments.length > 0 ? (
            filteredTreatments.map((treatment) => (
              <div
                key={treatment.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedTreatment(treatment)}
              >
                <div className="relative">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {treatment.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{treatment.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No treatments found for "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 text-purple-500 hover:underline"
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

export default Treatment;
