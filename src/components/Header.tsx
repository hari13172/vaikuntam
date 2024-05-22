import { useState } from "react";
import logo from "../../public/Assets/logo.png";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "about", path: "aboutus" },
    { link: "Rent", path: "Rent" },
    { link: "Listing", path: "Listing" },
    { link: "Buy", path: "Buy" },
    { link: "Sell", path: "Sell" },
  ];
  return (
    <nav className="w-full flex  max-w-7xl m-auto justify-between items-center p-4 rounded-full gap-1 lg:px-16 py-3">
      <img src={logo} alt="" />

      <ul className="lg:flex justify-center items-center gap-10 hidden  rounded-full bg-white">
        {navItems.map(({ link, path }) => {
          return (
            <Link
              key={path}
              className=" uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-600 hover:text-white"
            >
              {link}
            </Link>
          );
        })}
      </ul>

      <button className=" lg:block hidden border-2 border-gray-500 px-10 py-3 text-lg rounded-full font-bold hover:scale-105 transition-transform duration-300">
        Contact Now
      </button>

      {/* mobile menu */}
      <div
        className="flex justify-center items-center lg:hidden mt-3"
        onClick={toggleMenu}
      >
        <div>
          {isMenuOpen ? (
            <FaXmark className=" text-3xl cursor-pointer" />
          ) : (
            <FaBars className=" text-3xl cursor-pointer" />
          )}
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full h-fit bg-black p-4 absolute top-[110px] left-0`}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => {
            return (
              <Link
                key={path}
                className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-600 hover:text-white w-full text-center"
              >
                {link}
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
