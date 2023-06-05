import React, { useContext } from "react";
import profileImage from "../profileImage.jpg";
import { Contexts } from "../contexts/contexts";

function Profile() {
  const { lightMode } = useContext(Contexts);
  const basicInfData = {
    "Doğum tarihi": "07.01.1994",
    "İkamet Şehri": "Ankara",
    "Eğitim Durumu": "İTÜ Elektronik ve Haberleşme Mühendisliği, 2019",
    "Tercih Ettiği Rol": "Frontend, UI",
  };

  return (
    <div className={`${lightMode ? "bg-[#4731D3]" : "bg-[#171043]"} p-px`}>
      <div className="flex flex-col items-center mt-5">
        <div className="w-[66%] pb-5">
          <h2 className="text-left text-[#CBF281]">Profile</h2>
          <div className="flex">
            <div className="basis-1/3">
              <h4 className="text-left text-[#FFFFFF]">Basic Information</h4>
              <table class="table-auto text-left border-separate xl:border-spacing-y-6">
                <tbody className="">
                  {Object.keys(basicInfData).map((item, index) => {
                    const values = Object.values(basicInfData);
                    return (
                      <>
                        <tr className="">
                          <td className="w-[30%] text-[#CBF281]">{item}</td>
                          <td className="pl-5 text-[#FFFFFF]">
                            {values[index]}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="basis-1/3 overflow-hidden mx-4">
              <img className="rounded-2xl" src={profileImage} />
            </div>
            <div className="basis-1/3 ">
              <h4 className="text-left text-[#FFFFFF]">Basic Information</h4>
              <p className="text-left text-[#FFFFFF]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                aut, odit laborum aliquam voluptatum nisi mollitia.
              </p>
              <p className="text-left text-[#FFFFFF]">
                Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
                deserunt quam temporibus cumque magnam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
