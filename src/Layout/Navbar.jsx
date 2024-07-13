import React, { useState } from "react";
import navbar_details from "../Data/Navbar";

const Navbar = () => {
  const [select, setSelect] = useState(1);
  const handleClick = (index) => {
    setSelect(index);
  };

  return (
    <nav className="flex w-screen justify-between px-10 absolute z-50">
      <button>chumma</button>
      <ul className="flex backdrop-blur-xl gap-8 text-xl py-3 px-[100px] bg-white rounded-b-[200px] relative shadow-xl shadow-black/50">
        {navbar_details.map((ele) => {
          return (
            <button
              className={`${
                select == ele.id ? "bg-yellow-300" : null
              } px-4 py-1 rounded-lg duration-200 ease-linear transition-all min-w-[100px]`}
              onClick={() => handleClick(ele.id)}
            >
              {ele.title}
            </button>
          );
        })}
      </ul>
      <button className="bg-yellow-300 px-4 rounded-xl mt-3 font-bold">
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;
