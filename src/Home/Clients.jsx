import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import arrowIcon from "../assets/icons/arrowIcon.svg";
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

const TechnicalLogo = [
  { img: technical1, index: 0, width: 180 },
  { img: technical2, index: 1, width: 180 },
  { img: technical3, index: 2, width: 180 },
  { img: technical4, index: 3, width: 180 },
];

const FundedLogo = [
  { img: funded1, index: 0, width: 180 },
  { img: funded2, index: 1, width: 180 },
  { img: funded3, index: 2, width: 180 },
];

const ClientLogos = [
  { img: client1, index: 0, width: 180 },
  { img: client2, index: 1, width: 180 },
  { img: client3, index: 2, width: 180 },
  { img: client4, index: 3, width: 180 },
  { img: client5, index: 4, width: 600 }, //
  { img: client6, index: 5, width: 180 },
  { img: client7, index: 6, width: 180 },
  { img: client8, index: 7, width: 180 },
  { img: client9, index: 8, width: 180 },
  { img: client10, index: 9, width: 180 },
  { img: client11, index: 10, width: 180 },
  { img: client12, index: 11, width: 600 }, //
  { img: client13, index: 12, width: 600 }, //
  { img: client14, index: 13, width: 180 },
  { img: client15, index: 14, width: 180 },
  { img: client16, index: 15, width: 180 },
];

const Clients = () => {
  const [open, setOpen] = useState(0);

  useGSAP(() => {
    gsap.to("#clientScroll", {
      x: -4071,
      duration: 50,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="relative min-h-screen py-[100px] w-screen flex flex-col  justify-evenly logos-center select-none bg-[#F7F7F7] poppins-regular">
      {/* Partners Section */}

      {/* CLient Section */}

      <section className="flex flex-col mt-10">
        <div className="flex gap-4 justify-center text-center text-5xl font-semibold">
          <h1>Our</h1>
          <h2 className="text-yellow-400">Clients</h2>
        </div>
        <div className="mt-4 px-10">
          {/* clients logo horizontal scroll */}
          <div className="flex flex-col gap-6 my-10 logos-center justify-center bg-white rounded-xl shadow-2xl">
            <div className=" py-2 md:py-4 w-full flex-wrap overflow-hidden">
              <div id="clientScroll" className={`flex`}>
                {ClientLogos.map((logo, index) => {
                  return (
                    <img
                      key={index}
                      src={logo.img}
                      style={{ width: `${logo.width}px` }}
                      className={`px-6 object-contain grayscale hover:grayscale-0 duration-500`}
                      id="clientImage"
                    ></img>
                  );
                })}
                {ClientLogos.map((logo, index) => {
                  return (
                    <img
                      key={index}
                      src={logo.img}
                      style={{ width: `${logo.width}px` }}
                      className={`px-6 object-contain grayscale hover:grayscale-0 duration-500`}
                    ></img>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col mt-10">
        <div className="flex gap-4 justify-center text-center text-5xl font-semibold">
          <h1>Our</h1>
          <h2 className="text-yellow-400">Partners</h2>
        </div>
        <div className="mt-4 px-10">
          {/* clients logo horizontal scroll */}
          <div className="flex flex-col gap-6 my-10 logos-center justify-center bg-white rounded-xl shadow-2xl">
            <div className=" py-2 md:py-4 w-full flex-wrap overflow-hidden">
              <div id="TechnicalScroll" className={`flex justify-evenly`}>
                {TechnicalLogo.map((logo, index) => {
                  return (
                    <img
                      key={index}
                      src={logo.img}
                      style={{ width: `${logo.width}px` }}
                      className={`px-6 object-contain grayscale hover:grayscale-0 duration-500`}
                      id="clientImage"
                    ></img>
                  );
                })}
                {FundedLogo.map((logo, index) => {
                  return (
                    <img
                      key={index}
                      src={logo.img}
                      style={{ width: `${logo.width}px` }}
                      className={`px-6 object-contain grayscale hover:grayscale-0 duration-500`}
                      id="clientImage"
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
