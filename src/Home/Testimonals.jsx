import React from "react";
import Testimonal_info from "../Data/Testimonal";
import { Star } from "../assets/icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Testimonals = () => {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.from('.review-card',{
      x : -1500,
      duration : 0.8,
      stagger : 0.3,
      scrollTrigger : {
        trigger : '.review-card',
        start : "200px bottom"
      }
    })
  },[])

  return (
    <div className="poppins-regular pb-20 flex flex-col w-screen justify-center items-center bg-[#F7F7F7]">
      <div>
        <h1 className="text-3xl">
          What People thinks{" "}
          <span className="text-blue-600 poppins-medium tracking-widest">
            About Us
          </span>
        </h1>
      </div>
      <div className="flex w-screen justify-evenly py-10">
        {Testimonal_info.map((ele) => {
          return (
            <div className="border-4 shadow-2xl  min-w-[400px] rounded-2xl rounded-tr-[100px] rounded-bl-[100px] max-w-[400px] px-10 review-card">
              <div className="flex flex-col gap-5 py-10">
                <div className="">
                  <img
                    src={ele.image}
                    alt=""
                    className="max-w-[75px] min-h-[75px] object-cover rounded-lg scale-75"
                  />
                </div>
                <div className="flex w-full justify-between">
                  <h1 className="poppins-medium text-xl">{ele.name}</h1>
                  <div className="flex items-center">
                    <img
                      src={Star}
                      alt=""
                      className="max-w-[15px] max-h-[15px]"
                    />
                    <h1 className="poppins-medium text-lg">{ele.star}</h1>
                  </div>
                </div>
                <div>
                  <p>{ele.review}</p>
                </div>
                <div className="flex justify-end">
                  <button className="poppins-medium">Explore More</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button className="bg-yellow-300 px-4 py-1 rounded-xl text-xl">
          View More
        </button>
      </div>
    </div>
  );
};

export default Testimonals;
