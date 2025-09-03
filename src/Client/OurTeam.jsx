import React from 'react';

const TeamAwesome = () => {
  const teamMembers = [
    {
      name: 'Robert McGrath',
      title: 'Founder',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      social: ['facebook', 'twitter', 'linkedin'],
    },
    {
      name: 'Michelle Mager',
      title: 'Marketing Head',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      social: ['facebook', 'twitter', 'linkedin'],
    },
    {
      name: 'Paul Carter',
      title: 'Support Manager',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      social: ['facebook', 'twitter', 'linkedin'],
    },
  ];

  return (
    <div className="min-h-screen bg-transparent py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Team Awesome</h1>
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-400 h-64 -z-10 opacity-50"></div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-36 h-36 rounded-full mx-auto object-cover mb-4 border-4 border-white shadow-md"
                />
                <h2 className="text-xl font-semibold text-white">{member.name}</h2>
                <p className="text-gray-600 mb-2">{member.title}</p>
                <div className="border-t border-blue-400 w-16 mx-auto mb-2"></div>
                <div className="flex justify-center space-x-3">
                  {member.social.map((social, i) => (
                    <span
                      key={i}
                      className="w-8 h-8 bg-white bg-opacity-70 rounded-full flex items-center justify-center text-gray-500 hover:text-blue-500 cursor-pointer"
                    >
                      {social === 'facebook' && 'f'}
                      {social === 'twitter' && 't'}
                      {social === 'linkedin' && 'in'}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamAwesome;