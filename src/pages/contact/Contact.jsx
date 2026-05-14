import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

const Contact = () => {
  const [activeTheme] = useThemeSwitcher();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7b92lcx',
        'template_k6p49ij',
        e.target,
        'wqQwMjjepKRfJ6ah-'
      )
      .then(() => {
        setStatus('Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('Failed to send the message. Please try again later.');
      });
  };

  return (
    <div className="container mx-auto py-12 px-4">

      {/* HEADER */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-[#6B4226] mb-4">Contact Trading Co.</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          We provide professional AC services, scrap buying solutions, and reliable technical support across Doha, Qatar.
        </p>
      </motion.div>

      <section className="grid lg:grid-cols-2 gap-8">

        {/* LEFT SIDE (UNCHANGED) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="lg:h-[800px] h-auto w-full space-y-4 rounded-lg overflow-hidden"
        >
          <div className="h-[350px] w-full rounded-lg overflow-hidden">
            <a
              href="https://www.google.com/maps/place/25%C2%B016'10.9%22N+51%C2%B032'24.2%22E/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://8upload.com/image/67ac615fe0e96/Screenshot_4.png"
                alt="Google Map Location"
                className="w-full h-full object-cover rounded-lg"
              />
            </a>
          </div>

          <div className="h-[450px] w-full rounded-lg overflow-hidden">
            <a
              href="https://www.google.com/maps/place/25%C2%B016'10.9%22N+51%C2%B032'24.2%22E/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.ibb.co/bggrjjmW/AC-Scrap-cleanup.png"
                alt="Shop Interior"
                className="w-full h-full object-contain rounded-lg"
              />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE (UPDATED) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >



          {/* CONTACT INFO */}
          <h2 className="text-xl font-semibold text-[#6B4226] mb-4">Contact Information</h2>

          <div className="mb-6 text-gray-700">
            <p><strong>Company:</strong> Contact Trading Co.</p>
            <p><strong>C.R No:</strong> 22927/6</p>
            <p><strong>Location:</strong> Doha, Qatar</p>

            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:kaioumabdul551@gmail.com" className="text-[#8B5A2B]">
                kaioumabdul551@gmail.com
              </a>
            </p>

            <p>
              <strong>Phone:</strong>{' '}
              <a href="tel:+97450791874" className="text-[#8B5A2B]">
                +974 5079 1874
              </a>
            </p>

            <p className="font-semibold">Available 24/7</p>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-6 my-6">
            <a href="tel:+97450791874" className="text-[#8B5A2B]">
              <FaPhoneAlt size={30} />
            </a>

            <a href="https://www.facebook.com/share/1Fz8aNC56J/" target="_blank" rel="noopener noreferrer" className="text-[#8B5A2B]">
              <FaFacebook size={30} />
            </a>

            <a href="https://www.instagram.com/al_taweel_international" target="_blank" rel="noopener noreferrer" className="text-[#8B5A2B]">
              <FaInstagram size={30} />
            </a>

            <a href="https://wa.me/97450791874" target="_blank" rel="noopener noreferrer" className="text-[#8B5A2B]">
              <FaWhatsapp size={30} />
            </a>
          </div>

          {/* FORM */}
          <p className="text-gray-600 mb-4">
            Send us a message and we will respond quickly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full p-3 border rounded-lg" rows="4" required />

            <button
              type="submit"
              className={`w-full bg-[#6B4226] text-white py-3 rounded-lg font-semibold ${
                activeTheme === 'dark' ? 'dark-mode-text' : ''
              }`}
            >
              Send Message
            </button>
          </form>

          {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
