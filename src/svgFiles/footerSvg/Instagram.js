import { useContext } from "react";
import { Contexts } from "../../contexts/contexts";

const Instagram = () => {
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
        d="M25.2917 2.91663H10.7084C6.68134 2.91663 3.41675 6.18122 3.41675 10.2083V24.7916C3.41675 28.8187 6.68134 32.0833 10.7084 32.0833H25.2917C29.3188 32.0833 32.5834 28.8187 32.5834 24.7916V10.2083C32.5834 6.18122 29.3188 2.91663 25.2917 2.91663Z"
        stroke={lightMode ? "#4731D3" : "#8F88FF"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.8333 16.5811C24.0133 17.7948 23.806 19.0343 23.2409 20.1234C22.6758 21.2125 21.7817 22.0956 20.6857 22.6473C19.5897 23.1989 18.3477 23.3909 17.1363 23.196C15.925 23.0011 14.8059 22.4291 13.9383 21.5615C13.0707 20.6939 12.4988 19.5749 12.3038 18.3635C12.1089 17.1521 12.3009 15.9101 12.8525 14.8141C13.4042 13.7182 14.2873 12.824 15.3764 12.2589C16.4655 11.6938 17.705 11.4865 18.9187 11.6665C20.1567 11.8501 21.3029 12.427 22.1879 13.3119C23.0728 14.1969 23.6497 15.3431 23.8333 16.5811Z"
        stroke={lightMode ? "#4731D3" : "#8F88FF"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.0208 9.47913H26.0353"
        stroke={lightMode ? "#4731D3" : "#8F88FF"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Instagram;
