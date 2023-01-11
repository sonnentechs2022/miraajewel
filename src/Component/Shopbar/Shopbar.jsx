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
import Dealbar from "../DealBar/Dealbar";
import Trending from "../TrendingDeal/Trending";

export default function Shopbar() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideLeft2 = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft - window.innerWidth;
    // setTimeout(slideLeft2, 2000);
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const slideRight2 = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft + window.innerWidth;
    // setTimeout(slideRight2, 7000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slideRight2();
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      slideLeft2();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="  align-middle flex   items-center  ">
        <KeyboardArrowLeft
          className="opacity-50 cursor-pointer hover:opacity-100 hover:text-xl"
          size={40}
          onClick={slideLeft2}
        />
        <div
          id="slider2"
          className="aspect-w-16 aspect-h-9  overflow-x-scroll scroll  scroll-smooth whitespace-nowrap overflow-auto scrollbar-hide"
        >
          {OFFERIMG.map((item) => {
            return (
              <img
                src={item.image}
                alt=""
                className="w-full h-[170px] lg:h-[350px]  object-fill inline-block  cursor-pointer "
                id="OfferSlider"
              />
            );
          })}
        </div>
        <ChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100 "
          size={30}
          onClick={slideRight2}
        />
      </div>

      <div className="carousel my-8 ">
        <h1 className="flex  text-[30px] font-bold content-center justify-center mt- mb-5 font-Nunito">
          Popular Categories
        </h1>
        <div className="relative flex items-center">
          <KeyboardArrowLeft
            className="opacity-50 cursor-pointer hover:opacity-100 "
            size={40}
            onClick={slideLeft}
          />
          <NavLink to="/Categoriesbar">
            <div
              id="slider"
              className="  relative overflow-x-scroll scroll  scroll-smooth whitespace-nowrap overflow-auto scrollbar-hide"
            >
              {PRODUCT.map((item,index) => {
                return (
                  <>
                    <div className=" inline-block relative  hover:scale-105 ease-in-out duration-300 hover:shadow-xl ">
                      <img
                        className="  w-[70px] h-[70px] lg:w-[170px] lg:h-[170px]  object-cover group-active:hidden p-0.5  lg:p-1.5 cursor-pointer  rounded-xl "
                        src={item.image}
                      />
                      <div className="flex justify-center items-center absolute w-[65px] h-[25px] ml-[3px] lg:w-[157px] bottom-[3px] lg:bottom-[6px] lg:ml-[6.5px] bg-gray-600 bg-opacity-60  lg:h-[45px] rounded-b-md object-cover">
                      <h3
                        className=" text-[13px] lg:text-md text-white font-bold  "
                        key={index}
                      >
                        {item.price}
                      </h3>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </NavLink>
          <ChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100 "
            size={30}
            onClick={slideRight}
          />
          <Outlet />
        </div>
        <div className="h-full w-full  mt-5">
          <img src={PromiseImg} alt="" />
        </div>
        <ProductCate />
        <Dealbar />
        <Trending />
        <Testimonial />
      </div>
    </>
  );
}
