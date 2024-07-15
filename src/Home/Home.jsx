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
      <Services />
      <About />
      <Clients />
      <Testimonals />
    </div>
  );
};

export default Home;
