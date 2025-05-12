import React, { useState } from 'react';
import contactImage from '../assets/contactus.jpg';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_yds49ed',
      'template_591ujfb',
      formData,
      'RaRHns0fWh6-MdIxS'
    )
    .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
    }, (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again later.");
    });
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* Image Banner */}
      <div>
        <img
          src={contactImage}
          alt="Contact Us Banner"
          className="w-full h-[300px] object-cover"
        />
      </div>

      {/* Main Contact Section */}
      <div className="px-4 sm:px-10 md:px-20 py-10">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 text-white">
          Contact Us
        </h1>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
          We'd love to hear from you! Whether you’re looking to book an artist or have any general queries, reach out to us directly or use the form below.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Section: Info + Map */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">Get in Touch</h2>
            <p>📍 WMC6+QPQ, Ibbaluru, Bellandur, Bengaluru, Karnataka 560103</p>
            <p>📞 +91 7991785881</p>
            <p>📧 ayush3995@gmail.com</p>
            <p className="text-gray-400">Available Mon–Fri, 10AM–6PM</p>

            <div className="rounded-lg overflow-hidden w-full h-[250px] border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62220.74178294637!2d77.663039!3d12.920806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae137f57ee8e33%3A0x4d6e3c2e41490e54!2sWMC6%2BQPQ%2C%20Ibbaluru%2C%20Bellandur%2C%20Bengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1746959339166!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Kalasettu Location"
              ></iframe>
            </div>
          </div>

          {/* Right Section: Form */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-white">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 text-white p-3 rounded-md border border-gray-700"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 text-white p-3 rounded-md border border-gray-700"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 text-white p-3 rounded-md border border-gray-700"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-gray-800 text-white p-3 rounded-md border border-gray-700"
              ></textarea>
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-300 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
