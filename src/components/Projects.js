import React from 'react';
import './Projects.css'; // Importa tu archivo de estilos
import P1 from '../IMG/1.png';
import P2 from '../IMG/2.png';
import P3 from '../IMG/3.png';
import P4 from '../IMG/4.png';
import P5 from '../IMG/5.png';
import P6 from '../IMG/6.png';
import P7 from '../IMG/7.png';
import P8 from '../IMG/8.png';
import P9 from '../IMG/9.png';
import P10 from '../IMG/10.png';
import P11 from '../IMG/11.png';
import P12 from '../IMG/12.png';

function Projects() {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: P1, // Reemplaza con la ruta de tu imagen
      githubLink: 'https://github.com/tu-usuario/proyecto1',
    },
    {
      title: 'Proyecto 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: P2,
      githubLink: 'https://github.com/tu-usuario/proyecto2',
    },
    {
      title: 'Analizador de algoritmos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: P3,
      githubLink: 'https://github.com/tu-usuario/proyecto3',
    },
    {
      title: 'Analizador de algoritmos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: P4,
      githubLink: 'https://github.com/tu-usuario/proyecto3',
    },
    {
      title: 'Analizador de algoritmos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: P5,
      githubLink: 'https://github.com/tu-usuario/proyecto3',
    },
    {
      title: 'Analizador de algoritmos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: P6,
      githubLink: 'https://github.com/tu-usuario/proyecto3',
    },
    {
      title: 'Analizador de algoritmos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: P7,
      githubLink: 'https://github.com/tu-usuario/proyecto3',
    },
    {
      title: 'Analizador de algoritmos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: P8,
      githubLink: 'https://github.com/tu-usuario/proyecto3',
    },
    {
      title: 'Analizador de algoritmos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: P9,
      githubLink: 'https://github.com/tu-usuario/proyecto3',
    },
    {
      title: 'Analizador de algoritmos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: P10,
      githubLink: 'https://github.com/tu-usuario/proyecto3',
    },
    {
      title: 'Analizador de algoritmos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: P11,
      githubLink: 'https://github.com/tu-usuario/proyecto3',
    },
    {
      title: 'Analizador de algoritmos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: P12,
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
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <h3 className="card-title">
                    {project.title}
                  </h3>
                  <p className="card-text">{project.description}</p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
