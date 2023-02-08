import React from "react";
import ProgressBar from "./ProgressBar";

const Skills = () => {
  return (
    <>
      <section className="text-white flex flex-col md:max-w-2xl border-t-2">
          <h2 className="text-2xl text-center">My Skills</h2>
          <h1 className="text-4xl text-center m-2">What I'm best at</h1>
          <ProgressBar name={"JavaScript"} value={100} />
          <ProgressBar name={"TypeScript"} value={100} />
          <ProgressBar name={"Python"} value={100} />
          <ProgressBar name={"React"} value={100} />
          <ProgressBar name={"SQL"} value={100} />
      </section>
    </>
  );
};

export default Skills;
