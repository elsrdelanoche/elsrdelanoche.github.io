import React from 'react';
import './Projects.css'; 
import P1 from '../IMG/1.png';
import P2 from '../IMG/2.png';
import P3 from '../IMG/3.png';
import P4 from '../IMG/4.png';
import P5 from '../IMG/5.png';
import P6 from '../IMG/6.png';
import P7 from '../IMG/7.png';
import P8 from '../IMG/8.png';

function Projects() {
  const projects = [
    {
      title: 'Analizador de Complejidad de Algoritmos',
      description: 'Herramienta educativa que visualiza la complejidad computacional de algoritmos. Permite ejecutar algoritmos con diferentes tamaños de arreglos y compara las operaciones realizadas con curvas teóricas. Incluye selección de algoritmos como O(1), O(n), O(n log n), O(n²).',
      image: P1,
      githubLink: 'https://github.com/elsrdelanoche/ESCOM-ISC/tree/main/semester%2023-1/Analysis%20and%20Design%20of%20Algorithms/Analizador',
    },
    {
      title: 'Simulación del Juego de la Vida',
      description: 'Simulación del Juego de la Vida de Conway usando SFML en C++. Las células en una cuadrícula evolucionan según reglas simples. La simulación representa en esta ocasión el comportamiento del VIH, con células vivas en verde y muertas en negro. Implementación en C++ con inicialización aleatoria.',
      image: P2,
      githubLink: 'https://github.com/elsrdelanoche/ESCOM-ISC/tree/main/semester%2023-2/Teoria%20de%20la%20Computaci%C3%B3n/AutomatasCelularesVIH',
    },
    {
      title: 'Transformación de AFN a AFD y AFD desde archivo TXT',
      description: 'Implementación de algoritmos en C++ para la conversión de autómatas. Incluye visualización gráfica de los autómatas con Graphviz y evaluación de cadenas de entrada. Ideal para estudios y demostraciones de conceptos relacionados con los autómatas finitos, tanto deterministas como no deterministas.',
      image: P3,
      githubLink: 'https://github.com/elsrdelanoche/ESCOM-ISC/blob/main/semester%2023-2/Teoria%20de%20la%20Computaci%C3%B3n/Transformaci%C3%B3n%20Automatas/README.md',
    },
    {
      title: 'Pagina Web para contrataciones',
      description: 'Como introducción en desarrollo web se muestran los diferentes paquetes ofrecidos por un Dj local, se da un formulario para almacenar en base de datos, calendarizar una fecha, y posteriormente enviar por correo una confirmación y ticket de la contratación.',
      image: P4,
      githubLink: 'https://github.com/elsrdelanoche/ESCOM-ISC/blob/main/semester%2023-2/Desarrollo%20web/Dj%20pinata/README.md',
    },
    {
      title: 'Maquina expendedora',
      description: 'Haciendo uso de maquinas de estado, y llevándola a código en vhdl se desarrollo la lógica para el funcionamiento de una maquina expendedora, mostrando su interfaz en una LCD conectada a un Arduino.',
      image: P5,
      githubLink: 'https://github.com/elsrdelanoche/ESCOM-ISC/tree/main/semester%2024-1/Dise%C3%B1o%20de%20Sistemas%20Digitales/Maquina%20Expendedora',
    },
    {
      title: 'Sistema para la gestión de invitaciones',
      description: '"RSVP Planner" es una plataforma online que ofrece creación y gestión de invitaciones electrónicas personalizadas para eventos. Proporciona herramientas intuitivas para diseñar invitaciones únicas, gestionar listas de invitados y confirmar asistencias, promoviendo la sostenibilidad y eficiencia.',
      image: P6,
      githubLink: 'https://github.com/elsrdelanoche/RSVP-Planner',
    },
    {
      title: 'Aplicación Web para librería',
      description: 'Sistema web para gestionar el inventario de una librería, optimizar las ventas en sucursal física a través de puntos de venta y venta online al cliente, verificadores de precio en tienda física.',
      image: P7,
      githubLink: 'https://github.com/LArkadia/-MazacuataStore-',
    },
    {
      title: 'PONG',
      description: 'Inspirado en el clásico juego de Atari, se desarrolló su versión en python con el uso de Pygame, así el usuario puede jugar solo necesitando el cursor de su computador para enfrentar a la maquina.',
      image: P8,
      githubLink: 'https://github.com/elsrdelanoche/atari-pong-on-python',
    },
    
  ];

  return (
    <section id="projects" className="projects container py-5">
      <div class="text-center mb-5">
          <h2 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Proyectos</span></h2>
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
                </a>
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
