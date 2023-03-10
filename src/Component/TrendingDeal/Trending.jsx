import React, { useState } from "react";
import Ring from "../../Assets/PaymentOption/Rings.jpg";
import TrendingItems from "./TrendingItems";
import LeftIcon from "../../Assets/Icons/icons8-more-than-50.png";
import RightIcon from "../../Assets/Icons/icons8-less-than-50.png";

const a = ["⭐", "⭐", "⭐", "⭐", "⭐"];
export default function Trending() {
  const data = [
    {
      img: Ring,
      Review: "(12) Review",
      Rating: a,
      title: "Shruti Haasan Silver Classic ",
      Price: "8200",
      offerPrice: "2200",
    },
    {
      img: Ring,
      Review: "(12) Review",
      Rating: a,
      title:'Shruti Haasan Silver Classic ',
      Price:'8200',
      offerPrice:'2200'
    },
    {
      img: Ring,
      Review: "(12) Review",
      Rating: a,
      title:'Shruti Haasan Silver Classic ',
      Price:'8200',
      offerPrice:'2200'
    },
    {
      img: Ring,
      Review: "(12) Review",
      Rating: a,
      title:'Shruti Haasan Silver Classic ',
      Price:'8200',
      offerPrice:'2200'
    },
    {
      img: Ring,
      Review: "(12) Review",
      Rating: a,
      title:'Shruti Haasan Silver Classic  ',
      Price:'8200',
      offerPrice:'2200'
    },
  ];

  const [heightVal, setHeightVal] = useState("0px");

  const handleOver = (e) => {
    console.log(e.style);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="  text-[20px] lg:text-[30px]  text-black font-Montserrat   uppercase mt-5">
        Trending products
      </h1>
      <div className="flex flex-row  items-center justify-center ">
        <img
          src={RightIcon}
          className=" h-[50px] w-[20px] lg:h-[80px] lg:w-[30px] cursor-pointer"
          alt=""
        />
        <div className="relative overflow-x-scroll scroll  scroll-smooth whitespace-nowrap overflow-auto scrollbar-hide gap-2 ">
          {data.map((item) => {
            return (
              <>
                <TrendingItems
                  img={item.img}
                  review={item.Review}
                  rating={item.Rating}
                  Price={item.Price}
                  title={item.title}
                  offerPrice={item.offerPrice}
                />
              </>
            );
          })}
        </div>

        <img
          src={LeftIcon}
          className="h-[50px] w-[20px] lg:h-[80px] lg:w-[30px] cursor-pointer"
          alt=""
        />
      </div>
    </div>
  );
}
