import React, { useState } from "react";
// import logo from "../assets/logo.svg"; // Import your logo

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPortfolioDropdownOpen, setIsPortfolioDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [activeDropdownItem, setActiveDropdownItem] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (link === "who") {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
    if (link === "portfolio") {
      setIsPortfolioDropdownOpen(true);
    } else {
      setIsPortfolioDropdownOpen(false);
    }
  };

  const handleDropdownItemClick = (item) => {
    setActiveDropdownItem(item);
  };

  return (
    <nav className="bg-gray-100 p-5 flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        {/* <a href="#" className="logo">
          <img src={logo} alt="Logo" className="h-8" />
        </a> */}
        <ul className="flex list-none m-0 p-0">
          <li className="ml-5">
            <a
              href="#"
              className={`text-gray-800 p-2 rounded hover:bg-gray-200 transition duration-300 ${
                activeLink === "home" ? "border-2 border-black" : ""
              }`}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </a>
          </li>
          <li className="ml-5">
            <a
              href="#"
              className={`text-gray-800 p-2 rounded hover:bg-gray-200 transition duration-300 ${
                activeLink === "about" ? "border-2 border-black" : ""
              }`}
              onClick={() => handleLinkClick("about")}
            >
              About Us
            </a>
          </li>
          <li
            className="relative ml-5"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a
              href="#"
              className={`text-gray-800 p-2 rounded hover:bg-gray-200 transition duration-300 flex items-center ${
                activeLink === "who" ? "border-2 border-black" : ""
              }`}
              onClick={() => handleLinkClick("who")}
            >
              Who it's for ▾
            </a>
            {isDropdownOpen && (
              <div className="absolute bg-white min-w-[160px] shadow-lg z-10 rounded mt-2">
                <a
                  href="#"
                  className={`block text-black p-3 hover:bg-gray-200 ${
                    activeDropdownItem === "influencers" ? "bg-green-300" : ""
                  }`}
                  onClick={() => handleDropdownItemClick("influencers")}
                >
                  Influencers
                </a>
                <a
                  href="#"
                  className={`block text-black p-3 hover:bg-gray-200 ${
                    activeDropdownItem === "brands" ? "bg-green-300" : ""
                  }`}
                  onClick={() => handleDropdownItemClick("brands")}
                >
                  Brands
                </a>
                <a
                  href="#"
                  className={`block text-black p-3 hover:bg-gray-200 ${
                    activeDropdownItem === "agencies" ? "bg-green-300" : ""
                  }`}
                  onClick={() => handleDropdownItemClick("agencies")}
                >
                  Agencies
                </a>
              </div>
            )}
          </li>
          <li
            className="relative ml-5"
            onMouseEnter={() => setIsPortfolioDropdownOpen(true)}
            onMouseLeave={() => setIsPortfolioDropdownOpen(false)}
          >
            <a
              href="#"
              className={`text-gray-800 p-2 rounded hover:bg-gray-200 transition duration-300 flex items-center ${
                activeLink === "portfolio" ? "border-2 border-black" : ""
              }`}
              onClick={() => handleLinkClick("portfolio")}
            >
              Portfolio ▾
            </a>
            {isPortfolioDropdownOpen && (
              <div className="absolute bg-white min-w-[160px] shadow-lg z-10 rounded mt-2">
                <a
                  href="#"
                  className={`block text-black p-3 hover:bg-gray-200 ${
                    activeDropdownItem === "short-form" ? "bg-green-300" : ""
                  }`}
                  onClick={() => handleDropdownItemClick("short-form")}
                >
                  Short-Form Videos
                </a>
                <a
                  href="#"
                  className={`block text-black p-3 hover:bg-gray-200 ${
                    activeDropdownItem === "long-form" ? "bg-green-300" : ""
                  }`}
                  onClick={() => handleDropdownItemClick("long-form")}
                >
                  Long-Form Videos
                </a>
              </div>
            )}
          </li>
          <li className="ml-5">
            <a
              href="#"
              className={`text-gray-800 p-2 rounded hover:bg-gray-200 transition duration-300 ${
                activeLink === "pricing" ? "border-2 border-black" : ""
              }`}
              onClick={() => handleLinkClick("pricing")}
            >
              Pricing
            </a>
          </li>
        </ul>
        <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">
          HIRE US
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
