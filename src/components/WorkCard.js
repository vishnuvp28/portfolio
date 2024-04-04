import "./WorkCard.css";
import React from "react";
import { NavLink } from "react-router-dom";

function WorkCard({pro}) {
  return (
    <div className="project-card">
    <img
      src={pro.imgsrc}
      alt="library"
    />
    <h2 className="project-title">{pro.title}</h2>
    <div className="pro-details">
      <p>{pro.title}</p>
      <div className="pro-btns">
        <NavLink to={pro.view} target="_blank" className="btn">View</NavLink>
        <NavLink to={pro.source} target="_blank" className="btn">Frontend Source</NavLink>
        <NavLink to={pro.source1} target="_blank" className="btn">Backend Source</NavLink>

      </div>
    </div>
  </div>
  );
}

export default WorkCard;
