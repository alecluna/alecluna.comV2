import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Hello from "./Components/Hello";
import WhatiDo from "./Components/WhatiDo";
import Contact from "./Components/Contact";
import Border from "../src/Components/Border";
import { CSSTransition, transit } from "react-css-transition";

export default class App extends Component {
  constructor(props) {
    super(props);
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
    console.log(this.state.arr);
  }

  handleClick(index) {
    this.toggle(index);
  }

  render() {
    const radius = {
        borderRadius: "50%",
        width: "110px",
        marginBottom: "8px"
      },
      transitionStylesNorth = {
        defaultStyle: {
          transform: "translate(0, 0)"
        },
        enterStyle: {
          transform: transit("translate(0, -110px)", 500, "ease-in-out")
        },
        leaveStyle: {
          transform: transit("translate(0, 0)", 500, "ease-in-out")
        },
        activeStyle: {
          transform: "translate(0, -110px)"
        }
      },
      transitionStyleSouth = {
        defaultStyle: {
          transform: "translate(0, 0)"
        },
        enterStyle: {
          transform: transit("translate(0, 110px)", 500, "ease-in-out")
        },
        leaveStyle: {
          transform: transit("translate(0, 0)", 500, "ease-in-out")
        },
        activeStyle: {
          transform: "translate(0, 110px)"
        }
      },
      stylesFade = {
        defaultStyle: {
          opacity: 0
        },
        enterStyle: {
          opacity: transit(1.0, 1500, "ease-in-out")
        },
        leaveStyle: {
          opacity: transit(0, 1000, "ease-in-out")
        },
        activeStyle: {
          opacity: 1
        }
      };
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
          <CSSTransition
            {...transitionStylesNorth}
            active={
              this.state.arr[0].isActive ||
              this.state.arr[1].isActive ||
              this.state.arr[2].isActive
            }
          >
            <img
              src={require("./me.jpg")}
              className="img-circle"
              style={radius}
              alt="Portrait"
            />
          </CSSTransition>

          <div style={{ margin: "auto", width: "30%" }}>
            <CSSTransition
              {...transitionStylesNorth}
              active={
                this.state.arr[0].isActive ||
                this.state.arr[1].isActive ||
                this.state.arr[2].isActive
              }
            >
              <Border />
            </CSSTransition>
          </div>

          <CSSTransition
            {...stylesFade}
            active={
              this.state.arr[0].isActive ||
              this.state.arr[1].isActive ||
              this.state.arr[2].isActive
            }
          >
            <div className="content">
              {this.state.arr[0].isActive ? <Hello /> : null}
              {this.state.arr[1].isActive ? <WhatiDo /> : null}
              {this.state.arr[2].isActive ? <Contact /> : null}
            </div>
          </CSSTransition>

          <div style={{ margin: "auto", width: "30%" }}>
            <CSSTransition
              {...transitionStyleSouth}
              active={
                this.state.arr[0].isActive ||
                this.state.arr[1].isActive ||
                this.state.arr[2].isActive
              }
            >
              <Border />
            </CSSTransition>
          </div>

          <CSSTransition
            {...transitionStyleSouth}
            active={
              this.state.arr[0].isActive ||
              this.state.arr[1].isActive ||
              this.state.arr[2].isActive
            }
          >
            <ul className="buttons">{buttons}</ul>
          </CSSTransition>
        </div>
      </div>
    );
  }
}
