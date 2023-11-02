import React, { useEffect } from "react";
import ContentContainer from "../contentContainer/contentContainer";
import { useRef } from "react";

const MainContent = ({ title, data , id}) => {

  return (
    <div id={id}  >
      <div className="text-xl font-bold  mb-16">{title}</div>
      <ContentContainer data={data} />
    </div>
  );
};

export default MainContent;
