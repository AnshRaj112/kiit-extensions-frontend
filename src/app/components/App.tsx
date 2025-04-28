"use client";

import React, { useState, useEffect } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa6';
import { IoChatbubblesSharp } from 'react-icons/io5';
import { BiUpArrowAlt } from 'react-icons/bi';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show the "scroll to top" button when the page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen">
      {/* Content */}
      <div className="p-4">
        <h1 className="text-3xl font-bold">Welcome to My Website</h1>
        <p className="mt-2">Scroll down to see more content and the scroll-to-top button!</p>
      </div>

      {/* Apply Now Button with floating animation */}
      <div className="fixed left-4 bottom-4 z-50 animate-bounce">
        <button className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 border-4 border-light-green-500 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <span className="text-white font-bold">Apply Now</span>
        </button>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-4 p-4 rounded-full bg-green-500 text-white shadow-xl z-50 hover:shadow-2xl transition-shadow duration-300"
        >
          <BiUpArrowAlt className="w-6 h-6" />
        </button>
      )}

      {/* Chat, Phone, WhatsApp Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-4 items-center z-50">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/yournumber" // Replace with your WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-xl border-4 border-light-green-500 hover:shadow-2xl transition-shadow duration-300"
        >
          <BsWhatsapp className="w-6 h-6 text-white" />
        </a>

        {/* Phone Button */}
        <a
          href="tel:+1234567890" // Replace with your phone number
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-xl border-4 border-light-green-500 hover:shadow-2xl transition-shadow duration-300"
        >
          <FaPhone className="w-6 h-6 text-white" />
        </a>

        {/* Chat Button */}
        <a
          href="https://chat.example.com" // Replace with your chat link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-xl border-4 border-light-green-500 hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex items-center justify-center w-full h-full rounded-full bg-green-600">
            <IoChatbubblesSharp className="w-6 h-6 text-white" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default App;
