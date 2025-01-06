import React from "react";
import "./Projects.css";
import { projectImages , thumbnailsImages} from "../../images";
import { useEffect ,useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";

const Projects = () => {
  const projectData = [
    {
      title: "Naruto",
      tools: "React,Sass",
      link: "https://suadpllana.github.io/naruto/",
      image: projectImages.naruto,
      thumbnails: [projectImages.naruto,  thumbnailsImages.naruto1 , thumbnailsImages.naruto2 , thumbnailsImages.naruto3,thumbnailsImages.naruto4,thumbnailsImages.naruto5,thumbnailsImages.naruto6,thumbnailsImages.naruto7,thumbnailsImages.naruto8,thumbnailsImages.naruto9,thumbnailsImages.naruto10,thumbnailsImages.naruto11,]
    
    },
    {
      title: "Crypto Prices",
      tools: "React",
      link: "https://suadpllana.github.io/crypto-prices/",
      image: thumbnailsImages.currency1,
      thumbnails: [thumbnailsImages.currency1,thumbnailsImages.currency2,thumbnailsImages.currency3,thumbnailsImages.currency4]
    },
    {
      title: "Restaurant",
      tools: "React",
      link: "https://suadpllana.github.io/restaurant/",
      image: projectImages.restaurant,
      thumbnails: [projectImages.restaurant, thumbnailsImages.restaurant1,thumbnailsImages.restaurant2,
        thumbnailsImages.restaurant4, thumbnailsImages.restaurant3,
        thumbnailsImages.restaurant5,thumbnailsImages.restaurant6,thumbnailsImages.restaurant7,thumbnailsImages.restaurant8,thumbnailsImages.restaurant9,thumbnailsImages.restaurant10,thumbnailsImages.restaurant11,thumbnailsImages.restaurant12,thumbnailsImages.restaurant13,
      ]
    },
    {
      title: "Cinema",
      tools: "React,Sass",
      link: "https://suadpllana.github.io/cinema/",
      image: projectImages.cinema,
      thumbnails: [projectImages.cinema, thumbnailsImages.cinema1, thumbnailsImages.cinema2, thumbnailsImages.cinema3, thumbnailsImages.cinema4, thumbnailsImages.cinema5, thumbnailsImages.cinema6,thumbnailsImages.cinema7]
    },
    {
      title: "Euro 2024",
      tools: "React",
      link: "https://suadpllana.github.io/euro2024/",
      image: projectImages.euro2024,
      thumbnails: [projectImages.euro2024, thumbnailsImages.euro1,thumbnailsImages.euro2,thumbnailsImages.euro3, thumbnailsImages.euro8 , thumbnailsImages.euro4,   thumbnailsImages.euro5,thumbnailsImages.euro6, thumbnailsImages.euro9 ,thumbnailsImages.euro7,thumbnailsImages.euro10,thumbnailsImages.euro11,thumbnailsImages.euro12,thumbnailsImages.euro13]
    },
    {
      title: "Translation",
      tools: "React,Tailwind CSS",
      link: "https://suadpllana.github.io/translate/",
      image: projectImages.translation,
      thumbnails: [projectImages.translation , thumbnailsImages.translate1 , thumbnailsImages.translate2, thumbnailsImages.translate3]
    },
    {
      title: "AI Image Generator",
      tools: "React,Sass",
      link: "https://suadpllana.github.io/ai-image-generator/",
      image: projectImages.aiImage,
      thumbnails: [projectImages.aiImage, thumbnailsImages.ai1,thumbnailsImages.ai2]
    },
    {
      title: "Dictionary",
      tools: "React,Tailwind CSS",
      link: "https://suadpllana.github.io/dictionary/",
      image: projectImages.dictionary,
      thumbnails: [projectImages.dictionary]
    },
    {
      title: "Charity",
      tools: "React,Bootstrap",
      link: "https://suadpllana.github.io/charity/",
      image: projectImages.news,
      thumbnails: [projectImages.news, thumbnailsImages.news1, thumbnailsImages.news2, thumbnailsImages.news3]
    },
   

    {
      title: "To Do List",
      tools: "HTML,CSS,JavaScript",
      link: "https://suadpllana.github.io/to-do-list/",
      image: thumbnailsImages.todo1,
      thumbnails: [thumbnailsImages.todo1, thumbnailsImages.todo2, thumbnailsImages.todo3 ,projectImages.toDoList]
    },
 
    {
      title: "Dogs",
      tools: "React",
      link: "https://suadpllana.github.io/dogs/",
      image: thumbnailsImages.quiz1,
      thumbnails: [ thumbnailsImages.quiz1, thumbnailsImages.quiz2, thumbnailsImages.quiz3,thumbnailsImages.quiz4,thumbnailsImages.quiz5,thumbnailsImages.quiz6]
    },
  

 
  
  ]
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);

  const openModal = (image, thumbnails) => {
    setSelectedImage(image);
    setThumbnails(thumbnails);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setThumbnails([]);
  };

  

  return (
    <>
      <Element name="projects" />
      <h2 id="skills">Projects</h2>
      <div className="projectsContainer" >
      {projectData.map((project) => (
        <div  className="project" key={project.title}>
          <img
            src={project.image}
            alt={project.title}
            onClick={() => openModal(project.image, project.thumbnails)}
          />
          <h4>{project.title}</h4>
          <p>{project.tools}</p>
          <a target="_blank" rel="noopener noreferrer" href={project.link}>
            Link to the project
          </a>
        </div>
      ))}

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img className="main-image" src={selectedImage} alt="Selected" />
            <div className="thumbnails">
              {thumbnails.map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setSelectedImage(thumb)}
                  className={thumb === selectedImage ? 'active' : ''}
                />
              ))}
              
            </div>
         
          </div>
       
        </div>
      )}
    </div>

      <h3 className="all-projects">
        Please check all of my projects{" "}
        <a target="_blank" href="https://suadpllana.github.io/all-projects">
          here
        </a>
      </h3>
    </>
  );
};

export default Projects;
