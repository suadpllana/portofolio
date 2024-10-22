import React from 'react';
import { Link as ScrollLink } from "react-scroll";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg  fixed-top z-2" style={{ minHeight: '60px', height: 'auto' }}>
      <div className="container-fluid">
       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto"> 
            <li className="nav-item">
              <ScrollLink className="scroll-link" to="home" smooth={true} duration={100} offset={-60}>Home</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="scroll-link" to="about" smooth={true} duration={100} offset={-60}>About</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="scroll-link" to="skills" smooth={true} duration={100} offset={-60}>Skills</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="scroll-link" to="projects" smooth={true} duration={100} offset={100}>Projects</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="scroll-link" to="certificates" smooth={true} duration={100} offset={-60}>Certificates</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="scroll-link" to="contact" smooth={true} duration={100} offset={-60}>Contact</ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
