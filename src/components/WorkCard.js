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
        <NavLink to={pro.view} className="btn">View</NavLink>
        <NavLink to={pro.source} className="btn">Source</NavLink>
      </div>
    </div>
  </div>
  );
}

export default WorkCard;
