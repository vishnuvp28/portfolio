import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <div className="location">
            <h4>
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Anna Nagar,Chennai
            </h4>
          </div>
          <div className="mobile">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              9677702350
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              priyachandrasekarthik@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            I am a web developer with a vast array of knowledge in many
            different front end and back end languages, responsive frameworks,
            databases, and best code practices
          </p>
        </div>
        <br></br>
        <div className="mobile">
          
         <a href="https://github.com/vishnuvp28" ><FaGithub size={20} style={{ color: "#fff", marginRight: "2rem" }}
           
           /></a>
          <a href="https://www.linkedin.com/in/vishnu-priya-35a1a1225/"><FaLinkedin
            size={20}
            style={{ color: "#fff", marginRight: "2rem" }}
          /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
