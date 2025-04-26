"use client";

import { useEffect, useRef, useState } from "react";
import Foot from "./Foot";
import { Phone, Mail } from 'lucide-react';
import EnquiryForm from "./EnquiryForm";

export default function Footer() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footRef = useRef<HTMLDivElement | null>(null);
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

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showForm]);

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
          <div className="flex flex-row justify-between items-center h-auto sm:h-[44px] py-1 font-semibold text-white w-full px-4 sm:px-[2%] bg-gradient-to-l from-[#0097b2] to-[#7ed952]">
            
            {/* Phone Section */}
            <div className="flex items-center gap-1.5">
              <Phone size={18} /> {/* <-- Fixed size */}
              <p className="text-[10px] sm:text-xs md:text-sm">080-00000000</p>
            </div>

            {/* Email Section */}
            <div className="flex items-center gap-1.5">
              <Mail size={18} /> {/* <-- Fixed size */}
              <a
                href="mailto:admission@kiitx.com"
                className="text-[10px] sm:text-xs md:text-sm"
              >
                admission@kiitx.com
              </a>
            </div>

            {/* Enquiry Button */}
            <div
              onClick={() => setShowForm(true)}
              className="bg-yellow-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded text-black hover:bg-yellow-400 cursor-pointer text-[10px] sm:text-xs md:text-sm whitespace-nowrap"
            >
              Admission Enquiry
            </div>
          </div>
        </div>

        {/* Foot Component */}
        <div ref={footRef}>
          <Foot />
        </div>
      </div>
    </>
  );
}
