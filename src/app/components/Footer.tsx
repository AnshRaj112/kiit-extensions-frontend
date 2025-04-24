"use client";

import { useEffect, useRef, useState } from "react";
import Foot from "./Foot";
import { Phone, Mail } from 'lucide-react';
import EnquiryForm from "./EnquiryForm";

export default function Footer() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footRef = useRef<HTMLDivElement | null>(null); // optional type
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (footRef.current) {
      observer.observe(footRef.current);
    }

    return () => {
      if (footRef.current) {
        observer.unobserve(footRef.current);
      }
    };
  }, []);

  return (
    <>
      {showForm && <EnquiryForm close={() => setShowForm(false)} />}
      <div className="flex flex-col">
        {/* Sticky Footer Bar */}
        <div
          className={`${
            isFooterVisible ? "relative" : "fixed bottom-0"
          } z-50 w-full`}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center sm:h-[48px] py-1 sm:py-2 font-semibold text-white w-full px-4 sm:px-[2%] bg-gradient-to-l from-[#0097b2] to-[#7ed952]">
            {/* Phone Section */}
            <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <Phone />
              <p className="text-sm sm:text-base">080-00000000</p>
            </div>

            {/* Email Section */}
            <div className="flex items-center gap-2 mb-2 sm:mb-0">
              <Mail
              />
              <a
                href="mailto:admission@kiitx.com"
                className="text-sm sm:text-base"
              >
                admission@kiitx.com
              </a>
            </div>

            {/* Enquiry Button */}
            <div
              onClick={() => setShowForm(true)}
              className="bg-yellow-300 px-4 py-0.5 rounded text-black hover:bg-yellow-400 cursor-pointer text-sm sm:text-base"
            >
              Admission Enquiry
            </div>
          </div>
        </div>

        {/* Foot Component (Appears when scrolled to bottom) */}
        <div ref={footRef}>
          <Foot />
        </div>
      </div>
    </>
  );
}
