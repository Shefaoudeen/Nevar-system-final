import React, { useEffect, useRef, useState } from "react";
import { Img1, Img2, Img3 } from "../assets/images";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/all";
import CountUp from "react-countup";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);

  useGSAP(() => {
    // const content = gsap.utils.toArray(aboutRef.current);

    // content.forEach((cont) => {
    //   gsap.to(cont, {
    //     translateY: 0,
    //     opacity: "100%",
    //     scrollTrigger: {
    //       trigger: content,
    //       start: "top, center",
    //     },
    //   });
    // });

    gsap.from(".about-text", {
      y: 200,
      opacity: 0,
      duration: 1,
      // stagger : 0.3,
      scrollTrigger: {
        trigger: ".about-text",
        start: "start bottom",
      },
    });

    gsap.to(".stats", {
      scrollTrigger: {
        trigger: ".stats",
        start: "100px bottom",
        end: "bottom top",
        onToggle: () => setStatsInView(true),
      },
    });
  }, []);

  const stats = [
    {
      id: 0,
      num: 55,
      text: "Clients",
    },
    {
      id: 1,
      num: 700,
      text: "Area Covered (in SQ.KM)",
    },
    {
      id: 2,
      num: 70,
      text: "Projects",
    },
  ];

  return (
    <section className="relative bg-[#F7F7F7] min-h-screen flex w-full justify-center items-center flex-col">
      <div
        className="text-center text-5xl poppins-regular my-[100px] "
        id="title"
        ref={aboutRef}
      >
        <h1 className="about-text">
          <span className="text-yellow-400 poppins-medium">Nevar Systems</span>{" "}
          develops cutting-edge
        </h1>
        <h1 className="about-text">
          drone solutions for complex environments.
        </h1>
        <h1 className="about-text">Cost-effective and time-efficient.</h1>
      </div>

      <div className="flex poppins-regular w-screen justify-around px-10 py-10 mb-[100px] stats">
        {stats.map((ele, index) => {
          return (
            <div className="text-center" key={index}>
              <h1 className="text-8xl bruno-ace-sc-regular">
                {statsInView && (
                  <CountUp start={0} end={ele.num} duration={2}></CountUp>
                )}
                +
              </h1>
              <h1 className="text-indigo-500 poppins-medium text-xl">
                {ele.text}
              </h1>
            </div>
          );
        })}
      </div>
      {/* <div className="flex poppins-regular w-screen justify-around px-10 mb-[100px]">
        {stats.map((ele) => {
          return (
            <div className="text-center">
              <h1 className="text-8xl bruno-ace-sc-regular">{ele.num}</h1>
              <h1 className="text-indigo-500 poppins-medium text-xl">
                {ele.text}
              </h1>
            </div>
          );
        })}
      </div> */}
    </section>
  );
};

export default About;
