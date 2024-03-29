import React, { useContext, useEffect } from "react";

import "./Hero.css";
import ToggleSwitch from "./Toggle";
import { Contexts } from "../contexts/contexts";
import profileImage from "../profileImage.jpg";

function Hero() {
  const { lightMode, languageHandler, textData, language } =
    useContext(Contexts);
  useEffect(() => {
    localStorage.setItem("darkMode", !lightMode);
    localStorage.setItem("language", language);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`flex flex-col h-auto   ${lightMode ? "light" : "dark"}`}>
      <div className="flex flex-row text-[15px] max-[640px]:text-[8px] font-bold tracking-widest mt-3">
        <p data-test-id="language-change"
          onClick={languageHandler}
          className={`w-[70%] text-end pr-5 max-[640px]:pr-1 pt-1.5 cursor-pointer my-auto ${
            lightMode ? "text-[#D9D9D9]" : "text-[#777777]"
          }`}
        >
          <span
            className={`${lightMode ? "text-[#CAF181]" : "text-[#BAB2E7]"}`}
          >
            {textData.language}
          </span>
          {language === "en" ? "’YE GEÇ" : ""}
        </p>
        <div className="pt-1 pl-3 w-[30%] max-[640px]:pl-1 flex flex-row flex-wrap">
          <ToggleSwitch />
          <p
            className={`pt-0.5 pl-3 max-[640px]:pl-0 my-auto ${
              lightMode ? "text-[#4731D3]" : "text-[#D9D9D9]"
            }`}
          >
            {lightMode ? textData.darkMode : textData.lightMode}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-5">
        <div className="w-[66%] pb-5">
          <h3 className="font-bold text-left text-[#CAF181]">Ali İhsan YAZAREL</h3>
          <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col-reverse max-[640px]:flex-col-reverse items-end max-md:items-start">
            <div className="mr-5 w-[64%] max-md:w-[80%]">
              <h1 className="font-bold text-[#CAF181]  2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl max-[640px]:text-xl">
                {textData.heroHeader}
              </h1>
              <p className="text-[#FFFFFF]  2xl:text-2xl xl:text-[22px] lg:text-xl md:text-lg sm:text-base max-[640px]:text-sm">
                {textData.heroParagparh}
              </p>
              <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row max-[640px]:flex-col items-center">
                <a
                  href="https://github.com/ihsanyazarel"
                  className="no-underline"
                >
                  <button data-test-id="githubButton"
                    type="button"
                    className={`${
                      lightMode
                        ? "text-[#3730A3] bg-[#FFFFFF]"
                        : "text-[#FFFFFF] bg-[#252128]"
                    } hover:bg-[#CBF281] focus:ring-4 focus:outline-none focus:ring-[#CBF281] font-medium rounded-md text-sm 
                  2xl:px-3 2xl:py-3 xl:px-3 xl:py-3 lg:px-3 lg:py-3 md:px-3 md:py-3 sm:px-3 sm:py-3 max-[640px]:px-5 max-[640px]:py-2 
                  2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-auto max-[640px]:w-32
                  text-center inline-flex items-center dark:focus:ring-[#CBF281] dark:hover:bg-[#CBF281] mr-2 mb-2`}
                  >
                    <svg
                      className="w-4 h-4 mr-2 -ml-1"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="github"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      ></path>
                    </svg>
                    Github
                  </button>
                </a>
                <a
                  href="https://www.linkedin.com/in/ihsanyazarel/"
                  className="no-underline"
                >
                  <button
                    type="button"
                    className={`${
                      lightMode
                        ? "text-[#3730A3] bg-[#FFFFFF]"
                        : "text-[#FFFFFF] bg-[#252128]"
                    } hover:bg-[#CBF281] focus:ring-4 focus:outline-none focus:ring-[#CBF281] font-medium rounded-md text-sm 
                  2xl:px-3 2xl:py-3 xl:px-3 xl:py-3 lg:px-3 lg:py-3 md:px-3 md:py-3 sm:px-3 sm:py-3 max-[640px]:px-5 max-[640px]:py-2 
                  2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-auto max-[640px]:w-32
                  text-center inline-flex items-center dark:focus:ring-[#CBF281] dark:hover:bg-[#CBF281] mr-2 mb-2`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-2 -ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>{" "}
                    LinkedIn
                  </button>
                </a>
                <a
                  href="https://www.hackerrank.com/ihsanyazarel"
                  className="no-underline"
                >
                  <button
                    type="button"
                    className={`${
                      lightMode
                        ? "text-[#3730A3] bg-[#FFFFFF]"
                        : "text-[#FFFFFF] bg-[#252128]"
                    } hover:bg-[#CBF281] focus:ring-4 focus:outline-none focus:ring-[#CBF281] font-medium rounded-md text-sm 
                  2xl:px-3 2xl:py-3 xl:px-3 xl:py-3 lg:px-3 lg:py-3 md:px-3 md:py-3 sm:px-3 sm:py-3 max-[640px]:px-5 max-[640px]:py-2 
                  2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-auto max-[640px]:w-32
                  text-center inline-flex items-center dark:focus:ring-[#CBF281] dark:hover:bg-[#CBF281] mr-2 mb-2`}
                  >
                    HackerRank
                  </button>
                </a>
              </div>
            </div>
            <div className="w-[36%] sm:w-[60%] max-[640px]:w-[60%] overflow-hidden ">
              <img
                className="object-cover rounded-2xl mx-auto"
                src={profileImage} alt="profileImage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
