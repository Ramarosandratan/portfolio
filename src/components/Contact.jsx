import React, { useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const formRef = useRef();
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email is not valid.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs.sendForm('service_3ziv67v', 'template_661d95k', formRef.current, '67EoTOdQ550eLb1hk')
        .then(() => {
          setMessage('Message envoyé !');
          setFormData({ name: '', email: '', message: '' });
          setErrors({});
        })
        .catch(() => {
          setMessage('Erreur d’envoi');
        });
    }
  };
  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center py-16 px-4 bg-gray-900 dark:bg-gray-900 xl:px-6 xl:py-20 2xl:px-8 2xl:py-24"
    >
      <motion.div
        className="w-full max-w-2xl mx-auto p-8 rounded-2xl shadow-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white xl:p-10 xl:max-w-3xl 2xl:p-12 2xl:max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center font-bold text-xl mb-8 text-gray-900 dark:text-white sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">Contact Me</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-gray-700 dark:text-gray-300 sm:text-sm xl:text-base 2xl:text-lg mb-3">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white xl:p-4 2xl:p-5"
              placeholder="Your Name"
            />
            {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-gray-700 dark:text-gray-300 sm:text-sm xl:text-base 2xl:text-lg mb-3">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white xl:p-4 2xl:p-5"
              placeholder="Your Email"
            />
            {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-medium text-gray-700 dark:text-gray-300 sm:text-sm xl:text-base 2xl:text-lg mb-3">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white xl:p-4 2xl:p-5"
              placeholder="Your Message"
            ></textarea>
            {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl px-6 py-3 hover:scale-105 xl:px-8 xl:py-4 xl:text-lg 2xl:px-10 2xl:py-5 2xl:text-xl"
            >
              Send
            </button>
          </div>
          {message && <p className={`mt-4 text-center ${message.includes('Erreur') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
        </form>

        <div className="mt-10 flex justify-center space-x-6 xl:space-x-8 2xl:space-x-10">
          <a
            href="https://github.com/Ramarosandratan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-3 transition duration-300 ease-in-out xl:p-4 xl:h-10 xl:w-10 2xl:p-5 2xl:h-12 2xl:w-12"
            aria-label="GitHub"
          >
            <FaGithub className="h-8 w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12" />
          </a>
          <a
            href="https://www.linkedin.com/in/rinasoa-mampionona-ramarosandratana/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-3 transition duration-300 ease-in-out xl:p-4 xl:h-10 xl:w-10 2xl:p-5 2xl:h-12 2xl:w-12"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-8 w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12" />
          </a>
          <a
            href="mailto:ramarosandratana@hotmail.com"
            className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-3 transition duration-300 ease-in-out xl:p-4 xl:h-10 xl:w-10 2xl:p-5 2xl:h-12 2xl:w-12"
            aria-label="Email"
          >
            <FaEnvelope className="h-8 w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
