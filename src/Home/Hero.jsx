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
  }, []);

  const handleOnClick = ({ target }) => {
    clearInterval(videoInterval); //clearing interval so that switching to other videos will restart the timer
    setCurrVideo(target.id);
  };

  return (
    <section
      id="landing"
      className={`w-screen relative duration-1000 bg-[#F7F7F7] overflow-hidden`}
    >
      <div className="absolute z-[1000] top-[45%] right-6">
        <div
          id="0"
          className={`rounded-full border-2 w-4 h-4 border-white cursor-pointer ${
            currVideo == 0 && "bg-white"
          }`}
          onClick={handleOnClick}
        />
        <div
          id="1"
          className={`rounded-full border-2 w-4 h-4 border-white mt-6 cursor-pointer ${
            currVideo == 1 && "bg-white"
          }`}
          onClick={handleOnClick}
        />
        <div
          id="2"
          className={`rounded-full border-2 w-4 h-4 border-white mt-6 cursor-pointer ${
            currVideo == 2 && "bg-white"
          }`}
          onClick={handleOnClick}
        />
      </div>
      <div
        className={`flex w-[300vw] duration-1000` }
        style={{transform: `translateX(${-currVideo*100}vw)`}}

      >
        <div className="pt-2 rounded-3xl relative w-screen h-screen">
          <div
            id="info"
            className="absolute hidden translate-y-[200px] opacity-0 bg-black/75 px-5 py-5 min-h-[200px] flex flex-col gap-5 justify-center items-center min-w-[400px] max-w-[400px] bottom-0 rounded-bl-3xl"
          >
            <h1 className="text-white poppins-bold">Photon</h1>
            <h1 className="text-white poppins-regular text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              voluptatum illo veniam ut optio blanditiis quidem esse impedit
              reprehenderit at omnis aliquam possimus asperiores incidunt,
              aspernatur minima officiis temporibus odio?
            </h1>
            <div className="flex">
              <button className="bg-yellow-300 px-3 py-1 rounded-lg cursor-pointer poppins-regular">
                Learn More
              </button>
            </div>
          </div>
          <video
            src={Photon}
            autoPlay
            muted
            loop
            className="object-fill -mt-2 h-[100vh] w-[100vw]"
          />
        </div>
        <div className="pt-2 rounded-3xl relative w-screen h-screen">
          <div
            id="info"
            className="absolute hidden translate-y-[200px] opacity-0 bg-black/75 px-5 py-5 min-h-[200px] flex flex-col gap-5 justify-center items-center min-w-[400px] max-w-[400px] bottom-0 rounded-bl-3xl"
          >
            <h1 className="text-white poppins-bold">Photon</h1>
            <h1 className="text-white poppins-regular text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              voluptatum illo veniam ut optio blanditiis quidem esse impedit
              reprehenderit at omnis aliquam possimus asperiores incidunt,
              aspernatur minima officiis temporibus odio?
            </h1>
            <div className="flex">
              <button className="bg-yellow-300 px-3 py-1 rounded-lg cursor-pointer poppins-regular">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center object-fill -mt-2 h-[100vh] w-[100vw] bg-gradient-to-b from-gray-900 to-blue-950">
            {" "}
            <h2 className="text-4xl text-white">Video 2</h2>{" "}
          </div>
        </div>
        <div className="pt-2 rounded-3xl relative w-screen h-screen">
          <div
            id="info"
            className="absolute hidden translate-y-[200px] opacity-0 bg-black/75 px-5 py-5 min-h-[200px] flex flex-col gap-5 justify-center items-center min-w-[400px] max-w-[400px] bottom-0 rounded-bl-3xl"
          >
            <h1 className="text-white poppins-bold">Photon</h1>
            <h1 className="text-white poppins-regular text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              voluptatum illo veniam ut optio blanditiis quidem esse impedit
              reprehenderit at omnis aliquam possimus asperiores incidunt,
              aspernatur minima officiis temporibus odio?
            </h1>
            <div className="flex">
              <button className="bg-yellow-300 px-3 py-1 rounded-lg cursor-pointer poppins-regular">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center object-fill -mt-2 h-[100vh] w-[100vw] bg-gradient-to-b from-gray-900 to-blue-950">
            {" "}
            <h2 className="text-4xl text-white">Video 3</h2>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
