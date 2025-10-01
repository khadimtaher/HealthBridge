import React from "react";
import styles from "./HowItWorks.module.css";

function HowItWorks() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>How Our Platform Works</h1>
          <p>
            Seamlessly connecting Patients and Doctors through an easy-to-use,
            secure, and smart healthcare platform.
          </p>
        </div>
      </section>

      {/* Steps for Patients */}
      <section className={styles.flowSection}>
        <h2>For Patients</h2>
        <div className={styles.timeline}>
          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.timelineContent}>
              <h3>Create Account</h3>
              <p>
                Sign up with your basic details and set up your patient profile
                with medical history.
              </p>
            </div>
          </div>
          <div className={`${styles.timelineItem} ${styles.right}`}>
            <div className={styles.timelineContent}>
              <h3>Search & Book</h3>
              <p>
                Search doctors by specialization, location, or availability and
                instantly book appointments.
              </p>
            </div>
          </div>
          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.timelineContent}>
              <h3>Consultation</h3>
              <p>
                Attend your appointment (online or in-person) and get prescriptions
                directly on your dashboard.
              </p>
            </div>
          </div>
          <div className={`${styles.timelineItem} ${styles.right}`}>
            <div className={styles.timelineContent}>
              <h3>Manage Records</h3>
              <p>
                Access past appointments, medical reports, and invoices in one
                place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps for Doctors */}
      <section className={`${styles.flowSection} ${styles.reverse}`}>
        <h2>For Doctors</h2>
        <div className={styles.timeline}>
          <div className={`${styles.timelineItem} ${styles.right}`}>
            <div className={styles.timelineContent}>
              <h3>Register & Verify</h3>
              <p>
                Create your doctor account, add specialization details, and
                complete verification.
              </p>
            </div>
          </div>
          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.timelineContent}>
              <h3>Manage Profile</h3>
              <p>
                Update your profile, consultation timings, and availability from
                your dashboard.
              </p>
            </div>
          </div>
          <div className={`${styles.timelineItem} ${styles.right}`}>
            <div className={styles.timelineContent}>
              <h3>Appointments</h3>
              <p>
                View and manage patient bookings, accept/reject appointments, and
                send reminders.
              </p>
            </div>
          </div>
          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.timelineContent}>
              <h3>Earnings & Insights</h3>
              <p>
                Track payments, earnings, and performance analytics from one
                simple dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className={styles.closing}>
        <h2>Simple. Fast. Secure.</h2>
        <p>
          Our platform bridges the gap between Patients and Doctors, making
          healthcare accessible anytime, anywhere.
        </p>
      </section>
    </>
  );
}

export default HowItWorks;