import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <NavLink to="/" className={styles.logo}>
          HealthBridge
        </NavLink>

        {/* Desktop Menu */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${styles.ctaBtn} ${isActive ? styles.activeCta : ""}`
              }
              onClick={() => setIsOpen(false)}
            >
              <FaUserCircle className={styles.ctaIcon} /> Login
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Button */}
        <div
          className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}