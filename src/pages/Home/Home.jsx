// Home.jsx
import React from "react";
import styles from "./Home.module.css";
import { FaUserMd, FaCalendarCheck, FaDatabase, FaLock, FaClock, FaMobileAlt, FaSmile } from "react-icons/fa";
import dashaboardimg from "../../images/dashboardimg.jpg"
import Testimonial from "../../components/testimonial/Testimonial";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>Manage Doctors & Patients Seamlessly</h1>
          <p>
            HealthBridge is your all-in-one platform to manage doctors, patients,
            and appointments with ease. Built for hospitals, clinics, and
            healthcare startups.
          </p>
          <button className={styles.ctaBtn}>Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>Key Features</h2>
        <div className={styles.featureGrid}>
          <div className={styles.Cards}>
            <FaUserMd className={styles.icons}  size={40} color="#1e835b" />
            <h3>Doctor Management</h3>
            <p>Register, update, and track all doctors in one dashboard.</p>
          </div>
          <div className={styles.Cards}>
            <FaCalendarCheck className={styles.icons}  size={40} color="#1e835b" />
            <h3>Appointments</h3>
            <p>Easy booking, rescheduling, and notifications system.</p>
          </div>
          <div className={styles.Cards}>
            <FaDatabase className={styles.icons}  size={40} color="#1e835b" />
            <h3>Patient Records</h3>
            <p>Store patient history, prescriptions, and lab results securely.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whyUs}>
        <h2>Why Choose HealthBridge?</h2>
        <div className={styles.whyGrid}>
          <div className={styles.Cards}>
            <FaLock className={styles.icons}  size={35} color="#1e835b" />
            <h3>Secure & Compliant</h3>
            <p>End-to-end encryption & HIPAA compliant for safe healthcare data.</p>
          </div>
          <div className={styles.Cards}>
            <FaClock className={styles.icons}  size={35} color="#1e835b" />
            <h3>24/7 Availability</h3>
            <p>Access anywhere, anytime. No downtime, no delays.</p>
          </div>
          <div className={styles.Cards}>
            <FaMobileAlt className={styles.icons} size={35} color="#1e835b" />
            <h3>Mobile Friendly</h3>
            <p>Works perfectly on desktop, tablet, and mobile devices.</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className={styles.benefits}>
        <h2>Who Benefits?</h2>
        <div className={styles.benefitGrid}>
          <div className={styles.Cards}>
            <h3>For Clinics & Doctors</h3>
            <p>Streamline patient records, appointments, and billing easily.</p>
          </div>
          <div className={styles.Cards}>
            <h3>For Patients</h3>
            <p>Book appointments, receive reminders, and store medical history in one place.</p>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className={styles.preview}>
        <h2>Product Preview</h2>
        <p>Here’s a quick look at our dashboard & patient portal.</p>
        <div className={styles.previewBox}>
          <img src={ dashaboardimg} alt="Dashboard Preview" />
        </div>
      </section>

      {/* Testimonials */}
     <Testimonial/>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Start Your Free Trial Today!</h2>
        <p>No credit card required. Get started in 2 minutes.</p>
        <button className={styles.ctaBtn}>Sign Up Free</button>
      </section>
    </div>
  );
}
