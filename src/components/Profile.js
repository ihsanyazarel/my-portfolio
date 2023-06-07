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
          <div className="flex">
            <div className="basis-1/3">
              <h4 className="text-left text-[#FFFFFF]">{textData.basicInfo}</h4>
              <table className="table-auto text-left border-separate xl:border-spacing-y-6">
                <tbody className="">
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
            <div className="basis-1/3 overflow-hidden mx-4">
              <img className="rounded-2xl" src={profileImage} />
            </div>
            <div className="basis-1/3 ">
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
