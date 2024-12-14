/* eslint-disable react/prop-types */

import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

import DarkMode from "./DarkMode";
import { Link } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";


const Navbar = ({ handleOrderPopup }) => {
  const { users, setUsers, signOutUser } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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


    ...(users
      ? [
          {
            id: 4,
            name: "Profile",
            link: "/profile",
          },
        ]
      : []),
  ];
  const handleSinOutClick = () => {
    signOutUser()
    .then(() => {

      setUsers(null)
        console.log("user log out");

    })
    .catch((error)=>{return console.log(error);
    })
  }
  return (
    <>
      <div className="shadow-md bg-white sticky top-0 dark:bg-gray-900 dark:text-white duration-200  z-40">
        {/* upper Navbar */}
        <div className=" bg-green-500/35 py-2">
          <div className="container flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-xl sm:text-3xl flex gap-1 md:gap-2">
                <img src={Logo} alt="Logo" className="w-10 " />
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
              <div className="cursor-pointer  ">
                {
                  users ? <Link to={"/"} onClick={handleSinOutClick} className="px-1 md:px-3 bg-red-500 rounded py-2 text-base">Logout</Link>:<Link className="px-3 py-2 bg-sky-500 rounded" to={"/profile"}>
                  Login
                  </Link>
                }

                {/* <FcBusinessman /> */}
              </div>
            </div>
          </div>
        </div>
        {/* lower Navbar */}
        <div className=" w-full z-50 ">
      {/* Navbar Content */}
      <div className="flex justify-center text-white">
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

      {/* Icon for small devices */}
      <div
        className="fixed bottom-4 right-4 sm:hidden flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-lg cursor-pointer"
        onClick={toggleMenu}
      >
        {isMenuOpen ? "Close" : "Menu"}
      </div>

      {/* Slide-down menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-black text-white transition-transform duration-300 ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <ul className="flex flex-col items-center gap-4 py-8">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="text-white hover:text-primary duration-200"
                onClick={toggleMenu} // Close menu on click
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;