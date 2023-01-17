import React, { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

export default function ProductAcc({ Brand, Color, Head, id }) {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <>
      <div
        className=" w-full flex-col items-center justify-center accordian "
        id="accordionExample"
      >
        <div className=" flex justify-center w-5/6 max-h-full  border border-gray-400 ">
          <div
            className=" flex flex-col w-11/12 ransition-all "
            onClick={() => setIsActive(!isActive)}
            key={id}
          >
            <div className="flex justify-between  items-center  h-[35px]">
              <h1 className="text-black font-semibold font-Montserrat text-lg hover:text-blue-500 transition ease-in-out duration-500">{Head}</h1>
              <div className=" ">
                {isActive ? (
                  <KeyboardArrowUp className=" cursor-pointer" />
                ) : (
                  <KeyboardArrowDown className=" cursor-pointer" />
                )}
              </div>
            </div>
            {isActive && (
              <div className=" ">
                <div className=" flex flex-row mt-2 text-[15px] font-semibold font-Montserrat">
                  Brand:<p className="ml-2 text-[14px] font-medium font-Montserrat">{Brand}</p>
                </div>
                <div className=" flex flex-row mt-2 text-[15px] font-semibold font-Montserrat">
                  Color:<p className="ml-2 text-[14px] font-medium font-Montserrat">{Color}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
