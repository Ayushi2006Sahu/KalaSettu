import React from 'react'

const ServicesCard = ({ image, title, description }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm max-w-80 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
      <img
        className="rounded-md max-h-40 w-full object-cover"
        src={image}
        alt={title}
      />
      <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">{title}</p>
      <p className="text-gray-500 text-sm my-3 ml-2">{description}</p>
      <p className="ml-2 text-blue-600 text-sm font-medium cursor-pointer hover:underline">
        Read More
      </p>
    </div>
  )
}

export default ServicesCard
