"use client";

import { useState } from "react";
import styles from "./styles/Header.module.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";

const programs: Record<string, string[]> = {
  "Online Degree Program": ["BBA", "BCA", "MBA", "MCA", "Law"],
  "WILP BTech (3.5 years)": ["Mechanical", "Electrical", "Computer Science", "Civil"],
  "Branch": ["a", 'b'],
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [subDropdown, setSubDropdown] = useState<string | null>(null);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image src="/Picture1.png" alt="KIIT eXtension" width={150} height={50} />
          </Link>
        </div>

        {/* Navigation Section */}
        <div className={styles.navContainer}>
          <nav className={`${styles.nav} ${menuOpen ? styles.navMobile : ""}`}>
            <ul>
              {/* Programs Dropdown */}
              <li
                className={styles.dropdown}
                onMouseEnter={() => setActiveDropdown("Programs")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span onClick={() => setActiveDropdown(activeDropdown === "Programs" ? null : "Programs")}>
                  Programs <RiArrowDropDownLine size={20} />
                </span>
                {activeDropdown === "Programs" && (
                  <ul className={styles.dropdownMenu}>
                    {Object.keys(programs).map((program) => (
                      <li
                        key={program}
                        className={styles.nestedDropdown}
                        onMouseEnter={() => setSubDropdown(program)}
                        onMouseLeave={() => setSubDropdown(null)}
                      >
                        <span onClick={() => setSubDropdown(subDropdown === program ? null : program)}>
                          {program}
                        </span>
                        {subDropdown === program && (
                          <ul className={styles.subDropdown}>
                            {programs[program].map((item) => ( 
                              <li key={item}>
                                <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link href="/portal-login">Portal Login</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className={styles.mobileToggle} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <RxCross2 size={28} /> : <FaBars size={28} />}
          </div>
        </div>
      </div>
    </header>
  );
}
