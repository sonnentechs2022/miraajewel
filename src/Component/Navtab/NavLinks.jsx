import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyNavLinks";
import { KeyboardArrowDown } from "@mui/icons-material";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-1 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group text-[15px] ml-5 font-Montserrat font-medium "
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
             
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden hover:rotate-180  ease-in-out duration-300">
                <KeyboardArrowDown />
              </span>
            </h1>
            {link.submenu && (
              <div className="transition delay-300 ease-in-out">
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block shadow-2xl ">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10 ">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="text-lg  font-Montserrat Next LT Pro">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-[14px] font-medium text-gray-600 my-2.5 font-Montserrat">
                            <Link
                              to={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
           `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold flex justify-between items-center md:pr-0 pr-5 "
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
