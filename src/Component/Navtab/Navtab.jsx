import "./Navtab.css";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import {IronIcon} from '@ionic/react'

import {
  AllOut,
  ArrowDropDownCircle,
  Person,
  FavoriteBorder,
  LocalMallOutlined,
  Search,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { useState } from "react";
import Logo from "../../Assets/Miraa.png";

export function Navtab() {
  const [navlist, setnavlist] = useState([
    "Home",
    "Collection",
    "New Arrivals",
    "Gifts",
    "Silver Pooja Items",
    "Festive",
    "More",
  ]);
  const [navLeftlist, setnavLeftlist] = useState([
    "Home",
    "Collection",
    "New Arrivals",
    "Gifts",
    "Silver Pooja Items",
    "Festive",
    "More",
    "Shop",
    "ContactUs"
    
  ]);
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <div className="navbarContainer ">
        <div className="navbarLeft">
          <img src={Logo} alt="logo_img" className="logoImg" />
        </div>
        <div className="navbarCenter">
          <ul className="navbarCenterList">
            {navlist.map((list, index) => (
              <li className="navbarListCeterItems" key={index}>
                {list} <KeyboardArrowDown className="navbarCenterIcons" onClick={() => setOpen(!open)}/>
              </li>
              
            ))}
            <NavLinks/>
          </ul>
        </div>

        <div className="navbarRight">
          <ul className="navRightList">
            <li className="navRightlistItems">
              <Search className="navRightListIcons" />
            </li>
            <li className="navRightlistItems">
              <Person className="navRightListIcons" />
            </li>
            <li className="navRightlistItems">
              <FavoriteBorder className="navRightListIcons" />
            </li>
            <li className="navRightlistItems">
              <LocalMallOutlined className="navRightListIcons" />
            </li>
          </ul>
        </div>
        <ul
          className={`
        md:hidden bg-white absolute w-full h-full bottom-0
        py-24 pl-4
        `}
        >
          {navLeftlist.map((leftList, index) => (
          <li className="py-7 px-3 inline-block" key={index}>
            {leftList} 
          </li>
            ))}
        </ul>
      </div>
    </>
  );
}
