import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Hello from "./Components/Hello";
import WhatiDo from "./Components/WhatiDo";
import Contact from "./Components/Contact";
import { Transition, animated } from "react-spring";

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
      ],
      renderTime: false
    };
  }

  toggle(index) {
    let temp = this.state.arr;
    temp.forEach((fillerArg, element) => {
      temp[element] === temp[index]
        ? (temp[index].isActive = !temp[index].isActive)
        : (temp[element].isActive = false); //toggle clicked button and falsify everything else
    });
    setTimeout(() => this.setState({ isActive: temp, renderTime: true }), 1000);
  }

  handleClick(index) {
    this.toggle(index);
  }

  renderContent = () => (
    <div>
      {this.state.arr[0].isActive ? <Hello /> : null}
      {this.state.arr[1].isActive ? <WhatiDo /> : null}
      {this.state.arr[2].isActive ? <Contact /> : null}
    </div>
  );

  render() {
    const { renderTime } = this.state;
    let buttons = this.state.arr.map((el, index) => (
      <li key={index}>
        <button onClick={() => this.handleClick(index)} className="bttn">
          {el.name}
        </button>
      </li>
    ));

    return (
      <div
        style={{
          width: "100%",
          height: "100vh"
        }}
      >
        <div className="vertical-align">
          <img
            src={require("./me.jpg")}
            className="img-circle"
            style={radius}
            alt="Portrait"
          />

          <div style={{ margin: "auto", width: "25%" }} />
          {/* <Transition
            native
            items={this.state.arr.isActive}
            config={{ delay: 1000, duration: 1000 }}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {props => ( */}
          <div style={{ margin: "20px" }}>
            {renderTime ? this.renderContent() : null}
          </div>
          {/* )}
          </Transition> */}

          <div style={{ margin: "auto", width: "25%" }} />

          <ul className="buttons">{buttons}</ul>
        </div>
      </div>
    );
  }
}
