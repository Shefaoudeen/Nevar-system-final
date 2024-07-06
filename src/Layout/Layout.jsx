import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <div>Footer</div>
    </div>
  );
};

export default Layout;
