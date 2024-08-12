import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaPython, FaJava, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiC, SiTailwindcss, SiLatex, SiVim, SiPhp, SiJavascript, SiBootstrap, SiGit, SiCss3, SiMarkdown, SiLinux, SiArduino } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { GiUsaFlag, GiMexico } from "react-icons/gi";
import './Skills.css';

function Skills() {
  const skills = [
    {
      type: 'Lenguajes de programación',
      items: [
        { icon: <SiCplusplus />, label: 'C++/C - 2.5 años' },
        { icon: <SiC />, label: 'C - 2.5 años' },
        { icon: <SiPhp />, label: 'PHP - 8 meses' },
        { icon: <FaPython />, label: 'Python - 8 meses' },
        { icon: <FaJava />, label: 'Java - 3 meses' },
        { icon: <SiJavascript />, label: 'JavaScript - 3 meses' }
      ]
    },
    {
      type: 'Frameworks y bibliotecas',
      items: [
        { icon: <FaReact />, label: 'React' },
        { icon: <SiBootstrap />, label: 'Bootstrap' },
        { icon: <SiTailwindcss />, label: 'Tailwind' },
        { icon: <FaNodeJs />, label: 'Node.js' }
      ]
    },
    {
      type: 'Herramientas',
      items: [
        { icon: <SiGit />, label: 'Git' },
        { icon: <FaGithub />, label: 'Github' },
        { icon: <FaHtml5 />, label: 'HTML' },
        { icon: <SiCss3 />, label: 'CSS' },
        { icon: <SiLatex />, label: 'LaTex' },
        { icon: <SiMarkdown />, label: 'MarkDown' },
        { icon: <VscVscode />, label: 'VsCode' },
        { icon: <SiLinux />, label: 'Linux' },
        { icon: <SiVim />, label: 'Vim' },
        { icon: <SiArduino />, label: 'Arduino' }
      ]
    },
    {
      type: 'Idiomas',
      items: [
        { icon: <GiMexico />, label: 'Español' },
        { icon: <GiUsaFlag  />, label: 'Inglés' }
      ]
    },
    {
      type: 'Habilidades blandas',
      items: [
        'Comunicación',
        'Trabajo en equipo',
        'Resolución de problemas',
        'Adaptabilidad',
        'Pensamiento Crítico',
        'Gestión de tiempo',
        'Liderazgo'
      ]
    }
  ];

  return (
    <section id="skills" className="skills container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bolder mb-0">
          <span className="text-gradient d-inline">Habilidades</span>
        </h2>
      </div>
      <div className="row features-big text-center skill-category">
        {skills.map((skill, index) => (
          <div key={index} className="col-md-4 mb-5">
            <h3><strong>{skill.type}</strong></h3>
            {index < 4 ? (
              <ul className="circle-container">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="custom-circle-item">
                    {item.icon}
                    <span className="tooltip-text">{item.label}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="soft-skills-list">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
