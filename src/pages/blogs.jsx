import React from 'react';
import blogImage from '../assets/event-management.jpg'; // Replace with actual image path
import blog1 from '../assets/blog-1.webp';
import blog2 from '../assets/blog-2.jpg';
import blog3 from '../assets/blog-3.avif';
import blog4 from '../assets/blog-5.jpeg';

import blog5 from '../assets/blog-4.webp';
import blog6 from '../assets/blog-6.jpeg';
import Footer from '../components/Footer'

const blogData = [
  {
    id: 1,
    title: "Top 10 Event Trends in 2025",
    image: blog1,
    snippet: "Explore how modern tech and talent booking is transforming the event landscape...",
  },
  {
    id: 2,
    title: "How to Book the Right Performer",
    image: blog2,
    snippet: "A guide to choosing the perfect artist based on your audience and vibe...",
  },
  {
    id: 3,
    title: "Venue & Vibes: Matching Artists",
    image: blog3,
    snippet: "Learn how venue type impacts your entertainment choices...",
  },
  {
    id: 4,
    title: "The Rise of Virtual Events",
    image: blog4,
    snippet: "Post-pandemic, virtual events have gained serious traction...",
  },
  {
    id: 5,
    title: "Maximizing Engagement with Music",
    image: blog5,
    snippet: "Why live music remains a powerful crowd-magnet in any event...",
  },
  {
    id: 6,
    title: "Behind the Scenes of Kalasettu",
    image: blog6,
    snippet: "Peek into the team and process that brings your events to life...",
  },
];

const Blogs = () => {
  return (
    <div className="bg-black text-white min-h-screen pb-20">

      {/* Top Banner Image */}
      <div className="w-full">
        <img src={blogImage} alt="Blogs Banner" className="w-full h-[300px] object-cover" />
      </div>

      {/* Heading */}
      <div className="text-center mt-10 mb-6">
        <h1 className="text-4xl font-extrabold font-playfair">Our Latest Blogs</h1>
        <p className="text-gray-400 mt-2">Insights, Stories & Tips for Event Enthusiasts</p>
      </div>

      {/* Blog Cards */}
      <div className="px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogData.map((blog) => (
          <div key={blog.id} className="bg-white text-black rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-all duration-300">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-700 text-sm mb-4">{blog.snippet}</p>
              <button className="text-blue-600 font-semibold hover:underline">Read More →</button>
            </div>
          </div>
        ))}
      </div>
      <br>
      </br>
      <br>
      </br>
<Footer/>
    </div>
  );
};

export default Blogs;

