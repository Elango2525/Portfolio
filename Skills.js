// Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML', image: 'https://www.clipartkey.com/mpngs/m/210-2104705_html-logo-png-transparent-background.png' },
    { name: 'CSS', image: 'https://tse3.mm.bing.net/th?id=OIP.SEdfkcclq6_MSsij64k54AHaJY&pid=Api&P=0&h=180' },
    { name: 'JavaScript', image: 'https://w7.pngwing.com/pngs/725/775/png-transparent-javascript-html-logo-blog-css3-javanese-miscellaneous-angle-text.png' },
    { name: 'React', image: 'https://justinmr.github.io/portfolio/imgs/react-1-logo-png-transparent-min.png' },
    // Add more front-end skills as needed
  ];

  const backendSkills = [
    { name: 'Node.js', image: 'https://tse2.mm.bing.net/th?id=OIP.Tf4BFI6846neirVSebC0vAAAAA&pid=Api&P=0&h=180' },
    { name: 'MongoDB', image: 'https://tse2.mm.bing.net/th?id=OIP.MRFiH6S--beHnGTmPGyd6AHaFq&pid=Api&P=0&h=180' },
    { name: 'SpringBoot', image: 'https://tse2.mm.bing.net/th?id=OIP.o7Fhv2rZFrRveVMjaUWlwgHaGp&pid=Api&P=0&h=180' },
    // Add more back-end skills as needed
  ];

  const programmingLanguages = [
    { name: 'Java', image: 'https://tse3.mm.bing.net/th?id=OIP.Vp60JtW1D7LOTMwoIbzInwHaHa&pid=Api&P=0&h=180' },
    { name: 'C', image: 'https://www.pngitem.com/pimgs/m/31-312155_c-programming-language-logo-hd-png-download.png' },
    { name: 'Python', image: 'https://tse3.mm.bing.net/th?id=OIP.8HclFziZc7UUuvimLcFE8wHaC0&pid=Api&P=0&w=422&h=161' },
    // Add more programming languages as needed
  ];

  return (
    <div className="skills-container">
      <h2>Front-end Skills</h2>
      <div className="skills-section">
        {frontendSkills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.image} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>

      <h2>Back-end Skills</h2>
      <div className="skills-section">
        {backendSkills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.image} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>

      <h2>Programming Languages</h2>
      <div className="skills-section">
        {programmingLanguages.map((lang, index) => (
          <div key={index} className="skill-item">
            <img src={lang.image} alt={lang.name} />
            <span>{lang.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
