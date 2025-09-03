import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Items from './Items';
import Contact from './Contact';
import OurTeam from './OurTeam';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementId(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar Section */}
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[calc(100vh+64px)] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to MoMo Restro</h1>
          <p className="text-lg md:text-2xl">Discover Delicious Meals & Exceptional Dining</p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12 pt-20" style={{ backgroundImage: "url('/src/assets/bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Features Section */}
        <section id="items" className="mb-16">
          <div className="bg-transparent bg-opacity-70 shadow-lg rounded-lg p-6">
            <Items />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <div className="bg-transparent bg-opacity-70 shadow-lg rounded-lg p-6">
            <Contact />
          </div>
        </section>

        {/* Our Team Section */}
        <section id="our-team">
          <div className="bg-transparent bg-opacity-70 shadow-lg rounded-lg p-6">
            <OurTeam />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;