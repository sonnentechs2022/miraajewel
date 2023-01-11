import React, { useState } from "react";
import Ring from "../../Assets/PaymentOption/Rings.jpg";
import TrendingItems from "./TrendingItems";

const a = ["⭐", "⭐", "⭐", "⭐", "⭐"];
export default function Trending() {
  const data = [
    {
      img: Ring,
      Review: "(12) Review",
      Rating: a,
      Price: "5000",
    },
    {
      img: Ring,
      Review: "(12) Review",
      Rating: a,
      Price: "5000",
    },
    {
      img: Ring,
      Review: "(12) Review",
      Rating: a,
      Price: "5000",
    },
    {
      img: Ring,
      Review: "(12) Review",
      Rating: a,
      Price: "5000",
    },
  ];

  const [heightVal, setHeightVal] = useState("0px");

  const handleOver = (e) => {
    console.log(e.style);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="  text-[20px] lg:text-[30px]  text-black font-semibold   font-Nunito uppercase mt-5">Trending products</h1>
      <div className="grid grid-col-1 lg:grid-cols-4 ">
        {data.map((item) => {
      return <TrendingItems
            img={item.img}
            review={item.Review}
            rating={item.Rating}
            price={item.Price}
          />;
        })}
      </div>
    </div>
  );
}
