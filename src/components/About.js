import { Link } from "react-router-dom";
import "./About.css";

import React from "react";

function About() {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm a MERN Full Stack Developer.I create responsive web applications
          for my clients.
        </p>
        <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img
              src="https://images.unsplash.com/photo-1579820010410-c10411aaaa88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1497&q=80"
              alt="img1"
              className="img"
            />
          </div>
          <div className="img-stack bottom">
            <img
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="img2"
              className="img"

            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
