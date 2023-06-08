import React, { useContext } from "react";
import { Contexts } from "../contexts/contexts";

function Project({ project }) {
    const { lightMode, textData } = useContext(Contexts);
  return (
    <div
      className={`flex 2xl:flex-row max-lg:flex-col rounded-xl overflow-hidden mt-6 ${
        lightMode ? "bg-[#FFFFFF]" : "bg-[#2B2727]"
      }`}
    >
      <div className="2xl:basis-2/5 xl:basis-2/5 lg:basis-1/2 ">
        <img className="2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-96 sm:h-80 max-[640px]:h-72 w-[100%] object-cover" src={project.img} />
      </div>
      <div className="ml-5 my-auto py-5 2xl:basis-3/5 xl:basis-3/5 lg:basis-1/2 ">
        <h3
          className={`text-left 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg max-[640px]:text-base ${
            lightMode ? "text-[#4338CA]" : "text-[#C1BAED]"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-left 2xl:text-lg xl:text-lg lg:text-base md:text-base sm:text-sm max-[640px]:text-xs ${
            lightMode ? "text-[#383838]" : "text-[#FFFFFF]"
          }`}
        >
          {project.description}
        </p>
        <div className="text-left 2xl:text-lg xl:text-lg lg:text-base md:text-base sm:text-sm max-[640px]:text-xs">
          {project.methodsofproject.map((item, i) => <p key={i}
            className={`inline-block 2xl:py-2 2xl:px-4 xl:py-2 xl:px-4 lg:py-2 lg:px-4 md:py-1.5 md:px-3 max-md:py-1 max-md:px-2 mr-2 rounded-3xl ${
              lightMode
                ? "bg-[#4731D3] text-[#FFFFFF]"
                : "bg-[#8173DA] text-[#FFFFFF]"
            }`}
          >
            {item}
          </p>)}
        </div>
        <div className="underline text-left 2xl:text-lg xl:text-lg lg:text-base md:text-base sm:text-sm max-[640px]:text-sm">
          <a href={project.deployLink}
            className={`mr-20  ${
              lightMode ? "text-[#120B39]" : "text-[#CBF281]"
            }`}
          >
            {textData.viewSite}
          </a>
          <a href={project.githubLink}
            className={`${
              lightMode ? "text-[#120B39]" : "text-[#CBF281]"
            }`}
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
