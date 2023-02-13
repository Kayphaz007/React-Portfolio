import React, { FC } from 'react';

interface WorkCardProps {
    item: {
      start: {
        month: string;
        year: number;
      };
      end: {
        month: string;
        year: number;
      };
      university: {
        name: string;
        location: string;
      };
      about: string;
    };
  }

const WorkCard: FC<WorkCardProps> = (props) => {
    return (
        <div>
      <div className="border-[#ffb401] border-t-[1px] border-l-[1px] rounded-[20px] p-4 m-3">
      <div className="flex justify-start border-b-2 border-[#ffb401] gap-x-3 pb-2">
        <p>
          <p className="uppercase">{props.item.start.month}</p>
          <p className="font-header font-semibold text-4xl">{props.item.start.year}</p>
        </p>
        <p className="self-center">
          <span>-</span>
        </p>
        <p className="">
          <p className="uppercase">{props.item.end.month}</p>
          <p className="font-header text-4xl font-semibold">{props.item.end.year}</p>
        </p>
      </div>
      <div className="border-b-2 border-[#ffb401] py-2">
        <p className="uppercase">{props.item.university.name}</p>
        <p>{props.item.university.location}</p>
      </div>
      <div className="pt-2">
        <p>{props.item.about}</p>
      </div>
      </div>
    </div>
    );
};

export default WorkCard;