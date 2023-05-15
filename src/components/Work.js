import "./WorkCard.css";
import React from "react";
import WorkCard from "./WorkCard";
import WorkData from "./WorkData";

function Work() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkData.map((val, index) => {
          return <WorkCard key={index} pro={val} />;
        })}
      </div>
    </div>
  );
}

export default Work;
