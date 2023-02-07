import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import {AiOutlineClose} from "react-icons/ai"
type LinksVal = {
  link: string;
  name: string;
}[];

const Navlinks: LinksVal = [
  { link: "/", name: "Home" },
  { link: "/contact", name: "Contact" },
  { link: "/projects", name: "Projects" },
  { link: "/projects", name: "Projects" },
  { link: "/projects", name: "Projects" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center text-white max-w-7xl mx-auto px-4 h-24">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <ul className="hidden md:flex">
          {Navlinks.map((links, index) => (
            <li className="p-4">
              <NavLink to={links.link} key={index} className="">
                {links.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div onClick={() => setOpen(!open)} className="md:hidden">
          {open ? (
            <AiOutlineClose className="text-white" size={20} />
          ) : (
            <GiHamburgerMenu className="md:hidden" size={20} />
          )}
        </div>
        <div className={`fixed top-0 w-[60%] md:hidden h-full border-r border-r-gray-900 bg-[#000300]  ease-in-out duration-500 ${open?'left-0': 'left-[-100%]'}`}>
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            REACT.
          </h1>
          <ul className=" uppercase p-4">
            {Navlinks.map((links, index) => (
              <li className="p-4 border-b border-gray-600">
                <NavLink to={links.link} key={index} className="">
                  {links.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
