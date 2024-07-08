import React from "react";

const About = () => {
  return (
    <section className="relative bg-[#F7F7F7] min-h-screen flex w-full justify-center items-center flex-col">
      <div className="text-center text-5xl poppins-regular">
        <h1>
          <span className="text-yellow-400">Nevar Systems</span> develops
          cutting-edge
        </h1>
        <h1>drone solutions for complex environments.</h1>
        <h1>Cost-effective and time-efficient.</h1>
      </div>
      <div className="pt-20 w-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl poppins-medium text-indigo-800">
          Our Speciality
        </h1>
        <div className="flex gap-10 w-screen justify-center pt-5">
          <div className="bg-slate-500 px-5 flex justify-center items-center text-center min-h-[400px] rounded-2xl relative rounded-tr-[100px] rounded-bl-[100px]">
            <div className="text-white poppins-medium text-4xl">
              <h1>Area</h1>
              <h1>Coverage</h1>
              <h1>4 - 5 SQ.KM</h1>
            </div>
          </div>
          <div className="bg-slate-500 px-5 flex justify-center items-center text-center min-h-[400px] rounded-2xl relative rounded-tr-[100px] rounded-bl-[100px]">
            <div className="text-white poppins-medium text-4xl">
              <h1>Tracking</h1>
              <h1>and Follow</h1>
              <h1>Feature</h1>
            </div>
          </div>
          <div className="bg-slate-500 px-5 flex justify-center items-center text-center min-h-[400px] rounded-2xl relative rounded-tr-[100px] rounded-bl-[100px]">
            <div className="text-white poppins-medium text-4xl">
              <h1>In Build</h1>
              <h1>RTK/PPK</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
