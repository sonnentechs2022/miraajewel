import React, { useState, useMemo, createContext, useEffect } from "react";
import PRODUCTS from "../../data";
// import data from "./CategoriesData.json";
import { Link, NavLink } from "react-router-dom";
import { keys } from "@mui/system";
import FilterImg from "../../Assets/PaymentOption/FilterImg.png";
import CatFilter from "./CatFilter";

export const FilterInfo = createContext();

export default function Categoriesbar({ handler }, props) {
  
  const [filterColor, setFilterColor] = useState();
  const [wData, setWData] = useState("0px");


  console.log(filterColor)



  const keys = ["name", "price"];

  const [filterPrice, setfilterPrice] = React.useState(10);

  const filterPriceHandler = (filterPrice) => {
    setfilterPrice(filterPrice);
  };

  console.log(filterColor);

  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!filterPrice) {
      return handler;
    }

    return handler.filter((item) => item.price > filterPrice);
  }

  var filteredList = useMemo(getFilteredList, [filterPrice, handler]);

  return (
    <>
      <div className="relative flex justify-end mr-10 cursor-pointer ">
        <div
          className=" w-[30px h-[30px] lg:w-[50px] lg:h-[50px] bg-gray-200 rounded-full flex justify-center items-center "
          onClick={()=> wData==='270px' ? setWData('0px'): setWData('270px')}
        >
          <img
            src={FilterImg}
            className=" w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] "
            alt=""
          />
        </div>
      </div>
      <FilterInfo.Provider
        value={{
          filterPriceHandler: filterPriceHandler,

          setFilterColor: setFilterColor,
          wData:wData
        }}
      >
        <CatFilter />
      </FilterInfo.Provider>
      
      <div className={ wData==="270px" ?" realtive grid grid-cols-1 ml-[270px] lg:grid-cols-3 lg:ml-[300px] overflow-hidden mt-5 gap-8 transform transition-all duration-1000  ease-in-out  ":"grid grid-cols-3 lg:grid-cols-4 overflow-hidden mt-5 gap-8 transform transition-all duration-1000  ease-in-out "}>
        {filteredList.map((element, index) => {
          return (
            <>
              <NavLink to="/Product" state={element}>
                <div className=" relative w-[130px] h-[150px] lg:w-[300px] lg:h-[300px]">
                  <img
                    className="  w-full h-full gap-4  object-full   group-active:hidden p-2 cursor-pointer  rounded-xl hover:shadow-xl "
                    src={element.image}
                    key={index}
                  />

                  <div className="absolute flex   flex-row item-center justify-center h-[50px] w-[113px] lg:w-[285px]  bottom-[10px] rounded-b-lg left-2 right-0  bg-gray-800 opacity-70">
                    <h3
                      className="text-[13px] lg:text-md text-white font-bold ml-1 lg:ml-2"
                      key={index}
                    >
                      {element.price}
                    </h3>
                    <h3
                      className=" text-[12px] lg:text-md text-white font-medium lg:font-semibold ml-2"
                      key={index}
                    >
                      {element.title}
                    </h3>
                  </div>
                </div>
              </NavLink>
            </>
          );
        })}
      </div>
    </>
  );
}
