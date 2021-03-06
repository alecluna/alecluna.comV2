import React from "react";
import pdf from "/Users/alecluna/Documents/alecluna.comV2/src/assets/Luna_Resume.pdf";

const color = {
  color: "white",
  letterSpacing: ".3em",
  fontSize: "37px"
};

const Contact = () => (
  <div style={color}>
    <a href={pdf} target="">
      <i className="fa fa-file" aria-hidden="true" style={color} />
    </a>
    <a href="https://github.com/alecluna" rel="no-referrer">
      <i className="fa fa-github fa-3x" aria-hidden="true" style={color} />
    </a>
    <a href="https://www.linkedin.com/in/alecluna" rel="no-referrer">
      <i className="fa fa-linkedin fa-3x" aria-hidden="true" style={color} />
    </a>
    <a href="https://xkcd.com/979/" rel="no-referrer">
      <i className="fa fa-pied-piper fa-3x" aria-hidden="true" style={color} />
    </a>
  </div>
);

export default Contact;
