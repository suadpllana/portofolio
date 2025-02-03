import React from "react";
import "./Projects.css";
import { projectImages , thumbnailsImages} from "../../images";
import { useEffect ,useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";

const Projects = () => {
  const projectData = [
    {
      title: "Movies",
      tools: "React",
      link: "https://suadpllana.github.io/movies/",
      image: projectImages.movies,
      thumbnails: [projectImages.movies, thumbnailsImages.movies1, thumbnailsImages.movies2,thumbnailsImages.movies3,thumbnailsImages.movies4,thumbnailsImages.movies5,thumbnailsImages.movies6,thumbnailsImages.movies7,thumbnailsImages.movies8,thumbnailsImages.movies9,thumbnailsImages.movies10,thumbnailsImages.movies11,thumbnailsImages.movies12,thumbnailsImages.movies13]
    },
    {
      title: "Crypto Prices",
      tools: "React",
      link: "https://suadpllana.github.io/crypto-prices/",
      image: projectImages.crypto,
      thumbnails: [projectImages.crypto,thumbnailsImages.crypto1,thumbnailsImages.crypto2,thumbnailsImages.crypto3,thumbnailsImages.crypto4,thumbnailsImages.crypto5,thumbnailsImages.crypto6,thumbnailsImages.crypto7]
    },
    {
      title: "Football",
      tools: "React",
      link: "https://football-app1.netlify.app",
      image: projectImages.football1,
      thumbnails: [projectImages.football1,thumbnailsImages.football2,thumbnailsImages.football3,thumbnailsImages.football4,thumbnailsImages.football5,thumbnailsImages.football6,thumbnailsImages.football7,thumbnailsImages.football8,thumbnailsImages.football9,thumbnailsImages.football10,thumbnailsImages.football11,thumbnailsImages.football12,thumbnailsImages.football13,thumbnailsImages.football14,thumbnailsImages.football15,thumbnailsImages.football16,thumbnailsImages.football17,thumbnailsImages.football18,thumbnailsImages.football19,thumbnailsImages.football20,thumbnailsImages.football21]
    }
 ,
    {
      title: "Naruto",
      tools: "React,Sass",
      link: "https://suadpllana.github.io/naruto/",
      image: projectImages.naruto,
      thumbnails: [projectImages.naruto,  thumbnailsImages.naruto1 , thumbnailsImages.naruto2 , thumbnailsImages.naruto3,thumbnailsImages.naruto4,thumbnailsImages.naruto5,thumbnailsImages.naruto6,thumbnailsImages.naruto7,thumbnailsImages.naruto8,thumbnailsImages.naruto9,thumbnailsImages.naruto10,thumbnailsImages.naruto11,thumbnailsImages.naruto12,thumbnailsImages.naruto13,thumbnailsImages.naruto14,thumbnailsImages.naruto15]
    },
    {
      title: "Restaurant",
      tools: "React",
      link: "https://suadpllana.github.io/restaurant/",
      image: projectImages.restaurant,
      thumbnails: [projectImages.restaurant, thumbnailsImages.restaurant1,thumbnailsImages.restaurant2,
        thumbnailsImages.restaurant4, thumbnailsImages.restaurant3,
        thumbnailsImages.restaurant5,thumbnailsImages.restaurant6,thumbnailsImages.restaurant7,thumbnailsImages.restaurant8,thumbnailsImages.restaurant9,thumbnailsImages.restaurant10,thumbnailsImages.restaurant11,thumbnailsImages.restaurant12,thumbnailsImages.restaurant13, thumbnailsImages.restaurant14
      ]
    },
  

    {
      title: "Music",
      tools: "React",
      link: "https://suadpllana.github.io/music/",
      image: projectImages.music,
      thumbnails: [projectImages.music, thumbnailsImages.music1, thumbnailsImages.music2,thumbnailsImages.music3,thumbnailsImages.music4]
    },
    {
      title: "Games",
      tools: "React",
      link: "https://suadpllana.github.io/games/",
      image: projectImages.games,
      thumbnails: [projectImages.games , thumbnailsImages.games1,thumbnailsImages.games2,thumbnailsImages.games3,thumbnailsImages.games4,thumbnailsImages.games5,thumbnailsImages.games6,thumbnailsImages.games7]
    },
   
    {
      title: "AI Image Generator",
      tools: "React,Sass",
      link: "https://suadpllana.github.io/ai-image-generator/",
      image: projectImages.ai,
      thumbnails: [projectImages.ai, thumbnailsImages.ai1,thumbnailsImages.ai2]
    },
    {
      title: "Translation",
      tools: "React,Tailwind CSS",
      link: "https://suadpllana.github.io/translate/",
      image: projectImages.translate,
      thumbnails: [projectImages.translate , thumbnailsImages.translate1 , thumbnailsImages.translate2, thumbnailsImages.translate3]
    },

  
    {
      title: "Pokemon",
      tools: "React",
      link: "https://suadpllana.github.io/pokemon/",
      image: projectImages.pokemon,
      thumbnails: [ projectImages.pokemon, thumbnailsImages.pokemon1, thumbnailsImages.pokemon2, thumbnailsImages.pokemon3,]
    },
   

    {
      title: "To Do List",
      tools: "React",
      link: "https://suadpllana.github.io/to-do-list/",
      image: projectImages.todo,
      thumbnails: [projectImages.todo, thumbnailsImages.todo1, thumbnailsImages.todo2 ,thumbnailsImages.todo3,thumbnailsImages.todo4]
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
