import React from 'react';
import aboutImg from '../assets/about.jpg';
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black text-white grid md:grid-cols-[74.5%_25.5%] rounded-xl my-10 shadow-lg overflow-hidden">
      
      {/* Content Section */}
      <div className="flex flex-col justify-center px-4 sm:px-6 md:px-16 py-10 space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-left">
          Discover the Story Behind Kalasettu and Our Mission
        </h1>
        <p className="text-amber-400 text-sm sm:text-md md:text-lg text-justify leading-relaxed">
          Kalasettu is an innovative digital marketplace that bridges event organizers and talented performers,
          simplifying the booking process for all types of events through verified profiles and advanced search tools. We connect individuals with top performers to enhance events seamlessly.
        </p>
        <div className="text-left">
          <button
            className="mt-2 bg-amber-900 text-white px-6 py-2 rounded hover:bg-yellow-700 transition duration-300"
           onClick={() => navigate('/about-more')}
          >
            Read More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full h-full">
        <img
          src={aboutImg}
          alt="About Kalasettu"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default About;

