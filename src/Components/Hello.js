import React from "react";

const color = {
  color: "black"
};

const font = {
  fontSize: "14px"
};

const aboutMeDiv = {
  height: "210px",
  color: "black",
  letterSpacing: ".5px",
  fontWeight: "100"
};

const AboutMe = () => (
  <div style={aboutMeDiv}>
    <p style={font}>I am a: </p>
    <i className="fa fa-book" aria-hidden="true" style={color} />
    <p style={font}> Student </p>

    <i className="fa fa-code" aria-hidden="true" style={color} />
    <p style={font}> Developer </p>

    <i className="fa fa-edit" aria-hidden="true" style={color} />
    <p style={font}> Designer </p>
  </div>
);

export default AboutMe;
