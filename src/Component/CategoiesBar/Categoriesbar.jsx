import React, { useState, useMemo, createContext, useEffect } from "react";
import PRODUCTS from "../../data";
// import data from "./CategoriesData.json";
import { Link, NavLink } from "react-router-dom";
import { keys } from "@mui/system";
import FilterImg from "../../Assets/PaymentOption/FilterImg.png";
import CatFilter from "./CatFilter";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

export const FilterInfo = createContext();

export default function Categoriesbar({ handler }, props) {
  const [filterColor, setFilterColor] = useState();
  const [wData, setWData] = useState("0px");

  const [changeStyle, setChangeStyle] = useState({
    height: "0px",
    opacity: "0",
  });
  const [iconChange, setIconChange] = useState(false);

  const toggleChecked = () => setIconChange((value) => !value);

  console.log(filterColor);

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
          onClick={() =>
            wData === "270px" ? setWData("0px") : setWData("270px")
          }
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
          wData: wData,
        }}
      >
        <CatFilter />
      </FilterInfo.Provider>

      <div
        className={
          wData === "270px"
            ? " realtive grid grid-cols-1 ml-[270px] lg:grid-cols-3 lg:ml-[300px] overflow-hidden mt-5 gap-8 transform transition-all duration-1000  ease-in-out  "
            : "grid grid-cols-3 lg:grid-cols-4 overflow-hidden mt-5 gap-8 transform transition-all duration-1000  ease-in-out "
        }
      >
        {filteredList.map((element, index) => {
          return (
            <>
              <NavLink to="/Product" state={element}>
                <div className=" flex justify-center items-center flex-col w-[130px] h-[150px] lg:w-[250px] lg:h-[400px] gap-3">
                 <div className="w-[230px] h-[200px] overflow-hidden object-contain  ">
                 <img
                    className="  w-full h-full group-active:hidden p-2 cursor-pointer   hover:shadow-xl "
                    src={element.image}
                    key={index}
                  />
                 </div>
                  <div className="absolute top-[70px] lg:top-[30px] mr-[100px] lg:mr-[180px]  w-[70px] h-[20px] bg-RedPrime text-[8px]  flex justify-center items-center  ">
                    <h1 className="text-white  uppercase font-Montserrat text-[9px]">
                      Best Seller
                    </h1>
                  </div>
                  <div className="absolute top-[160px] lg:top-[210px]  w-[110px] lg:w-[160px] h-[60px] text-[10px]  lg:text-[12px] text-RedPrime font-Montserrat cursor-pointer flex justify-between items-center uppercase  transition-all">
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
                  <div className=" relative flex justify-center items-center flex-col w-[165px] text-center font-Montserrat mt-[10px] ">
                    {element.title}
                    <div className="flex justify-between gap-8 items-center flex-row mt-[7px]">
                      <p className=" font-Montserrat text-[15px]  ">Rs.5000</p>
                      <p className=" font-Montserrat text-[15px]  text-gray-500">
                        Rs.{element.price}
                      </p>
                      <hr className=" absolute ml-[87px] h-[2px] w-[70px] bg-gray-400 t-0" />
                    </div>
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
