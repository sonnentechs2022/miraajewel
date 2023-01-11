import React, { useState, useContext } from "react";
// import InputRange from "react-input-range";

import { FilterInfo } from "./Categoriesbar";

export default function CatFilter() {
  const [priceData, setPriceData] = useState(1);

  const { filterPriceHandler, filterColorHandler, setFilterColor, wData } =
    useContext(FilterInfo);

  const handleOnchange = (e) => {
    setPriceData(e.target.value);
    filterPriceHandler(e.target.value);
  };

  const removeFilter = () => {
    setPriceData(1);
    filterPriceHandler(1);
    setFilterColor();
  };

  const colorData = [
    "red",
    "blue",
    "green",
    "purple",
    "gray",
    "pink",
    "gold",
    "silver",
  ];

  return (
    <>
      <div
        className="sidebar fixed  top-0 bottom-0 lg:left-0   lg:w-[300px]  text-center bg-gray-900 transform transition-all duration-1000  ease-in-out "
        style={{ width: wData }}
      >
        <div className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory scrollbar-hide ">
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex justify-between items-center">
              <h1 className="font-bold text-gray-200 text-[25px] ">Filter</h1>
              <p
                className=" font-normal text-blue-400 text-[18px] cursor-pointer"
                onClick={removeFilter}
              >
                Clear All
              </p>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center ">
            <h1 className="cursor-pointer  hover:bg-blue-600 font-medium  text-[25px] text-gray-100">
              Price
            </h1>
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 font-medium  text-[18px] text-gray-100">
              {priceData}.00
            </h1>
            <input
              type="range"
              min="0"
              max="200"
              step="2"
              value={priceData}
              onChange={handleOnchange}
              className="w-[200px]"
            />
          </div>
          <div className=" flex flex-col justify-center items-center ">
            <h1 className="cursor-pointer hover:bg-blue-600  font-medium  mt-2 text-[25px] text-gray-100">
              Color
            </h1>
            <div className="grid grid-cols-3  overflow-hidden gap-2 mt-3 ">
              {colorData.map((v) => {
                return (
                  <div
                    className="h-[30px] w-[30px]  rounded-full  hover:border-4 hove:border-white "
                    style={{ backgroundColor: v }}
                    value={v}
                    onClick={() => setFilterColor(v)}
                  ></div>
                );
              })}
            </div>
          </div>

          <div>
            <h1 className="cursor-pointer  hover:bg-blue-600  font-medium  mt-4 text-[25px] text-gray-100">
              Metal
            </h1>
            <p className="ml-5 mt-2 text-[15px] font-normal text-gray-100 hover:text-red-400 cursor-pointer">
              Silver
            </p>
            <p className="ml-5 mt-2 text-[15px] font-normal text-gray-100 hover:text-red-400 cursor-pointer">
              Gold
            </p>
            <p className="ml-5 mt-2 text-[15px] font-normal text-gray-100 hover:text-red-400 cursor-pointer">
              Titanium
            </p>
          </div>
          <div>
            <h1 className="cursor-pointer  hover:bg-blue-600  font-medium  mt-4 text-[25px] text-gray-100">
              Categories
            </h1>
            <p className="ml-5 mt-2 text-[15px] font-normal text-gray-100 hover:text-red-400 cursor-pointer">
              Rings
            </p>
            <p className="ml-5 mt-2 text-[15px] font-normal text-gray-100 hover:text-red-400 cursor-pointer">
              Pins
            </p>
            <p className="ml-5 mt-2 text-[15px] font-normal text-gray-100 hover:text-red-400 cursor-pointer">
              Anklets
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
