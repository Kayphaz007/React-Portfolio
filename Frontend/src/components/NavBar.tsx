import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
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
      <section className="main_1 relative">
        <div
          className="flex justify-between items-center text-white mx-auto px-4 h-24"
          data-aos="fade-down"
          data-aos-delay="1000"
          data-aos-duration="1000"
        >
          <h1 className="w-full text-3xl font-bold yellow">REACT.</h1>
          {/* navlinks for large screen */}
          <ul className="hidden md:flex">
            {Navlinks.map((links, index) => (
              <li className="p-4">
                <NavLink to={links.link} key={index} className="">
                  {links.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* hamburger menu and close button */}
          <div onClick={() => setOpen(!open)} className="md:hidden">
            {open ? (
              <AiOutlineClose className="yellow" size={20} />
            ) : (
              <GiHamburgerMenu className="md:hidden yellow" size={20} />
            )}
          </div>

        </div>
        {/* navlinks for onclick in small screens */}
        <div
            className={`md:hidden main_1 ease-in-out duration-1000 overflow-clip transition-[height] ${
              open ? "h-[20rem]" : "h-0"
            }`}
          >
            <ul className=" uppercase p-4">
              {Navlinks.map((links, index) => (
                <li className="p-4 border-b border-gray-600" onClick={() => setOpen(!open)}>
                  <NavLink to={links.link} key={index} className="">
                    {links.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
      </section>
    </>
  );
};

export default NavBar;
