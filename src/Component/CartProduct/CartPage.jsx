import React, { useState } from "react";
import CartProductImg from "../../Assets/OfferImages/product77.webp";
import { NavLink } from "react-router-dom";
import { Add, Remove } from "@mui/icons-material";

import PRODUCTS from "../../data";

export default function CartPage() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  const [total,setTotal] =useState(PRODUCTS[0].price)
 


  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount((c) => Math.max(c - 1, 0));
  };

  return (
    <>
      <div className="h-screen">
        <div
          className="w-full absolute z-10 right-0 h-screen overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
          id="checkout"
        >
          <div className="flex md:flex-row flex-col justify-end" id="cart">
            <div
              className="lg:w-2/3 md:w-full  md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
              id="scroll"
            >
              <NavLink to="/Product">
                <div
                  className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-left"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>

                  <p className="text-sm pl-2 leading-none">Back</p>
                </div>
              </NavLink>
              <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
                Jewlery
              </p>
              {PRODUCTS.map((item) => {
                return(

                <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                  <div className="w-1/4">
                    <img
                      src={item.image}
                      key={item.id}
                      alt
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="md:pl-3 md:w-3/4">
                    <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                      {item.id}
                    </p>
                    <div className="flex items-center justify-between w-full pt-1">
                      <p className="text-base font-black leading-none text-gray-800">
                        {item.details}
                      </p>
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
                    </div>
                    <p className="text-xs leading-3 text-gray-600 pt-2">
                      Height: 10 inches
                    </p>
                    <p className="text-xs leading-3 text-gray-600 py-4">
                      Color: Black
                    </p>
                    <p className="w-96 text-xs leading-3 text-gray-600">
                      Composition: 100% calf leather
                    </p>
                    <div className="flex items-center justify-between pt-5 pr-6">
                      <div className="flex itemms-center">
                        <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                          Add to favorites
                        </p>
                        <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                          Remove
                        </p>
                      </div>
                      <p className="text-base font-black leading-none text-gray-800">
                        {item.price}
                      </p>
                    </div>
                  </div>
                </div>
                );
})}
            </div>
            <div className="xl:w-1/3 md:w-2/3  w-full bg-gray-100 h-screen">
              <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                <div>
                  <p className="text-4xl font-black leading-9 text-gray-800">
                    Summary
                  </p>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base leading-none text-gray-800">
                      9,000
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">
                      Shipping
                    </p>
                    <p className="text-base leading-none text-gray-800">30</p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">Tax</p>
                    <p className="text-base leading-none text-gray-800">35</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p className="text-2xl leading-normal text-gray-800">
                      Total
                    </p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                      10,460
                    </p>
                  </div>

                  <NavLink to="/Billingtab">
                    <button
                      onClick={() => setShow(!show)}
                      className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
                    >
                      Checkout
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
