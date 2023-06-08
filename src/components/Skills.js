import js from "../svgFiles/js.svg";
import react from "../svgFiles/react.svg";
import redux from "../svgFiles/redux.svg";
import nodeJs from "../svgFiles/nodeJs.svg";
import vsCode from "../svgFiles/vsCode.svg";
import figma from "../svgFiles/figma.svg";
import { Contexts } from "../contexts/contexts";
import React, { useContext } from "react";

function Skills() {
  let { lightMode, textData } = useContext(Contexts);
  return (
    <div className={`${lightMode ? "" : "bg-[#252128]"} p-px`}>
      <div className={`flex flex-col items-center my-20`}>
        <div className="flex w-[66%] 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col max-[640px]:flex-col">
          <h2
            className={`2xl:basis-2/5 xl:basis-1/3 lg:basis-1/4 md:basis-1/5 text-left ${
              lightMode ? "text-[#4832D3]" : "text-[#CBF281]"
            }`}
          >
            {textData.skillsHeader}
          </h2>
          <div className="flex flex-wrap 2xl:basis-3/5 xl:basis-2/3 lg:basis-3/4 md:basis-4/5 justify-between 
          text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-base max-[640px]:text-xs max-[390px]:text-[11px]">
            <a
              href="https://www.w3schools.com/js/DEFAULT.asp"
              className="no-underline"
            >
              <div className="flex items-center 2xl:w-72 xl:w-60 lg:w-60 md:w-56 sm:w-48 max-[640px]:w-32 max-[390px]:w-28 ">
                <img
                  className="2xl:h-32 xl:h-32 lg:h-28 md:h-24 sm:h-20 max-[640px]:h-12 max-[390px]:h-12 mr-3 max-[640px]:mr-1  my-3 "
                  src={js}
                />

                <p
                  className={`my-auto ${
                    lightMode ? "text-[#777777]" : "text-[#FFFFFF]"
                  }`}
                >
                  JAVASCRIPT
                </p>
              </div>
            </a>
            <a
              href="https://www.w3schools.com/nodejs/nodejs_intro.asp"
              className="no-underline"
            >
              <div className="flex items-center 2xl:w-72 xl:w-60 lg:w-60 md:w-56 sm:w-48 max-[640px]:w-32 max-[390px]:w-28 ">
                <img
                  className="2xl:h-32 xl:h-32 lg:h-28 md:h-24 sm:h-20 max-[640px]:h-12 max-[390px]:h-12 mr-3 max-[640px]:mr-1 my-3 "
                  src={nodeJs}
                />
                <p
                  className={`my-auto ${
                    lightMode ? "text-[#777777]" : "text-[#FFFFFF]"
                  }`}
                >
                  NODE
                </p>
              </div>
            </a>
            <a
              href="https://www.w3schools.com/react/"
              className="no-underline"
            >
            <div className="flex items-center 2xl:w-72 xl:w-60 lg:w-60 md:w-56 sm:w-48 max-[640px]:w-32 max-[390px]:w-28 ">
              <img
                className="2xl:h-32 xl:h-32 lg:h-28 md:h-24 sm:h-20 max-[640px]:h-12 max-[390px]:h-12 mr-3 max-[640px]:mr-1 my-3 "
                src={react}
              />
              <p
                className={`my-auto ${
                  lightMode ? "text-[#777777]" : "text-[#FFFFFF]"
                }`}
              >
                REACT
              </p>
            </div>
            </a>
            <div className="flex items-center 2xl:w-72 xl:w-60 lg:w-60 md:w-56 sm:w-48 max-[640px]:w-32 max-[390px]:w-28 ">
              <img
                className="2xl:h-32 xl:h-32 lg:h-28 md:h-24 sm:h-20 max-[640px]:h-12 max-[390px]:h-12 mr-3 max-[640px]:mr-1 my-3 "
                src={vsCode}
              />
              <p
                className={`my-auto ${
                  lightMode ? "text-[#777777]" : "text-[#FFFFFF]"
                }`}
              >
                VS CODE
              </p>
            </div>
            <a
              href="https://www.w3schools.blog/redux-reactjs"
              className="no-underline"
            >
            <div className="flex items-center 2xl:w-72 xl:w-60 lg:w-60 md:w-56 sm:w-48 max-[640px]:w-32 max-[390px]:w-28 ">
              <img
                className="2xl:h-32 xl:h-32 lg:h-28 md:h-24 sm:h-20 max-[640px]:h-12 max-[390px]:h-12 mr-3 max-[640px]:mr-1 my-3 "
                src={redux}
              />
              <p
                className={`my-auto ${
                  lightMode ? "text-[#777777]" : "text-[#FFFFFF]"
                }`}
              >
                REDUX
              </p>
            </div>
            </a>
            <div className="flex items-center 2xl:w-72 xl:w-60 lg:w-60 md:w-56 sm:w-48 max-[640px]:w-32 max-[390px]:w-28 ">
              <img
                className="2xl:h-32 xl:h-32 lg:h-28 md:h-24 sm:h-20 max-[640px]:h-12 max-[390px]:h-12 mr-3 max-[640px]:mr-1 my-3 "
                src={figma}
              />
              <p
                className={`my-auto ${
                  lightMode ? "text-[#777777]" : "text-[#FFFFFF]"
                }`}
              >
                FIGMA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
