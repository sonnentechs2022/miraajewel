import React, { useState } from "react";
import img from "../../Assets/Product/10.jpg";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import Ring from "../../Assets/PaymentOption/Rings.jpg";
import DemoImg from '../../Assets/CP 001 020/New_01.jpg'
import Demo2 from '../../Assets/RI 001 018/IMG_3075.jpg'
import Demo3 from '../../Assets/RI 001 018/IMG_3079.jpg'
import Demo4 from '../../Assets/RI 001 018/IMG_3091.jpg'
import DealSub from "./DealSub";

const data = [
  {
    id: 1,
    img: DemoImg,
    Review: "(12) Review",
    title:'Shruti Haasan Silver Classic Solitaire Ring',
    Price:'8200',
    offerPrice:'2200'

  },
  {
    id: 2,
    img: Demo2,
    Review: "(12) Review",
    title:'Shruti Haasan Silver Classic Solitaire Ring',
    Price:'8200',
    offerPrice:'2200'
  },
  {
    id: 3,
    img: Demo3,
    Review: "(12) Review",
    title:'Shruti Haasan Silver Classic Solitaire Ring',
    Price:'8200',
    offerPrice:'2200'
  },
  {
    id: 4,
    img: Demo4,
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
  const [active, setActive] = useState(false);
  const [proData,setProData]=useState(data)

  const handleChangeActive = () => {
    setActive((previousStar) => {
      return !previousStar;
    });
  };

  return (
    <>
     <div className="flex flex-col items-center justify-center ">
      <h1 className="  text-[20px] lg:text-[30px]  text-black font-Montserrat   uppercase mt-5">
        Deal of The Day
      </h1>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
      {proData.map((item) => {
        return (
        <DealSub
        img={item.img}
        Price={item.Price}
        Review={item.Review}
        offerPrice={item.offerPrice}
        title={item.title}
        id={item.id}
        />
        )
      })}
      </div>
      </div>
    </>
  );
}
