import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Footer1 from "./Footer1";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer1 />
    </div>
  );
};

export default Layout;
