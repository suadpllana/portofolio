import React from 'react'
import "./Skills.css"
import { images } from '../../images'
import { Link as ScrollLink, Element } from "react-scroll";

const Skills = () => {
  return (
    <div>
              <Element name="skills"/>
        <h2 id="skills">Skills</h2>
    <div className="skills">
      <div className="responsive"></div>
      <div>
        <img className="skills-images" src={images.HTML} alt="" />
        <h6>HTML</h6>
      </div>

      <div>
        <img className="skills-images" src={images.CSS} alt="" />
        <h6>CSS</h6>
      </div>
      <div>
        <img className="skills-images" src={images.JavaScript} alt="" />
        <h6>JavaScript</h6>
      </div>
      <div className="responsive"></div>
      <div className="responsive"></div>

      <div>
        <img className="skills-images"src={images.React} alt="" />
        <h6>React</h6>
      </div>
      <div>
        <img className="skills-images" src={images.Redux} alt="" />
        <h6>Redux</h6>
      </div>
      
      <div>
        <img className="skills-images" src={images.vuejs} alt="" />
        <h6>Vue.js</h6>
      </div>
    

      <div className="responsive"></div>

      <div className="responsive"></div>
     
      <div>
        <img className="skills-images" src={images.nodeJs} alt="" />
        <h6>Node js</h6>
      </div>
       <div>
        <img className="skills-images" src={images.TailwindCss} alt="" />
        <h6>Tailwind CSS</h6>
      </div>
     
      <div>
        <img className="skills-images" src={images.Sass} alt="" />
        <h6>Sass</h6>
      </div>

   
      
     
      <div className="responsive"></div>
      <div className="responsive"></div>
   
    
      <div>
        <img className="skills-images" src={images.BootStrap} alt="" />
        <h6>Bootstrap</h6>
      </div>
    
      <div>
        <img className="skills-images" src={images.mongoDB} alt="" />
        <h6>MongoDB</h6>
      </div>
     

      <div>
        <img className="skills-images" src={images.TypeScript} alt="" />
        <h6>TypeScript</h6>
      </div>
     
    </div>
    </div>
  )
}

export default Skills
