import React, { useState } from "react";
import { video1,video2,video3,video4 } from "../assets/Videos";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SequenceAnimation from "../Utils/SequenceAnimation";


const videos = [video1, video2, video3, video4];
const Service1 = () => {

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {

    gsap.to('#container',{
      scrollTrigger : {
        trigger : '#container',
        pin : true,
        scrub : 1,
        start : 'start start',
        end: "bottom top",
      }
    })

  },[])

  const [hoveringVideo,setHoveringVideo] = useState(0);
  
  return (
    <>
      <div
        className="relative h-screen w-screen bg-white flex justify-center select-none"
        id="container"
      >
        <div
          className="flex md:h-screen w-[95vw] gap-10 items-center justify-center "
          id=""
        >
          <div className="h-screen w-full">
            <div
              className={`rounded-lg overflow-hidden flex items-center  justify-center object-contain p-6  hover:scale-110 duration-300 ${
                hoveringVideo === 1 || hoveringVideo === 0 ? "" : "blur-sm"
              }`}
            >
              <video
                onMouseOver={(e) => {
                  e.target.play();
                  setHoveringVideo(1);
                }}
                onMouseLeave={(e) => {
                  e.target.pause();
                  setHoveringVideo(0);
                }}
                muted
                loop
                src={videos[0]}
              ></video>
            </div>
            <div
              className={`rounded-lg overflow-hidden flex items-center  justify-center object-contain p-6 hover:scale-110 duration-300 ${
                hoveringVideo === 2 || hoveringVideo === 0 ? "" : "blur-sm"
              }`}
            >
              <video
                onMouseOver={(e) => {
                  e.target.play();
                  setHoveringVideo(2);
                }}
                onMouseLeave={(e) => {
                  e.target.pause();
                  setHoveringVideo(0);
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
            <SequenceAnimation path={"OurServices-Sequence"} totalFrames={70} totalHeight={691} totalWidth={160}/>
          </div>

          <div className="h-screen w-full">
            <div
              className={`rounded-lg overflow-hidden flex items-center justify-center object-contain p-6 hover:scale-110 duration-300 ${
                hoveringVideo === 3 || hoveringVideo === 0 ? "" : "blur-sm"
              }`}
            >
              <video
                onMouseOver={(e) => {
                  e.target.play();
                  setHoveringVideo(3);
                }}
                onMouseLeave={(e) => {
                  e.target.pause();
                  setHoveringVideo(0);
                }}
                muted
                loop
                src={videos[2]}
              ></video>
            </div>
            <div
              className={`rounded-lg overflow-hidden flex items-center justify-center object-contain p-6 hover:scale-110 duration-300 ${
                hoveringVideo === 4 || hoveringVideo === 0 ? "" : "blur-sm"
              }`}
            >
              <video
                onMouseOver={(e) => {
                  e.target.play();
                  setHoveringVideo(4);
                }}
                onMouseLeave={(e) => {
                  e.target.pause();
                  setHoveringVideo(0);
                }}
                muted
                loop
                src={videos[3]}
              ></video>
            </div>
          </div>
        </div>
        {/* <div className="absolute bottom-12 w-screen flex justify-center">
           <button className="bg-yellow-400 text-xl px-4 py-2 rounded-xl shadow-xl shadow-black/40">
             Learn More
            </button>
        </div> */}
      </div>
    </>
  );
};

export default Service1;
