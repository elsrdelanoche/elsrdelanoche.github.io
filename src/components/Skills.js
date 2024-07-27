import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { type: 'Lenguajes de programación', items: ['JavaScript', 'Python', 'Java'] },
    { type: 'Frameworks y bibliotecas', items: ['React', 'Node.js', 'Express'] },
    { type: 'Bases de datos', items: ['MongoDB', 'PostgreSQL'] },
    { type: 'Herramientas', items: ['Git', 'Docker', 'VS Code'] },
    { type: 'Habilidades blandas', items: ['Comunicación', 'Trabajo en equipo', 'Resolución de problemas'] },
    // ... más categorías y habilidades
  ];

  return (
    <section id="skills" className="skills container py-5">
      <div class="text-center mb-5">
          <h2 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Habilidades</span></h2>
      </div>

      {skills.map((skill, index) => (
        <div key={index} className="skill-category ">
          <h3>{skill.type}</h3>
          <ul>
            {skill.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
