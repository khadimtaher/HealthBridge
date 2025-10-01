import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParentRender from "./Layouts/ParentRender";

// Pages
import Home from "./pages/Home/Home";
import Features from "./pages/Features/Features";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Pricing from "./pages/Pricing/Pricing";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashbaord";

// Components
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Loader from "./components/Loader/Loader";
import BackToTop from "./components/BackToTopButton/BackToTopButton";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <BackToTop />
      <CustomCursor />
      {loading && <Loader onFinish={() => setLoading(false)} />}
      {!loading && (
        <Routes>
          {/* Layout with Navbar + Footer */}
          <Route path="/" element={<ParentRender />}>
            <Route index element={<Home />} />
            <Route path="features" element={<Features />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          {/* Dashboard route */}
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
