import React from 'react';
import html from './images/html.png';
import css from './images/css.png';
import javascript from './images/javascript.png';
import react from './images/react.png';
function Skills() {
  const skills = [
    { id: 1, name: "HTML", imgSrc: html, description: "Structuring web content with HTML." },
    { id: 2, name: "CSS", imgSrc: css , description: "Styling web pages with CSS." },
    { id: 3, name: "JavaScript", imgSrc:  javascript , description: "Adding interactive elements with JavaScript." },
    { id: 4, name: "React", imgSrc:  react , description: "Building dynamic UIs with React." }
  ];

  return (
    <div className="container pt-5">
      <div className="row gy-4">
        {skills.map(skill => (
          <div key={skill.id} className="col-12 col-sm-6 col-xl-3">
            <div className="card text-center p-4">
              <img src={skill.imgSrc} alt={skill.name} className="mb-2" style={{ width: "50px", height: "50px" }} />
              <h3 className="h1 mb-2">{skill.name}</h3>
              <p className="fs-5 text-secondary">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
