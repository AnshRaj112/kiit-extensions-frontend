"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Using lucide-react icons

interface NestedLinkItem {
  name: string;
  path: string;
  isHeader?: boolean;
}

interface LinkColumnProps {
  title: string;
  links: (NestedLinkItem | NestedLinkItem[])[]; 
}

const LinkColumn: React.FC<LinkColumnProps> = ({ title, links }) => (
  <div className="flex flex-col space-y-2">
    <h2 className="text-green-500 font-semibold text-lg mb-4">{title}</h2>
    {links.map((link, index) => {
      if (!Array.isArray(link)) {
        return (
          <Link
            key={index}
            href={link.path}
            className="text-gray-700 hover:text-green-600 transition-colors duration-200"
          >
            {link.name}
          </Link>
        );
      }

      return (
        <div key={index} className="ml-0 mb-3">
          {link.map((item, itemIndex) => (
            <div key={itemIndex}>
              {item.isHeader ? (
                <div className="font-medium text-gray-800 mt-2 mb-1.5">{item.name}</div>
              ) : (
                <Link
                  href={item.path}
                  className="text-gray-700 hover:text-green-600 transition-colors duration-200 pl-3 block py-0.5"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      );
    })}
  </div>
);

const QuickLinks: React.FC = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks((prev) => !prev);
  };

  const onlineDegrees: NestedLinkItem[] = [
    { name: 'BA (Eco)', path: '/ba-eco' },
    { name: 'BCA', path: '/bca' },
    { name: 'BCom', path: '/bcom' },
    { name: 'MA (Eco)', path: '/ma-eco' },
    { name: 'MCA', path: '/mca' },
    { name: 'MCom', path: '/mcom' },
  ];

  const certificatePrograms: NestedLinkItem[][] = [
    [
      { name: 'Post Graduate Program (11 months)', path: '', isHeader: true },
      { name: 'AI & ML', path: '/ai-ml' },
      { name: 'Data Science', path: '/data-science' },
      { name: 'Real Estate Management', path: '/real-estate' },
    ],
    [
      { name: 'Post Graduate Diploma Program (6 months)', path: '', isHeader: true },
      { name: 'Internet of Things', path: '/iot' },
    ],
    [
      { name: 'Continuing Education', path: '', isHeader: true },
      { name: 'Corporate PhD', path: '/corporate-phd' },
      { name: 'WILP BTech', path: '/wilp-btech' },
    ]
  ];

  const otherLinks: NestedLinkItem[] = [
    { name: 'FAQ', path: '/faq' },
    { name: 'About Us', path: '/about' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'UGC Approval for online', path: '/ugc-approval' },
    { name: 'CIQA', path: '/ciqa' },
  ];

  const kiitGroup: NestedLinkItem[] = [
    { name: 'Founder', path: '/founder' },
    { name: 'KIIT', path: 'https://kiit.ac.in/', isHeader: false },
    { name: 'KISS', path: '/kiss' },
    { name: 'KIMS', path: '/kims' },
    { name: 'KIIT Polytechnic', path: '/kiit-polytechnic' },
    { name: 'KIIT International School', path: '/kiit-international-school' },
    { name: 'Art of Giving', path: '/art-of-giving' },
    { name: 'Kanya Kiran', path: '/kanya-kiran' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Divider Around Toggle Button */}
      <div className="flex justify-center items-center mb-3">
        <div className="flex-grow h-0.5 bg-gradient-to-l from-[#0097b2] to-transparent"></div>
        <button
          onClick={toggleLinks}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#0097b2] to-[#7ed952] text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 transition-all duration-200 border border-green-400 min-w-[180px] mx-4"
        >
          {showLinks ? 'Show Less' : 'Show More'}
          {showLinks ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        <div className="flex-grow h-0.5 bg-gradient-to-r from-[#0097b2] to-transparent"></div>
      </div>

      {/* Quick Links Section */}
      {showLinks && (
        <>
          <h1 className="text-3xl font-bold text-center text-green-500 mb-3">Quick Links</h1>
          <div className="h-0.5 mx-auto mb-12 bg-gradient-to-r from-[#0097b2] to-[#7ed952] rounded-full w-1/2 md:w-1/3" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <LinkColumn title="Online Degree Programs" links={onlineDegrees} />
            <LinkColumn title="Certificate & Diploma Programs" links={certificatePrograms} />
            <LinkColumn title="Other Useful Links" links={otherLinks} />
            <LinkColumn title="KIIT Group" links={kiitGroup} />
          </div>
        </>
      )}
    </div>
  );
};

export default QuickLinks;
