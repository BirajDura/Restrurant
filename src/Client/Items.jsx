import React from 'react';

const Items = () => {
  const menuItems = [
    { name: 'Chilly MOMO', image: 'https://example.com/chilly-momo.jpg' },
    { name: 'Chicken MOMO', image: 'https://example.com/chicken-momo.jpg' },
    { name: 'Buff MOMO', image: 'https://example.com/buff-momo.jpg' },
    { name: 'Steam MOMO', image: 'https://example.com/steam-momo.jpg' },
    { name: 'Chilly Chaumin', image: 'https://example.com/chilly-chaumin.jpg' },
    { name: 'Steam Chaumin', image: 'https://example.com/steam-chaumin.jpg' },
    { name: 'Buff Chaumin', image: 'https://example.com/buff-chaumin.jpg' },
    { name: 'Chicken Chaumin', image: 'https://example.com/chicken-chaumin.jpg' },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-transparent rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">Our Menu</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="p-4 bg-transparent bg-opacity-70 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center"
          >
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
            <span className="text-white font-medium">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;