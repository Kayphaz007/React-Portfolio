import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsGithub, BsLinkedin, BsMailbox, BsMailbox2, BsTwitter } from "react-icons/bs";

const footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <>
      <section className="main_2">
        <div className="text-white flex flex-col max-w-2xl md:max-w-7xl px-7 mx-auto">
          <div className="flex justify-center items-center  w-full gap-5 bg-transparent py-5 border-b-2 border-[#ffb401]">
            <a href="mailto:kayphaz007@gmail.com?subject=Mail from Portfolio"><AiOutlineMail size={50} className="text-[#ffb401]" /></a>
            <a href=""><BsGithub size={50} className="text-[#ffb401]" /></a>
            <a href=""><BsTwitter size={50} className="text-[#ffb401]" /></a>
            <a href=""><BsLinkedin size={50} className="text-[#ffb401]" /></a>
          </div>
          <div className="flex justify-center items-center p-5">
            <h3 className="text-center">copyright @{currentYear} All Right reserved by Ashu Achua. </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default footer;
