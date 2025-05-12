import React from 'react'
import ServicesCard from './ServicesCard' // adjust path as needed

const servicesData = [
  {
    title: 'Artist Booking',
    description: 'Easily connect with talented performers for your event.',
    image: 'http://kalasettu.liveblog365.com/wp-content/uploads/2025/05/pexels-photo-1434625-1434625-scaled.jpg',
  },
  {
    title: 'Event Planning Support',
    description: 'Receive expert guidance for a flawless event experience.',
    image: 'http://kalasettu.liveblog365.com/wp-content/uploads/2025/05/pexels-photo-7709278-7709278-scaled.jpg',
  },
  {
    title: 'Venue Recommendations',
    description: 'Get personalized suggestions for ideal event venues.',
    image: 'http://kalasettu.liveblog365.com/wp-content/uploads/2025/05/pexels-photo-169189-169189-scaled.jpg',
  },
]

const Services = () => {
  return (
    <section className="py-12 bg-black text-center">
         <h2 className="text-4xl md:text-4xl font-bold text-white font-playfair">Our Services</h2>
         <p className="text-amber-500 text-lg mt-2 mb-10">Explore Comprehensive Booking Solutions for Your Event</p>
    <div className="p-8 flex flex-wrap gap-6 justify-center">
      {servicesData.map((service, index) => (
        <ServicesCard
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
        />
      ))}
    </div>
    </section>
  )
}

export default Services
