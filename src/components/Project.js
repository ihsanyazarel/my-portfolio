import React, { useContext } from "react";
import { Contexts } from "../contexts/contexts";

function Project({ project }) {
    const { lightMode } = useContext(Contexts);
  return (
    <div
      className={`flex rounded-xl overflow-hidden mt-6 ${
        lightMode ? "bg-[#FFFFFF]" : "bg-[#2B2727]"
      }`}
    >
      <div className="basis-2/5  mr-5">
        <img className="h-[100%] object-cover" src={project.img} />
      </div>
      <div className="mx-auto my-auto py-5 basis-3/5">
        <h3
          className={`text-left  ${
            lightMode ? "text-[#4338CA]" : "text-[#C1BAED]"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-left  ${
            lightMode ? "text-[#383838]" : "text-[#FFFFFF]"
          }`}
        >
          {project.description}
        </p>
        <div className="text-left">
          {project.methodsofproject.map((item, i) => <p key={i}
            className={`inline-block  py-2 px-4 mr-2 rounded-3xl ${
              lightMode
                ? "bg-[#4731D3] text-[#FFFFFF]"
                : "bg-[#8173DA] text-[#FFFFFF]"
            }`}
          >
            {item}
          </p>)}
        </div>
        <div className="underline text-left">
          <a href={project.deployLink}
            className={`mr-20 ${
              lightMode ? "text-[#120B39]" : "text-[#CBF281]"
            }`}
          >
            View Site
          </a>
          <a href={project.githubLink}
            className={`mr-20 ${
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
