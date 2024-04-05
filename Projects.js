// src/components/Projects.js
import React from 'react';
import './styles/Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Project Title 1',
    image: 'http://www.ricoh-imaging.co.jp/english/products/xg-1/ex/img/ex-pic07.jpg',
    video: 'C:\\Users\\Elango\\Downloads\\sample1.mp4', // Corrected the video file path
    description: 'Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '#',
  },
  {
    id: 2,
    title: 'Project Title 2',
    image: 'project-image-2.jpg',
    video: 'project-video-2.mp4', // Add video file name
    description: 'Description of Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '#',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      {projectsData.map((project) => (
        <div className="project-card" key={project.id}>
          <video controls className="project-video" width="400">
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="project-details">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
