import React from "react";
import "./Projects.css";
import { projectImages } from "../../images";
import {useEffect} from "react"
import { Link as ScrollLink, Element } from "react-scroll";
const Projects = () => {


    useEffect(() => {
       
        $(document).ready(function(){
            $(".owl-carousel").owlCarousel({
              items: 1,                
              loop: true,             
              margin: 10,             
              autoplay: false,        
              nav: true,               
              dots: true               
            });
          });
        
      }, []);
    
  return (
    <>
          <Element name="projects"/>
   <h2 id="skills">Projects</h2>
     <div className="owl-carousel owl-theme">
        

        <div className="item">
          <img src={projectImages.naruto} alt="Image 1" />
          <h4>Naruto</h4>
          <p>React</p>
          <a target="_blank" href="https://suadpllana.github.io/naruto/">
            Link to the project
          </a>
        </div>
  
        <div className="item">
          <img src={projectImages.translation} alt="Image 2" />
          <h4>Translation</h4>
          <p>React</p>
          <a target="_blank" href="https://suadpllana.github.io/translate/">
            Link to the project
          </a>
        </div>
  
        <div className="item">
          <img src={projectImages.news}  alt="Image 3" />
          <h4>News</h4>
          <p>React,Bootstrap</p>
          <a target="_blank" href="https://suadpllana.github.io/news/">
            Link to the project
          </a>
        </div>
  
        <div className="item">
          <img src={projectImages.cinema} alt="Image 4" />
          <h4>Cinema</h4>
          <p>React</p>
          <a target="_blank" href="https://suadpllana.github.io/cinema/">
            Link to the project
          </a>
        </div>
  
        <div className="item">
          <img src={projectImages.music}  alt="Image 5" />
          <h4>Music Player</h4>
          <p>React</p>
          <a target="_blank" href="https://suadpllana.github.io/music/">
            Link to the project
          </a>
        </div>
  
        <div className="item">
          <img src={projectImages.quiz}  alt="Image 6" />
          <h4>Quiz</h4>
          <p>React</p>
          <a target="_blank" href="https://suadpllana.github.io/quiz/">
            Link to the project
          </a>
        </div>
  
        <div className="item">
          <img src={projectImages.dictionary}  alt="Image 7" />
          <h4>Dictionary App</h4>
          <p>React</p>
          <a target="_blank" href="https://suadpllana.github.io/dictionary/">
            Link to the project
          </a>
        </div>
  
        <div className="item">
          <img src={projectImages.currency}  alt="Image 8" />
          <h4>Currency Converter</h4>
          <p>React</p>
          <a
            target="_blank"
            href="https://suadpllana.github.io/currency-converter/"
          >
            Link to the project
          </a>
        </div>
  
        <div className="item">
          <img src={projectImages.euro2024}  alt="Image 9" />
          <h4>Euro 2024 App</h4>
          <p>HTML,CSS,JavaScript</p>
          <a target="_blank" href="https://suadpllana.github.io/euro2024/">
            Link to the project
          </a>
        </div>
  
        <div className="item">
          <img src={projectImages.toDoList}  alt="Image 10" />
          <h4>To Do List App</h4>
          <p>HTML,CSS,JavaScript</p>
          <a target="_blank" href="https://suadpllana.github.io/to-do-list/">
            Link to the project
          </a>
        </div>
  
        <div className="item">
          <img src={projectImages.university}  alt="Image 11" />
          <h4>University App</h4>
          <p>React</p>
          <a target="_blank" href="https://suadpllana.github.io/university/">
            Link to the project
          </a>
        </div>
  
       
      </div>
      <h3 className="all-projects">Please check all of my projects <a target="_blank" href="https://suadpllana.github.io/all-projects">here</a></h3>
    </>
   
  );
};

export default Projects;
