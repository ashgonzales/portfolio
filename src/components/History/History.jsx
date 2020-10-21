import React from "react";
import { ParallaxBanner } from 'react-scroll-parallax';

const History = () => {
  return (
    <div className="chart-js">
      <ParallaxBanner
        className="your-class"
        layers={[
          {
            image: "https://i.imgur.com/0Jucxhw.jpg",
            amount: 0.1,
          },
          {
            image: "https://i.imgur.com/0Jucxhw.jpg",
            amount: 0.2,
          },
        ]}
        style={{
          height: "500px",
        }}
      >
        <h1>Banner Children</h1>
      </ParallaxBanner>
    </div>
  );
};

export default History;
