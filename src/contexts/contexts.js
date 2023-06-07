import { createContext, useEffect, useState } from "react";
import { projectsDataTr } from "../data/projectsDataTr";
import { projectsDataEn } from "../data/projectsDataEn";
import { footerSvgData } from "../data/footerSvgData";
import { textDataTr } from "../data/textDataTr";
import { textDataEn } from "../data/textDataEn";

export const Contexts = createContext();

const ContextsProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(true);
  const [projects, setProjects] = useState(projectsDataEn);
  const [footerSvg, setFooterSvg] = useState(footerSvgData);
  const [language, setLanguage] = useState("en");
  const [textData, setTextData] = useState(textDataEn);
  const languageHandler = () => {
    language === "tr" ? setLanguage("en") : setLanguage("tr");
  }
  useEffect(()=>{
    switch(language) {
      case "tr":
        setTextData(textDataTr);
        setProjects(projectsDataTr);
        break;
      case "en":
        setTextData(textDataEn);
        setProjects(projectsDataEn);
        break;
      default:
        setTextData(textDataEn);
        setProjects(projectsDataEn);
    }
  }, [language])

  const contextVariables = {
    lightMode,
    setLightMode,
    projects, 
    setProjects,
    footerSvg,
    languageHandler,
    textData,
    language

  };

  return (
    <Contexts.Provider value={contextVariables}>{children}</Contexts.Provider>
  );
};

export default ContextsProvider;
