import React, { useEffect, useState } from "react";
import navbar_details from "../Data/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [select, setSelect] = useState(1);
  const handleClick = (index) => {
    setSelect(index);
  };

  useEffect(() => {
    // Create a canvas1:
    const canvas1 = document.getElementById("myCanvas1");
    const ctx1 = canvas1.getContext("2d");
    ctx1.shadowColor = "green";
    ctx1.shadowOffsetX = 10;
    ctx1.shadowOffsetY = 10;

    // Define a new path:
    ctx1.beginPath();

    // Define a start point
    //ctx1.moveTo(100,20);

    // Define points
    //ctx1.lineTo(180,100);
    //ctx1.lineTo(20,100);
    //ctx1.lineTo(100,20);

    ctx1.moveTo(80, 65);
    ctx1.lineTo(80, 0);
    ctx1.lineTo(0, 0);
    ctx1.lineTo(80, 65);

    ctx1.fillStyle = "white";
    // Draw it
    ctx1.fill();

    const canvas2 = document.getElementById("myCanvas2");
    const ctx2 = canvas2.getContext("2d");

    // Define a new path:
    ctx2.beginPath();

    // Define a start point
    //ctx1.moveTo(100,20);

    // Define points
    //ctx1.lineTo(180,100);
    //ctx1.lineTo(20,100);
    //ctx1.lineTo(100,20);

    ctx2.moveTo(0, 0);
    ctx2.lineTo(80, 0);
    ctx2.lineTo(0, 65);
    ctx2.lineTo(0, 0);

    ctx2.fillStyle = "white";
    // Draw it
    ctx2.fill();
  }, []);

  useGSAP(() => {
    gsap.from(".navbar", {
      y: -300,
      delay: 1,
      duration: 1,
    });
  }, []);

  return (
    <nav className="flex w-screen justify-center absolute z-50 navbar">
      <div className="flex">
        <canvas id="myCanvas1" width="80" height="65" className="">
          Sorry, your browser does not support canvas1.
        </canvas>
        <ul className="flex backdrop-blur-xl gap-8 text-xl py-3 px-2 bg-white relative ">
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
        <canvas id="myCanvas2" width="80" height="65" className="">
          Sorry, your browser does not support canvas1.
        </canvas>
      </div>
    </nav>
  );
};

export default Navbar;
