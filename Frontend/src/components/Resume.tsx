import React from "react";
import EduCard from "./EduCard";
import WorkCard from "./WorkCard";

const Resume = () => {
  let eduDetails = [
    {
      start: {
        month: "january",
        year: 2014,
      },
      end: {
        month: "september",
        year: 2018,
      },
      university: {
        name: "Staffordshire University",
        location: "Stoke-On-Trent Staffordshire",
      },
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem perspiciatis ea architecto fugit similique? Dolor, odit at? Quaerat amet quam illum libero quo quas voluptatem mollitia! Quos, quibusdam fugiat!",
    },
    {
        start: {
          month: "january",
          year: 2009,
        },
        end: {
          month: "september",
          year: 2014,
        },
        university: {
          name: "FUTMINNA",
          location: "Minna, Niger State, Nigeria.",
        },
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem perspiciatis ea architecto fugit similique? Dolor, odit at? Quaerat amet quam illum libero quo quas voluptatem mollitia! Quos, quibusdam fugiat!",
      },
  ];

  let workDetails = [
    {
        start: {
          month: "january",
          year: 2014,
        },
        end: {
          month: "september",
          year: 2018,
        },
        university: {
          name: "Staffordshire University",
          location: "Stoke-On-Trent Staffordshire",
        },
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem perspiciatis ea architecto fugit similique? Dolor, odit at? Quaerat amet quam illum libero quo quas voluptatem mollitia! Quos, quibusdam fugiat!",
      },
  ]
  return (
    <section className=" main_1 ">
      <div className="text-white font-paragraph m-0  max-w-2xl md:max-w-7xl px-7 mx-auto gap-3 ">
        <h3 className="text-2xl text-center p-2">
          <span className="border-b-2 border-[#ffb401] pb-1 px-3">Resume</span>
        </h3>
        <h1 className="text-4xl text-center m-2">My Entire Career</h1>
        <div className="flex flex-col md:flex-row ">
          <div className="md:border-r md:border-[#ffb401] md:pr-7">
            <h2 className="my-6 pl-2">
              <span className="border-4 border-[#ffb401] p-2 text-2xl font-bold m-1">
                Education
              </span>
            </h2>
            {eduDetails.map((eduDetail)=><EduCard item={eduDetail}/> )}
          </div>
          <div className="md:border-l md:border-[#ffb401] md:pl-7">
            <h2 className="my-6 pl-2">
              <span className="border-4 border-[#ffb401] p-2 text-2xl font-bold m-1">
                Work Experience
              </span>
            </h2>
            {workDetails.map((workDetail)=><WorkCard item={workDetail}/> )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
