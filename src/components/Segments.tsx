import React from 'react';

const segments = [
  {
    title: 'Residential',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  },
  {
    title: 'Institutional',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  },
  {
    title: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  },
];

const Segments: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8 bg-[#D3D3D3] w-full h-[50px] rounded-lg">
          <h2 className="text-2xl font-bold p-4">Segments</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((segment) => (
            <div key={segment.title} className="relative group overflow-hidden rounded-lg">
              <img
                src={segment.image}
                alt={segment.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white text-xl font-semibold mb-2">{segment.title}</h3>
                  <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition-colors">
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;