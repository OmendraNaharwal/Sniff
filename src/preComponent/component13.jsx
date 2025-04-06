// StatsSection.jsx
import React from 'react';

const stats = [
  {
    icon: '❤️', // You can replace these with actual SVG icons
    value: '5+',
    label: 'Years Of Experience',
  },
  {
    icon: '🦴',
    value: '60+',
    label: 'Care Takers',
  },
  {
    icon: '👍',
    value: '500+',
    label: 'Positive Reviews',
  },
  {
    icon: '🐾',
    value: '210+',
    label: 'Happy Pets',
  },
];

const Component13 = () => {
  return (
    <section className="w-full overflow-hidden  bg-[#FFDADA] py-16 relative ">
      {/* Decorative background shape if needed */}
      {/* You can also use an SVG as background if you have one */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 text-center">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-2"
          >
            <div className="text-3xl bg-pink-100 p-3 rounded-full">{item.icon}</div>
            <h3 className="text-4xl font-bold text-pink-500">{item.value}</h3>
            <p className="text-gray-700 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Component13;
