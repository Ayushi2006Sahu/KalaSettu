import React from 'react';

const Testimonals = () => {
  const testimonials = [
    { 
      id: 1, 
      name: "Preeti ", 
      address: "Bengaluru, India", 
      image: "https://firebasestorage.googleapis.com/v0/b/image-a6bb1.appspot.com/o/IMG-20230912-WA0019.jpg?alt=media&token=50ebf8c7-c5f9-475b-970b-c0955cf92882", 
      rating: 5, 
      review: "Kalasettu made booking our band a breeze! The entire process was smooth, and our guests loved the live music. Highly recommend this platform!" 
    },
    { 
      id: 2, 
      name: "Ayushi Sahu", 
      address: "Delhi, India", 
      image: "https://firebasestorage.googleapis.com/v0/b/image-a6bb1.appspot.com/o/IMG-20230913-WA0008.jpg?alt=media&token=ff4612b7-4132-436f-9440-94f93a959013", 
      rating: 4, 
      review: "The performer we booked was exceptional! Kalasettu's detailed profiles helped us find the perfect match for our event. Will definitely use them again!" 
    },
    { 
      id: 3, 
      name: "Anjali", 
      address: "Haryana , India", 
      image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", 
      rating: 5, 
      review: "I was impressed with the variety of artists available! Kalasettu helped me plan an unforgettable night, and I can’t thank them enough for their support." 
    }
  ];

 const Star = ({ filled }) => (
    <svg className="w-4 h-4 text-yellow-400" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z" />
    </svg>
  );

  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-black pt-20 pb-30">
      <div className="flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-[40px] font-playfair font-semibold">Customer Testimonials</h1>
        <p className="text-sm md:text-base text-gray-300 mt-2 max-w-[696px]">Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review.</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 mt-20 mb-10">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg max-w-xs transform transition-transform hover:scale-105 duration-300">
            <div className="flex items-center gap-3">
              <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
              <div>
                <p className="font-playfair text-xl font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {Array(5).fill(0).map((_, index) => (
                <Star key={index} filled={testimonial.rating > index} />
              ))}
            </div>
            <p className="text-gray-500 max-w-90 mt-4 italic">"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Testimonals;
