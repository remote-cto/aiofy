"use client"
import React, { useState, useEffect } from 'react';

type Testimonial = {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
  rating: number;
};

const WhatOurClientsSay: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Nirvana.AI transformed our data strategy with actionable AI insights. Their expertise is unparalleled!",
      author: "Mark D.",
      position: "CTO",
      company: "FinTech Solutions",
      rating: 5
    },
    {
      id: 2,
      content: "Their AI model training elevated our automation capabilities significantly. Truly a game-changer!",
      author: "Sophia L.",
      position: "CEO",
      company: "HealthTech Innovators",
      rating: 5
    },
    // {
    //   id: 3,
    //   content: "We've seen a 43% increase in customer engagement since implementing Nirvana's AI recommendation engine.",
    //   author: "James W.",
    //   position: "Head of Digital",
    //   company: "Retail Nexus",
    //   rating: 5
    // },
    // {
    //   id: 4,
    //   content: "The ROI we've achieved with Nirvana's predictive analytics has exceeded our expectations by 200%.",
    //   author: "Elena R.",
    //   position: "Director of Operations",
    //   company: "Manufacturing Excellence",
    //   rating: 5
    // }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-[#FFBF23] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl  sm:text-6xl text-black mb-4 flex items-center justify-center font-['SpaceGrotesk']">
           
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-indigo-400 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-indigo-200 border-opacity-20 shadow-xl">
                    <div className="flex mb-6">
                      {renderStars(testimonial.rating)}
                    </div>
                    <blockquote className="text-xl italic font-medium text-black mb-6 font-['SpaceGrotesk']">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <p className="font-bold text-black font-['SpaceGrotesk'] ">{testimonial.author}</p>
                        <p className="text-black font-['Montserrat']">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-white scale-125' : 'bg-indigo-200 bg-opacity-50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white text-indigo-800 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex mx-auto items-center font-['SpaceGrotesk']">
            Read More Success Stories
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatOurClientsSay;