import React from 'react';
import './Education.css';

function Education() {
  const education = [
    {
      institution: 'Universidad X',
      degree: 'Licenciatura en Ciencias de la Computación',
      date: '2018 - 2022',
    },
    {
      institution: 'Instituto Y',
      degree: 'Curso de Desarrollo Web Full Stack',
      date: '2023',
    },
    // ... más formaciones académicas
  ];

  return (
    <section id="education" className="education container py-5">
      <div class="text-center mb-5">
          <h2 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Educación</span></h2>
      </div>
      {education.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.institution}</h3>
          <p className="education-degree">{edu.degree}</p>
          <p className="education-date">{edu.date}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;
