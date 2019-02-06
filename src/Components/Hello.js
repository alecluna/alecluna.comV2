import React from "react";
import Me from "../me.jpg";

const color = {
  color: "white",
  fontSize: ".98em",
  listStyle: "none",
  fontWeight: "100",
  letterSpacing: ".5px",
  display: "flex",
  justifyContent: "center"
};

const radius = {
  borderRadius: "50%",
  width: "110px",
  marginBottom: "8px"
};

const AboutMe = () => (
  <div>
    <img src={Me} className="img-circle" style={radius} alt="Portrait" />
    <div style={{ margin: "auto", width: "25%" }} />

    <div style={color}>
      <p
        style={{
          textAlign: "center",
          width: "45%"
        }}
      >
        Software Developer with a passion for React. Check out my current
        projects on Github!
      </p>
    </div>
  </div>
);

export default AboutMe;
