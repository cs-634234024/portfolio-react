import React, { useEffect, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import BottomLink from "../link/BottomLink";
import { data as dataNav } from "../../constants/data/navbar";
import { data as dataLink } from "../../constants/data/link";
import Header from "../header/Header";
const LeftSection = () => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div className="">
      <div className=" sticky top-14 grid grid-rows-[50%_40%_10%] gap-3 ">
        <Header />
        <div className="h-full p-5 flex flex-col  gap-5">
          {dataNav.map((val, idx) => (
            <div key={idx}
              onMouseEnter={() => setMouseEnter({ [val.id]: true })}
              onMouseLeave={() => setMouseEnter({ [val.id]: false })}
            >
              <Navbar
                key={`${val.title}-${idx}`}
                title={val.title}
                isMouseHover={mouseEnter[val.id]}
              />
            </div>
          ))}
        </div>

        <div className="h-full flex  items-end p-5 gap-5 text-2xl ">
          {dataLink.map((val, idx) => (
            <div key={idx}
              onMouseEnter={() => setMouseEnter({ [val.id]: true })}
              onMouseLeave={() => setMouseEnter({ [val.id]: false })}
            >
              <BottomLink
                isMouseHover={mouseEnter[val.id]}
                icon={val.icon}
                link={val.link}
                key={val.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
