import React, { useState } from "react";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

import data from "../../data";

export default function TrendingItems({ img, Price, review, rating,title,offerPrice }) {
  const [changeStyle, setChangeStyle] = useState({
    height: "0px",
    opacity: "0",
  });
  const [iconChange, setIconChange] = useState(false);

  const toggleChecked = () => setIconChange((value) => !value);

  return (
    <>
      <div className="inline-block">
        
        <div className="relative flex justify-center items-center  flex-col overflow-hidden bg-no-repeat bg-cover h-[200px] lg:h-[300px]">
          <img src={img} alt="" className=" object-fill mt-24 lg:mt-0 lg:h-60 h-[175px]" />
          <div className="absolute top-[70px] lg:top-[50px] mr-[80px] lg:mr-[140px]  w-[70px] h-[20px] bg-RedPrime text-[8px]  flex justify-center items-center  ">
            <h1 className="text-white  uppercase font-Montserrat">Best Saller</h1>
          </div>
          <div className="absolute top-[160px] lg:top-[195px]  w-[110px] lg:w-[170px] h-[60px] text-[10px]  lg:text-[12px] text-RedPrime font-Montserrat cursor-pointer flex justify-between items-center uppercase  transition-all">
            (13Review)
            <div>
              {iconChange == 0 ? (
                <FavoriteBorder
                  className=" text-[10px] lg:text-[13px] text-RedPrime "
                  onClick={toggleChecked}
                />
              ) : (
                <Favorite className=" text-[10px] lg:text-[13px] text-RedPrime" />
              )}
            </div>
          </div>
          <div className=" relative flex justify-center items-center flex-col w-[50px] text-center font-Montserrat mt-[15px] ">
            {title}
            <div className="flex justify-between gap-8 items-center flex-row mt-[7px]">
              <p className=" font-Montserrat text-[15px] ">Rs.{offerPrice}</p>
              <p className=" font-Montserrat text-[15px]  text-gray-500">RS.{Price}</p>
              <hr className=" absolute ml-[87px] h-[2px] w-[70px] bg-gray-700 t-0" />
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
