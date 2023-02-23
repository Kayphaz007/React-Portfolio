import React from "react";
import items from "../data/items.json";

const Projects = () => {
  return (
    <>
      <section className="main_2">
        <div className="text-white flex flex-col px-7  mx-auto">
          <h3 className="text-2xl text-center p-2">
            <span className="border-b-2 border-[#ffb401] pb-1 px-3">
              Portfolios
            </span>
          </h3>
          <h1 className="text-4xl text-center my-4">My Latest Works</h1>
          <div className="flex flex-col sm:flex-wrap sm:flex-row sm:justify-between items-center">
            {items.map((item) => (
              <div
                key={item.id}
                className="text-center relative my-3 px-3 sm:basis-1/2 lg:basis-1/3"
              >
                <p key={item.id} className=" uppercase text-xl my-2 mx-auto">
                  {item.name}
                </p>
                <img
                  key={item.id}
                  src={item.imgUrl}
                  className="w-[20rem] h-[20rem] object-cover mx-auto  hover:opacity-[0]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
