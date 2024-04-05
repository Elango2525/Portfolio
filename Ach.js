// Achievements.js
import React from 'react';
import './styles/Ach.css'; // Import your styling for the Achievements page
// import  './images/reactjs.jpg';
const Achievements = () => {
  // Sample data for certifications
  const certifications = [
    {
      name: 'Certification Name 1',
      description: 'Description for Certification 1. This is a sample description.',
      image: 'https://lh5.googleusercontent.com/p/AF1QipOFO4lqkd3ZMDSx4J4cXoOoBncLjC6hT4ffd9_W=w750-h401-p-k-no'
    },
    {
      name: 'Certification Name 2',
      description: 'Description for Certification 2. This is another sample description.',
      image: 'image.jpg'
    },
    // Add more certifications as needed
  ];

  return (
    <div className="achievements-container">
      <h2>Achievements</h2>
      <div className="certifications-list">
        {certifications.map((certification, index) => (
          <div key={index} className="certification-item">
            <h3>{certification.name}</h3>
            <p>{certification.description}</p>
            <img src={certification.image} alt={certification.name} />
            <br></br>
            <center>
            <button>View Details</button>
            </center>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
