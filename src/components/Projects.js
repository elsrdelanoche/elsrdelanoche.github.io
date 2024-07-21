import React from 'react';
import './Projects.css'; // Importa tu archivo de estilos

function Projects() {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del proyecto 1.',
      image: 'proyecto1.jpg', // Reemplaza con la ruta de tu imagen
      githubLink: 'https://github.com/tu-usuario/proyecto1',
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del proyecto 2.',
      image: 'proyecto2.jpg',
      githubLink: 'https://github.com/tu-usuario/proyecto2',
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción del proyecto 3.',
      image: 'proyecto3.jpg',
      githubLink: 'https://github.com/tu-usuario/proyecto3',
    },
    // Agrega más proyectos aquí
  ];

  return (
    <section id="projects" className="projects container py-5">
      <div class="text-center mb-5">
          <h2 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Projects</span></h2>
      </div>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4"> {/* 3 proyectos por fila en pantallas medianas y grandes */}
            <div className="card">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h3 className="card-title">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
