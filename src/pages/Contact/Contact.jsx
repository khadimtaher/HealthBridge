import React, { useState } from "react";
import styles from "./Contact.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";



function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.city.trim()) tempErrors.city = "City is required";
    if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        city: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div className={styles.contact}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>Contact Us</h1>
          <p>
            Have questions? We’re here to help you with all your healthcare
            needs.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.formSection}>
        <div className={styles.left}>
          <h2>Get in Touch</h2>
          <p>
            Fill out the form and our team will get back to you within 24 hours.
          </p>
          <div className={styles.infoBox}>
            <p> Address: 123 Healthcare Street, Hyderabad, India</p>
            <p> Phone: +91 98765 43210</p>
            <p> Email: support@healthcare.com</p>
          </div>
        </div>

        <div className={styles.right}>
          {submitted ? (
            <div className={styles.success}>
              ✅ Thank you! We’ll get in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                {errors.name && (
                  <span className={styles.error}>{errors.name}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Your City"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
                {errors.city && (
                  <span className={styles.error}>{errors.city}</span>
                )}
              </div>

              {/* ✅ Country Code + Flag Phone Input */}
              <div className={styles.formGroup}>
                <PhoneInput
                  country={"in"}
                  value={formData.phone}
                  onChange={(phone) => setFormData({ ...formData, phone })}
                  enableSearch={true}
                  inputStyle={{
                    width: "100%",
                    height: "50px",
                    fontSize: "16px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                  buttonStyle={{
                    borderRadius: "8px 0 0 8px",
                    border: "1px solid #ccc",
                  }}
                  dropdownStyle={{
                    borderRadius: "8px",
                    fontSize: "14px",
                  }}
                />

                {errors.phone && (
                  <span className={styles.error}>{errors.phone}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
                {errors.message && (
                  <span className={styles.error}>{errors.message}</span>
                )}
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Social Media Section */}

    </div>
  );
}

export default Contact;
