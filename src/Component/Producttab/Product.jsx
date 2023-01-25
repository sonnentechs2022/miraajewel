import { useState, useRef } from "react";
import ProductImg from "../../Assets/Product/10.jpg";
import ProductImg2 from "../../Assets/Product/2.jpg";
import ProductImg3 from "../../Assets/Product/4.jpg";

import PromiseImg from "../../Assets/OfferImages/ProductImageContent.png";
import ReviewImg from "../../Assets/PartnerImg/1.jpg";
import MeganifyImg from "./MaganifyImg";
import { NavLink, useLocation } from "react-router-dom";
import ProductAcc from "./ProductAcc";

import {
  Home,
  ChevronRight,
  StarRate,
  Add,
  Remove,
  LocalMall,
  FavoriteBorder,
  KeyboardArrowDown,
} from "@mui/icons-material";

const a = ["⭐", "⭐", "⭐", "⭐", "⭐"];

const images = [ProductImg, ProductImg2, ProductImg3];

const AccData = [
  {
    id: 1,
    Head: "Description",
    subHead: "Brand",
    BrandName: "Zara",
    Color: "Red",
  },
  {
    id: 2,
    Head: "Exciting Offer",
    subHead: "Brand",
    BrandName: "Zara",
    Color: "Red",
  },
  {
    id: 3,
    Head: "Description",
    subHead: "Brand",
    BrandName: "Zara",
    Color: "Red",
  },
];

