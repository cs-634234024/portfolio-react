import React from "react";

const Detail = ({data}) => {
  return (
    <div className="px-2 mt-5">
      {data.map((val , idx) => (<>
      <h1 className="mt-5"> {val} </h1>
      </>))}
    </div>
  );
};

export default Detail;
