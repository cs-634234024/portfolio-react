import React from 'react'
import { faArrowDown, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <div className="h-full p-5 flex flex-col gap-3  ">
          <h1 className="text-4xl font-semibold text-primary">Haris Sadeen</h1>
          <h1 className="text-lg font-medium text-primaryTitle">
            {" "}
            Fullstack Deverloper | Front end | Back end{" "}
          </h1>
          <h1 className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            fugiat commodi iure deserunt debitis itaque at soluta dolore error.
            Expedita distinctio magni doloribus{" "}
          </h1>
          <div>
            <div className="text-primaryTitle inline-block cursor-pointer bg-primary py-2 px-3 rounded-md ">
              <div className="flex flex-col">
                <FontAwesomeIcon
                  className="animate-bounce text-xl"
                  icon={faArrowDown}
                />
                <h1 className="text-md font-semibold">View Resume</h1>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Header