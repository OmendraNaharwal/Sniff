import React from 'react';
import cardbg from '../assets/card-bg.svg';

const testimonials = [
    {
        name: 'John Doe',
        image: 'https://randomuser.me/api/portraits/women/1.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur. Nibh scelerisque eu dignissim suscipit velit sit arcu. Egestas dolor consequat quis integer sed in magna a.',
        rotate: '-rotate-16',
        antirotate: 'rotate-16',
    },
    {
        name: 'John Doe',
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur. Nibh scelerisque eu dignissim suscipit velit sit arcu. Egestas dolor consequat quis integer sed in magna a.',
        rotate: '',
    },
    {
        name: 'John Doe',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur. Nibh scelerisque eu dignissim suscipit velit sit arcu. Egestas dolor consequat quis integer sed in magna a.',
        rotate: 'rotate-10',
        antirotate: '-rotate-10',
        backgroundImage: "cardbg",
    },
];

const Component11 = () => {
    return (
        <section className="py-20 bg-white">
            <h2 className="text-4xl font-semibold text-center mb-12">
                What <span className="text-red-500 font-bold">Our Client</span> <span className="text-gray-800">Say?</span>
            </h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {testimonials.map((t, index) => (
                    <div
                        key={index}
                        className={`transform ${t.rotate}  h-[30vh] flex justify-center items-center bg-[#FE5F62] rounded-[30px] shadow-lg p-6`}
                    >
                        <div className={`bg-white p-6 tranform ${t.antirotate} rounded-[30px] z-10 shadow-xl relative overflow-hidden transform transition-all duration-300`}>
                            <div className="flex justify-center items-center w-full h-full bg-[url('/assets/shape.svg')] bg-no-repeat bg-cover opacity-10 pointer-events-none" />
                            <div className="flex justify-center ">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-16 h-16 rounded-full border-4 border-white shadow-lg -mt-8 z-10 mb-4"
                                />
                            </div>
                            <h3 className="text-center font-semibold text-xl text-gray-800">{t.name}</h3>
                            <p className="text-center text-red-500 text-2xl my-2">“</p>
                            <p className="text-center text-gray-600 text-sm leading-relaxed">{t.text}</p>
                        </div>
                    </div>
                ))}
                
            </div>

            {/* Dots indicator (optional) */}
            <div className="mt-10 flex justify-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-gray-300 rounded-full" />
                <div className="w-3 h-3 bg-gray-300 rounded-full" />
            </div>
        </section>
    );
};

export default Component11;


