import React from "react";
import "../../node_modules/font-awesome/less/font-awesome.less";

const color = {
  color: "white",
  fontSize: ".98em",
  listStyle: "none",
  fontWeight: "100",
  letterSpacing: ".5px",
  display: "flex",
  justifyContent: "center"
};

const gitIcon = {
  color: "white",
  fontSize: "40px",
  textAlign: "center"
};

const WhatiDo = () => (
  <div>
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
    <a href="https://github.com/alecluna" rel="no-referrer">
      <i className="fa fa-github fa-3x" aria-hidden="true" style={gitIcon} />
    </a>
  </div>
);

export default WhatiDo;
