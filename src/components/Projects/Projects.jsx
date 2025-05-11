import React from "react";
import "./Projects.css";

import { useEffect ,useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { projectData } from "./projectData";
const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image, thumbnails) => {
    setSelectedImage(image);
    setThumbnails(thumbnails);
    setCurrentIndex(thumbnails.indexOf(image));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setThumbnails([]);
    setCurrentIndex(0);
  };

  const showNextImage = () => {
    if (currentIndex < thumbnails.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedImage(thumbnails[newIndex]);
    }
  };

  const showPreviousImage = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedImage(thumbnails[newIndex]);
    }
  };

  return (
    <>
      <Element name="projects" />
      <h2 id="skills">Projects</h2>
      <div className="projectsContainer">
        {projectData.map((project) => (
          <div className="project" key={project.title}>
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
              <GrLinkPrevious onClick={showPreviousImage} className="prev icon" />
              <img className="main-image" src={selectedImage} alt="Selected" />
              <GrLinkNext onClick={showNextImage} className="next icon" />
              <div className="thumbnails">
                {thumbnails.map((thumb, index) => (
                  <img
                    key={index}
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => {
                      setSelectedImage(thumb);
                      setCurrentIndex(index);
                    }}
                    className={thumb === selectedImage ? "active" : ""}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <h3 className="all-projects">
        Check all of my projects {" "}
        <a target="_blank" href="https://suadpllana.github.io/all-projects">
          here
        </a>
      </h3>
    </>
  );
};

export default Projects;
