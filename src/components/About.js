import React, { useState, useEffect } from 'react';
import './About.css';
import Batman from '../../src/IMG/perfil1.png';
import Flash from '../../src/IMG/perfil2.png'; 
import elsrdelanoche from '../../src/IMG/perfil3.png'; 
import document from '../../src/documents/cvAlfredoBautista.pdf';

function About() {
  const images = [
    Batman,
    Flash, 
    elsrdelanoche,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos 

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [images.length]);

  return (
    <div className="container about py-5">
      <div className="row align-items-center">
        <div className="col-md-8 col-12 text-center text-md-start">
            <div className="about-me-text"> {/* Contenedor para el texto */}
              <div className="fs-3 fw-light text">Hello there...</div>
              <h1 className="display-3 fw-bolder mb-5">
                <span className="text-gradient d-inline">I'm Alfredo Bautista</span>
              </h1>
              <p>
                I am a computer science student who enjoys understanding and exploring the potential of the technologies at my disposal. With great fascination, I have observed and learned from the advancements in this field, and I am eager to contribute by designing my own systems to address new challenges.
              </p>
              <div className="btn-group fs-2 gap-4">
                <a className="btn-link text-gradient" href="#!"><i className="bi bi-twitter"></i></a>
                <a className="btn-link text-gradient" href="https://www.linkedin.com/in/bautista-alfredo/"><i className="bi bi-linkedin"></i></a>
                <a className="btn-link text-gradient" href="https://github.com/elsrdelanoche"><i className="bi bi-github"></i></a>
              </div>
              <div className="mt-4">
                <a className="btn btn-primary" href={document} target="_blank" rel="noopener noreferrer">RESUME BUTTON</a>
              </div>
            </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="about-me-image d-flex justify-content-center mt-5 mt-md-0">
            <div className="profile bg-gradient-primary-to-secondary">
              <img
                className="profile-img"
                src={images[currentImageIndex]} // Muestra la imagen actual
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;