// styles.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const cards = [
  {
    title: "Mens Hair Style",
    image: "https://www.menshairstylestoday.com/wp-content/uploads/2024/06/Mid-Taper-Fade-Haircuts-480x480.jpg.webp",
    route: "/mens-styles"
  },
  {
    title: "Womens Hair Style",
    image: "https://www.shefinds.com/files/2021/03/shutterstock_1653744169.jpg",
    route: "/womens-styles"
  },
  {
    title: "Kids Hair Style",
    image: "https://cdn2.momjunction.com/wp-content/uploads/2015/08/Short-Hairstyles-For-Kids.jpg.avif",
    route: "/kids-styles"
  }
];

const Styles = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <Link to={card.route} key={idx} className="block rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 bg-white">
              <h2 className="text-xl font-bold text-gray-800 text-center">{card.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Styles;
