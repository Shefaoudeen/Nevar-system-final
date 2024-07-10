import React, { useState } from "react";
import { video1, video2, video3, video4 } from "../assets/Videos";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SequenceAnimation from "../Utils/SequenceAnimation";

const videos = [video1, video2, video3, video4];
const Service1 = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to("#container", {
      scrollTrigger: {
        trigger: "#container",
        pin: true,
        scrub: 1,
        start: "start start",
        end: "bottom center",
      },
    });
  }, []);

  return (
    <>
      <div
        className="relative shadow-2xl shadow-gray-500 h-screen w-screen bg-white flex justify-center select-none"
        id="container"
      >
        <div
          className="flex md:h-screen w-[95vw] gap-10 items-center justify-center "
          id=""
        >
          <div className="h-screen w-full">
            <div
              className={`rounded-lg overflow-hidden flex items-center  justify-center object-contain p-6  hover:scale-110 duration-300`}
            >
              <video
                onMouseOver={(e) => {
                  e.target.play();
                }}
                onMouseLeave={(e) => {
                  e.target.pause();
                }}
                muted
                loop
                src={videos[0]}
              ></video>
            </div>
            <div
              className={`rounded-lg overflow-hidden flex items-center  justify-center object-contain p-6 hover:scale-110 duration-300`}
            >
              <video
                onMouseOver={(e) => {
                  e.target.play();
                }}
                onMouseLeave={(e) => {
                  e.target.pause();
                }}
                muted
                loop
                src={videos[1]}
              ></video>
            </div>
          </div>

          <div
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            className="text-4xl h-screen text-center font-extrabold text-slate-500 min-w-2/12 flex justify-center"
          >
            <SequenceAnimation
              path={"OurServices-Sequence"}
              totalFrames={70}
              totalHeight={691}
              totalWidth={160}
            />
          </div>

          <div className="h-screen w-full">
            <div
              className={`rounded-lg overflow-hidden flex items-center justify-center object-contain p-6 hover:scale-110 duration-300`}
            >
              <video
                onMouseOver={(e) => {
                  e.target.play();
                }}
                onMouseLeave={(e) => {
                  e.target.pause();
                }}
                muted
                loop
                src={videos[2]}
              ></video>
            </div>
            <div
              className={`rounded-lg overflow-hidden flex items-center justify-center object-contain p-6 hover:scale-110 duration-300`}
            >
              <video
                onMouseOver={(e) => {
                  e.target.play();
                }}
                onMouseLeave={(e) => {
                  e.target.pause();
                }}
                muted
                loop
                src={videos[3]}
              ></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service1;
