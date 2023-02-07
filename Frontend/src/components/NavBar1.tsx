import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

type LinksVal = {
  link: string;
  name: string;
}[];

const Navlinks: LinksVal = [
  { link: "/", name: "Home" },
  { link: "/contact", name: "Contact" },
  { link: "/projects", name: "Projects" },
];

const [open, setOpen] = useState(false);

const NavBar = () => {
  return (
    <>
      <nav className="">
        <ul className="flex flex-wrap p-5 md:justify-end md:gap-4 z-[-1]">
          <NavLink to="/" className="mr-auto hover:text-cyan-600 duration-500">
            LOGO
          </NavLink>
          <div className="duration-1000">
            {open ? (
              <GrClose />
            ) : (
              <GiHamburgerMenu
                className="md:hidden text-2xl"
                onClick={() => setOpen(!open)}
              />
            )}
          </div>
          <ul className={`w-full my-4 ${open?'visible':'hidden'}`}>
            {Navlinks.map((links, index) => (
              <li className="">
                <NavLink
                  to={links.link}
                  key={index}
                  className="p-1 rounded-md hover:text-cyan-600"
                >
                  {links.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
