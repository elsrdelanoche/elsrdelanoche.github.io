import React from 'react';
import './Education.css';

function Education() {
  const education = [
    {
      institution: 'Escuela Superior de Computo',
      degree: 'Ingeniería en Sistemas Computacionales',
      date: '2021 - 2025',
    },
    {
      institution: 'Centro de Estudios Cientificos y Tecnologicos No. 3',
      degree: 'Manufactura Asistida por Computadora',
      date: '2017 - 2021',
    },
  ];

  const halfIndex = Math.ceil(education.length / 2); // Índice para dividir el array por la mitad

  return (
    <section id="education" className="education container px-5 pb-5">
      <div class="text-center mb-5">
          <h2 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Educación</span></h2>
      </div>
      <div className="row">
        <div className=" col-md-6 px-5"> {/* Contenedor izquierdo */}
          {education.slice(0, halfIndex).map((edu, index) => (
            <div key={index} className="education-item">
              <h3>{edu.institution}</h3>
              <p className="education-degree">{edu.degree}</p>
              <p className="education-date">{edu.date}</p>
            </div>
          ))}
        </div>
        <div className="col-md-6 px-5"> {/* Contenedor derecho */}
          {education.slice(halfIndex).map((edu, index) => (
            <div key={index + halfIndex} className="education-item"> 
              <h3>{edu.institution}</h3>
              <p className="education-degree">{edu.degree}</p>
              <p className="education-date">{edu.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;