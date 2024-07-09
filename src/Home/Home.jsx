import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Clients from "./Clients";
import Testimonals from "./Testimonals";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Testimonals />
      <Services />
      <Clients />
    </div>
  );
};

export default Home;
