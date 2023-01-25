import React, { useState } from "react";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

import data from "../../data";

export default function TrendingItems({ img, Price, review, rating,title,offerPrice }) {
  const [changeStyle, setChangeStyle] = useState({
    height: "0px",
    opacity: "0",
  });
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((previousStar) => {
      return !previousStar;
    });
  };

  return (
    <>
      <div className="inline-block ">
        
        <div className="relative flex justify-center items-center flex-col overflow-hidden bg-no-repeat bg-cover h-[350px]  lg:h-[380px] ml-[10px]">
          <img src={img} alt="" className=" object-fill mt-24 lg:mt-0 lg:h-[230px] lg:w-[230px] h-[155px] w-[155px]" />
          <div className="absolute top-[120px] lg:top-[45px] mr-[80px] lg:mr-[148px]  w-[80px] h-[20px] bg-RedPrime text-[8px]  flex justify-center items-center  ">
            <h1 className="text-white  uppercase font-Montserrat text-[10px] font-medium">Best Saller</h1>
          </div>
          <div className="absolute top-[235px] lg:top-[226px]  w-[150px] lg:w-[210px] h-[60px] text-[10px]  lg:text-[12px] text-RedPrime font-Montserrat cursor-pointer flex justify-between items-center uppercase  transition-all">
            (13Review)
            <div>
            {active ? (
                    <Favorite
                      className=" text-[10px] lg:text-[13px] text-RedPrime "
                      onClick={() => handleChangeActive()}
                    />
                  ) : (
                    <FavoriteBorder className=" text-[10px] lg:text-[13px] text-RedPrime" 
                    onClick={() => handleChangeActive()}
                    
                    />
                  )}
            </div>
          </div>
          <div className=" relative flex justify-center items-center flex-col w-[80px] lg:w-[50px] text-[11px]  lg:text-[14px] font-Montserrat mt-[10px] ">
            {title}
            <div className="flex justify-between  items-center flex-row mt-[7px]">
              <p className=" font-Montserrat text-[10px] lg:text-[15px] ">Rs.{offerPrice}</p>
              <p className=" font-Montserrat text-[10px] lg:text-[15px] lg:ml-[30px] ml-[20px] text-gray-500">RS.{Price}</p>
              <hr className=" absolute lg:ml-[85px] ml-[60px] h-[2px] w-[40px] lg:w-[70px] bg-gray-700 t-0" />
            </div>
          </div>
        </div>
        {/* <div className=" flex justify-center items-center">
          {rating.map((i) => {
            return <li className=" list-none">{i}</li>;
          })}
          <p className="ml-2 text-gray-400 text-[12px] font-Nunito">{review}</p>
        </div>
        <div className="flex justify-center items-center">
          <p className="ml-2 text-gray-600 text-[14px] font-medium  text-ellipsis overflow-hidden font-Nunito ">
            GANESH LAKSHMI JI 999.9 20 GM Miraa ...
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="ml-2 text-gray-900 text-[15px] font-medium font-Nunito">
            Rs.{price}
          </p>
        </div> */}
      </div>
    </>
  );
}
