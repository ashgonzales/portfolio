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
            I'm Ash.
          </h1>
          <p>
            I am a <span className="highlight">software engineer</span> and <span className="highlight">visual storyteller</span> based in Colorado. Since I was young, stories have always held me captive in the way they offer perspective, an avenue to empathize, and their ability to form human connections between the one telling the story and the one reading it. For myself, establishing those connections for my clients or conveying their stories in the is my first and foremost goal. 
          </p>
          <p>My life has always been about people. I graduated with a degree in Psychology and have a decade's worth of work experience dedicated to bettering the human condition. As a software engineer, that passion persists as I hope to build more intuitive and accessible technologies to help others embrace their curiosity and further exploration, especially into the unknown.</p>
          <p>As a fullstack engineer, I consider myself a skilled listener and team-member, open to and cultivated by  constructive criticism. I have come to love the challenge of building new things with creative partners, but can also execute with equal care to both form and function.</p>
        </div>
      </div>
    </div>
  );
};
export default About;
