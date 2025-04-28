'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // ⚡ Correct for App Router
import { BsWhatsapp } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa6';
import { IoChatbubblesSharp } from 'react-icons/io5';
import { BiUpArrowAlt } from 'react-icons/bi';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleApplyNowClick = () => {
    router.push('/apply');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed left-4 bottom-4 z-50 animate-bounce">
        <button
          onClick={handleApplyNowClick}
          className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 border-4 border-light-green-500 shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-pulse"
        >
          <span className="text-white font-bold text-xs">Apply Now</span>
        </button>
      </div>

      <div className="fixed bottom-4 right-4 flex flex-col space-y-4 items-center z-50">
        <a
          href="https://wa.me/yournumber"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-xl border-4 border-light-green-500 hover:shadow-2xl transition-shadow duration-300"
        >
          <BsWhatsapp className="w-6 h-6 text-white" />
        </a>

        <a
          href="tel:+1234567890"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-xl border-4 border-light-green-500 hover:shadow-2xl transition-shadow duration-300"
        >
          <FaPhone className="w-6 h-6 text-white" />
        </a>
      </div>

      <div className="fixed bottom-4 right-20 flex items-center space-x-4 z-50">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-green-500 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <BiUpArrowAlt className="w-6 h-6" />
          </button>
        )}
        <a
          href="https://chat.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-xl border-4 border-light-green-500 hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex items-center justify-center w-full h-full rounded-full bg-green-600">
            <IoChatbubblesSharp className="w-6 h-6 text-white" />
          </div>
        </a>
      </div>
    </>
  );
}
