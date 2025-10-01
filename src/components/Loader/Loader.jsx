import React, { useEffect, useState } from "react";
import styles from "./Loader.module.css";

export default function Loader({ onFinish }) {
  const [text, setText] = useState("");
  const [isFading, setIsFading] = useState(false);
  const fullText = "HealthBridge"; // Ensured correct text

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1)); // Set text up to current index
        i++;
      } else {
        clearInterval(interval); // Clear interval when done
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => onFinish && onFinish(), 500); // Match fade-out duration
        }, 2000);
      }
    }, 100); // Typing speed in ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, [onFinish]);

  return (
    <div
      className={`${styles.loaderBackdrop} ${isFading ? styles.fadeOut : ""}`}
      aria-label="Loading HealthBridge application"
    >
      <div className={styles.loaderContent}>
        <h1 className={styles.typing}>
          {text.split("").map((char, idx) => (
            <span key={idx} className={styles.char}>
              {char}
            </span>
          ))}
          <span className={styles.cursor}>|</span>
        </h1>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
}