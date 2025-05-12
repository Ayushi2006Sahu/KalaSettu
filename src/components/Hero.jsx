import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { artistCategories, cities } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    artistCategory: '',
    eventDate: '',
    location: '',
    budget: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { artistCategory, eventDate, location, budget } = form;

    if (!artistCategory || !eventDate || !location || !budget) {
      toast.error("Please fill out all fields!", {
        position: "bottom-center",
        autoClose: 3000,
      });
      return;
    }

    navigate('/concerts');
  };

  return (
    <div className='flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 xl:py-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>

      <h1 className='bg-[#60A0AA]/40 px-3.5 py-1 rounded-full font-playfair text-2xl md:text-5xlmd:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>
        Stream It. Stage It. Your Choice.
      </h1>

      <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20'>
        Connecting you with talented performers for unforgettable events.
      </p> 

      <form onSubmit={handleSubmit} className='bg-white text-gray-700 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

        {/* Artist Category */}
        <div>
          <div className='flex items-center gap-2'>
            <img src={assets.addIcon} alt="Add Icon" className="w-4 h-4 text-gray-800" />
            <label htmlFor="artistCategory">Artist / Category</label>
          </div>
          <select id="artistCategory" onChange={handleChange} className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" required>
            <option value="">-- Select --</option>
            {artistCategories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div>
          <div className='flex items-center gap-2'>
            <img src={assets.calenderIcon} alt="Calendar Icon" className="w-4 h-4 text-gray-800" />
            <label htmlFor="eventDate">Event Date</label>
          </div>
          <input id="eventDate" type="date" onChange={handleChange} className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" required />
        </div>

        {/* Location */}
        <div>
          <div className='flex items-center gap-2'>
            <img src={assets.locationIcon} alt="Location Icon" className="w-4 h-4 text-gray-800" />
            <label htmlFor="location">City</label>
          </div>
          <select id="location" onChange={handleChange} className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" required>
            <option value="">-- Select --</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
          <label htmlFor="budget">Budget (₹)</label>
          <input
            id="budget"
            type="number"
            min={1000}
            placeholder="e.g. 5000"
            value={form.budget}
            onChange={handleChange}
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-20"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1'
        >
          <img src={assets.addIcon} alt="Add Icon" className="w-4 h-4 text-white" />
          <span>Find Artists</span>
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Hero;
