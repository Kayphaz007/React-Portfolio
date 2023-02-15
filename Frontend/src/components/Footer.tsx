import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const footer = () => {
  let currentYear = new Date().getFullYear();
    return (
        <>
      <section className="text-white flex flex-col md:max-w-2xl main_2  m-0">
        <div className="flex justify-center items-center w-full gap-5 bg-transparent py-5 border-b-2 border-[#ffb401]">
          <BsGithub size={50} className="text-[#ffb401]" />
          <BsTwitter size={50} className="text-[#ffb401]" />
          <BsLinkedin size={50} className="text-[#ffb401]" />
        </div>
        <div className='flex justify-center items-center p-5'>
          <h3>copyright @{currentYear} All Right reserved by Ashu Achua. </h3>
        </div>
      </section>
    </>
    );
};

export default footer;