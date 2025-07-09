

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Salon Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">UNIQUE</h3>
            <p className="text-gray-400">Your destination for professional hair styling and beauty treatments.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
             <Link to="/"> <li className="hover:text-white transition"><a href="#">Home</a></li></Link>
              <Link to="/about"><li className="hover:text-white transition"><a href="#">About</a></li></Link>
             <Link to="/service"> <li className="hover:text-white transition"><a href="#">Services</a></li></Link>
             <Link to="/contact"> <li className="hover:text-white transition"><a href="#">Contact</a></li></Link>
             <Link to="/admin"><li className="hover:text-white transition"><a href="#">Admin</a></li></Link>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">📍 123 Salon Street, Cityville</p>
            <p className="text-gray-400">📞 +91 98765 43210</p>
            <p className="text-gray-400">📧 info@unique.com</p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-400 transition">🔵 Facebook</a>
              <a href="#" className="hover:text-blue-500 transition">🔷 Twitter</a>
              <a href="#" className="hover:text-pink-400 transition">📸 Instagram</a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 mt-8">
          <p>© 2025 Choose your style. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;