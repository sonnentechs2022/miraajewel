import { useState } from "react";
import Logo from "../../Assets/PartnerImg/Miraa.png";
import { Link, NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { Links } from "./MyNavLinks";
import Topbar from "../Topbar/Topbar";


import {
  AllOut,
  ArrowDropDownCircle,
  Person,
  FavoriteBorder,
  LocalMallOutlined,
  Search,
  KeyboardArrowDown,
  Menu,
} from "@mui/icons-material";

export default function Navtab2() {
  const [open, setOpen] = useState(false);
  const [sideData, setSideData] = useState("0px");

  return (
    <>
      <nav className="bg-white w-full sticky -top-1 z-30" id="demo">
        <div className="flex items-center font-medium justify-around relative z-10">
          <div className=" p-3 md:w-auto w-full flex justify-between   ">
            <Link to="/version2">
              <img src={Logo} alt="logo" className="md:cursor-pointer h-10 " />
            </Link>
            <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
          <ul className="md:flex hidden  items-center  text-black-1200 ml-[25px]  lg:ml-[60px] ">
            <li>
              <Link
                to="/version2"
                className="py-5 px-3 inline-block font-sm  font-Montserrat  "
              >
                Home
              </Link>
            </li>

            <NavLinks />
          </ul>
          <div className="">
            <ul className=" flex md:flex-row  items-center justify-around">
              <NavLink to="/Login">
                <li className="m-2.5">
                  <Person className="h-60 w-60" />
                </li>
              </NavLink>
              <li className="m-2.5 ">
                <div className=" absolute w-4 h-4 bg-blue-600 rounded-full t-0 ml-4"></div>
                <FavoriteBorder className="h-60 w-60 cursor-pointer  " />
              </li>
              <NavLink to="/CartPage">
                <li className="m-2.5">
                  <div className=" absolute w-4 h-4 bg-blue-600 rounded-full t-0 ml-4"></div>
                  <LocalMallOutlined className="h-90 w-60" />
                </li>
              </NavLink>
              <li
                className=" cursor-pointer lg:hidden"
                onClick={() =>
                  sideData === "240px"
                    ? setSideData("0px")
                    : setSideData("240px")
                }
              >
                <Menu />
              </li>
            </ul>
          </div>
          {/* <div style={{ sideData }}>
        <ul
          className={`
          
          sidebar fixed  top-0 bottom-0 left-0   w-[300px]  text-center bg-gray-900 transform transition-all duration-1000  ease-in-out
        `}
          
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block text-white">
              Home
            </Link>
          </li>
          <NavLinks className="text-white" />
        </ul>
        </div> */}
        </div>
      </nav>
    </>
  );
}
