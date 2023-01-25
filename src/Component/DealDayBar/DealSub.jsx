import React,{useState} from "react";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

export default function DealSub({img, Price, review,title,offerPrice,id}) {
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((previousStar) => {
      return !previousStar;
    });
  };
  return (
    <>
      <div className="relative flex flex-col justify-center items-center overflow-hidden bg-no-repeat bg-cover h-[280px] lg:h-[350px]">
        <img
          src={img}
          key={id}
          alt="hello"
          className=" object-fill  lg:mt-0 lg:h-[300px] lg:w-[300px] h-[175px]"
        />
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
                key={id}
              />
            ) : (
              <FavoriteBorder
                className=" text-[10px] lg:text-[13px] text-RedPrime"
                onClick={() => handleChangeActive()}
                key={id}
              />
            )}
          </div>
        </div>
        <div className=" relative flex justify-center items-center flex-col w-[150px] lg:w-[165px] text-[10px] lg:text-[15px] font-Montserrat mt-[15px]">
          {title}
          <div className="flex justify-between gap-8 items-center flex-row mt-[7px]">
            <p className=" font-Montserrat text-[13px] lg:text-[15px] ">
              Rs.{offerPrice}
            </p>
            <p className=" font-Montserrat  text-[13px] lg:text-[15px]  text-gray-500">
              RS.{Price}
            </p>
            <hr className=" absolute ml-[80px] lg:ml-[87px] h-[2px] w-[60px] lg:w-[70px] bg-gray-700 t-0" />
          </div>
        </div>
      </div>
    </>
  );
}
