import React, { useState, useMemo, createContext, useEffect } from "react";
import data from "../../data";
import bannerImg from "../../Assets/OfferImages/pexels-castorly-stock-3640960.jpg";
// import data from "./CategoriesData.json";
import { Link, NavLink } from "react-router-dom";
import { keys } from "@mui/system";
import FilterImg from "../../Assets/PaymentOption/FilterImg.png";
// import CatFilter from "./CatFilter";
import {
  FavoriteBorder,
  Favorite,
  KeyboardArrowDown,
} from "@mui/icons-material";
import CategoriesSub from "./CategoriesSub";

export const FilterInfo = createContext();

export default function Categoriesbar({ handler }, props) {
  // const [filterColor, setFilterColor] = useState();
  // const [wData, setWData] = useState("0px");

  // const [changeStyle, setChangeStyle] = useState({
  //   height: "0px",
  //   opacity: "0",
  // });
  const products = data;
  const [filterDataStyle, setFilterDataStyle] = useState();
  const [cartItems, setCartItems] = useState([]);

  const [acending, setAcending] = useState();
  const [categ, setCateg] = useState(products);
  const [sportList, setSportList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    setSportList(products);
  }, []);

  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return sportList;
    }
    return sportList.filter((item) => item.cateG === selectedCategory);
  }

  var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const handleClick = (event) => {
    setFilterDataStyle((current) => !current);
  };
  const handleAcending = () => {
    setAcending((current) => !current);
  };

  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((previousStar) => {
      return !previousStar;
    });
  };

 

  // console.log(filterColor);

  // const keys = ["name", "price"];

  // const [filterPrice, setfilterPrice] = React.useState(10);

  // const filterPriceHandler = (filterPrice) => {
  //   setfilterPrice(filterPrice);
  // };

  // console.log(filterColor);

  // function getFilteredList() {
  //   // Avoid filter when selectedCategory is null
  //   if (!filterPrice) {
  //     return handler;
  //   }

  //   return handler.filter((item) => item.price > filterPrice);
  // }

  // var filteredList = useMemo(getFilteredList, [filterPrice, handler]);

  const parsePrice = (x) => parseFloat(x.replace(/^\Rs./, "")) || 0;
  const sortedStudios = data
    .slice()
    .sort((a, b) => parsePrice(a.Price) - parsePrice(b.Price));

  const sortDecending = data
    .slice()
    .sort((a, b) => parsePrice(b.Price) - parsePrice(a.Price));

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <>
      {/* <div className="relative flex justify-end mr-10 cursor-pointer ">
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
      </FilterInfo.Provider> */}
      <div className="w-full h-[355px] mt-[30px] mb-[30px] border-t-[2px] border-b-[2px] border-gray-500">
        <img src={bannerImg} alt="" className="w-full h-[350px]" />
      </div>

      <div className="flex justify-around flex-row items-center sticky top-[20px] z-30">
        <div className="relative flex flex-col justify-center items-center   h-[150px]">
          <div
            className="ProductFilter border flex justify-center items-center w-[130px] h-[30px] border-gray-400  rounded-md cursor-pointer"
            onClick={handleClick}
          >
            <h1 className=" text-[14px] font-semibold font-Roboto">
              Product type
            </h1>
            <span className="text-xl md:ml-2  md:block hidden hover:rotate-180  ease-in-out duration-300">
              <KeyboardArrowDown />
            </span>
          </div>
          {filterDataStyle && (
            <div className="absolute top-[100px]  shadow-3xl  flex justify-items-start  bg-white z-50  ">
              <div className="    ">
                <ul className="m-[30px] flex  justify-items-start  flex-col">
                  <li className="flex justify-start items-center">
                    <input
                      type="checkbox"
                      className="mr-[20px] h-[15px] w-[15px]"
                    />
                    Rings
                  </li>
                  <li className="flex justify-start items-center">
                    <input
                      type="checkbox"
                      className="mr-[20px] h-[15px] w-[15px]"
                    />
                    Baslet
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="relative flex flex-col justify-center items-center   h-[150px]">
          <div
            className="ProductFilter border flex justify-center items-center w-[130px] h-[30px] border-gray-400  rounded-md cursor-pointer"
            onClick={handleClick}
          >
            <h1 className=" text-[14px] font-semibold font-Roboto">
              Product type
            </h1>
            <span
              className={
                filterDataStyle
                  ? "text-xl md:ml-2  md:block hidden rotate-180  ease-in-out duration-300"
                  : "text-xl md:ml-2  md:block hidden   ease-in-out duration-300"
              }
            >
              <KeyboardArrowDown />
            </span>
          </div>

          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value="Rings">Rings</option>
            <option value="Baslet">Baslet</option>
          </select>
          {filterDataStyle && (
            <div className="absolute top-[100px]  shadow-3xl  flex justify-items-start  bg-white z-50  ">
              <div className="    ">
                <ul className="m-[30px] flex  justify-items-start  flex-col">
                  <li className="flex justify-start items-center">
                    <input
                      type="radio"
                      name="drone"
                      className="mr-[20px] h-[15px] w-[15px]"
                      onClick={() => setAcending(sortedStudios)}
                    />
                    Price high to Low
                  </li>
                  <li className="flex justify-start items-center">
                    <input
                      type="radio"
                      name="drone"
                      className="mr-[20px] h-[15px] w-[15px]"
                      onClick={() => setAcending(sortDecending)}
                    />
                    Price Low to high
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="relative flex flex-col justify-center items-center   h-[150px]">
          <div
            className="ProductFilter border flex justify-center items-center w-[130px] h-[30px] border-gray-400  rounded-md cursor-pointer"
            onClick={handleClick}
          >
            <h1 className=" text-[14px] font-semibold font-Roboto">
              Product type
            </h1>
            <span className="text-xl md:ml-2  md:block hidden hover:rotate-180  ease-in-out duration-300">
              <KeyboardArrowDown />
            </span>
          </div>
          {filterDataStyle && (
            <div className="absolute top-[100px]  shadow-3xl  flex justify-items-start  bg-white z-50  ">
              <div className="    ">
                <ul className="m-[30px] flex  justify-items-start  flex-col">
                  <li className="flex justify-start items-center">
                    <input
                      type="checkbox"
                      className="mr-[20px] h-[15px] w-[15px]"
                    />
                    Rings
                  </li>
                  <li className="flex justify-start items-center">
                    <input
                      type="checkbox"
                      className="mr-[20px] h-[15px] w-[15px]"
                    />
                    Baslet
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="relative flex flex-col justify-center items-center   h-[150px]">
          <div
            className="ProductFilter border flex justify-center items-center w-[130px] h-[30px] border-gray-400  rounded-md cursor-pointer"
            onClick={handleClick}
          >
            <h1 className=" text-[14px] font-semibold font-Roboto">
              Product type
            </h1>
            <span className="text-xl md:ml-2  md:block hidden hover:rotate-180  ease-in-out duration-300">
              <KeyboardArrowDown />
            </span>
          </div>
          {filterDataStyle && (
            <div className="absolute top-[100px]  shadow-3xl  flex justify-items-start  bg-white z-50  ">
              <div className="    ">
                <ul className="m-[30px] flex  justify-items-start  flex-col">
                  <li className="flex justify-start items-center">
                    <input
                      type="checkbox"
                      className="mr-[20px] h-[15px] w-[15px]"
                    />
                    Rings
                  </li>
                  <li className="flex justify-start items-center">
                    <input
                      type="checkbox"
                      className="mr-[20px] h-[15px] w-[15px]"
                    />
                    Baslet
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        {filteredList.map((item) => {
          return (
            <div className="relative flex flex-col justify-center items-center overflow-hidden bg-no-repeat bg-cover h-[280px] lg:h-[380px] mb-10">
              <NavLink to="/Product" state={item}>
                <img
                  src={item.image}
                  key={item.id}
                  alt="hello"
                  className=" object-fill  lg:mt-0 lg:h-[250px] lg:w-[300px] h-[175px]"
                />
              </NavLink>
              <div className="absolute top-[25px] lg:top-[20px] mr-[100px] lg:mr-[220px]  w-[80px] h-[25px] bg-RedPrime text-[8px]  flex justify-center items-center  ">
                <h1 className="text-white  uppercase font-Montserrat text-[9px]">
                  Best Seller
                </h1>
              </div>
              <div className="absolute top-[150px] lg:top-[225px]  w-[130px] lg:w-[290px] h-[60px] text-[10px]  lg:text-[12px] text-RedPrime font-Montserrat cursor-pointer flex justify-between items-center uppercase  transition-all">
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
              <div className=" relative flex justify-items-start  flex-col w-[190px] lg:w-[165px] text-[10px]  lg:text-[15px] font-Montserrat mt-[15px]">
                {item.title}
                <div className="flex justify-between gap-8 items-center flex-row mt-[7px]">
                  <p className=" font-Montserrat text-[13px] lg:text-[15px] ">
                    Rs.{item.offerPrice}
                  </p>
                  <p className=" font-Montserrat  text-[13px] lg:text-[15px]  text-gray-500">
                    RS.{item.Price}
                  </p>
                  <hr className=" absolute ml-[80px] lg:ml-[98px] h-[2px] w-[60px] lg:w-[70px] bg-gray-700 t-0" />
                </div>
              </div>
            </div>
            // <CategoriesSub
            // state={item}
            // img={item.img}
            // Price={item.Price}
            // Review={item.Review}
            // offerPrice={item.offerPrice}
            // title={item.title}
            // id={item.id}
            // />
          );
        })}
      </div>
    </>
  );
}
