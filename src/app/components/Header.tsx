"use client";

import { useState } from "react";
import styles from "./styles/Header.module.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx"; // Uncommenting to use it
import Image from "next/image";
import Link from "next/link";

const programs: Record<string, string[]> = {
  "Online Degree Program": ["BBA", "BCA", "MBA", "MCA", "Law"],
  "WILP BTech (3.5 years)": ["Mechanical", "Electrical", "Computer Science", "Civil"],
  "Branch": ["a", "b", "c"],
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
            <Image src="/Picture1.png" alt="KIIT eXtension" width={90} height={30} />
          </Link>
        </div>

        {/* Navigation Section */}
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            <ul className={menuOpen ? styles.mobileMenu : ""}>
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

              {/* FaBars Menu (Only in Desktop View) */}
              <li className={styles.dropdown}>
                <span onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? <RxCross2 size={20} /> : <FaBars size={20} />}
                </span>
                {menuOpen && (
                  <ul className={styles.dropdownMenu}>
                    <li>
                      <Link href="/portal-login">Portal Login</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