export default function Product() {
  const [img, setImg] = useState(images[0]);
  const [count, setCount] = useState(0);

  const [isActive, setIsActive] = useState(false);
  const [userList, setUsersList] = useState([]);
  const [starClicked, setStarClicked] = useState();


  const hoverHandler = (image) => {
    setImg(image);
  };
  // const refs = useRef([]);
  // refs.current = [];
  // const addRefs = (el) => {
  //   if (el && !refs.current.includes(el)) {
  //     refs.current.push(el);
  //   }
  // };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount((c) => Math.max(c - 1, 0));
  };

  const location = useLocation();

  return (
    <>
      <div className="flex flex-col lg:flex-row h-full w-full  lg:gap-10  ">
        <div className=" flex lg:flex-row w-full lg:w-1/2 lg:justify-center lg:align-center mt-5 lg:mt-20   ">
          <div className=" w-5/6 ml-5">
            <MeganifyImg src={location.state.image} />

            <div className="flex flex-row  w-full mt-5 gap-3  ">
              {AccData.map((image, i) => (
                <div
                  key={i}
                  onMouseOver={() => hoverHandler(image)}
                  // ref={addRefs}
                >
                  <img
                    className=" rounded-sm cursor-pointer  "
                    src={image}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-col w-full lg:w-1/2 items-center  lg:mt-24 lg:ml-4 border-4 rounded-md  border-RedPro p-4 lg:mr-[30px]  scroll-smooth   ">
          <div className="lg:flex items-center hidden ">
            <Home className="text-gray-500 text-sm" />
            <ChevronRight className="text-gray-500 text-sm" />
            <p className="text-gray-500 text-sm font-Montserrat">
              Shop by Category
            </p>
            <ChevronRight className="text-gray-500 text-sm" />
            <p className="font-Montserrat">Rings</p>
          </div>
          <h1 className="mt-10 text-[25px] lg:text-[30px] font-bold font-Montserrat">
            Multi Diamond Ring For Men
          </h1>
       

          <div className="mt-3 flex flex-row items-center">
          {[...Array(2)].map((star, idx) => {
    const actualIndex = idx + 1;

    return (
        <p key={idx} onClick={() => setStarClicked(actualIndex)}>
            {[...Array(actualIndex)].map((_, starIdx) => (
                <StarRate key={starIdx} className=" text-orange-300 text-sm" />
            ))}
        </p>
    );
})}
            {/* <StarRate className=" text-orange-300 text-sm" />
            <StarRate className=" text-orange-300 text-sm" />
            <StarRate className=" text-orange-300 text-sm" />
            <StarRate className=" text-orange-300 text-sm" /> */}
            <p className="ml-2 font-Montserrat">(4 Reviews)</p>
          </div>
          <p className="text-gray-500 text-sm mt-3 font-Montserrat">
            SKU: av102200
          </p>

          <h1 className=" flex flex-row text-red-500 text-2xl font-bold font-Montserrat  ">
            Rs. 4000
            <p className="ml-4 text-xl font-semibold text-red-500 font-Montserrat ">
              Rs. 8000
            </p>
            <hr className=" w-24 h-[3px] mt-3  rotate-3  absolute bg-red-500 ml-[120px] t-0 -z-10" />
          </h1>

          <div className="flex mt-8">
            <div className="flex items-center justify-center">
              <div
                onClick={decrementCount}
                className=" flex items-center justify-center shadow-md w-9 h-9 cursor-pointer hover:scale-110 ease-in-out duration-300"
              >
                <Remove className="text-black text-md " />
              </div>
              <div className="flex items-center justify-center ">
                <div className="w-14 h-14  text-md text-black font-bold flex items-center justify-center shadow-md ">
                  {count}
                </div>
              </div>
              <div
                onClick={incrementCount}
                className=" flex items-center justify-center shadow-md w-9 h-9 cursor-pointer hover:scale-110 ease-in-out duration-300"
              >
                <Add className="text-black text-sm" />
              </div>
            </div>

            <div className=" w-[140px] lg:w-[220px] h-[40px] lg:h-[45px] bg-RedPro ml-5 flex items-center justify-center rounded-md cursor-pointer hover:shadow-md hover:scale-105 ease-in-out duration-300">
              <LocalMall className=" text-white " />
              <p className=" text-white font-bold text-[13px] lg:text-lg font-Montserrat ">
                Add to Cart
              </p>
            </div>

            <NavLink to="/CartPage">
              <div className=" w-[80px] lg:w-[150px] h-[40px] lg:h-[45px] bg-RedPro ml-2 flex items-center justify-center rounded-md hover:shadow-md hover:scale-105 ease-in-out duration-300">
                <p className=" text-white font-bold text-[14px] lg:text-lg font-Montserrat ">
                  Buy Now
                </p>
              </div>
            </NavLink>
          </div>
          <div className=" w-11/12 h-[50px] bg-GrayPrime  flex items-center justify-center rounded-md mt-5 hover:shadow-md cursor-pointer hover:scale-105 ease-in-out duration-300 ml-[40px]">
            <FavoriteBorder className=" text-white mr-1" />
            <p className=" text-white font-bold text-md font-Montserrat ">
              Add to Watchlist
            </p>
          </div>

          <img
            src={PromiseImg}
            className=" w-3/4 h-[130px] lg:h-[150px] lg:ml-[20px] ml-[20px]"
            alt=""
          />
          {AccData.map((item) => {
            return (
              <ProductAcc
                Head={item.Head}
                Brand={item.BrandName}
                Color={item.Color}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center h-full mt-5 lg:mt-0 font-Montserrat">
        Reviews
      </div>
      <div className=" justify-center itmes-center h-full hidden lg:flex">
        <hr className="  w-[45%]  h-[1px] mt-[10px] mb-[20px] bg-gray-200" />
        <hr className=" w-[10%]  h-[2.5px] mt-[10px] mb-[20px] bg-blue-600" />
        <hr className=" w-[45%]  h-[1px] mt-[10px] mb-[20px] bg-gray-200" />
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center w-full h-auto">
        <div className=" flex flex-col justify-center items-start w-4/12 ml-[20px] ">
          <div className="flex justify-center items-center">
            <h1 className=" text-blue-500 text-[50px]  font-bold font-Montserrat">
              5.0
            </h1>
            <div className="ml-[15px]">
              <p className=" text-gray-500 font-Montserrat">Average Rating</p>
              <div className=" flex justify-center items-center">
                {a.map((i) => {
                  return <li className=" list-none">{i}</li>;
                })}
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center bg-gray-800 w-[140px] lg:w-5/12 h-[40px] lg:h-[50px] rounded-sm mb-[100px]">
            <p className=" uppercase text-white font-semibold lg:font-bold text-[13px] font-Montserrat ">
              Submit Review
            </p>
          </div>
        </div>
        <div className="w-full lg:w-8/12 ">
          <div className="flex justify-start items-center ml-[20px]">
            <img
              src={ReviewImg}
              alt=""
              className="w-[90px] h-[90px]  object-cover rounded-full"
            />
            <div className="flex flex-col ml-[20px]">
              <div className=" flex justify-start items-center">
                {a.map((i) => {
                  return <li className=" list-none">{i}</li>;
                })}
              </div>
              <p className=" text-[14px] font-medium mt-1">
                <p className=" text-gray-400 font-Montserrat">By</p> Sawan
                Mahajan <p className=" text-gray-400 font-Montserrat">on</p>
                2022/12/03
              </p>
              <h1 className=" text-[14px] text-gray-500 mt-1 font-Montserrat">
                Good Product
              </h1>
            </div>
          </div>
          <hr className=" w-full  h-[1px] mt-10 lg:mt-[50px]  lg:mb-[50px] bg-gray-200" />
        </div>
      </div>
    </>
  );
}
