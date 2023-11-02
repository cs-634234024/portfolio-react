import React, { useState } from "react";
import ContentContainer from "../../components/contentContainer/contentContainer";
import { data as dataExp } from "../../constants/data/exp";
import { data as dataAbout } from "../../constants/data/about";
import {data as dataProject} from '../../constants/data/projects'
import MainContent from "../../components/mainContent/MainContent";

const RightSection = () => {
  const data = [
    {
      data: dataAbout,
      title: "About",
    },
    {
      data: dataExp,
      title: "Experiences",
    },
    {
      data: dataProject,
      title: "Projects",
    },
    {
      data: dataExp,
      title: "Certificates",
    },
  ];

  return (
    <div className="flex flex-col  gap-y-52">
      {/* <h1 className="text-xl font-semibold mb-5"> about </h1>
      {data.map((val, idx) => (
        <>
          <ContentContainer data={val} key={`content-${idx}`} />
        </>
      ))} */}

      {data.map((val, idx) => (
        <MainContent key={`maincontent-${idx}`} id={`maincontent-${idx+1}`} data={val.data} title={val.title} />
      ))}
    </div>
  );
};

export default RightSection;
