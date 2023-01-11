import React from "react";
import { Home, ChevronRight, East } from "@mui/icons-material";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <>
      <div className=" w-screen lg:w-full  mt-12 ">
        <div className="flex flex-row  w-6/7 justify-start ml-20   ">
          <Home className="text-gray-500 text-sm" />
          <ChevronRight className="text-gray-500 text-sm" />
          <p className=" text-gary-500 text-sm">Contact Us</p>
        </div>
        <div className="  ContactUsHead flex items-center justify-center w-full h-[100px] ">
          <div className="  text-white text-5xl font-bold  ">Contact Us</div>
        </div>
        <div className="flex flex-col lg:flex-row mt-[30px] ">
          <div className="  flex flex-col  itmes-center w-full lg:w-1/4 lg:ml-10 bg-gray-100 h-[300px] lg:h-[500px]">
            <h1 className=" text-xl font-semibold mt-[20px]  lg:mt-[200px] ml-4 ">
              ADDRESS
            </h1>
            <p className="text-base font-normal ml-4 ">
              Unit 67 Bizspace Business Park Kings Road,Tyseley,B11 2AL
            </p>

            <h1 className="text-xl font-semibold mt-[40px] ml-4">Contact</h1>
            <p className=" text-base  font-normal ml-4">07474056956</p>

            <h1 className="text-xl font-semibold mt-[40px] ml-4">Support</h1>
            <p className="text-base  font-normal ml-4">info@autumn.co.uk</p>
          </div>
          <div className=" flex flex-col  w-screen  lg:w-4/6 ml-[15px] lg:ml-[30px] mt-5">
            <h1 className=" text-black font-bold text-2xl">Get In Touch</h1>

            <div className="flex flex-col  lg:flex-row mt-5 ">
              <div className=" flex items-center border border-gray-400 w-11/12 lg:w-6/12  h-[45px] rounded-sm hover:border-red-500">
                <input
                  type="text"
                  placeholder="Name*"
                  className="ml-[20px]  outline-none "
                />
              </div>
              <div className=" flex items-center border border-gray-400 rounded-sm mt-7 lg:mt-0  lg:ml-[30px] w-11/12 lg:w-6/12 h-[45px] hover:border-red-500">
                <input
                  type="email"
                  placeholder="Email*"
                  className="ml-[20px]  outline-none"
                />
              </div>
            </div>
            <div className=" flex items-center border mt-7 border-gray-400 rounded-sm w-11/12 lg:w-full h-[45px] hover:border-red-500">
              <input
                type="number"
                placeholder="Mobile*"
                className="ml-[20px] w-full outline-none"
              />
            </div>

            <textarea
              type="text"
              placeholder="Comment*"
              className=" border mt-7 border-gray-400 rounded-sm w-11/12 lg:w-full h-[150px]   outline-none no-scrollbar hover:border-red-500"
            />

            <div className=" flex justify-center items-center  rounded-sm mt-[30px] w-[200px] h-[50px] bg-gray-900 hover:bg-gray-700">
              <p className=" text-white text-sm font-bold uppercase">
                Post Comment
              </p>
              <East className="text-white text-xl ml-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
