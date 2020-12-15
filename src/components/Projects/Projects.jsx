import React, { useState, useEffect } from "react";
import { airtableURL } from "../../services/constants";
import axios from "axios";
import "./Projects.css";

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      });
      setAllProjects(response.data.records);
      console.log(response);
    };
    fetchProjects();
  }, []);

  const projectsJSX = allProjects.map((project, idx) => (
    <section className="project-container" key={idx}>
      <div className="project-img">
        <a href={project.fields.url} target="_blank" rel="noopener noreferrer">
          <img
            src={project.fields.image}
            alt={project.fields.name}
            className="img"
          />
        </a>
      </div>
      <div className="project-descr">
        <div className="project-text">
          <a
            href={project.fields.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>{project.fields.name}</h1>
          </a>
          <h4>{project.fields.type}</h4>
          <div className="project-gradient"></div>
          <p className="description">{project.fields.description}</p>
        </div>
        <div className="live-sources">
            <h2>
              <span className="project-span">
                <a
                  href={project.fields.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LIVE SITE
                </a>
              </span>
            </h2>
            <h2>
              <span className="project-span">
                <a
                  href={project.fields.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SOURCE CODE
                </a>
              </span>
            </h2>
          </div>
      </div>
    </section>
  ));

  return (
    <div id="projects" className="projects">
      <h3>Projects</h3>
      {projectsJSX}
    </div>
  );
};
export default Projects;
