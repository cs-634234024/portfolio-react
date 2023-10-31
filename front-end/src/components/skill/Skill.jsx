import React from "react";
import { data } from "../../constants/data/navbar";

const Skill = ({ data , isMouseHover}) => {
  return (
    <div className="flex flex-col gap-5">
      {data.map((val, idx) => (
        <div className="flex gap-5 ">
          {val.map((val, idx) => (
            <div className="">
              <div className={`px-3 py-1 bg-primaryContent rounded-md ${isMouseHover ? 'border border-primary text-primary' : '' }`}>{val}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skill;
