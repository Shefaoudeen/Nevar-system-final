import React from "react";
import { Loader } from "../assets/Videos";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loaderpage = () => {
  useGSAP(() => {
    gsap.to("#opening-text", {
      delay: 4.5,
      opacity: "100%",
      ease: "expo.in",
    });
  });

  return (
    <div>
      <div className="bg-gradient-to-tr from-slate-950 via-slate-600 via-slate-400 to-white bg-clip-text absolute w-screen h-screen flex justify-center items-center">
        <h1
          className=" font-extrabold text-[100px] text-transparent opacity-0"
          id="opening-text"
        >
          NEVAR SYSTEM
        </h1>
      </div>
      <video
        src={Loader}
        autoPlay
        muted
        className="object-fill h-screen w-screen duration-500 transition-all ease-linear"
      />
    </div>
  );
};

export default Loaderpage;
