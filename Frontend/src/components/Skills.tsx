import React from "react";
import ProgressBar from "./ProgressBar";

const Skills = () => {
  return (
    <>
      <section className="main_2">
        <div className="text-white flex flex-col m-0 mx-auto px-7   ">
          <h3 className="text-2xl text-center p-2">
            <span className="border-b-2 border-[#ffb401] pb-1 px-3">
              My Skills
            </span>
          </h3>
          <h1 className="text-4xl text-center m-2">What I'm best at</h1>
          <ProgressBar name={"JavaScript"} value={100} />
          <ProgressBar name={"TypeScript"} value={100} />
          <ProgressBar name={"Python"} value={100} />
          <ProgressBar name={"React"} value={100} />
          <ProgressBar name={"SQL"} value={100} />
        </div>
      </section>
    </>
  );
};

export default Skills;
