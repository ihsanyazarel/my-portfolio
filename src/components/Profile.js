import React, { useContext } from "react";
import profileImage from "../profileImage.jpg";
import { Contexts } from "../contexts/contexts";

function Profile() {
  const { lightMode, textData } = useContext(Contexts);
  const basicInfDataKeys = [
    textData.birthDate,
    textData.residence,
    textData.education,
    textData.preferredRole,
  ];
  const basicInfDataValues = [
    "07.01.1994",
    "Ankara",
    textData.graduation,
    "Frontend, UI",
  ];

  return (    
    <div className={`${lightMode ? "bg-[#4731D3]" : "bg-[#171043]"} p-px`}>
      <div className="flex flex-col items-center mt-5 ">
        <div className="w-[66%] pb-5">
          <h2 className="text-left text-[#CBF281]">
            {textData.profilesHeader}
          </h2>
          <div className="flex 2xl:flex-row  max-lg:flex-col  ">
            <div className="2xl:w-[33%] xl:w-[33%] lg:w-[33%] md:w-[100%] sm:w-[100%] max-[640px]:w-[100%]">
              <h4 className="text-[#FFFFFF] 
              
              2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg max-[640px]:text-base"
              >{textData.basicInfo}</h4>
              <table className="table-auto text-left border-separate 
              
              2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs max-[640px]:text-xs">
                <tbody>
                  {basicInfDataKeys.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="2xl:w-[33%] xl:w-[33%] lg:w-[33%] md:w-[40%] sm:w-[50%] max-[640px]:w-[50%] text-[#CBF281] ">{item}</td>
                        <td className="pl-5 text-[#FFFFFF]">
                          {basicInfDataValues[index]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="2xl:w-[33%] xl:w-[33%] lg:w-[33%] md:w-[60%] sm:w-[50%] max-[640px]:w-[50%] overflow-hidden mx-auto">
              <img className="object-cover 2xl:rounded-2xl xl:rounded-2xl lg:rounded-2xl md:rounded-full sm:rounded-full max-[640px]:rounded-full 
              2xl:my-0 xl:my-0 lg:my-0 md:my-5 sm:my-4 max-[640px]:my-3" 
              src={profileImage} />
            </div>
            <div className="2xl:w-[33%] xl:w-[33%] lg:w-[33%] md:w-[100%] sm:w-[100%] max-[640px]:w-[100%] 2xl:pl-8 xl:pl-8 lg:pl-6 md:pl-0 sm:pl-0 max-[640px]:pl-0">
              <h4 className="text-[#FFFFFF] 
              2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center max-[640px]:text-center
              2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg max-[640px]:text-base"
              >{textData.aboutMe}</h4>
              <p className="text-left text-[#FFFFFF] 2xl:text-[18px] xl:text-base lg:text-sm md:text-sm sm:text-xs max-[640px]:text-xs">
                {textData.aboutP1}
                <br />
                <br />
                {textData.aboutP2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
