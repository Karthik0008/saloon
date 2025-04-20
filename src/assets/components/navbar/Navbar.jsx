import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-500 text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">UNIQUE</h1>
        {/* Hamburger menu button for small screens */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          ☰
        </button>

        {/* Navigation links */}
        <ul
          className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full bg-blue-500 md:w-auto md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="p-2 hover:bg-blue-600 md:hover:bg-transparent">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="p-2 hover:bg-blue-600 md:hover:bg-transparent">
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className="p-2 hover:bg-blue-600 md:hover:bg-transparent">
            <Link to="/service" onClick={() => setIsOpen(false)}>Services</Link>
          </li>
          <li className="p-2 hover:bg-blue-600 md:hover:bg-transparent">
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
