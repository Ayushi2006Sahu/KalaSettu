import React from "react";
import banner from "../assets/standup.jpg";
import logo from "../assets/logo.jpg";
import Footer from '../components/Footer'
const MoreAbout = () => {
  return (
    <div className="text-white">
      <div
        className="w-full h-screen bg-cover bg-center flex flex-col items-start justify-center text-white px-8 md:px-24"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <p className="text-xl md:text-2xl mb-4">Discover</p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
          Connecting You with Exceptional Talent for Your Events
        </h1>
      </div>
      <div className="bg-black text-white py-20 px-6 md:px-24 flex flex-col lg:flex-row gap-10 items-start">

  {/* Left Side: Fixed Logo */}
  <div className="w-full lg:w-1/4 flex justify-center lg:justify-start mb-10 lg:mb-0">
    <img
      src={logo} // Replace with your actual logo path
      alt="Kalasettu Logo"
      className="h-32 w-auto object-contain"
    />
  </div>

  {/* Right Side: All Cards */}
  <div className="w-full lg:w-3/4 flex flex-col gap-10">

    {/* Who We Are Card */}
    <div className="bg-white text-black rounded-3xl shadow-lg p-8">
      <h2 className="text-4xl md:text-5xl font-extrabold font-playfair mb-4">
        Who We Are
      </h2>
      <h3 className="text-yellow-500 text-xl md:text-2xl font-semibold mb-4">
        Kalasettu: Revolutionizing Event Entertainment Booking for Everyone
      </h3>
      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        Kalasettu has successfully helped countless clients elevate their
        events through seamless bookings and access to top-tier entertainers.
        Since our launch, Kalasettu has transformed the way event organizers
        connect with performers, boasting thousands of verified artist profiles.
        Our platform has enabled users to effortlessly find entertainers that
        fit their unique vision and budget, backed by a user-friendly interface.
        With premium services like venue recommendations and event planning
        support, we’ve ensured that clients enjoy a seamless experience from
        start to finish, resulting in memorable events tailored to their needs.
        <br /><br />
        Thanks to Kalasettu, many clients have experienced increased attendee
        satisfaction and elevated event success through high-quality entertainment.
      </p>
    </div>

    {/* Our Journey Card */}
    <div className="bg-white text-black rounded-3xl shadow-lg p-8">
      <h2 className="text-4xl md:text-5xl font-extrabold font-playfair mb-4">
        Our Journey
      </h2>
      <h3 className="text-yellow-500 text-xl md:text-2xl font-semibold mb-4">
        The Evolution of Kalasettu: A Brief History
      </h3>
      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        Kalasettu was founded in 2024 out of a passion for connecting talented
        performers with event organizers. Recognizing the challenges in booking
        entertainment, our team developed an online platform to streamline the
        process. Since our launch, we have focused on building a marketplace
        that prioritizes verified artist profiles and transparent pricing,
        quickly earning the trust of users seeking quality entertainment for
        events of all types and sizes.
      </p>
    </div>

    {/* Our Core Principles Card */}
    <div className="bg-white text-black rounded-3xl shadow-lg p-8">
      <h2 className="text-4xl md:text-5xl font-extrabold font-playfair mb-4">
        Our Core Principles
      </h2>
      <h3 className="text-yellow-500 text-xl md:text-2xl font-semibold mb-4">
        Kalasettu’s Missions and Values
      </h3>

      <div className="mb-6">
        <h4 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h4>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          At Kalasettu, our mission is to enhance every event by making quality
          entertainment easily accessible. We strive to foster connections between
          talented performers and event organizers through an innovative platform
          that simplifies the booking process, ensuring memorable experiences for
          audiences everywhere.
        </p>
      </div>

      <div>
        <h4 className="text-xl font-bold text-gray-800 mb-2">Our Values</h4>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Kalasettu values transparency, reliability, and creativity. We are
          dedicated to providing a seamless booking experience, fostering trust
          through verified artist profiles and clear pricing. We believe in
          supporting both performers and event organizers, ensuring every event is
          not only successful but also filled with extraordinary entertainment that
          resonates with audiences.
        </p>
      </div>
    </div>

  </div>
</div>
<div className="bg-black text-white py-20 px-6 md:px-24 flex flex-col items-center">

  <h2 className="text-4xl md:text-5xl font-extrabold font-playfair mb-10">
    Meet Our Experts
  </h2>

  <h3 className="text-yellow-500 text-xl md:text-2xl font-semibold mb-8">
    The Talented Team Behind Kalasettu
  </h3>

  {/* Experts Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">

    {/* Expert 1 */}
    <div className="bg-white text-black rounded-3xl shadow-lg p-6 flex flex-col items-center">
      <img
        src="./src/assets/ceo.jpeg" // Replace with actual image path
        alt="Expert 1"
        className="w-32 h-32 rounded-full mb-4 object-cover"
      />
      <h4 className="text-xl font-semibold mb-2">Sai Pranathi</h4>
      <p className="text-gray-700 text-sm">Chief Executive Officer(CEO)</p>
    </div>

    {/* Expert 2 */}
    <div className="bg-white text-black rounded-3xl shadow-lg p-6 flex flex-col items-center">
      <img
        src="./src/assets/hr.jpeg" // Replace with actual image path
        alt="Expert 2"
        className="w-32 h-32 rounded-full mb-4 object-cover"
      />
      <h4 className="text-xl font-semibold mb-2">Thanmai</h4>
      <p className="text-gray-700 text-sm">HR & Marketing Research</p>
    </div>

    {/* Expert 3 */}
    <div className="bg-white text-black rounded-3xl shadow-lg p-6 flex flex-col items-center">
      <img
        src="./src/assets/co-founder.jpg" // Replace with actual image path
        alt="Expert 3"
        className="w-32 h-32 rounded-full mb-4 object-cover"
      />
      <h4 className="text-xl font-semibold mb-2">Ayush Sahu</h4>
      <p className="text-gray-700 text-sm">Co-Founder</p>
    </div>

    {/* Expert 4 */}
    <div className="bg-white text-black rounded-3xl shadow-lg p-6 flex flex-col items-center">
      <img
        src="./src/assets/cmo.jpeg" // Replace with actual image path
        alt="Expert 4"
        className="w-32 h-32 rounded-full mb-4 object-cover"
      />
      <h4 className="text-xl font-semibold mb-2">Vaibhav</h4>
      <p className="text-gray-700 text-sm">Chief Marketing Officer(CMO)</p>
    </div>

    {/* Expert 5 */}
    <div className="bg-white text-black rounded-3xl shadow-lg p-6 flex flex-col items-center">
      <img
        src="./src/assets/sales.jpeg" // Replace with actual image path
        alt="Expert 5"
        className="w-32 h-32 rounded-full mb-4 object-cover"
      />
      <h4 className="text-xl font-semibold mb-2">Rajesh</h4>
      <p className="text-gray-700 text-sm">Head of Sales</p>
    </div>

    {/* Expert 6 */}
    <div className="bg-white text-black rounded-3xl shadow-lg p-6 flex flex-col items-center">
      <img
        src="./src/assets/cfo.jpeg" // Replace with actual image path
        alt="Expert 6"
        className="w-32 h-32 rounded-full mb-4 object-cover"
      />
      <h4 className="text-xl font-semibold mb-2">Rajdipta</h4>
      <p className="text-gray-700 text-sm">Chief Financial Officer(CFO)</p>
    </div>

{/* Expert 7 */}
    <div className="bg-white text-black rounded-3xl shadow-lg p-6 flex flex-col items-center">
      <img
        src="./src/assets/coo.jpeg" // Replace with actual image path
        alt="Expert 6"
        className="w-32 h-32 rounded-full mb-4 object-cover"
      />
      <h4 className="text-xl font-semibold mb-2">Sarvesh</h4>
      <p className="text-gray-700 text-sm">Chief Operating Officer(COO)</p>
    </div>

  </div>
</div>
<br>
</br>
<br>
</br>
<Footer/>

</div>

    
  );
};

export default MoreAbout;
