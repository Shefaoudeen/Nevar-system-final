import React, { useEffect, useRef } from "react";
import { Img1, Img2, Img3 } from "../assets/images";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    const content = gsap.utils.toArray(aboutRef.current);

    content.forEach((cont) => {
      gsap.to(cont, {
        translateY: 0,
        opacity: "100%",
        scrollTrigger: {
          trigger: content,
          start: "top, center",
        },
      });
    });
  }, []);

  const stats = [
    {
      id: 0,
      num: "55+",
      text: "Clients",
    },
    {
      id: 1,
      num: "7000+",
      text: "Area Covered (in SQ.KM)",
    },
    {
      id: 2,
      num: "70+",
      text: "Projects",
    },
  ];

  return (
    <section className="relative bg-[#F7F7F7] min-h-screen flex w-full justify-center items-center flex-col">
      <div
        className="text-center text-5xl poppins-regular mt-[300px] translate-y-[100px] opacity-0"
        id="title"
        ref={aboutRef}
      >
        <h1>
          <span className="text-yellow-400 poppins-medium">Nevar Systems</span>{" "}
          develops cutting-edge
        </h1>
        <h1>drone solutions for complex environments.</h1>
        <h1>Cost-effective and time-efficient.</h1>
      </div>
      <div className="pt-20 w-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl poppins-semibold text-indigo-800 ">
          Our Speciality
        </h1>
        <div className="flex gap-[100px] w-screen justify-center py-20">
          <div className="bg-slate-500 relative min-w-[300px] overflow-hidden flex justify-center items-center text-center min-h-[400px] rounded-2xl rounded-tr-[100px] rounded-bl-[100px]">
            <img
              src={Img1}
              alt=""
              className="h-full w-[300px] object-fill rounded-2xl rounded-tr-[100px] rounded-bl-[100px] hover:scale-125 duration-200 ease-linear"
            />
            <div className="text-white poppins-medium text-4xl z-50 absolute">
              <h1>Area</h1>
              <h1>Coverage</h1>
              <h1>4 - 5 SQ.KM</h1>
            </div>
          </div>
          <div className="bg-slate-500 relative min-w-[300px] overflow-hidden flex justify-center items-center text-center min-h-[400px] rounded-2xl rounded-tr-[100px] rounded-bl-[100px]">
            <img
              src={Img2}
              alt=""
              className="h-full w-[300px] object-cover rounded-2xl rounded-tr-[100px] rounded-bl-[100px] hover:scale-125 duration-200 ease-linear"
            />
            <div className="text-white poppins-medium text-4xl z-50 absolute">
              <h1>Tracking</h1>
              <h1>and Follow</h1>
              <h1>Feature</h1>
            </div>
          </div>
          <div className="bg-slate-500 relative min-w-[300px] overflow-hidden flex justify-center items-center text-center min-h-[400px] rounded-2xl rounded-tr-[100px] rounded-bl-[100px]">
            <img
              src={Img3}
              alt=""
              className="h-full w-[300px] object-fill rounded-2xl rounded-tr-[100px] rounded-bl-[100px] hover:scale-125 duration-200 ease-linear"
            />
            <div className="text-white poppins-medium text-4xl z-50 absolute">
              <h1>In Build</h1>
              <h1>RTK/PPK</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="poppins-regular flex gap-20 pb-[100px]">
        <button className="bg-yellow-300 px-6 py-4 rounded-xl text-xl">
          Explore Services
        </button>
        <button className="bg-white border-2 border-yellow-300 px-6 py-4 rounded-xl text-xl">
          Visit Our blogs
        </button>
      </div>
      <div className="flex poppins-regular w-screen justify-around px-10 mb-[100px]">
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
      </div>
    </section>
  );
};

export default About;
