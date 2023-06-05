import js from "../svgFiles/js.svg";
import react from "../svgFiles/react.svg";
import redux from "../svgFiles/redux.svg";
import nodeJs from "../svgFiles/nodeJs.svg";
import vsCode from "../svgFiles/vsCode.svg";
import figma from "../svgFiles/figma.svg";
import { Contexts } from "../contexts/contexts";
import React, { useContext } from "react";

function Skills() {
  const { lightMode } = useContext(Contexts);
  return (
    <div className={`${lightMode ? "" : "bg-[#252128]"} p-px`}>
      <div className={`flex flex-col items-center my-20`}>
      <div className="flex w-[66%]">
        <h2 className={`w-[40%] text-left ${lightMode ? "text-[#4832D3]" : "text-[#CBF281]"}`}>Skills</h2>
        <div className="flex flex-wrap w-[60%] justify-between">
          <div className="flex items-center w-64  ">
            <img className="h-32 mr-5 my-3 " src={js} />
            <p className={`${lightMode ? "text-[#777777]" : "text-[#FFFFFF]"}`}>JAVASCRIPT</p>
          </div>
          <div className="flex items-center w-64  ">
            <img className="h-32 mr-5 my-3 " src={nodeJs} />
            <p className={`${lightMode ? "text-[#777777]" : "text-[#FFFFFF]"}`}>NODE</p>
          </div>
          <div className="flex items-center w-64  ">
            <img className="h-32 mr-5 my-3 " src={react} />
            <p className={`${lightMode ? "text-[#777777]" : "text-[#FFFFFF]"}`}>REACT</p>
          </div>
          <div className="flex items-center w-64  ">
            <img className="h-32 mr-5 my-3 " src={vsCode} />
            <p className={`${lightMode ? "text-[#777777]" : "text-[#FFFFFF]"}`}>VS CODE</p>
          </div>
          <div className="flex items-center w-64  ">
            <img className="h-32 mr-5 my-3 " src={redux} />
            <p className={`${lightMode ? "text-[#777777]" : "text-[#FFFFFF]"}`}>REDUX</p>
          </div>
          <div className="flex items-center w-64  ">
            <img className="h-32 mr-5 my-3 " src={figma} />
            <p className={`${lightMode ? "text-[#777777]" : "text-[#FFFFFF]"}`}>FIGMA</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Skills;
