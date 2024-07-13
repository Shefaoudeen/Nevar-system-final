import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import Footer1 from "./Footer1";

const Layout = () => {
  return (
    <div>
      <Navbar2 />
      <Outlet />
      <Footer1 />
    </div>
  );
};

export default Layout;
