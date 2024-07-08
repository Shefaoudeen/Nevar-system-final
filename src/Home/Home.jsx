import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Clients from "./Clients";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Clients />
    </div>
  );
};

export default Home;
