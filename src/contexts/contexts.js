import { createContext, useState } from "react";

export const Contexts = createContext();

const ContextsProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(true);

  const contextVariables = {
    lightMode,
    setLightMode
  };

  return (
    <Contexts.Provider value={contextVariables}>{children}</Contexts.Provider>
  );
};

export default ContextsProvider;
