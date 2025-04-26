"use client";

import { useState } from "react";
import { ChevronDown, Phone, Menu } from "lucide-react";
import Link from "next/link";

interface SubOption {
  title: string;
  href: string;
}

interface ProgramOption {
  title: string;
  subOptions: SubOption[];
}

const programOptions: ProgramOption[] = [
  {
    title: "Option 1",
    subOptions: [
      { title: "SubOption 1-1", href: "/suboption-1-1" },
      { title: "SubOption 1-2", href: "/suboption-1-2" },
    ],
  },
  {
    title: "Option 2",
    subOptions: [
      { title: "SubOption 2-1", href: "/suboption-2-1" },
      { title: "SubOption 2-2", href: "/suboption-2-2" },
    ],
  },
];

const Header = () => {
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const [activeOption, setActiveOption] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveOption, setMobileActiveOption] = useState<number | null>(null);

  const toggleMobileOption = (index: number) => {
    if (mobileActiveOption === index) {
      setMobileActiveOption(null);
    } else {
      setMobileActiveOption(index);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-3 min-h-[60px]">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img src="/Picture1.png" alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center space-x-6">
          
          {/* Contact Us */}
          <a href="tel:+1234567890" className="flex items-center text-gray-700 hover:text-green-500 text-sm font-semibold transition-colors">
            <Phone className="w-6 h-6 mr-2 stroke-[2.5]" />
            Contact Us
          </a>

          {/* Program */}
          <div className="relative">
            <button
              onClick={() => setIsProgramOpen(!isProgramOpen)}
              className="flex items-center text-gray-800 hover:text-green-500 text-base font-semibold transition-colors"
            >
              Program
              <ChevronDown className="w-5 h-5 ml-1 stroke-[2.5]" />
            </button>

            {isProgramOpen && (
              <div className="absolute top-14 right-0 bg-white border rounded shadow-lg w-60">
                {programOptions.map((option, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveOption(index)}
                    onMouseLeave={() => setActiveOption(null)}
                    className="relative group"
                  >
                    <div className="px-4 py-2 hover:bg-green-100 cursor-pointer flex justify-between items-center transition-colors">
                      {option.title}
                    </div>

                    {/* SubOptions */}
                    {activeOption === index && (
                      <div className="absolute top-0 right-full bg-white border rounded shadow-lg w-52 mr-2">
                        {option.subOptions.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            href={sub.href}
                            className="block px-4 py-2 hover:bg-green-100 text-sm transition-colors"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Menu Button */}
          <div className="relative">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-green-500 transition-colors"
            >
              <Menu className="w-6 h-6 stroke-[2.5]" />
            </button>

            {isMobileMenuOpen && (
              <div className="absolute top-12 right-0 bg-white border rounded shadow-lg w-40">
                <Link
                  href="/portal-login"
                  className="block px-4 py-2 hover:bg-green-100 text-sm transition-colors"
                >
                  Portal Login
                </Link>
                <Link
                  href="/contact-us"
                  className="block px-4 py-2 hover:bg-green-100 text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center space-x-4">
          
          {/* Contact Us */}
          <a href="tel:+1234567890" className="flex items-center text-gray-700 hover:text-green-500 text-sm font-semibold transition-colors">
            <Phone className="h-6 w-6 mr-2 stroke-[2.5]" />
            Contact Us
          </a>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="h-6 w-6 text-gray-700 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <div className="border-t pt-4">
            <p className="text-gray-800 font-semibold mb-2">Program</p>
            {programOptions.map((option, index) => (
              <div key={index} className="space-y-1">
                <button
                  onClick={() => toggleMobileOption(index)}
                  className="flex justify-between items-center w-full text-gray-700 hover:text-green-500 text-left transition-colors"
                >
                  {option.title}
                  <ChevronDown className={`w-5 h-5 stroke-[2.5] transform ${mobileActiveOption === index ? "rotate-180" : ""}`} />
                </button>

                {mobileActiveOption === index && (
                  <div className="ml-4 mt-2 space-y-1">
                    {option.subOptions.map((sub, subIndex) => (
                      <Link
                        key={subIndex}
                        href={sub.href}
                        className="block text-gray-600 text-sm hover:text-green-500 transition-colors"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="border-t pt-4 space-y-2">
            <Link href="/portal-login" className="block text-gray-700 hover:text-green-500 text-sm transition-colors">
              Portal Login
            </Link>
            <Link href="/contact-us" className="block text-gray-700 hover:text-green-500 text-sm font-semibold transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
