import React, { useState } from 'react';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      age: "66",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh scelerisque eu dignissim suscipit velit sit arcu. Egestas dolor consequat quis integer sed in magna a.",
      photo: "/testi1.jpg"
    },
    {
      id: 2,
      name: "John Doe",
      age: "66",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh scelerisque eu dignissim suscipit velit sit arcu. Egestas dolor consequat quis integer sed in magna a. dolor consequat quis integer sed in magna a. dolor consequat quis integer sed in.",
      photo: "/testi2.jpg" 
    },
    {
      id: 3,
      name: "John Doe",
      age: "66",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh scelerisque eu dignissim suscipit velit sit arcu. Egestas dolor consequat quis integer sed in magna a.",
      photo: "testi3.jpg"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say?</h2>
        
        <div className="relative">
        
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gray-300 mr-4 overflow-hidden">
                      
                        ****<img src={testimonial.photo} alt={testimonial.name} className="w-full h-full object-cover" /> 
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.age}</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
            aria-label="Previous testimonial"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-gray-700" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
            aria-label="Next testimonial"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-gray-700" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>

          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
