import React, { useEffect, useState } from "react";
import { Photon } from "../assets/Videos";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";

let videoInterval;

const Hero = () => {
  const [blur, setBlur] = useState(true);
  const [currVideo, setCurrVideo] = useState(0);

  setTimeout(() => {
    setBlur(false);
  }, 1000);

  useEffect(() => {
    videoInterval = setInterval(() => {
      setCurrVideo((prevState) => ++prevState % 3);
    }, 5000);

    //cleanup function
    return () => clearInterval(videoInterval);
  }, [currVideo]);

  useGSAP(() => {
    gsap.to("#info", {
      opacity: "100%",
      duration: 3,
      translateY: 0,
    });

    gsap.to('#landing',{
      y: 0,
      duration : 0.3
    })
  }, []);

  const handleOnClick = ({ target }) => {
    clearInterval(videoInterval); //clearing interval so that switching to other videos will restart the timer
    setCurrVideo(target.id);
  };

  return (
    <section
      id="landing"
      className={`w-screen relative duration-1000 translate-y-[1000px] bg-[#F7F7F7] overflow-hidden`}
    >
      <div className="absolute z-[1000] top-[45%] right-6">
        <div className={`flex items-center gap-4`}>
          <h1
            className={`text-md ${
              currVideo == 0
                ? "font-normal text-white -ml-1"
                : "font-light text-slate-400"
            }`}
          >
            Photon
          </h1>
          <div
            id="0"
            className={`rounded-full border-2 w-4 h-4 border-white cursor-pointer ${
              currVideo == 0 && "bg-white"
            }`}
            onClick={handleOnClick}
          />
        </div>
        <div className={`flex items-center gap-4`}>
          <h1
            className={`text-md ${
              currVideo == 1
                ? "font-normal text-white -ml-1"
                : "font-light text-slate-400"
            }`}
          >
            Photon
          </h1>
          <div
            className={`rounded-full border-2 w-4 h-4 border-white cursor-pointer ${
              currVideo == 1 && "bg-white"
            }`}
            onClick={handleOnClick}
            id="1"
          />
        </div>
        <div className={`flex items-center gap-4`}>
          <h1
            className={`text-md ${
              currVideo == 2
                ? "font-normal text-white -ml-1"
                : "font-light text-slate-400"
            }`}
          >
            Photon
          </h1>
          <div
            id="2"
            className={`rounded-full border-2 w-4 h-4 border-white cursor-pointer ${
              currVideo == 2 && "bg-white"
            }`}
            onClick={handleOnClick}
          />
        </div>
      </div>
      <div
        className={`flex w-[300vw] duration-1000`}
        style={{ transform: `translateX(${-currVideo * 100}vw)` }}
      >
        <div className="pt-2 rounded-3xl relative w-screen h-screen">
          <video
            src={Photon}
            autoPlay
            muted
            loop
            className="object-fill -mt-2 h-[100vh] w-[100vw]"
          />
        </div>
        <div className="pt-2 rounded-3xl relative w-screen h-screen">
          <div className="flex items-center justify-center object-fill -mt-2 h-[100vh] w-[100vw] bg-gradient-to-b from-gray-900 to-blue-950">
            {" "}
            <h2 className="text-6xl bg-gradient-to-b from-slate-300 to-slate-600 bg-clip-text text-transparent font-extrabold scale-[300%]">Video 2</h2>{" "}
          </div>
        </div>
        <div className="pt-2 rounded-3xl relative w-screen h-screen">
          <div className="flex items-center justify-center object-fill -mt-2 h-[100vh] w-[100vw] bg-gradient-to-b from-gray-900 to-blue-950">
            {" "}
            <h2 className="text-6xl bg-gradient-to-b from-slate-300 to-slate-600 bg-clip-text text-transparent font-extrabold scale-[300%]">Video 3</h2>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
