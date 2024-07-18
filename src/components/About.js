import React, {} from 'react';
import './About.css';
import Batman from '../../src/IMG/Alfredo.jpg'; // Asegúrate de importar la imagen correctamente

function About() {
  return (
    <div className="container about-me">
      <div className="row 5 align-items-center">
        <div className="col-md-5 text-center text-xxl-start">
          <div className="about-me-text"> {/* Contenedor para el texto */}
            <div className="fs-3 fw-light text-muted">Hello there...</div>
            <h1 className="display-3 fw-bolder mb-5">
              <span className="text-gradient d-inline">I'm Alfredo Bautista</span>
            </h1>
            <p>I am a computer science student who enjoys understanding and exploring the potential of the technologies at my disposal. With great fascination, I have observed and learned from the advancements in this field, and I am eager to contribute by designing my own systems to address new challenges.</p>
            
          </div>
        </div>
        <div className="col-xxl-7">
          <div className="about-me-image d-flex justify-content-center mt-5 mt-xxl-0"> {/* Contenedor para la imagen */}
            <div className="profile bg-gradient-primary-to-secondary">
              <img className="profile-img" src={Batman} alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
