import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="col-1">
        <div className="image-div">
          <img src="https://i.imgur.com/3oZdZdz.jpg" className="bio-image" alt="headshot" />
        </div>
      </div>
      <div className="col-2">
        <div id="bio-text">
          <h1 className="title-text">
            Buongiorno, I'm <span className="highlight">Ash</span>.
          </h1>
          <p>
            I'm a <span className="highlight">software engineer</span> who is
            passionate about <span className="highlight">people</span>, 
            furthering our future in{" "}
            <span className="highlight">space exploration</span>, as well forging a sustainable one here on {" "}
            <span className="highlight">earth</span>.
          </p>
          <p>My life has always been about people. I graduated with my Bachelor's degree in Psychology and have a decade's worth professional experience dedicated to that passion.</p>
          <p>As a software engineer, that passion continues, but with the additive desire to be apart of the legacy that builds technologies to help others embrace and further exploration, especially into the unknown.</p>
          <p>I  fullstack web developer.</p>
        </div>
      </div>
    </div>
  );
};
export default About;
