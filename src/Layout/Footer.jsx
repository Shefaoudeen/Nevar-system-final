import React from "react";
import email from "../assets/icons/email.svg";
import linkedIn from "../assets/icons/linkedIn.svg";
import instagram from "../assets/icons/instagram.svg";
import nevarSystems from "../assets/Logos/nevarSystems.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="h-screen select-none">
      <section className="h-[40vh] w-screen flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl  ">Subscribe to our Newsletters</h1>
        <div className="shadow-xl shadow-black/40 h-16 rounded-xl flex items-center">
          <input
            type="text"
            className="w-96 min-h-full rounded-full pl-4 focus:ring-0 focus:outline-none text-lg"
            placeholder="Enter your email"
          />
          <button className="ml-8 px-5 min-h-full bg-yellow-400 rounded-xl text-xl">
            Subscribe
          </button>
        </div>
      </section>
      <div className="flex justify-around items-start h-[80vh] bg-black relative">
        <div class="footer-wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <section className="flex gap-28 items-end mt-48">
          <div className="text-white flex gap-5 items-center">
            <img src={nevarSystems} className="w-52" />
            <div>
              <h2 className="font-bold text-4xl p-1">NEVAR</h2>
              <h2 className="text-4xl p-1">SYSTEMS</h2>
            </div>
          </div>
          <div className="text-lg text-white flex flex-col">
            <a className="p-3 hover:opacity-80 duration-300" href="">
              Home
            </a>
            <a className="p-3 hover:opacity-80 duration-300" href="">
              Products
            </a>
            <a className="p-3 hover:opacity-80 duration-300" href="">
              Blog
            </a>
            <a className="p-3 hover:opacity-80 duration-300" href="">
              Services
            </a>
          </div>
        </section>

        <section className="text-white mt-32">
          {/* google map  */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.412079634939!2d79.84733470659349!3d12.015126492086406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53659990ca3d51%3A0xec88dc0c7e9d240d!2sNEVAR%20Systems!5e0!3m2!1sen!2sin!4v1720356299611!5m2!1sen!2sin"
            width="450"
            height="350"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="rounded-xl"
          ></iframe>
          <div className="mt-5 flex justify-center items-center gap-5">
            <h2 className="text-2xl">Contact Us in</h2>
            <div className="flex gap-2 items-center">
              <a href="">
                <img
                  src={email}
                  alt=""
                  className="w-16  p-2 hover:opacity-80 duration-300"
                />
              </a>
              <a href="">
                <img
                  src={linkedIn}
                  alt=""
                  className="w-16  p-2 hover:opacity-80 duration-300"
                />
              </a>
              <a href="">
                <img
                  src={instagram}
                  alt=""
                  className="w-[60px]  p-2 hover:opacity-80 duration-300"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
