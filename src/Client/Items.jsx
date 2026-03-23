// src/Client/jsx/Items.jsx

import React from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../data/menudata";   // adjust path if needed

const Items = () => {
  return (
    <section className="py-18 px-6 bg-gradient-to-b from-black/5 via-gray-900 to-black/5">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Our Signature Dishes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our chef's carefully crafted menu...
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={`/menu/${item.id}`}          // ← this is the important part
              className="block group"           // group for hover effects
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg 
                              hover:scale-105 hover:-translate-y-2 transition duration-300 
                              h-full flex flex-col">
                
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">
                    {item.desc}
                  </p>
                  <span className="text-yellow-400 text-sm font-semibold group-hover:text-yellow-300 transition">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Items;