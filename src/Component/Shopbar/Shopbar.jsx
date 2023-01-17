import { useEffect, useState, useRef } from "react";
// import { Carousel } from "react-responsive-carousel";
import PRODUCT from "../../data";
import { KeyboardArrowLeft, ChevronRight } from "@mui/icons-material";
import { NavLink, Outlet } from "react-router-dom";
import OFFERIMG from "./ShopbarData";
import PromiseImg from "../../Assets/OfferImages/promises-min (1).jpg";
import ProductCate from "../ProductCategories/ProductCate";
// import Testimonial2 from "../Testimonial/Testimonial2";
import Testimonial from "../Testimonial/Testimonial";

import Trending from "../TrendingDeal/Trending";
import Collection from "../Collection/Colection";
import DealBar from "../DealDayBar/DealBar";
import ShopColor from "../ShopByColor/ShopColor";
import Banner from "../BannerBar/Banner";

export default function Shopbar() {
  const [bgImages, setBgImages] = useState(0);
  const bgImf = [
    {
      bg: require("../../Assets/OfferImages/38New Arrivals.png"),
    },
    {
      bg: require("../../Assets/OfferImages/626New Year.png"),
    },

    {
      bg: require("../../Assets/OfferImages/267Grand Opening.png"),
    },
  ];

  const handleChange = () => {
    setTimeout(() => {
      bgImages === 2 ? setBgImages(0) : setBgImages(bgImages + 1);
    }, 3000);
  };
  const handleOnClickleft = () => {
    bgImages < 1 ? setBgImages(2) : setBgImages(bgImages - 1);
  };
  const handleOnClickRight = () => {
    bgImages === 2 ? setBgImages(0) : setBgImages(bgImages + 1);
  };
  useEffect(() => {
    handleChange();
  }, [bgImages]);

  return (
    <>
      <div className=" flex flex-row items-center">
        {/* <KeyboardArrowLeft
          className="opacity-50 cursor-pointer hover:opacity-100 mt-[130px] "
          size={40}
          onClick={handleOnClickleft}
        /> */}
        <img
          src={bgImf[bgImages]?.bg}
          className="h-[180px] lg:h-[400px] w-screen transition  duration-200 ease-in-out "
        />
        {/* <ChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100 mt-[130px] "
          size={30}
          onClick={handleOnClickRight}
        /> */}
      </div>

      <div className="carousel lg:my-8">
        <h1 className="flex text-[24px]  lg:text-[30px]  content-center justify-center mt-3 mb-2  lg:mb-5 font-Montserrat">
          Popular Categories
        </h1>
        <div className="relative flex items-center">
          {/* <KeyboardArrowLeft
            className="opacity-50 cursor-pointer hover:opacity-100 "
            size={40}
            onClick={slideLeft}
          /> */}
          <NavLink to="/Categoriesbar">
            <div
              id="slider"
              className=" w-full grid grid-cols-7 grid-row-1 gap-1 lg:gap-3 lg:pl-1 lg:pr-1 rounded"
            >
              {PRODUCT.map((item, index) => {
                return (
                  <>
                    <div className="   hover:scale-105 ease-in-out duration-300 hover:shadow-xl ">
                      <img
                        className="  w-[80px] h-[80px] lg:w-[178px] lg:h-[170px]  object-cover group-active:hidden  cursor-pointer   "
                        src={item.image}
                      />
                      <div className="flex  flex-col justify-center items-center  w-[51px] h-[40px]  lg:w-[170px] bottom-[3px] lg:bottom-[2px]  bg- bg-white  lg:h-[60px] border-[2px] object-cover">
                        <h3
                          className=" text-[10px] lg:text-[13px]  text-RedPrime lg:text-md  font-Montserrat  "
                          key={index}
                        >
                          {item.price}
                        </h3>
                        <p className=" text-[13px] lg:text-[18px] font-medium text-gray-800 font-Montserrat hidden lg:block">
                          Explore
                          <ChevronRight className=" h-[10px] lg:text-[18px] font-thin text-gray-800" />
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </NavLink>
          {/* <ChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100 "
            size={30}
            onClick={slideRight}
          /> */}
          <Outlet />
        </div>
        <div className="h-full w-full  mt-5">
          <img src={PromiseImg} alt="" />
        </div>
        {/* <ProductCate /> */}
        <DealBar />
        <Collection />
        <Trending />
        <ShopColor />
        <Banner />
        <Testimonial />
      </div>
    </>
  );
}
