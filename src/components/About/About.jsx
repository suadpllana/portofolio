import React from "react";
import "./About.css";
import { Link as ScrollLink, Element } from "react-scroll";

const About = () => {
  return (
    <div>
      <div className="about">
        <h2 id="about">About me</h2>
        <div>
          I am an 18-year-old second-year Computer Science student at AAB
          College, specializing in front-end development. Through my studies, I
          have gained hands-on experience with a wide range of technologies,
          including HTML, CSS, JavaScript, React, Redux,  Sass,
          Bootstrap, Tailwind CSS, and more. I have completed several projects
          that highlight my technical skills and creativity in building modern,
          responsive web applications. 
        </div>
        <div>
        I am passionate about designing
          user-friendly interfaces and continuously improving my skills in web
          development.
          I  have completed three courses in front-end development: Web
          Development - Full Guide (Udemy) , JavaScript - Full Guide (Udemy) ,
          React and Redux - Full Guide (Udemy).
        </div>
      </div>
    </div>
  );
};

export default About;
