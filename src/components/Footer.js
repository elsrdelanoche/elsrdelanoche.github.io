import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer text-white mt-5 py-3">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Alfredo Bautista |  
              <a href="https://www.linkedin.com/in/bautista-alfredo" className="link-light"> Contacto</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
