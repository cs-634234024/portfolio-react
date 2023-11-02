import React from "react";
import { data } from "../../constants/data/navbar";

const Skill = ({ data , isMouseHover}) => {
  return (
    <div className="flex flex-col gap-5 ">
      {data.map((val, idx) => (
        <div key={idx} className="flex gap-5 flex-wrap ">
          {val.map((val, idx) => (
            <div key={idx} className="">
              <div className={`px-3 py-1 bg-primaryContent rounded-md ${isMouseHover ? 'border border-primary text-primary' : '' }`}>{val}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skill;
