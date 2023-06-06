import { useContext } from "react";
import { Contexts } from "../../contexts/contexts";

const Codepen = () => {
  const { lightMode } = useContext(Contexts);
  return (
    <svg
      width="36"
      height="35"
      viewBox="0 0 36 35"
      fill="none"
      xmlns="https://www.google.com/"
    >
      <path
        d="M18.0001 2.91663L32.5834 12.3958V22.6041L18.0001 32.0833L3.41675 22.6041V12.3958L18.0001 2.91663Z"
        stroke={lightMode ? "#4731D3" : "#8F88FF"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 32.0833V22.6041"
        stroke={lightMode ? "#4731D3" : "#8F88FF"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.5834 12.3959L18.0001 22.6042L3.41675 12.3959"
        stroke={lightMode ? "#4731D3" : "#8F88FF"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.41675 22.6042L18.0001 12.3959L32.5834 22.6042"
        stroke={lightMode ? "#4731D3" : "#8F88FF"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 2.91663V12.3958"
        stroke={lightMode ? "#4731D3" : "#8F88FF"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Codepen;
