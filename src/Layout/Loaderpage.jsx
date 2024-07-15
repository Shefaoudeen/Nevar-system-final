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
