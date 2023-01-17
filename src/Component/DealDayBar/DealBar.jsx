import React, { useState } from "react";
import img from "../../Assets/Product/10.jpg";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import Ring from "../../Assets/PaymentOption/Rings.jpg";

const data = [
  {
    id: 1,
    img: Ring,
    Review: "(12) Review",
    title:'Shruti Haasan Silver Classic Solitaire Ring',
    Price:'8200',
    offerPrice:'2200'

  },
  {
    id: 2,
    img: Ring,
    Review: "(12) Review",
    title:'Shruti Haasan Silver Classic Solitaire Ring',
    Price:'8200',
    offerPrice:'2200'
  },
  {
    id: 3,
    img: Ring,
    Review: "(12) Review",
    title:'Shruti Haasan Silver Classic Solitaire Ring',
    Price:'8200',
    offerPrice:'2200'
  },
  {
    id: 4,
    img: Ring,
    Review: "(12) Review",
    title:'Shruti Haasan Silver Classic Solitaire Ring',
    Price:'8200',
    offerPrice:'2200'
  },
];

export default function DealBar() {
  const [changeStyle, setChangeStyle] = useState({
    height: "0px",
    opacity: "0",
  });
  const [iconChange, setIconChange] = useState(false);

  const toggleChecked = () => setIconChange((value) => !value);

  return (
    <>
    <div className="flex flex-row justify-between">
      {data.map((item) => {
        return (
        <div className="relative flex flex-col justify-center items-center overflow-hidden bg-no-repeat bg-cover h-[240px] lg:h-[350px]">
          <img
            src={item.img}
            key={item.id}
            alt="hello"
            className=" object-fill mt-24 lg:mt-0 lg:h-60 h-[175px]"
          />
          <div className="absolute top-[70px] lg:top-[50px] mr-[80px] lg:mr-[140px]  w-[70px] h-[20px] bg-RedPrime text-[8px]  flex justify-center items-center  ">
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
          <div className=" relative flex justify-center items-center flex-col w-[165px] text-center font-Montserrat mt-[15px]">
            {item.title}
            <div className="flex justify-between gap-8 items-center flex-row mt-[7px]">
              <p className=" font-Montserrat text-[15px] ">Rs.{item.offerPrice}</p>
              <p className=" font-Montserrat text-[15px]  text-gray-500">RS.{item.Price}</p>
              <hr className=" absolute ml-[87px] h-[2px] w-[70px] bg-gray-700 t-0" />
            </div>
          </div>
        </div>
        )
      })}
      </div>
    </>
  );
}
