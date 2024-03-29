import React from "react";
import { TypeAnimation } from "react-type-animation";
import avatar from "../imgs/Snapchat-1320369831.jpg";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Intro = () => {
  return (
    <>
      <section className="main_1 m-0 ">
        <div className="text-white flex flex-col lg:flex-row justify-center items-center h-full md:h-screen px-7 pt-2 py-4 mx-auto gap-3">
          <div
            className="lg:order-3  lg:basis-1/3"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="900"
          >
            <img
              className="w-[18rem] h-[18rem] object-cover p-2 border-[#ffb401] border-t-[4px] border-l-[1px] rounded-[18rem] "
              src={avatar}
            />
          </div>
          <div className="lg:basis-2/3">
            <div className="  w-full mx-auto text-center flex flex-col justify-center gap-y-4">
              <h1
                className="font-bold text-left text-xl"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                Hi, I am
                <span className="text-[#ffb401] text-3xl"> Ashu Achua</span>
              </h1>
              <h2
                className="text-left my-3"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <span className="border-4 border-[#ffb401] p-3 font-bold">
                  <TypeAnimation
                    sequence={[
                      "SOFTWARE ENGINEER",
                      1000,
                      "FRONTEND",
                      1000,
                      "BACKEND",
                      1000,
                    ]}
                    speed={30}
                    style={{ fontSize: "1.2em" }}
                    wrapper="span"
                    repeat={Infinity}
                  />
                </span>
              </h2>
              {/* <h1  className=""><Typed className="text-3xl sm:text-6xl md:text-7xl font-bold md:py-6 border text-left" strings={['SOFTWARE ENGINEER', 'TELECOMS ENGINEER']} typeSpeed={120} backSpeed={140} loop/></h1> */}
              <p
                className="text-xl sm:text-4xl md:text-5xl font-bold text-left py-2"
                data-aos="fade-down"
                data-aos-delay="500"
              >
                Dedicated to improving skills through hands on learning and
                development work. Adept at using JavaScript and Python to
                produce clean code. Well organized and collaborative team player
                with strong communication and analytical abilities.{" "}
              </p>
            </div>
            <div
              className="flex justify-start w-full gap-5"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <BsGithub size={50} className="text-[#ffb401]" />
              <BsTwitter size={50} className="text-[#ffb401]" />
              <BsLinkedin size={50} className="text-[#ffb401]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
