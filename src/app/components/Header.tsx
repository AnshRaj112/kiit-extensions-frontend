"use client";

import { useState, useRef } from "react";
import styles from "./styles/Header.module.scss";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";

const navItems = [
  {
    title: "Online Degree Program",
    subItems: [
      "BBA", "BCA", "BCom", "MBA", "MCA", "MSc. (Maths & Data Sci.)", "MA(JMC)", "MCom", "M library & Information Science", "MA (Psychology)", "MA (English)", "MA (Sociology)"
    ],
  },
  {
    title: "WILP BTech (3.5 years)",
    subItems: ["M.Tech", "M.Sc", "MBA", "MA"],
  },
  {
    title: "Executive MTech (1 year)",
    subItems: [
      "Executive M. Tech in Digital Manufacturing", "Executive MTech in CPS with AI", "Executive MTech in VLSI and Embedded Systems", "Executive MTech in Project Management", "Executive MTech in Safety Engineering", "Executive MTech in Electric Vehicle Systems", "Executive MTech in Power Electronics and Drive", "Executive MTech in Power System Engineering", "Executive MTech in Cyber Security", "Executive MTech in Data Science"
    ],
  },
  {
    title: "Executive MBA (1 year)",
    subItems: [
      "Executive MBA in Resource Management", "Executive MBA in Information Technology", "Executive MBA in FinTech", "Executive MBA in Finance", "Executive MBA in Marketing", "Executive MBA in Operation Management", "Executive MBA in Healthcare Management"
    ]
  },
];

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
      setSubDropdownOpen(null);
    }, 500);
  };

  return (
    <header className={styles.header}>
      {/* Top Section */}
      <div className={styles.top}>
        <span className={styles.university}>Kalinga Institute of Industrial Technology</span>
        <div className={styles.links}>
          <a href="/login">Portal Login</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottom}>
        <div className={styles.logo}>KIIT Logo</div>

        {/* Mobile Menu Toggle */}
        {mobileMenuOpen ? (
          <RxCross2 className={styles.menuIcon} size={24} onClick={() => setMobileMenuOpen(false)} />
        ) : (
          <FaBars className={styles.menuIcon} size={24} onClick={() => setMobileMenuOpen(true)} />
        )}

        {/* Navigation (desktop & mobile) */}
        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.showMobile : ""}`}>
          <div
            className={styles.programs}
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <span>Programs</span>
            <RiArrowDropDownLine size={24} />

            {dropdownOpen && (
              <ul className={styles.dropdown}>
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => setSubDropdownOpen(index)}
                    onMouseLeave={() => setSubDropdownOpen(null)}
                  >
                    {item.title}
                    {subDropdownOpen === index && (
                      <ul className={styles.subDropdown}>
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>{subItem}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
