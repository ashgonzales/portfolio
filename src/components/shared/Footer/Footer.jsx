import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div id="contact" className="footer">
      <h4>Contact Info</h4>
      <div className="contact-logos">
        <a href="https://www.linkedin.com/in/ashgonzales/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        <a href="mailto:ash.celis.gonzales@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
        <a href="https://www.github.com/ashgonzales/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://www.instagram.com/ashgonzales/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://ashandsoot.co/" target="_blank" rel="noopener noreferrer"><i className="fab fa-chrome"></i></a>
      </div>
      <div className="made-by">
        <h5><span>©</span> &nbsp;Ash Gonzales&nbsp; <span>2020</span></h5>
      </div>
    </div>
  );
};

export default Footer;