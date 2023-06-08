import React, { useContext } from "react";
import { Contexts } from "../contexts/contexts";

function Footer() {
  const { lightMode, footerSvg, textData } = useContext(Contexts);
  return (
    <div className={`${lightMode ? "bg-[#F9F9F9]" : "bg-[#252128]"} p-px`}>
      <div className="2xl:w-[30%] xl:w-[27%] lg:w-[28%] md:w-[30%] sm:w-[30%] max-[640px]:w-[60%]
       my-5 mx-auto text-center">
        <h2 className={`2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl max-[640px]:text-lg 
        ${lightMode ? "text-[#4731D3]" : "text-[#8F88FF]"}`}>
          {textData.sendMessage}
        </h2>
        <p className={`2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm max-[640px]:text-xs
         ${lightMode ? "text-[#120B39]" : "text-[#FFFFFF]"}`}>
          {textData.sendMessageText}
        </p>
        <a
          href="mailto:ihsanyazarel@hotmail.com"
          className={`2xl:text-xl xl:text-lg lg:text-base md:text-sm max-[640px]:text-xs
          mb-3 block ${
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
