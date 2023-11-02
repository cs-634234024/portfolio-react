import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconLink = ({ data, isMouseHover }) => {
  return (
    <>
      {data.map((val, idx) => (
        <div className="flex mr-5" key={idx}>
          <a href={val.link} target="_blank">
            {" "}
            <FontAwesomeIcon
              className={`text-xl ${isMouseHover ? "text-primary " : ""}`}
              icon={val.type}
            />{" "}
          </a>
        </div>
      ))}
    </>
  );
};

export default IconLink;
