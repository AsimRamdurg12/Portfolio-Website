import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <div>
            <img src={technology.icon} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
