import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function ParentRender() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "70px" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default ParentRender;
