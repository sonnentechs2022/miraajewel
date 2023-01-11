import React, { useState } from "react";
import { FavoriteBorder } from "@mui/icons-material";

export default function TrendingItems({ img, price, review, rating }) {
  const [changeStyle, setChangeStyle] = useState({
    height: "0px",
    opacity: "0",
  });

  const handleOver = () => {
    setChangeStyle({ height: "40px", opacity: "1" });
  };

  const handleOut = () => {
    setChangeStyle({ height: "0px", opacity: "0" });
  };

  return (
    <>
      <div
        className="flex-col justify-center items-center"
        onMouseOver={handleOver}
        onMouseOut={handleOut}
      >
        <div className="relative flex justify-center items-center overflow-hidden bg-no-repeat bg-cover h-[200px] lg:h-[300px]">
          <img src={img} alt="" className=" object-contain"/>
          <div className="absolute top-[50px] mr-[150px]  w-[80px] h-[20px] bg-blue-600 text-[10px] text-white font-medium flex justify-center items-center uppercase font-Nunito ">
            Best Saller
          </div>
          <div
            className="absolute top-[160px] lg:top-[260px] ml-[40px] w-[200px] lg:w-[240px] h-[0px] bg-blue-600 text-[12px] text-white font-semibold cursor-pointer flex justify-center items-center uppercase opacity-0 transition-all"
            style={{ height: changeStyle.height, opacity: changeStyle.opacity }}
          >
            <FavoriteBorder className="mr-2 font-Nunito" />
            Add to Watchlist
          </div>
        </div>
        <div className=" flex justify-center items-center">
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
        </div>
      </div>
    </>
  );
}
