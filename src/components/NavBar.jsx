import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [sideBar, setSideBar] = useState(false);
  const handleBars = () => setSideBar(!sideBar);
  return (
    <nav
      style={!sideBar ? { overflow: "hidden" } : { overflow: "visible" }}
      className="w-[100vw] sticky sm:overflow-visible flex items-center justify-between px-10 sm:px-20 md:px-36 py-5 backdrop-blur-md text-[#7f7f7f] top-0 z-50  bg-[#cfcfcf00] shadow-md"
    >
      <div>
        <FontAwesomeIcon className="w-8 h-8 mr-10 md:mr-20" icon={faApple} />
      </div>
      <div
        style={!sideBar ? { right: "-180px" } : { right: "0" }}
        className="px-10  transition-all top-16 duration-500 delay-100 text-center sm:w-[400px] py-6 sm:py-0 md:w-[400px] absolute sm:static lg:w-[400px] flex flex-col sm:flex-row items-end text-[15px] font-semibold space-y-2 sm:space-x-10 z-20"
      >
        <div>
          <a href="/products">Products</a>
        </div>
        <div>
          <a href="/prices">Prices</a>
        </div>
        <div>
          <a href="/overview">Overview</a>
        </div>
        <div>
          <a href="/contacts">Contacts</a>
        </div>
      </div>
      <div
        onClick={handleBars}
        className="cursor-pointer ml-5 relative block sm:hidden"
      >
        {!sideBar ? (
          <FontAwesomeIcon className="w-5 h-5" icon={faBars} />
        ) : (
          <FontAwesomeIcon className="w-5 h-5" icon={faXmark} />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
