import React, { useState } from 'react'
import "./Skills.css"
import { images } from '../../images'
import { Link as ScrollLink, Element } from "react-scroll";

const Skills = () => {
  const [showAll, setShowAll] = useState(false)

const skillsData = [
  { name: 'HTML', image: images.HTML },
  { name: 'CSS', image: images.CSS },
  { name: 'JavaScript', image: images.JavaScript },
  { name: 'TypeScript', image: images.TypeScript },
  
  { name: 'React', image: images.React },
    { name: 'Vue.js', image: images.vuejs },
  { name: 'React Native', image: images.reactNative },
  { name: 'Redux', image: images.Redux },
  { name: 'Next.js', image: images.nextJs },    

  { name: 'Tailwind CSS', image: images.TailwindCss },
  { name: 'Sass', image: images.Sass },
  { name: 'Bootstrap', image: images.BootStrap },

  { name: 'Git', image: images.Git },
  { name: 'GitHub', image: images.GitHub },
  { name: 'Bitbucket', image: images.bitbucket },

  { name: 'Supabase', image: images.supabase },
  { name: 'Firebase', image: images.firebase },

  { name: 'Node js', image: images.nodeJs },
  { name: 'MySQL', image: images.mySql },
  { name: 'MongoDB', image: images.mongoDB },
  { name: 'PHP', image: images.php },
  { name: 'Java', image: images.java },
  { name: 'Python', image: images.python },
  { name: 'C#', image: images.csharp }
];


  const initialCount = 9
  const displayedSkills = showAll ? skillsData : skillsData.slice(0, initialCount)

  return (
    <div>
      <Element name="skills"/>
      <h2 id="skills">Skills</h2>
      <div className="skills">
        {displayedSkills.map((skill, index) => (
          <div key={index}>
            <img className="skills-images" src={skill.image} alt={skill.name} />
            <h6>{skill.name}</h6>
          </div>
        ))}
      </div>
      <div className="skills-button-container">
        {!showAll && skillsData.length > initialCount && (
          <button 
            className="skills-button"
            onClick={() => setShowAll(true)}
          >
            Show More
          </button>
        )}
        {showAll && (
          <button 
            className="skills-button"
            onClick={() => setShowAll(false)}
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  )
}

export default Skills
