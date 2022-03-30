import React from "react";
import SocialIcon from "./SocialIcon";
import "./Home.css";

export default function Home(props) {
  console.log(props.socialIcons);
  return (
    <div className="home">
      <h1>Hi! I'm Rayleigh.</h1>
      <h2>
        I am a motivated, versatile web developer ready to take my technical
        skills and apply them in a new career.
      </h2>
      <div className="social-container">
        {props.socialIcons.map((icon) => {
          return <SocialIcon icon={icon} />;
        })}
      </div>
    </div>
  );
}
