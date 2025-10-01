import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Login.module.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.email.includes("@")) newErrors.email = "Valid Email is required";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccessMsg("");
    } else {
      setErrors({});
      setSuccessMsg("Login successful 🎉");
      // API call for login
    }
  };

  return (
    <div className={style.loginContainer}>
      <div className={style.loginBox}>
        <h2 className={style.title}>Login</h2>

        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className={style.error}>{errors.email}</p>}
          </div>

          <div className={style.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className={style.error}>{errors.password}</p>}
          </div>

          <button type="submit" className={style.loginBtn}>
            Login
          </button>
        </form>

        {successMsg && <p className={style.success}>{successMsg}</p>}

        <p className={style.signupText}>
          Don’t have an account?{" "}
          <Link to="/signup" className={style.signupLink}>
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
