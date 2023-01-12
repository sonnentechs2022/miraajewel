import React, { useState } from "react";

export default function () {
  let [otp, setOtp] = React.useState("");

  return (
    <>
      <div className="w-screen h-[500px]  lg:h-screen flex justify-center items-center ">
        <div className=" flex flex-col justify-center items-center h-[400px]  shadow-2xl lg:h-[500px]">
          <form action="">
            <div className="flex flex-col justify-center items-center w-[300px] lg:w-[500px]   ">
              <h1 className="text-[23px] font-bold ">Verify Your </h1>
              <h1 className="text-[23px] font-bold mb-[10px] ">Phone Number</h1>
              <p className="text-[14px] font-medium text-gray-400 mb-[50px] ">
                Enter Your OTP code here
              </p>
            </div>
            <div className="flex flex-row justify-center items-center gap-6 mb-[70px] ">
              <input
                type="text"
                name="otp"
                maxLength="1"
                className=" outline-none hover:outline-none h-[50px] w-[50px] text-center rounded-full bg-gray-400 transition spin-button-none hover:bg-red-600 text-white text-[20px]"
              />
              <input
                type="text"
                name="otp"
                maxLength="1"
                className=" outline-none hover:outline-none h-[50px] w-[50px] text-center rounded-full bg-gray-400 transition spin-button-none hover:bg-red-600 text-white text-[20px]"
              />
              <input
                type="text"
                name="otp"
                maxLength="1"
                className=" outline-none hover:outline-none h-[50px] w-[50px] text-center rounded-full bg-gray-400 transition spin-button-none hover:bg-red-600 text-white text-[20px]"
              />
              <input
                type="text"
                name="otp"
                maxLength="1"
                className=" outline-none hover:outline-none h-[50px] w-[50px] text-center rounded-full bg-gray-400 transition spin-button-none hover:bg-red-600 text-white text-[20px] "
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-[14px] font-medium text-gray-400 mb-[20px] ">
                Didn't you Recive any Code?
              </p>
              <h1 className="text-[13px] font-bold text-red-600 uppercase">
                Resend New Code
              </h1>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
