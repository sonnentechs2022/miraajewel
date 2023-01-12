import React from "react";
import {useNavigate} from 'react-router-dom'

export default function MobileNumScreen() {
  const Navigate =useNavigate();
  return (
    <>
      <div className="w-screen h-[500px]  lg:h-screen flex justify-center items-center ">
        <div className=" flex flex-col justify-center items-center h-[400px]  shadow-2xl lg:h-[500px] w-[350px]  lg:w-[500px]">
          <form action="">
            <div className="flex flex-col justify-center items-center w-[300px] lg:w-[500px]   ">
              <h1 className="text-[23px] font-bold  mt-[10px]">Sign up </h1>
              <h1 className="text-[23px] font-bold  ">
                to keep Ordering amazing
              </h1>
              <h1 className="text-[23px] font-bold mb-[10px] ">Jewellery!</h1>
              <p className="text-[14px] font-medium text-gray-400  ">
                Add your phone number . We'll
              </p>
              <p className="text-[14px] font-medium text-gray-400 mb-[30px] ">
                send you verification code
              </p>
            </div>
            <div className="flex flex-col justify-center items-center  mb-[20px] w-full ">
              <input
                type="text"
                name="Contact Num"
                maxLength="10"
                className=" outline-none hover:outline-none h-[35px] w-[400x]  p-2 rounded-md  bg-gray-300 transition spin-button-none   text-white text-[20px]"
              />

              <div className="h-[35px] w-[250px] bg-red-600 mt-[20px] flex justify-center items-center  rounded-md "
              onClick={()=>Navigate('/OTPScreen')}>
                <h1 className="text-white text-[16px] uppercase font-bold ">
                  Send OTP
                </h1>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center  lg:w-[500px]">
              <p className="text-[14px] font-medium text-gray-400 mb-[20px] tracking-widest pr-14 pl-14 ">
                By Provideing my phone number ,I hereby agree and accept the{" "}
                <span>Terms of service</span> and <span>Privacy Policy</span> is
                use of the Miraa app.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
