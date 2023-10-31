import React, { useState } from "react";
import ContentContainer from "../../components/contentContainer/contentContainer";
import { data } from "../../constants/data/exp";

const RightSection = () => {
 
  return (
    <div className="flex flex-col ">
      <h1 className="text-xl font-semibold mb-5"> about </h1>
      {data.map((val, idx) => (
        <>
          <ContentContainer data={val} key={`content-${idx}`} />
        </>
      ))}

      

    </div>
  );
};

export default RightSection;
