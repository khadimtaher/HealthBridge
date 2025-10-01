import React, { useState } from "react";
import styles from "./SubscriptionPopup.module.css";

export default function SubscriptionPopup({ user }) {
  const [popupClosed, setPopupClosed] = useState(false);
  const [trialStarted, setTrialStarted] = useState(false);

  // Dummy startTrial function for frontend testing
  const startTrial = () => {
    // Simulate API call delay
    setTimeout(() => {
      alert("Dummy Trial started! Full access granted for 7 days.");
      setTrialStarted(true);
      setPopupClosed(true);
    }, 500);
  };

  // Dummy subscribe function
  const subscribeNow = () => {
    alert("Redirecting to dummy subscription page...");
    setPopupClosed(true);
  };

  if (popupClosed) return null;

  return (
    <div className={styles.popupBackdrop}>
      <div className={styles.popup}>
        <h2>Get Started</h2>
        <p>Choose one: Free 7-day trial or direct subscription.</p>

        {!user.trialTaken && !trialStarted && (
          <button className={styles.ctaBtn} onClick={startTrial}>
            Start Free Trial
          </button>
        )}

        <button className={styles.ctaBtn} onClick={subscribeNow}>
          Subscribe Now
        </button>
      </div>
    </div>
  );
}
