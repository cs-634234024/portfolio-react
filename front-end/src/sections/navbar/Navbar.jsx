import React from "react";
import { data } from "../../constants/data/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({ title, isMouseHover }) => {
  
  const scrollToElement = () => {
    if(scrollTo.current){
      scrollTo.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return (
    <div onClick={scrollToElement}
      className={` cursor-pointer text-lg font-medium duration-1000 ${
        isMouseHover ? "text-primaryTitle" : ""
      }`}
    >
      <div className="flex">
        <span className="mr-2">
          <FontAwesomeIcon
            className={`animate-pulse ${
              isMouseHover ? "inline-block" : "hidden"
            }`}
            icon={faArrowRight}
          />
        </span>
        {title}
      </div>
    </div>
  );
};
