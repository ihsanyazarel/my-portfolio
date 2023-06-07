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
      <div className="flex flex-col items-center mt-5">
        <div className="w-[66%] pb-5">
          <h2 className="text-left text-[#CBF281]">
            {textData.profilesHeader}
          </h2>
          <div className="flex lg:flex-row sm:flex-col">
            <div className="w-[33%]">
              <h4 className="text-left text-[#FFFFFF]">{textData.basicInfo}</h4>
              <table className="table-auto text-left border-separate xl:border-spacing-y-6">
                <tbody>
                  {basicInfDataKeys.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="w-[33%] text-[#CBF281]">{item}</td>
                        <td className="pl-5 text-[#FFFFFF]">
                          {basicInfDataValues[index]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="2xl:h-96 lg:h-80 md:h-72 sm:h-60 w-[33%] overflow-hidden">
              <img className="h-[100%] object-cover rounded-2xl mx-auto" src={profileImage} />
            </div>
            <div className="w-[33%] pl-8">
              <h4 className="text-left text-[#FFFFFF]">{textData.aboutMe}</h4>
              <p className="text-left text-[#FFFFFF]">
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
