import React from 'react';


function Projects() {
  const projects = [
    { id: 1, title: "Recipe Finder", description: "Discover recipes based on your ingredients.", link: "#" },
    { id: 2, title: "Amazon Clone", description: "Build a feature-rich e-commerce site.", link: "#" },
    { id: 3, title: "Task Manager", description: "Organize and track your tasks with ease.", link: "#" },
    { id: 4, title: "Myntra Clone", description: "Create a fashion e-commerce site.", link: "#" }
  ];

  return (
    <section className="py-5 py-xl-8">
      <div className="container mb-5 text-center">
        <h1>Projects</h1>
      </div>
      <div className="row justify-content-center">
        {projects.map((project) => (
          <div key={project.id} className="col-11 col-sm-6 col-lg-3">
            <div className="badge text-primary p-3 mb-4">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href={project.link} className="fw-bold">Github Link</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
