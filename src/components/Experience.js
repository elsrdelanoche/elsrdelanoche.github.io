import React from 'react';
import './Experience.css'; // Importa tu archivo de estilos

function Experience() {
  const experiences = [
    {
      company: 'Empresa A',
      position: 'Desarrollador Frontend',
      date: '2022 - Presente',
      description: 'Descripción de tus responsabilidades y logros en la Empresa A.',
    },
    {
      company: 'Empresa B',
      position: 'Diseñador UI/UX',
      date: '2020 - 2022',
      description: 'Descripción de tus responsabilidades y logros en la Empresa B.',
    },
    // ... más experiencias laborales
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experiencia Laboral</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.company}</h3>
          <p className="experience-position">{exp.position}</p>
          <p className="experience-date">{exp.date}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;
