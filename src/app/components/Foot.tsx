"use client";

import Link from 'next/link';
import { FooterSocialLinks } from "./FooterSocialLinks";
import { ContactInfo } from "./ContactInfo";
import { useState } from "react";
import EnquiryForm from "./EnquiryForm";  // Assuming your EnquiryForm is in the same directory

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility
  const currentYear = new Date().getFullYear(); // Automatically get the current year

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer className="bg-white py-8 px-4 shadow-md mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6 flex flex-col justify-between">
            <div>
              <Link href="/" className="block w-72">
                <img
                  src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745738296/ef0a1275-3868-4596-aa20-4bd0ad8eadf7.png"
                  alt="KIIT eXtension School Logo"
                  className="w-full h-auto object-contain"
                  style={{ height: '115px', width: '331px' }}  // Increased height and width by 15%
                />
              </Link>
              <FooterSocialLinks title="KIIT" platform="KIIT" />
              <FooterSocialLinks title="KIITX" platform="KIITX" />
            </div>
            <div className="flex flex-col gap-4 mt-6 mb-8">
              <Link href="#">
                <div className="bg-gradient-to-r from-[#ff3131] to-[#ff914d] text-white px-4 py-2 rounded-full w-48 text-center hover:bg-green-600 transition-colors">
                  Student Support
                </div>
              </Link>
              <button
                onClick={openModal}
                className="bg-gradient-to-r from-[#0097b2] to-[#7ed952] text-white px-4 py-2 rounded-full w-48 text-center hover:bg-teal-600 transition-colors cursor-pointer"
              >
                Enquire Now
              </button>
            </div>
          </div>
          <div className="mt-8 mb-8">  {/* Ensure equal margin-bottom as Enquire Now */}
            <ContactInfo />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          © {currentYear} KIITX - all rights reserved.
        </div>
      </div>

      {/* Render the EnquiryForm modal when the state is true */}
      {isModalOpen && <EnquiryForm close={closeModal} />}
    </footer>
  );
};
