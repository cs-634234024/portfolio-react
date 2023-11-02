import React from "react";
import DateFormat from "../dateFormate/DateFormat";
import Title from "../title/Title";
import Detail from "../detail/detail";
import Skill from "../skill/Skill";
import { useState } from "react";
import IconLink from "../link/Link";

const ContentContainer = ({ data }) => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  return (
    <div className="">
      {data.map((val, idx) => (
        <div
          key={idx}
          onMouseEnter={() => setIsMouseEnter({ [val.id]: true })}
          onMouseLeave={() => setIsMouseEnter({ [val.id]: false })}
          className="grid grid-cols-[25%_75%] p-2 gap-5 py-5 hover:bg-primaryContent rounded-md "
        >
          <div className="flex flex-col">
            <DateFormat isMouseHover={isMouseEnter[val.id]}>
              {" "}
              {val.date}{" "}
            </DateFormat>
            <img className="mt-5 rounded-md" src={val.picture} alt="" />
          </div>
          <div className="flex flex-col mr-10">
            <Title isMouseHover={isMouseEnter[val.id]} title={val.title} />
            <div className="flex mt-10">
              <IconLink data={val.link} isMouseHover={isMouseEnter[val.id]} />
            </div>
            <Detail data={val.descriptions} />

            <div className=" flex mt-10 gap-5 ">
              <Skill data={val.skills} isMouseHover={isMouseEnter[val.id]} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentContainer;
