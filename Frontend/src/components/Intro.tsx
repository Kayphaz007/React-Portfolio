import React from "react";
import Typed from "react-typed";
import avatar from "../../public/imgs/Snapchat-1320369831.jpg";
import {BsFacebook, BsGithub, BsLinkedin, BsTwitter} from "react-icons/bs"

const Intro = () => {
  return (
    <>
      <section className="text-white flex flex-col justify-center items-center h-screen md:max-w-2xl gap-3 px-4">
        <div className="mt-0">
          <img
            className="w-[18rem] h-[18rem] object-cover p-2 border-t-[0.1px] border-l-[0.1px] rounded-[18rem] mt-[-220px]"
            src={avatar}
          />
        </div>
        <div className="  w-full mx-auto text-center flex flex-col justify-center gap-y-4">
          <h1 className="text-[#00df9a] font-bold text-left p-2">
            Hi, I am <span>Ashu Achua</span>
          </h1>
          <h2 className="text-left p-2">SOFTWARE ENGINEER</h2>
          {/* <h1  className=""><Typed className="text-3xl sm:text-6xl md:text-7xl font-bold md:py-6 border text-left" strings={['SOFTWARE ENGINEER', 'TELECOMS ENGINEER']} typeSpeed={120} backSpeed={140} loop/></h1> */}
          <p className="text-xl sm:text-4xl md:text-5xl font-bold text-left">
            dedicated to improving skills through hands on learning and
            development work. Adept at using JavaScript and Python to produce
            clean code. Well organized and collaborative team player with strong
            communication and analytical abilities.{" "}
          </p>
        </div>
        <div className="flex justify-start w-full gap-5">
          <BsGithub size={50}/>
          <BsTwitter size={50}/>
          <BsLinkedin size={50}/>

        </div>
      </section>
    </>
  );
};

export default Intro;
