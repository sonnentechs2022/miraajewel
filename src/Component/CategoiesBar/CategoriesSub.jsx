import React,{useState} from 'react'
import {
  FavoriteBorder,
  Favorite,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
export default function CategoriesSub (img, Price, review,title,offerPrice,id,state) {
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((previousStar) => {
      return !previousStar;
    });
  };
  return (
   <>
   <div className="relative flex flex-col justify-center items-center overflow-hidden bg-no-repeat bg-cover h-[280px] lg:h-[380px] mb-10">
              <NavLink to="/Product" state={state}>
                <img
                  src={img}
                  key={id}
                  alt="hello"
                  className=" object-fill  lg:mt-0 lg:h-[300px] lg:w-[300px] h-[175px]"
                />
              </NavLink>
              <div className="absolute top-[25px] lg:top-[0px] mr-[100px] lg:mr-[220px]  w-[80px] h-[25px] bg-RedPrime text-[8px]  flex justify-center items-center  ">
                <h1 className="text-white  uppercase font-Montserrat text-[9px]">
                  Best Seller
                </h1>
              </div>
              <div className="absolute top-[150px] lg:top-[215px]  w-[130px] lg:w-[290px] h-[60px] text-[10px]  lg:text-[12px] text-RedPrime font-Montserrat cursor-pointer flex justify-between items-center uppercase  transition-all">
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
                {title}
                <div className="flex justify-between gap-8 items-center flex-row mt-[7px]">
                  <p className=" font-Montserrat text-[13px] lg:text-[15px] ">
                    Rs.{offerPrice}
                  </p>
                  <p className=" font-Montserrat  text-[13px] lg:text-[15px]  text-gray-500">
                    RS.{Price}
                  </p>
                  <hr className=" absolute ml-[80px] lg:ml-[98px] h-[2px] w-[60px] lg:w-[70px] bg-gray-700 t-0" />
                </div>
              </div>
            </div>
   </>
  )
}
