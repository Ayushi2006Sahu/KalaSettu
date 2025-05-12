import React from "react";
import { useNavigate } from "react-router-dom";

const WhyChooseUs = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="p-6 bg-black rounded-lg border-2 border-gray-800 w-full max-w-4xl shadow-lg">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-white">Why Choose Us</h3>
            <p className="text-gray-400 mt-1">Unique Value Propositions</p>
          </div>
          <span className="text-sm font-medium px-2.5 py-0.5 rounded bg-yellow-100 text-yellow-800">
            Trusted
          </span>
        </div>

        <div className="mt-6 flex items-baseline">
          <span className="text-2xl font-semibold text-white">Artist Booking Platform</span>
        </div>

        <ul className="mt-6 space-y-2 text-gray-300 text-sm">
          <li className="flex items-start">
            <svg
              className="h-5 w-5 text-green-400 mr-2 mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span><strong className="text-white">Verified Profiles:</strong> Curated artists with trusted credentials</span>
          </li>
          <li className="flex items-start">
            <svg
              className="h-5 w-5 text-green-400 mr-2 mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span><strong className="text-white">Transparent Pricing:</strong> No hidden fees, clear cost structure</span>
          </li>
          <li className="flex items-start">
            <svg
              className="h-5 w-5 text-green-400 mr-2 mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span><strong className="text-white">Event Support:</strong> Tailored recommendations and assistance</span>
          </li>
        </ul>

        <button
          onClick={() => navigate('/concerts')}
          className="mt-8 w-full py-2.5 px-4 bg-white text-black text-sm rounded-lg hover:bg-gray-200 transition-colors"
        >
          Book an Artist
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
