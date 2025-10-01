import React, { useEffect, useRef } from "react";
import styles from "./About.module.css";

function About() {
  const visionMission = [
    {
      title: "Our Vision",
      description:
        "To transform global healthcare by making it accessible, efficient, and patient-centered through innovative technology.",
    },
    {
      title: "Our Mission",
      description:
        "To empower doctors and patients with a seamless, secure platform for managing appointments, records, and insights.",
    },
  ];

  const values = [
    {
      title: "Security",
      description:
        "Your data is protected with HIPAA-compliant encryption and regular audits.",
    },
    {
      title: "Accessibility",
      description:
        "Our platform ensures healthcare is available anytime, anywhere.",
    },
    {
      title: "Innovation",
      description:
        "We leverage cutting-edge technology to streamline healthcare workflows.",
    },
  ];

  const achievements = [
    { metric: 10000, description: "Appointments Booked" },
    { metric: 1000, description: "Providers Served" },
    { metric: 100, description: "HIPAA Compliance" },
  ];

  const counterRefs = useRef([]);

  useEffect(() => {
    const observers = counterRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && ref && !ref.dataset.animated) {
            ref.dataset.animated = true;
            const endValue = parseInt(ref.dataset.count, 10);
            let startValue = 0;
            const duration = 2000; // 2 seconds
            const increment = endValue / (duration / 50);
            const counter = setInterval(() => {
              startValue += increment;
              if (startValue >= endValue) {
                startValue = endValue;
                clearInterval(counter);
              }
              ref.textContent =
                Math.floor(startValue).toLocaleString("en-IN") +
                (index === 2 ? "%" : "+");
            }, 50);
          }
        },
        { threshold: 0.5 }
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>About Us</h1>
        </div>
      </div>

      <section className={styles.aboutSection}>
        {/* Our Story */}
        <div className={styles.storySection}>
          <h2>Our Story</h2>
          <p>
            Founded in 2023, HealthBridge was created to address inefficiencies
            in healthcare management. Our mission is to simplify the way doctors
            and patients interact, making healthcare more accessible and
            efficient. Today, we serve over 1,000 providers across India and
            beyond, with a vision to transform global healthcare delivery.
          </p>
        </div>

        {/* Vision & Mission Section */}
        <div className={styles.visionMissionSection}>
          <h2>Our Vision & Mission</h2>
          <div className={styles.visionMissionGrid}>
            {visionMission.map((item, index) => (
              <div key={index} className={styles.visionMissionCard}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className={styles.valuesSection}>
          <h2>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className={styles.achievementsSection}>
          <h2>Our Impact</h2>
          <div className={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <div key={index} className={styles.achievementCard}>
                <h3>
                  <span
                    className={styles.counter}
                    data-count={achievement.metric}
                    ref={(el) => (counterRefs.current[index] = el)}
                  >
                    0{index === 2 ? "%" : "+"}
                  </span>
                </h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <div className={styles.content}>
            <h2>Join HealthBridge Today</h2>
            <p>
              Start your 14-day free trial and experience seamless healthcare
              management.
            </p>
            <button className={styles.ctaButton}>Get Started</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
