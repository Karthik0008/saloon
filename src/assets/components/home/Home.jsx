import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-2 py-20 ">
      {/* Hero Section */}
      <Link to="/about">
        <div
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1595475884562-073c30d45670?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover", // Ensures the image covers the entire container
            backgroundPosition: "center", // Centers the image
            height: "400px", // Adjust height as needed
            width: "100%", // Full width
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            borderRadius: "8px", // Optional rounded corners
          }}
        >
          <h1 className="text-4xl font-bold mb-4 ">Welcome to Choose Your Style Salon</h1>
          <p className="text-lg mb-6">Transform your look with our expert stylists and premium services.</p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-lg">
            click to view About Us
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Home;
