import React from "react";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            age: 66,
            text: "Lorem ipsum dolor sit amet consectetur. Nibh scelerisque eu dignissim suscipit velit sit arcu. Egestas dolor consequat quis integer sed in magna a."
        },
        {
            id: 2,
            name: "John Doe",
            age: 66,
            text: "Lorem ipsum dolor sit amet consectetur. Nibh scelerisque eu dignissim suscipit velit sit arcu. Egestas dolor consequat quis integer sed in magna a. dolor consequat quis integer sed in magna a. dolor consequat quis integer sed in."
        },
        {
            id: 3,
            name: "John Doe",
            age: 66,
            text: "Lorem ipsum dolor sit amet consectetur. Nibh scelerisque eu dignissim suscipit velit sit arcu. Egestas dolor consequat quis integer sed in magna a."
        }
    ];

    return (
        <>
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Client Say?</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="bg-gray-200 w-10 h-10 rounded-full mr-4"></div>
                                <div>
                                    <h3 className="font-semibold">{testimonial.name}</h3>
                                    <p className="text-gray-600 text-sm">{testimonial.age}</p>
                                </div>
                            </div>
                            <p className="text-gray-700">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Testimonials;