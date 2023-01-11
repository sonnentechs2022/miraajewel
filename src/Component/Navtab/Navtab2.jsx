import { useState } from "react";
import Logo from "../../Assets/PartnerImg/Miraa.png";
import { Link, NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import {
  AllOut,
  ArrowDropDownCircle,
  Person,
  FavoriteBorder,
  LocalMallOutlined,
  Search,
  KeyboardArrowDown,
} from "@mui/icons-material";

export default function Navtab2() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white" id="demo">
      <div className="flex items-center font-medium justify-around">
        <div className=" p-3 md:w-auto w-full flex justify-between   ">
          <Link to="">
            <img src={Logo} alt="logo" className="md:cursor-pointer h-10 " />
          </Link>
          <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden  items-center gap-4 text-black-1200   ml-25 ">
          <li>
            <Link to="" className="py-5 px-3 inline-block font-sm  font-Nunito font-semibold ">
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
          </ul>
        </div>
        {/* <div className="md:block hidden"></div>
      
        <ul
          className={`
        md:hidden bg-white absolute w-full h-full bottom-0
        py-24 pl-4
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul> */}
      </div>
    </nav>
  );
}
