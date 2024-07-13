import React, { useEffect, useState } from "react";
import navbar_details from "../Data/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import nav from "../assets/images/nav.svg";
import { Logo } from "../assets/Logos";

const Navbar = () => {
  const [select, setSelect] = useState(1);
  const handleClick = (index) => {
    setSelect(index);
  };

  useGSAP(() => {
    gsap.from(".navbar", {
      y: -300,
      delay: 1,
      duration: 1,
    });
  }, []);

  return (
    <nav className=" flex w-screen justify-center absolute z-50 navbar">
      <button className="absolute left-10 mt-5 py-1 px-5 text-md rounded-full bg-yellow-300">
        <img src={Logo} className="max-w-[150px] max-h-[30px] object-fill" />
      </button>
      <img
        src={nav}
        alt=""
        className="w-[45vw] absolute z-[60] -translate-y-[43%] drop-shadow-lg "
      />
      <ul className="flex backdrop-blur-xl gap-8 text-xl mt-1 py-3 px-2 bg-white absolute z-[70]">
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
      <button className="absolute right-10 min-w-[100px] min-h-[40px] mt-5 px-5 py-2 text-md rounded-full bg-yellow-300">
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;
