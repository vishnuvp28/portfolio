import React from 'react'
import "./HeroImg.css";
import { Link } from 'react-router-dom';



function HeroImg() {
  return (
    <div className="hero">
        <div className="mask">
           <img className='intro-img'
           src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
           alt="intro-img"/>
        </div>
        <div className="content">
          <p>
             HI, I'M A FREELANCER
          </p>
          <h1>React developer</h1>
          <div>
            <Link to="/project" className='btn'>
              PROJECTS
            </Link>
            <Link to="/contact" className='btn btn-light'>
              CONTACT
            </Link>
          </div>
        </div>
    </div>
  )
}

export default HeroImg


//https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80