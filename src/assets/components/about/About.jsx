import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="container mx-auto p-6">
      {/* About Section */}
      <div className="bg-gray-100 text-gray-800 rounded-lg p-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img 
              src="https://cdn.shopify.com/s/files/1/0162/2116/files/dons_cuts-thick-heavy-crop-mens-hair-trends-2017-short-haircut_1.jpg?v=1507916124" 
              alt="Salon Hair Styling" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          
          {/* Text Content */}
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">About Our Saloon</h2>
            <p className="text-lg text-gray-600 mb-4">
              Welcome to **UNIQUE**, your go-to destination for expert hair styling and transformation. Our team of professionals is passionate about creating stunning looks that match your personality.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Whether you're looking for a chic haircut, vibrant hair coloring, or luxurious hair treatments, we've got you covered. Experience the artistry of hairstyling with us!
            </p>
            <Link to="/service">
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Explore Our Services
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;