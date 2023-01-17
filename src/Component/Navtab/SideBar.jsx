import { useContext, useState } from "react";

import { Link, NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

import { sideBarInfo } from "./Navtab2";
// import DehazeIcon from '@mui/icons-material/Dehaze';
export default function SideBar() {
  const { sideBarData } = useContext(sideBarInfo);
  // const [navbarOpen, setNavbarOpen] =useState(FiMenu);
  // const [list, setList] = useState([])
  // const arr = ["Home", "About", "contact"]

  // const handleToggle = () => {
  //   // setNavbarOpen(prev => !prev)
  //   if(navbarOpen === "FiMenu"){
  //     setNavbarOpen("MdClose");
  //     setList(
  //       arr.map((ele,index)=>{
  //         return(
  //           <tr key={index}>{ele}</tr>
  //         );
  //       })
  //     )
  //   }else{
  //     setNavbarOpen("FiMenu")
  //     setList("")
  //   }

  // }
  return (
    <>
      <div
      className="sidebar fixed  top-0 bottom-0 lg:left-0   lg:w-[300px]  text-center bg-gray-900 transform transition-all duration-1000  ease-in-out" 
      style={{ sideBarData: sideBarData }}>
        <ul
          className={`
         lg:hidden bg-white absolute w-full h-full bottom-0
        py-24 pl-4
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
      </div>
    </>

    // <div className="App">
    //  <button onClick={handleToggle}>{navbarOpen}</button>
    //  <table>{list}</table>
    // </div>
  );
}
