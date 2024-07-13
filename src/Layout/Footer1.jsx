import React from "react";

const Footer1 = () => {
  return (
    <footer className="flex justify-around bg-[#303030] text-[#6a6a6a] w-screen py-20 min-h-[50vh] ">
      <div className="flex flex-col justify-between text-sm w-[35%] min-h-[80%]">
        <div className="flex justify-between gap-5">
          <div>
            <h1 className="text-white poppins-semibold mb-1">About</h1>
            <p>About Nevar-system</p>
            <p>Service</p>
            <p>Contact Us</p>
          </div>
          <div>
            <h1 className="text-white poppins-semibold mb-1">Products</h1>
            <p>Photon</p>
            <p>Coming Soon</p>
            <p>Coming Soon</p>
          </div>
          <div>
            <h1 className="text-white poppins-semibold mb-1">Services</h1>
            <p>Aerial Archaeological Survey</p>
            <p>Aerial Mapping</p>
            <p>Aerial Inspection</p>
            <p>Virtual Reality</p>
          </div>
          <div>
            <h1 className="text-white poppins-semibold mb-1">Socials</h1>
            <p>LinkedIn</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>youtube</p>
          </div>
        </div>
        <div className="poppins-regular">
          <h1>Privacy Policy | Terms of Use</h1>
          <h1> &#169; 2020-2024 Nevar System. All Rights Reserved.</h1>
          <h1>
            Developed By <span className="text-white">PTU Design Club</span>
          </h1>
        </div>
      </div>
      <div>
        <iframe
          height={200}
          width={400}
          className="shadow-xl  max-sm:w-[90%] max-sm:hidden"
          src="https://maps.google.com/maps?q=pondicherry%20engineering%20college&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
      <div className="flex flex-col gap-3 poppins-regular">
        <div></div>
        <h1 className="font-bold text-white">Contact Us</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="rounded-sm px-2 py-1"
        />
        <input
          type="text"
          placeholder="Your Message"
          className="rounded-sm px-2 py-1"
        />
        <button className="text-white bg-gray-500 font-medium w-fit px-2 py-1 rounded-md">
          Send
        </button>
      </div>
    </footer>
  );
};

export default Footer1;
