import React from 'react';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      address: '123 Main St, City, Country',
      phone: '(555) 123-4567',
      department: 'Engineering',
      company: 'Tech Corp',
      employeeId: 'EMP001',
    },
    // Add more team members as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Our Team
        </h1>
        <p className="text-center text-gray-600 mb-8">Meet the best of us</p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <ul className="space-y-3">
                <li>
                  <span className="font-semibold text-gray-900">Name:</span>{' '}
                  {member.name}
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Address:</span>{' '}
                  {member.address}
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Phone:</span>{' '}
                  {member.phone}
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Department:</span>{' '}
                  {member.department}
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Company:</span>{' '}
                  {member.company}
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Employee ID:</span>{' '}
                  {member.employeeId}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;