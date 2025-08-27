import React from 'react';

const Items = () => {
  const menuItems = [
    'Chilly MOMO',
    'Chicken MOMO',
    'Buff MOMO',
    'Steam MOMO',
    'Chilly Chaumin',
    'Steam Chaumin',
    'Buff Chaumin',
    'Chicken Chaumin',
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Menu</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center"
          >
            <span className="text-gray-700 font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;