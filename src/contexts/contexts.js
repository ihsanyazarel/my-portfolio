import { createContext, useEffect, useState } from "react";
import { projectsDataTr } from "../data/projectsDataTr";
import { projectsDataEn } from "../data/projectsDataEn";
import { footerSvgData } from "../data/footerSvgData";
import { textDataTr } from "../data/textDataTr";
import { textDataEn } from "../data/textDataEn";

export const Contexts = createContext();

const ContextsProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(localStorage.getItem("darkMode") ? !(JSON.parse(localStorage.getItem("darkMode"))) : true);
  const [projects, setProjects] = useState(projectsDataEn);
  // eslint-disable-next-line
  const [footerSvg, setFooterSvg] = useState(footerSvgData);
  const [language, setLanguage] = useState(localStorage.getItem("language") ? localStorage.getItem("language") : "en");
  const [textData, setTextData] = useState(textDataEn);
  const languageHandler = () => {
    language === "tr" ? setLanguage("en") : setLanguage("tr");
  }
  useEffect(()=>{
    setTimeout(()=>{localStorage.setItem("language", language)}, 0);
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
