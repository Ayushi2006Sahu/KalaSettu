import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const images = [
  "/1a.webp",
  "/2a.png",
  "/3a.webp",
  "/4a.jpg",
  "/5a.jpeg",
];

const PerformanceHighlight = () => {
  const [middleIndex, setMiddleIndex] = useState(0);

  const getLeftIndex = () => (middleIndex - 1 + images.length) % images.length;
  const getRightIndex = () => (middleIndex + 1) % images.length;

  const nextSlide = () => {
    setMiddleIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setMiddleIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-black text-white py-16 px-4 flex flex-col items-center justify-center">
      {/* Title with flair */}
      <h2 className="text-5xl md:text-6xl font-extrabold font-[cursive] tracking-wide mb-10 text-center text-white">
        Performance <span className="text-[#FF6A00]">Highlight</span>
      </h2>

      {/* Slider */}
      <div className="relative flex items-center justify-center gap-4 w-full max-w-4xl">
        {/* Left Image */}
        <img
          src={images[getLeftIndex()]}
          alt="Left"
          className="w-1/4 opacity-50 rounded-xl transition duration-500"
        />

        {/* Middle Image */}
        <img
          src={images[middleIndex]}
          alt="Middle"
          className="w-1/2 rounded-xl shadow-lg transition duration-500"
        />

        {/* Right Image */}
        <img
          src={images[getRightIndex()]}
          alt="Right"
          className="w-1/4 opacity-50 rounded-xl transition duration-500"
        />

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 text-3xl text-white hover:text-[#FF6A00] transition"
        >
          <FaArrowAltCircleLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 text-3xl text-white hover:text-[#FF6A00] transition"
        >
          <FaArrowAltCircleRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === middleIndex ? "bg-[#FF6A00]" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceHighlight;
