import React from "react";

const Title = ({ title, isMouseHover }) => {
  return (
    <>
      <h1 className={` text-lg font-semibold ${isMouseHover ? 'text-primary' : ''}`}>{title}</h1>
    </>
  );
};

export default Title;
