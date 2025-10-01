import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // for redirect
import style from "./Signup.module.css";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    gender: "",
    address: "",
    contactNumber: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form fields
  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";

    // Contact number validation
    if (!formData.contactNumber) {
      newErrors.contactNumber = "Contact number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Enter a valid 10-digit number.";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const payload = {
      FirstName: formData.firstName,
      LastName: formData.lastName,
      City: formData.city,
      Gender: formData.gender,
      Address: formData.address,
      ContactNumber: formData.contactNumber,
      Email: formData.email,
    };

    try {
      const response = await fetch(
        "https://shifakhana.runasp.net/api/patient/AddPatient",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      if (response.ok) {
        setMessage("Signup successful! Redirecting to login...");
        setErrors({});
        setFormData({
          firstName: "",
          lastName: "",
          city: "",
          gender: "",
          address: "",
          contactNumber: "",
          email: "",
        });

        // 2 second delay → redirect to login page
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        // Backend duplicate check (assuming API sends message)
        if (
          data.message &&
          (data.message.includes("already") ||
            data.message.includes("exists"))
        ) {
          setMessage(
            "This email or phone is already registered, please login."
          );
        } else {
          setMessage(
            data.title || data.message || "Signup failed. Please try again."
          );
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h2>Signup</h2>

        {message && (
          <p
            className={`${style.message} ${
              message.includes("successful") ? style.success : style.error
            }`}
          >
            {message}
          </p>
        )}

        {/* First Name */}
        <div className={style.formGroup}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <span className={style.error}>{errors.firstName}</span>
          )}
        </div>

        {/* Last Name */}
        <div className={style.formGroup}>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <span className={style.error}>{errors.lastName}</span>
          )}
        </div>

        {/* City */}
        <div className={style.formGroup}>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <span className={style.error}>{errors.city}</span>}
        </div>

        {/* Gender */}
        <div className={style.formGroup}>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && (
            <span className={style.error}>{errors.gender}</span>
          )}
        </div>

        {/* Address */}
        <div className={style.formGroup}>
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && (
            <span className={style.error}>{errors.address}</span>
          )}
        </div>

        {/* Contact Number */}
        <div className={style.formGroup}>
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
          />
          {errors.contactNumber && (
            <span className={style.error}>{errors.contactNumber}</span>
          )}
        </div>

        {/* Email */}
        <div className={style.formGroup}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className={style.error}>{errors.email}</span>}
        </div>

        {/* Submit Button */}
        <button type="submit">Signup</button>

        {/* Links */}
        <div className={style.links}>
          <p>
            Already have an account?{" "}
            <a href="/login" className={style.link}>
              Log In
            </a>
          </p>
        </div>
        <div className={style.footerLinks}>
          <p>
            By signing up, you agree to our{" "}
            <a href="/terms" className={style.link}>
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="/privacy" className={style.link}>
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
