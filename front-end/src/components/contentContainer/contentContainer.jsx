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
    <div>
      <div
        onMouseEnter={() => setIsMouseEnter({ [data.id]: true })}
        onMouseLeave={() => setIsMouseEnter({ [data.id]: false })}
        className="grid grid-cols-[25%_75%] p-2 gap-5 py-5 hover:bg-primaryContent rounded-md "
      >
        <div className="flex flex-col">
          <DateFormat isMouseHover={isMouseEnter[data.id]}>
            {" "}
            {data.date}{" "}
          </DateFormat>
          <img
            className="mt-5 rounded-md"
            src={data.picture}
            alt=""
          />
        </div>
        <div className="flex flex-col mr-10">
          <Title isMouseHover={isMouseEnter[data.id]} title={data.title} />
          <div className="flex mt-10">
            <IconLink data={data.link} isMouseHover={isMouseEnter[data.id]} />
          </div>
          <Detail data={data.descriptions} />

          <div className=" flex mt-10 gap-5 ">
            <Skill data={data.skills} isMouseHover={isMouseEnter[data.id]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
