import React from 'react';
import Items from './Items';
import Contact from './Contact';
import OurTeam from './OurTeam';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to MoMo Restro</h1>
          <p className="text-lg md:text-2xl">Discover Delicious Meals & Exceptional Dining</p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12">
        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Our Features</h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Items />
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Get in Touch</h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Contact />
          </div>
        </section>

        {/* Our Team Section */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Meet Our Team</h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <OurTeam />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

