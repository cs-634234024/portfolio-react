import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconLink = ({ data, isMouseHover }) => {
  return (
    <>

    <a href={data.link} target="_blank"> <FontAwesomeIcon className={`text-xl ${isMouseHover ? 'text-primary ' : ''}`} icon={data.type}/> </a> 
    </>

  );
};

export default IconLink;
