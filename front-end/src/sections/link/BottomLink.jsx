import React from "react";
import { data } from "../../constants/data/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottomLink = ({ link, icon, isMouseHover }) => {
  return (
    <>
      <div
        className={`duration-500 ${
          isMouseHover ? "scale-150 text-primary" : ""
        }`}
      >
        <a href={link} target="_blank">
          {" "}
          <FontAwesomeIcon icon={icon} />{" "}
        </a>
      </div>
    </>
  );
};

export default BottomLink;
