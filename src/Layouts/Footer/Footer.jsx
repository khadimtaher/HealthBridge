import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1 - Logo & About */}
        <div className={styles.col}>
          <h2 className={styles.logo}>HealthBridge</h2>
          <p>
            Your trusted healthBridge platform connecting patients and doctors
            with ease. Delivering quality care, anytime, anywhere.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className={styles.col}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div className={styles.col}>
          <h3>Contact Info</h3>
          <p>Hyderabad, India</p>
          <p>+91 98765 43210</p>
          <p>support@healthcare.com</p>
        </div>

        {/* Column 4 - Social Media */}
        <div className={styles.col}>
          <h3>Follow Us</h3>
          <div className={styles.social}>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <p>© 2025 HealthCare Platform. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;