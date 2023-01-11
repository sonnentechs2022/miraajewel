import React from "react";
import deal1 from "../../Assets/PaymentOption/deal1.jpeg";
import deal2 from "../../Assets/PaymentOption/Deal2.png";

export default function Dealbar() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-2 lg:mt-5 mb-5">
        <h1 className="  text-[20px] lg:text-[30px] uppercase mb-5 text-black font-semibold   font-Nunito">
          Deal of the day
        </h1>
        <div className="flex items-center justify-center w-full h-auto">
          <div className='h-min overflow-hidden rounded-md w-6/12"'>
            <img
              src={deal1}
              className=" w-full  object-cover hover:scale-110 transition-all duration-500 cursor-pointer"
              alt=""
            />
          </div>
          <div className='h-min overflow-hidden rounded-md w-6/12"'>
            <img
              src={deal2}
              className=" w-full object-cover hover:scale-110 transition-all duration-500 cursor-pointer"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
