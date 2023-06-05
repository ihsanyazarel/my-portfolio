import React, { useContext, useState } from "react";

import "./Hero.css";
import ToggleSwitch from "./Toggle";
import { Contexts } from "../contexts/contexts";
import { Button } from "reactstrap";
import profileImage from "../profileImage.jpg";

function Hero() {
  const { lightMode } = useContext(Contexts);
  return (
    <div
      className={`flex flex-col h-auto min-h-[30vh]  ${
        lightMode ? "light" : "dark"
      }`}
    >
      <div className="flex flex-row text-sm font-bold">
        <p
          className={`w-[70%] text-end pr-5 pt-1.5 ${
            lightMode ? "text-[#D9D9D9]" : "text-[#777777]"
          }`}
        >
          <span
            className={`${lightMode ? "text-[#CAF181]" : "text-[#BAB2E7]"}`}
          >
            TÜRKÇE
          </span>
          ’YE GEÇ
        </p>
        <div className="pt-1 pl-3 flex flex-wrap">
          <ToggleSwitch />
          <p
            className={`pl-3 pt-0.5 ${
              lightMode ? "text-[#4731D3]" : "text-[#D9D9D9]"
            }`}
          >
            {lightMode ? "DARK MODE" : "LIGHT MODE"}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[66%] pb-5">
          <h3 className="text-left text-[#CAF181]">ihsan</h3>
          <div className="flex items-center mb-5">
            <div className="mr-5 w-[64%]">
              <h1 className="text-[#CAF181] text-start">
                I am a Frontend Developer...
              </h1>
              <p className="text-[#FFFFFF] text-start">
                ...who likes to craft solid and scalable frontend products with
                great user experiences.
              </p>
              <div className="flex ">
                <Button className="m-1 ">Github</Button>
                <Button className="m-1">Linkedin</Button>
              </div>
            </div>
            <div className="xl:h-96 lg:h-72 md:h-60 sm:h-44 w-[36%] overflow-hidden m-auto ">
              <img src={profileImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
