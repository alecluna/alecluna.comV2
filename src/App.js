import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Hello from "./Components/Hello";
import WhatiDo from "./Components/WhatiDo";
import Contact from "./Components/Contact";
import Border from "../src/Components/Border";

const radius = {
  borderRadius: "50%",
  width: "110px",
  marginBottom: "8px"
};

export default class App extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      arr: [
        { name: "Hello", isActive: false, hidden: "hidden" }, //initialize buttons */
        { name: "What I Do", isActive: false, hidden: "hidden" },
        { name: "Contact", isActive: false }
      ]
    };
  }

  toggle(index) {
    let temp = this.state.arr;
    temp.forEach((fillerArg, element) => {
      temp[element] === temp[index]
        ? (temp[index].isActive = !temp[index].isActive)
        : (temp[element].isActive = false); //toggle clicked button and falsify everything else
    });

    this.setState({ isActive: temp }); //replace current array with newly updated temp array
  }

  handleClick(index) {
    this.toggle(index);
  }

  render() {
    let buttons = this.state.arr.map((el, index) => (
      <li key={index}>
        <button onClick={() => this.handleClick(index)} className="bttn">
          {el.name}
        </button>
      </li>
    ));

    return (
      <div className="container">
        <div className="vertical-align">
          <img
            src={require("./me.jpg")}
            className="img-circle"
            style={radius}
            alt="Portrait"
          />

          <div style={{ margin: "auto", width: "25%" }}>
            <Border bottomMargin="1px" />
          </div>

          <div className="content">
            {this.state.arr[0].isActive ? <Hello /> : null}
            {this.state.arr[1].isActive ? <WhatiDo /> : null}
            {this.state.arr[2].isActive ? <Contact /> : null}
          </div>

          <div style={{ margin: "auto", width: "25%" }}>
            <Border bottomMargin="20px" />
          </div>

          <ul className="buttons">{buttons}</ul>
        </div>
      </div>
    );
  }
}
