/* eslint-disable react/prop-types */

import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

import DarkMode from "./DarkMode";
import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../context";

const Navbar = ({ handleOrderPopup }) => {
  const { users } = useContext(AuthContext);

  // Menu Array Based on User Authentication
  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#services",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 4,
      name: "Register",
      link: "/register",
    },
    {
      id: 5,
      name: "LogIn",
      link: "/login",
    },
    ...(users
      ? [
          {
            id: 6,
            name: "Profile",
            link: "/profile",
          },
        ]
      : []),
  ];

  return (
    <>
      <div className="shadow-md bg-white sticky top-0 dark:bg-gray-900 dark:text-white duration-200  z-40">
        {/* upper Navbar */}
        <div className=" bg-green-500/35 py-2">
          <div className="container flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-10" />
                Cartly
              </a>
            </div>

            {/* search bar */}
            <div className="flex justify-between items-center gap-4">
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
                />
                <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>

              {/* order button */}
              <button
                onClick={() => handleOrderPopup()}
                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>

              {/* Darkmode Switch */}
              <div>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
        {/* lower Navbar */}
        <div className="flex justify-center text-white z-50">
          <ul className="sm:flex hidden items-center gap-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <Link
                  to={data.link}
                  className="inline-block px-4 hover:text-primary duration-200 text-black dark:text-white"
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
