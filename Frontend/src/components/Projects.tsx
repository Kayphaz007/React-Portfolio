import React from "react";
import items from "../data/items.json";

const Projects = () => {
  return (
    <>
      <section className="text-white flex flex-col md:max-w-2xl main_2  m-0">
        <h3 className="text-2xl text-center p-2">
          <span className="border-b-2 border-[#ffb401] pb-1 px-3">
            Portfolios
          </span>
        </h3>
        <h1 className="text-4xl text-center my-4">My Latest Works</h1>
        <div className="flex flex-col justify-center items-center">
          {items.map((item) => (
            <div className="text-center relative my-3">
              <p className=" uppercase text-xl my-2">{item.name}</p>
              <img
                key={item.id}
                src={item.imgUrl}
                className="w-[20rem] h-[20rem] object-cover  hover:opacity-[0]"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
