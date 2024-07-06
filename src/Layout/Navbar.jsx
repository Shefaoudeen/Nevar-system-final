import React from "react";

const Navbar = () => {
  return (
    <nav className="flex w-screen justify-center fixed z-50">
      <ul className="flex gap-8 text-xl py-5 px-[100px] bg-white rounded-b-full shadow-xl shadow-black/50">
        <button className="bg-yellow-300 px-4 py-1 rounded-lg">Home</button>
        <button className="px-4 py-1">Product</button>
        <button className="px-4 py-1">Blog</button>
        <button className="px-4 py-1">Services</button>
      </ul>
    </nav>
  );
};

export default Navbar;
