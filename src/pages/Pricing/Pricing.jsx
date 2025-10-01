import React, { useState } from "react";
import styles from "./Pricing.module.css";

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Essentials",
      monthlyPrice: 4067,
      yearlyPrice: 39043,
      description:
        "Perfect for solo practitioners or small clinics starting out.",
      features: [
        "Basic patient & doctor profiles",
        "Appointment scheduling & reminders",
        "Simple record management (EHR basics)",
        "Email support",
        "Up to 5 users",
      ],
      isPopular: false,
    },
    {
      name: "Professional",
      monthlyPrice: 12367,
      yearlyPrice: 118723,
      description:
        "Ideal for mid-sized practices needing efficiency and insights.",
      features: [
        "Everything in Essentials",
        "Advanced search & booking tools",
        "Analytics dashboard & reports",
        "Calendar integrations (Google/Outlook)",
        "Priority chat support",
        "Up to 20 users",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 24817,
      yearlyPrice: 238243,
      description:
        "Tailored for large hospitals or networks with complex workflows.",
      features: [
        "Everything in Professional",
        "Custom integrations (billing APIs, telehealth)",
        "Advanced security audits & compliance tools",
        "Dedicated account manager",
        "Unlimited users & custom training",
      ],
      isPopular: false,
    },
  ];

  const faqs = [
    {
      question: "What is included in the 14-day free trial?",
      answer:
        "The free trial includes full access to the Professional plan features, with no credit card required. You can test patient management, scheduling, and analytics tools.",
    },
    {
      question: "Is the platform HIPAA-compliant?",
      answer:
        "Yes, our platform is fully HIPAA-compliant, ensuring secure handling of patient data with encryption and regular security audits.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Absolutely! You can upgrade or downgrade your plan at any time, and changes will reflect in the next billing cycle.",
    },
    {
      question: "What happens if I exceed the user limit?",
      answer:
        "You can add additional users for ₹2,407/month each beyond your plan's limit, ensuring scalability for growing practices.",
    },
    {
      question: "Do you offer support for custom integrations?",
      answer:
        "Custom integrations are available with the Enterprise plan. Contact our team to discuss your specific needs.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>Our Plans</h1>
        </div>
      </section>

      <section className={styles.pricingSection}>
        <div className={styles.header}>
          <h1>Pricing Plans for Your Healthcare Practice</h1>
          <p>
            Choose the plan that fits your needs. All plans include
            HIPAA-compliant features and 24/7 support.
          </p>
        </div>
        <div className={styles.toggleContainer}>
          <button
            className={`${styles.toggleButton} ${
              !isYearly ? styles.active : ""
            }`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button
            className={`${styles.toggleButton} ${
              isYearly ? styles.active : ""
            }`}
            onClick={() => setIsYearly(true)}
          >
            Yearly <span className={styles.discount}>(Save 20%)</span>
          </button>
        </div>
        <div className={styles.pricingContainer}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.pricingCard} ${
                plan.isPopular ? styles.popular : ""
              }`}
            >
              {plan.isPopular && (
                <span className={styles.popularBadge}>Most Popular</span>
              )}
              <h2 className={styles.planTitle}>{plan.name}</h2>
              <p className={styles.planPrice}>
                ₹
                {isYearly
                  ? plan.yearlyPrice.toLocaleString("en-IN")
                  : plan.monthlyPrice.toLocaleString("en-IN")}
                <span>{isYearly ? "/year/provider" : "/month/provider"}</span>
              </p>
              <p className={styles.planDescription}>{plan.description}</p>
              <ul className={styles.featureList}>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className={styles.ctaButton}>
                {plan.name === "Enterprise" ? "Contact Us" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
        <div className={styles.trialNote}>
          <p>
            Start with a <strong>14-day free trial</strong> of the Professional
            plan – no credit card required!
          </p>
        </div>
        <div className={styles.faqSection}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <input
                  type="checkbox"
                  id={`faq-${index}`}
                  className={styles.faqToggle}
                />
                <label htmlFor={`faq-${index}`} className={styles.faqQuestion}>
                  {faq.question}
                </label>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
