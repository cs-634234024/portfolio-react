import React, { useEffect } from "react";
import ContentContainer from "../contentContainer/contentContainer";
import { useRef } from "react";

const MainContent = ({ title, data , id}) => {
  const scrollTo = useRef(null)
  // useEffect(()=>{
  //   const id = document.getElementById(id)
  //   console.log(id);
  // },[])

  return (
    <div id={id} ref={scrollTo}>
      <div className="text-xl font-bold  mb-16">{title}</div>
      <ContentContainer data={data} />
    </div>
  );
};

export default MainContent;
