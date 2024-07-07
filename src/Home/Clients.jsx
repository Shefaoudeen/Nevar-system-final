import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import arrowIcon from '../assets/icons/arrowIcon.svg'
import {
  technical1,
  technical2,
  technical3,
  technical4,
  funded1,
  funded2,
  funded3,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,
  client16,
} from "../assets/Logos";

const ClientLogos = [
    { img: client1, index: 0, width : 180 },
    { img: client2, index: 1, width : 180 },
    { img: client3, index: 2, width : 180 },
    { img: client4, index: 3, width : 180 },
    { img: client5, index: 4, width : 210 },//
    { img: client6, index: 5, width : 180 },
    { img: client7, index: 6, width : 180 },
    { img: client8, index: 7, width : 180 },
    { img: client9, index: 8, width : 180 },
    { img: client10, index: 9, width : 180 },
    { img: client11, index: 10, width : 180 },
    { img: client12, index: 11, width : 210 },//
    { img: client13, index: 12, width : 210 },//
    { img: client14, index: 13, width : 180 },
    { img: client15, index: 14, width : 180 },
    { img: client16, index: 15, width : 180 },
  ];

const Clients = () => {
  const [open, setOpen] = useState(0);

  useGSAP(() => {
    gsap.to("#clientScroll", {
        x:  -4071,
        duration: 50,
        ease: "none",
        repeat: -1,
      });
  },[])


  return (
    <div className="relative h-screen w-screen flex flex-col  justify-evenly logos-center select-none bg-[#25283D]">
      {/* Partners Section */}
      <section className="flex justify-between w-screen logos-center items-center">
        <div className="shadow-xl relative bg-slate-400 text-2xl max-w-fit rounded-r-full h-52 flex logos-center transition-all duration-500 ">
          <div
            className={` h-full transition-all duration-500 ${
              open == 1 ? "flex translate-x-0 pl-10" : "w-0 -translate-x-full"
            }`}
          >
            <img src={technical1} alt="" className="p-3 w-40 object-contain" />
            <img src={technical2} alt="" className="p-3 w-40 object-contain" />
            <img src={technical3} alt="" className="p-3 w-40 object-contain" />
            <img src={technical4} alt="" className="p-3 w-40 object-contain" />
          </div>
          <h1
            className="min-w-72 cursor-pointer text-center my-auto flex justify-center gap-4 py-8"
            onClick={() => (open !== 1 ? setOpen(1) : setOpen(0))}
          >
            <h2>Technical Partners</h2>
            <img src={arrowIcon} alt="" className="w-6 rotate-180" />
          </h1>
        </div>

        <h1 className={`text-5xl font-semibold text-white ${open==0 || "hidden"}`}>OUR PARTNERS</h1>

        <div className="shadow-xl relative bg-slate-400 text-2xl max-w-fit rounded-l-full h-52 flex logos-center transition-all duration-500 ">
          <h1
            className="min-w-72 cursor-pointer text-center my-auto flex justify-center gap-4 py-8"
            onClick={() => (open !== 2 ? setOpen(2) : setOpen(0))}
          >
            <img src={arrowIcon} alt="" className="w-6 " />
            <h2>Funded Partners</h2>
          </h1>
          <div
            className={`h-[90%] my-auto transition-all duration-500 ${
              open == 2 ? "flex translate-x-0 pr-10" : "w-0 translate-x-full"
            }`}
          >
            <img src={funded1} alt="" className="p-3 w-40 object-contain" />
            <img src={funded2} alt="" className="p-3 w-40 object-contain" />
            <img src={funded3} alt="" className="p-3 w-40 object-contain" />
          </div>
        </div>
      </section>

      {/* CLient Section */}

      <section className="flex flex-col mt-10">
        <div className="flex gap-4 justify-center text-center text-5xl font-semibold text-white">
          <h1>Our</h1>
          <h2 className="text-yellow-400">Clients</h2>
        </div>
        <div className="mt-4">
          {/* clients logo horizontal scroll */}
          <div className="flex flex-col gap-6 w-screen my-10 logos-center justify-center bg-white">
            <div className=" py-2 md:py-4 w-screen flex-wrap overflow-hidden">
              <div id="clientScroll" className={`flex`} >
                {ClientLogos.map((logo, index) => {
                  return (
                    <img
                      key={index}
                      src={logo.img}
                      className={`w-[${logo.width}px] px-6 object-contain grayscale hover:grayscale-0 duration-500`}
                      id="clientImage"
                    ></img>
                  );
                })}
                {ClientLogos.map((logo, index) => {
                  return (
                    <img
                      key={index}
                      src={logo.img}
                       className={`w-[${logo.width}px] px-6 object-contain grayscale hover:grayscale-0 duration-500`}
                    ></img>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
