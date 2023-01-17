import React from 'react'
import img from "../../Assets/Product/10.jpg";
import deal1 from "../../Assets/PaymentOption/deal1.jpeg";
import deal2 from "../../Assets/PaymentOption/Deal2.png";


const data = [
  {
    id: 1,
    img: img,
    Review: "(12) Review",
  },
  {
    id: 2,
    img: img,
    Review: "(12) Review",
  },
  {
    id: 3,
    img: img,
    Review: "(12) Review",
  },
  {
    id: 4,
    img: img,
    Review: "(12) Review",
  },
];

export default function ShopColor() {
  return (
    <>
    <div className="flex flex-col justify-center items-center mt-[30px]  lg:mt-[35px] mb-5 w-full">
    <h1 className="  text-[20px] lg:text-[30px] uppercase mb-5 text-black font-Montserrat">
         Shop By Color
        </h1>
        
        <div className="flex  justify-center w-full h-auto">
          <div className='  rounded-md w-6/12'>
            <img
              src={deal1}
              className="object-fill hover:scale-105 transition-all duration-500 cursor-pointer h-[160px] lg:h-[250px]"
              alt=""
            />
          </div>
          <div className=' rounded-md w-6/12'>
            <img
              src={deal2}
              className=" object-fill hover:scale-105 transition-all duration-500 cursor-pointer h-[160px] lg:h-[250px]"
              alt=""
            />
          </div>
        </div>
      </div>
  </>
  )
}
