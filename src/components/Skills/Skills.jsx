import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <h4>Technical Skills</h4>
      <div className="footer-gradient">
        <p className="proficient-skills">
          <i className="icon devicon-javascript-plain"><p className="skill-title">JavaScript</p></i>
          <i className="icon devicon-python-plain"><p className="skill-title">Python</p></i>
          <i className="icon devicon-ruby-plain"><p className="skill-title">Ruby</p></i>
          <i className="icon devicon-html5-plain"><p className="skill-title">HTML5</p></i>
          <i className="icon devicon-css3-plain"><p className="skill-title">CSS3</p></i>
          <i className="icon devicon-bootstrap-plain"><p className="skill-title">Bootstrap</p></i>
          <i className="icon devicon-express-original"><p className="skill-title">Express</p></i>
          <i className="icon devicon-git-plain"><p className="skill-title">Git</p></i>
          <i className="icon devicon-github-plain"><p className="skill-title">Github</p></i>
          <i className="icon devicon-heroku-plain"><p className="skill-title">Heroku</p></i>
          <i className="icon devicon-mongodb-plain"><p className="skill-title">MongoDB</p></i>
          <i className="icon devicon-nodejs-plain"><p className="skill-title">Node.js</p></i>
          <i className="icon devicon-postgresql-plain"><p className="skill-title">PostgreSQL</p></i>
          <i className="icon devicon-rails-plain"><p className="skill-title">Rails</p></i>
          <i className="icon devicon-react-original"><p className="skill-title">React</p></i>
        </p>
      </div>
    </div>
  );
};
export default Skills;
