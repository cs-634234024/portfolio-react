import React from "react";

const Detail = ({data}) => {
  return (
    <div className="px-2 mt-5">
      {data.map((val , idx) => (<div key={idx}>
      <h1 className="mt-5"> {val} </h1>
      </div>))}
    </div>
  );
};

export default Detail;
