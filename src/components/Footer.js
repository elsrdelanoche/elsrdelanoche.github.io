import React from 'react';
import './Footer.css'; // Importa tu archivo de estilos

function Footer() {
  return (
    <footer className="footer text-white mt-5 py-3">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Tu Nombre | 
              <a href="mailto:tucorreo@email.com" className="link-light">tucorreo@email.com</a> | 
              <a href="tel:+1234567890" className="link-light">+1234567890</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
