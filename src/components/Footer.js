import React, { useContext } from "react";
import { Contexts } from "../contexts/contexts";

function Footer() {
  const { lightMode } = useContext(Contexts);
  const { footerSvg } = useContext(Contexts);
  return (
    <div className={`${lightMode ? "bg-[#F9F9F9]" : "bg-[#252128]"} p-px`}>
      <div className="w-1/5 my-5 mx-auto">
        <h2 className={`${lightMode ? "text-[#4731D3]" : "text-[#8F88FF]"}`}>
          Send me a message!
        </h2>
        <p className={`${lightMode ? "text-[#120B39]" : "text-[#FFFFFF]"}`}>
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
        <a
          href="mailto:ihsanyazarel@hotmail.com"
          className={`mb-3 block ${
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
