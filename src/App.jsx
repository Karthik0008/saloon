import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './assets/components/home/Home';
import Navbar from './assets/components/navbar/Navbar';
import AboutSection from './assets/components/about/About';
import Footer from './assets/components/footer/Footer';
// import Contact from './assets/components/contact/Contact';
import ServicesSection from './assets/components/service/Service';
import MensStyles from './assets/components/mens-style/Mens-style';
import WomensStyles from './assets/components/womens-style/WomensStyle';
import Style from './assets/components/styles/Styles';
import Bridal from './assets/components/bridal/Bridal';
import KidsHairStyles from './assets/components/kids-style/KidsHairStyles';
import Treatment from './assets/components/treatment/Treatment';
import Color from './assets/components/color/Color';
import BoyKids from './assets/components/kids-style/BoyKids';
import Appointment from './assets/components/Appointment';
import Admin from './assets/components/Admin';

// import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/service" element={<ServicesSection />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/mens-styles" element={<MensStyles />} />
        <Route path="/womens-styles" element={<WomensStyles />} />
        <Route path="/styles" element={<Style />} />
        <Route path="/bridal" element={<Bridal />} />
        <Route path="/kids-styles" element={<KidsHairStyles />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/color" element={<Color />} />
        <Route path="/boykids" element={<BoyKids />} />
        <Route path="/admin" element={<admin />} />

       </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;





