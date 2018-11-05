import React from "react";
import pdf from "/Users/alecluna/Documents/alecluna.comV2/src/Luna_Resume.pdf";

const color = {
  color: "black",
  letterSpacing: ".3em",
  fontSize: "37px"
};

class Contact extends React.Component {
  render() {
    return (
      <div style={color}>
        <a href={pdf} target="_blank">
          <i className="fa fa-file" aria-hidden="true" style={color} />
        </a>
        <a href="https://github.com/alecluna" target="_blank">
          <i className="fa fa-github fa-3x" aria-hidden="true" style={color} />
        </a>
        <a href="https://www.linkedin.com/in/alecluna" target="_blank">
          <i
            className="fa fa-linkedin fa-3x"
            aria-hidden="true"
            style={color}
          />
        </a>
        <a href="https://xkcd.com/979/" target="_blank">
          <i
            className="fa fa-pied-piper fa-3x"
            aria-hidden="true"
            style={color}
          />
        </a>
      </div>
    );
  }
}

export default Contact;
