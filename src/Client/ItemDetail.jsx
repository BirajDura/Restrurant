import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { menuItems } from '../data/menudata';

const ItemDetail = () => {
  const { id } = useParams();

  const item = menuItems.find((menuItem) => menuItem.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Item Not Found 😔</h1>
        <p className="text-gray-300 mb-8 max-w-md">
          The dish you're looking for doesn't exist or may have been removed.
        </p>
        <Link
          to="/"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-8 rounded-lg transition text-lg"
        >
          ← Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/80 via-gray-950 to-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition mb-10 text-lg font-medium"
        >
          ← Back to Menu
        </Link>

        {/* Main detail card */}
        <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
          <div className="flex flex-col md:flex-row">

            {/* Image section – full image visible, no aggressive cropping */}
            <div className="md:w-1/2 bg-black/40 flex items-center justify-center p-6 sm:p-8 md:p-10">
              <img
                src={item.image}
                alt={item.name}
                className="w-full max-h-[500px] md:max-h-[700px] object-contain transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Content section */}
            <div className="p-6 sm:p-8 md:p-10 md:w-1/2 flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight text-white">
                {item.name}
              </h1>

              <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                {item.desc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3.5 px-9 rounded-xl transition text-lg shadow-md hover:shadow-lg">
                  Add to Cart
                </button>

                <button className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500/20 hover:text-yellow-300 font-semibold py-3.5 px-9 rounded-xl transition text-lg">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;