import React from "react";
import ProductImg from "../../Assets/PartnerImg/JwelleryLogin.webp";


export default function ProductCate() {
  return (
    <>
      <div className=" h-full container lg:px-32 px-4 py-8 mx-auto items-center ">
        <div className=" flex  flex-col justify-center  items-center ">
          <h1 className=" text-black font-semibold text-[20px] lg:text-[30px]  font-Nunito ">
            Product Categories
          </h1>
          <p className=" text-black font-normal text-[12px] lg:text-[15px] lg:text-lg font-Nunito">
            So that you don't run out option to choose from!
          </p>
          <hr className=" w-[150px]  h-[2.5px] mt-[10px] mb-[20px] bg-blue-400 " />
        </div>
        <div className="h-[200px] lg:h-screen grid grid-cols-5 grid-rows-2 gap-2">
          <div className="w-full row-span-1 col-span-1">
            <img
              src={ProductImg}
              alt="Photo by Claudio Schwarz on Unsplash"
              className=" relative inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"
            />
          </div>
          <div className="w-full col-span-1 row-span-1">
            <img
              src={ProductImg}
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full col-span-1 row-span-2 ">
            <img
              src={ProductImg}
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full col-span-2 row-span-1">
            <img
              src={ProductImg}
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full col-span-2 row-span-1">
            <img
              src={ProductImg}
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>

          <div className="w-full col-span-1 row-span-1">
            <img
              src={ProductImg}
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full col-span-1 row-span-1">
            <img
              src={ProductImg}
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
        </div>
      </div>
    </>
  );
}
