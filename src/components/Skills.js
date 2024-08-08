import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { type: 'Lenguajes de programación', items: ['C++/C - 2.5 años','VHDL - 1 año','PHP - 8 meses','Python - 8 Meses', 'Java - 3 meses'] },
    { type: 'Frameworks y bibliotecas', items: ['React', 'Bootstrap','Tailwind','Node.js', 'Express'] },
    { type: 'Herramientas', items: ['Git y Github', 'Linux', 'LaTex','HTML & CSS','MarkDown', 'Arduino', 'VS Code','Vim'] },
    { type: 'Habilidades blandas', items: ['Comunicación', 'Trabajo en equipo', 'Resolución de problemas','Adaptabilidad','Pensamiento Crítico','Gestión de tiempo','Liderazgo',] },
    
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
