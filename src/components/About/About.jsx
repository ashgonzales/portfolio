import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="col-1">
        <div className="image-div">
          <img src="https://i.imgur.com/3oZdZdz.jpg" className="bio-image" alt="headshot"/>
        </div>
      </div>
      <div className="col-2">
        <div id="bio-text">
          <h1 className="title-text">
            Buongiorno! I'm <span className="highlight">Ash</span>.
          </h1>
          <p>
            I am a Colorado-based <span className="highlight">software engineer</span> with a soft-spot for helping <span className="highlight">people</span>, a dream to aid the race in <span className="highlight">space exploration</span>, and a resolve to help forge a sustainable future here on 
            <span className="highlight"> earth</span>.
          </p>
          <p>My life has always been about people. I graduated with a degree in Psychology and have a decade's worth of work experience dedicated to bettering the human condition. As a software engineer, that passion persists as I hope to build better and more intuitive technologies to help others embrace their curiosity and further exploration, especially into the unknown.</p>
          <p>As a fullstack engineer, I consider myself a skilled listener and team-member, open to and cultivated by  constructive criticism. I have come to love the challenge of building new things with creative partners, but can also execute with equal care to both form and function.</p>
        </div>
      </div>
    </div>
  );
};
export default About;
