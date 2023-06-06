import { createContext, useState } from "react";
import { ProjectsData } from "../data/projectsData";
import { footerSvgData } from "../data/footerSvgData";

export const Contexts = createContext();

const ContextsProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(true);
  const [projects, setProjects] = useState(ProjectsData);
  const [footerSvg, setFooterSvg] = useState(footerSvgData);

  const contextVariables = {
    lightMode,
    setLightMode,
    projects, 
    setProjects,
    footerSvg    
  };

  return (
    <Contexts.Provider value={contextVariables}>{children}</Contexts.Provider>
  );
};

export default ContextsProvider;
