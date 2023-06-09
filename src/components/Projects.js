import React, { useContext } from "react";
import { Contexts } from "../contexts/contexts";
import Project from "./Project";

function Projects() {
  const { lightMode, projects, textData } = useContext(Contexts);

  return (
    <div className={`${lightMode ? "bg-[#CBF281]" : "bg-[#1A210B]"} p-px`}>
      <div className="flex flex-col items-center mt-5">
        <div className="w-[66%] pb-5">
          <h2 className="font-bold text-left text-[#4731D3] 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl max-[640px]:text-xl">{textData.projectsHeader}</h2>
          {projects.map((project, index) => <Project key={index} project = {project}/>)}
        </div>
      </div>
    </div>
  );
}

export default Projects;
