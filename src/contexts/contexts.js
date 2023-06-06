import { createContext, useState } from "react";
import { ProjectsData } from "../data/projectsData";

export const Contexts = createContext();

const ContextsProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(true);
  const [projects, setProjects] = useState(ProjectsData);

  const contextVariables = {
    lightMode,
    setLightMode,
    projects, 
    setProjects,
    
  };

  return (
    <Contexts.Provider value={contextVariables}>{children}</Contexts.Provider>
  );
};

export default ContextsProvider;
