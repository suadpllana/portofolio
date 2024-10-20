import React from 'react'
import "./Portofolio.css"
import { Link as ScrollLink, Element } from "react-scroll";
const Portofolio = () => {
  return (
  
          <div id="introduction">
             <Element name="home"/>
      <div>
        <h1 id="home">
          Hi, <br/>
          I am <span>Suad Pllana <br  /></span> Front-end Developer
        </h1>
        <ScrollLink  className="scroll-link" to="about" smooth={true} duration={100}  offset={-60}><button>About me</button></ScrollLink>
      </div>
    </div>
   
  )
}

export default Portofolio
