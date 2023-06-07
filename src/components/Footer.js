import React, { useContext } from "react";
import { Contexts } from "../contexts/contexts";

function Footer() {
  const { lightMode, footerSvg, textData } = useContext(Contexts);
  return (
    <div className={`${lightMode ? "bg-[#F9F9F9]" : "bg-[#252128]"} p-px`}>
      <div className="w-[30%] my-5 mx-auto text-center">
        <h2 className={`text-5xl ${lightMode ? "text-[#4731D3]" : "text-[#8F88FF]"}`}>
          {textData.sendMessage}
        </h2>
        <p className={`text-2xl ${lightMode ? "text-[#120B39]" : "text-[#FFFFFF]"}`}>
          {textData.sendMessageText}
        </p>
        <a
          href="mailto:ihsanyazarel@hotmail.com"
          className={`text-xl mb-3 block ${
            lightMode ? "text-[#4731D3]" : "text-[#8F88FF]"
          }`}
        >
          ihsanyazarel@hotmail.com
        </a>
        {footerSvg.map((item, index) => (
          <div key={index} className="inline-block mx-2">
            <a href={item().props.xmlns}>{item()}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
