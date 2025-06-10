import React from "react";
import Awards from "./Award";
import Stats from "./Stats";
import Pricing from "./pricing";
import Education from "./Education";
import Hero from "./Hero";

import OpenAccount from "../OpenAccount";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
