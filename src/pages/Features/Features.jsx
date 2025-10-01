import React from "react";
import styles from "./Features.module.css";
import securityImg from "../../images/security.jpg"

function Features() {
  return (
    <>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>Powerful Features for Smarter Healthcare</h1>
          <p>
            Streamline your medical practice with modern tools that save time
            and improve care.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.intro}>
        <h2>Why Choose Our Platform?</h2>
        <p>
          Our healthcare management system is designed to simplify workflows,
          improve communication, and provide actionable insights for doctors,
          patients, and administrators.
        </p>
      </section>

      {/* Feature 1 */}
      <section className={styles.featureSection}>
        <div className={styles.featureImage}>
          <img src={ securityImg} alt="Patient Details" />
        </div>
        <div className={styles.featureText}>
          <h3>Patient Management</h3>
          <p>
            Maintain complete patient profiles including medical history,
            prescriptions, and visit records. Provide personalized care with
            easy access to patient information.
          </p>
        </div>
      </section>

      {/* Feature 2 */}
      <section className={`${styles.featureSection} ${styles.reverse}`}>
        <div className={styles.featureImage}>
          <img src={ securityImg} alt="Doctor Management" />
        </div>
        <div className={styles.featureText}>
          <h3>Doctor Management</h3>
          <p>
            Manage doctor profiles, specialties, and availability from a single
            dashboard. Ensure patients connect with the right specialists on
            time.
          </p>
        </div>
      </section>

      {/* Feature 3 */}
      <section className={styles.featureSection}>
        <div className={styles.featureImage}>
          <img src={ securityImg} alt="Appointments" />
        </div>
        <div className={styles.featureText}>
          <h3>Smart Appointments Scheduling</h3>
          <p>
            Patients can book appointments online with instant confirmations.
            Doctors receive real-time updates and reminders to reduce no-shows.
          </p>
        </div>
      </section>

      {/* Feature 4 */}
      <section className={`${styles.featureSection} ${styles.reverse}`}>
        <div className={styles.featureImage}>
          <img  src={ securityImg} alt="Medical Records" />
        </div>
        <div className={styles.featureText}>
          <h3>Medical Records</h3>
          <p>
            Store, access, and update electronic medical records securely.
            Ensure accuracy and compliance while improving accessibility for
            both patients and doctors.
          </p>
        </div>
      </section>

      {/* Feature 5 */}
      <section className={styles.featureSection}>
        <div className={styles.featureImage}>
          <img  src={ securityImg} alt="Analytics" />
        </div>
        <div className={styles.featureText}>
          <h3>Analytics & Reports</h3>
          <p>
            Get valuable insights with real-time reports. Track patient growth,
            doctor performance, appointment trends, and clinic revenue with
            interactive dashboards.
          </p>
        </div>
      </section>

      {/* Feature 6 */}
      <section className={`${styles.featureSection} ${styles.reverse}`}>
        <div className={styles.featureImage}>
          <img  src={ securityImg} alt="Profile Settings" />
        </div>
        <div className={styles.featureText}>
          <h3>Profile Settings</h3>
          <p>
            Allow doctors, staff, and patients to manage their profiles,
            preferences, and account settings easily for a personalized
            experience.
          </p>
        </div>
      </section>

      {/* Feature 7 */}
      <section className={styles.featureSection}>
        <div className={styles.featureImage}>
          <img  src={ securityImg} alt="Notifications" />
        </div>
        <div className={styles.featureText}>
          <h3>Smart Notifications</h3>
          <p>
            Stay updated with instant alerts about appointments, test results,
            billing updates, and system notifications directly in the dashboard.
          </p>
        </div>
      </section>

      {/* Feature 8 */}
      <section className={`${styles.featureSection} ${styles.reverse}`}>
        <div className={styles.featureImage}>
          <img  src={ securityImg} alt="Billing" />
        </div>
        <div className={styles.featureText}>
          <h3>Billing & Payments</h3>
          <p>
            Generate invoices, track payments, and manage billing seamlessly.
            Support for multiple payment methods ensures hassle-free transactions.
          </p>
        </div>
      </section>
    </>
  );
}

export default Features;
