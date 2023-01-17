import React from "react";
import {
  ArrowRightAlt,
  Facebook,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { FooterList } from "./FootertabList";
import { Link, useNavigate, NavLink } from "react-router-dom";
import Payment from "../../Assets/PartnerImg/PaymentMethod.png";
import Flipkart from "../../Assets/PartnerImg/Flipkart.png";
import Amazon from "../../Assets/PartnerImg/download.png";




export default function Footertab() {
  const navigate = useNavigate();
  return (
    <>
      <div className="  w-full h-full bg-FooterBg ">
        <div className=" lg:flex   justify-between w-11/12  align-middle md:ml-10 ml-5 ">
          <div className="mt-16">
            <h1 className=" text-xl text-black font-Montserrat">
              Subscribe to get updates about new products & offers
            </h1>
            <p className="  text-md text-black font-Montserrat">
              Get all the latest information, Sales and Offers.
            </p>
          </div>
          <div className="flex mt-16">
            <div className="h-[50px] w-[400px] mg:w-[300px] bg-white flex item-center">
              <input
                type="text"
                className=" outline-none text-sm placeholder:italic ml-4 placeholder:text-gray-400 placeholder:ml-4 font-Montserrat "
                placeholder="Email address here..."
              />
            </div>
            <div className=" flex justify-center items-center uppercase h-[50px] w-[150px] ml-5 bg-blue-600 text-white text-sm font-Montserrat">
              subscribe <ArrowRightAlt className="ml-2 font-thin" />
            </div>
          </div>
        </div>
        <hr className=" w-11/12  h-[1px] mt-[50px] bg-gray-700 ml-10" />
        <div className="grid grid-cols-1 md:grid-cols-4  gap-10 py-8 px-6  sm:grid-cols-1">
          <div className="">
            <h1 className="text-black text-xl font-Montserrat">Contact Info</h1>
            <p className="mt-2 text-black text-md font-Montserrat">
              Email:infomiraajewel.com
            </p>
            <p className="mt-2 text-black text-md font-Montserrat">
              ADDRESS :Khargone Madhya Pradesh-451001
            </p>
            <p className="mt-2 text-black text-md font-Montserrat">
              WORKING DAYS/HOURS:
            </p>
            <p className="mt-2 text-black text-md font-Montserrat">
              Monday to Friday 11:00 AM -6:00PM
            </p>
          </div>
          <div>
            <h1 className="text-black text-xl font-Montserrat">My Account</h1>
            <p className="mt-2 text-black text-md font-Montserratcursor-pointer">
              About Us
            </p>
            <NavLink to="/ContactUs">
              <p className="mt-2 text-black text-md font-Montserrat cursor-pointer">
                Contact Us
              </p>
            </NavLink>

            <p className="mt-2 text-black text-md font-Montserrat cursor-pointer">
              Refund Policy
            </p>

            <NavLink to="./TermPolicy">
              <p className="mt-2 text-black text-md font-Montserrat cursor-pointer">
                Terms & Condition
              </p>
            </NavLink>
          </div>
          <div>
            <h1 className="text-black text-xl font-Montserrat">Contact Us</h1>
            <NavLink to="/Login">
              <p className="mt-2 text-black text-md font-Montserrat cursor-pointer">
                <a href="#demo">Login</a>
              </p>
            </NavLink>
            <NavLink to="/SignUp">
              <p className="mt-2 text-black text-md font-Montserrat cursor-pointer">
                Register
              </p>
            </NavLink>
          </div>
          <div>
            <h1 className="text-black text-xl font-Montserrat">
              Channel Partner
            </h1>
            <div className="flex gap-4 mt-4">
              <img src={Amazon} className=" w-[40px] h-[40px]" alt="" />
              <img src={Flipkart} className=" w-[40px] h-[40px]" alt="" />
            </div>
          </div>
        </div>
        <hr className=" w-11/12  h-[1.5px] mt-[70px] bg-gray-700 ml-10" />

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3  lg:gap-20 py-8 px-6">
          <img src={Payment} className="  w-[150px] h-[50px]" alt="" />
          <h1 className=" text-gray-800 text-base font-Montserrat">
            Miraa Jewel © 2022. All Rights Reserved
          </h1>
          <div className="flex gap-2">
            <div
              onClick={() => {
                window.open("https://www.facebook.com/miraajewel");
              }}
              className="  flex items-center justify-center w-8 h-8 border-2 border-gray-500 rounded-full hover:bg-blue-900 hover:border-none cursor-pointer"
            >
              <Facebook className=" text-xs text-gray-500 hover:text-white" />
            </div>

            <div
              onClick={() => {
                window.open("https://www.instagram.com/miraajewels");
              }}
              className="  flex items-center justify-center w-8 h-8 border-2 border-gray-500 rounded-full  hover:bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:border-none cursor-pointer"
            >
              <Instagram className=" text-xs text-gray-500 hover:text-white" />
            </div>

            <div className=" flex items-center justify-center w-8 h-8 border-2 border-gray-500 rounded-full  hover:bg-blue-600 hover:border-none cursor-pointer">
              <LinkedIn className=" text-xs text-gray-500 hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
