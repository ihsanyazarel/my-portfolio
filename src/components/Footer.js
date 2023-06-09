import React, { useContext } from "react";
import { Contexts } from "../contexts/contexts";

function Footer() {
  const { lightMode, footerSvg, textData } = useContext(Contexts);
  return (
    <div className={`${lightMode ? "bg-[#F9F9F9]" : "bg-[#252128]"} p-px`}>
      <div
        className="flex flex-col items-center my-5 mx-auto text-center"
      >
        <h2
          className={`font-bold
          2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl max-[640px]:text-xl
        ${lightMode ? "text-[#4731D3]" : "text-[#8F88FF]"}`}
        >
          {textData.sendMessage}
        </h2>
        <p
          className={`2xl:w-[460px] xl:w-[460px] lg:w-[350px] md:w-[300px] sm:w-[250px] max-[640px]:w-[200px]
          2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-base max-[640px]:text-sm
         ${lightMode ? "text-[#120B39]" : "text-[#FFFFFF]"}`}
        >
          {textData.sendMessageText}
        </p>
        <a
          href="mailto:ihsanyazarel@hotmail.com"
          className={`2xl:text-xl xl:text-lg lg:text-base md:text-sm max-[640px]:text-xs
          mb-3 block ${lightMode ? "text-[#4731D3]" : "text-[#8F88FF]"}`}
        >
          ihsanyazarel@hotmail.com
        </a>
        <div>
          {footerSvg.map((item, index) => (
            <div key={index} className="inline-block mx-2">
              <a href={item().props.xmlns}>{item()}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
