import React from 'react';

// Array of bridal and event hairstyle images
const bridalEventStyles = [
  {
    id: 1,
    name: "Classic Updo",
    description: "Elegant and timeless, perfect for formal events.",
    image: "/images/classic-updo.jpg", // Path to image in public folder
  },
  {
    id: 2,
    name: "Romantic Braids",
    description: "Soft and whimsical, ideal for outdoor weddings.",
    image: "/images/romantic-braids.jpg",
  },
  {
    id: 3,
    name: "Vintage Waves",
    description: "Sophisticated and glamorous, great for vintage-themed events.",
    image: "/images/vintage-waves.jpg",
  },
  {
    id: 4,
    name: "Pinned-Back Curls",
    description: "Classic and sophisticated, perfect for formal galas.",
    image: "/images/pinned-back-curls.jpg",
  },
  {
    id: 5,
    name: "Loose Low Bun",
    description: "Elegant yet effortless, suitable for modern weddings.",
    image: "/images/loose-low-bun.jpg",
  },
];

const Bridal = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Bridal & Event Styles Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bridalEventStyles.map((style) => (
          <div key={style.id} className="rounded-lg shadow-md overflow-hidden">
            <img
              src={style.image}
              alt={style.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{style.name}</h3>
              <p className="text-gray-600">{style.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bridal;
