import React from 'react';
import Footer from '../components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Dummy artist data
const artists = [
  { name: 'Arijit Singh', image: 'https://i.scdn.co/image/ab6761610000e5eb5ba2d75eb08a2d672f9b69b7' },
  { name: 'Shreya Ghoshal', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnXHrWvaE1ubq_Da_ZSgrzsyO7rxg9cszPIQ&s' },
  { name: 'Anubhav Singh Bassi', image: 'https://pbs.twimg.com/profile_images/1641508263068852225/60E1spfk_400x400.jpg' },
  { name: 'Vineeta Singh', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQjo7oxFODeewwNKJdbDFTz1JbmygXA9ZiGEFlBRFlLWyW2t6VKmSxZZb2fOdEt3osnNEBrb-4FosjZgwwFlirRuozW6LIbXTlOSCROxKg' },
  { name: 'Chetan Bhagat', image: 'https://www.bookmyartistindia.com/wp-content/uploads/2023/11/MS_Chetan-Bhagat_1-552x644.png' },
  { name: 'Rajpal Yadav', image: 'https://www.bookmyartistindia.com/wp-content/uploads/2023/10/BC_RajpalYadav_1-552x644.png' },
  { name: 'Leander Paes ', image: 'https://www.bookmyartistindia.com/wp-content/uploads/2024/10/Leander-Paes-552x644.jpg' },
  { name: 'Anmol Garg', image: 'https://www.bookmyartistindia.com/wp-content/uploads/2023/10/SC_AnmolGarg_1-e1719632765894-552x644.png' },
  { name: 'Karan Wahi', image: 'https://www.bookmyartistindia.com/wp-content/uploads/2023/11/A_Karan-Wahi-_1.png' },
  { name: 'Hina Khan', image: 'https://www.bookmyartistindia.com/wp-content/uploads/2023/10/BC_HeenaKhan_1-552x644.png' },
  { name: 'Gaurav Gupta', image: 'https://www.bookmyartistindia.com/wp-content/uploads/2023/10/SC_GauravGupta_1.png' },
  { name: 'Ritesh Agarwal', image: 'https://www.bookmyartistindia.com/wp-content/uploads/2024/10/Ritesh-Agarwal-552x644.jpg' },
];

const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;


const handleBooking = (artistName) => {
  const options = {
    key: razorpayKey,
    amount: 50000, // amount in paise => 500 = ₹500
    currency: "INR",
    name: "Celebrity Booking",
    description: `Booking for ${artistName}`,
    image: "https://your-logo-url.com/logo.png", // optional
    handler: function (response) {
      toast.success("Payment Successful!", {
        position: "bottom-center",
        autoClose: 3000,
        theme: "dark",
      });

      // Optionally send `response.razorpay_payment_id` to your server
    },
    prefill: {
      name: "Ayushi",
      email: "ayush3995@gmail.com",
    },
    notes: {
      bookingFor: artistName,
    },
    theme: {
      color: "#3399cc",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();

  rzp.on("payment.failed", function (response) {
    toast.error("Payment Failed!", {
      position: "bottom-center",
      autoClose: 3000,
      theme: "dark",
    });
  });
};




const Concerts = () => {
  return (
    <div className="bg-black min-h-screen px-4 py-10">
      <h1 className="text-4xl text-white font-bold text-center mb-10"> Explore Celebrities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {artists.map((artist, index) => (
          <div key={index} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg text-white hover:scale-105 transition-transform duration-300">
            <img src={artist.image} alt={artist.name} className="w-full h-56 object-cover" />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold">{artist.name}</h2>
              <button
 onClick={() => handleBooking(artist.name)}

  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded justify-center hover:bg-blue-700"
>
  Book Now
</button>

            </div>
          </div>
        ))}
      </div>

      
     <button className='mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-yellow-300 mx-auto block'>
  Explore More Artist
</button>

<br></br>
      <br></br>
      <ToastContainer />

 <Footer/>
    </div>
  );
};

export default Concerts;

