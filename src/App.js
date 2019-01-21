import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { animated, Transition, config } from "react-spring";
import Hello from "./Components/Hello";
import WhatiDo from "./Components/WhatiDo";
import Contact from "./Components/Contact";

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
        {
          name: "Hello",
          isActive: false,
          key: 1
        },
        {
          name: "What I Do",
          isActive: false,
          key: 2
        },
        {
          name: "Contact",
          isActive: false,
          key: 3
        }
      ],
      show: false
    }; //initialize buttons */
  }

  toggle(index) {
    this.setState({ show: false });
    setTimeout(() => this.setState({ isActive: temp, show: true }), 300);

    let temp = this.state.arr;
    temp.forEach((fillerArg, element) => {
      if (temp[element] === temp[index]) {
        temp[index].isActive = !temp[index].isActive;
      } else {
        temp[element].isActive = false;
      }
    });
    //setTimeout(() => this.setState({ isActive: temp, show: true }), 300);
    //this.setState({ isActive: temp, show: true });
  }

  handleClick(index) {
    this.toggle(index);
  }

  render() {
    const { show } = this.state;

    let buttons = this.state.arr.map((el, index) => (
      <li key={el.key}>
        <button onClick={() => this.handleClick(index)} className="bttn">
          {el.name}
        </button>
      </li>
    ));

    return (
      <div style={{ width: "100%", height: "100vh" }}>
        <div className="vertical-align">
          <img
            src={require("./me.jpg")}
            className="img-circle"
            style={radius}
            alt="Portrait"
          />

          <div style={{ margin: "auto", width: "25%" }} />

          <div style={{ margin: "25px" }}>
            {/* {show ? ( */}
            <div>
              <div>
                <Transition
                  native
                  items={show}
                  from={{ opacity: 0, height: 0 }}
                  config={config.wobbly}
                  enter={[{ opacity: 1, height: "auto" }]}
                  leave={{ opacity: 0, height: 0 }}
                >
                  {show =>
                    show &&
                    (props => (
                      <animated.div style={props}>
                        {this.state.arr[0].isActive ? <Hello /> : null}
                        {this.state.arr[1].isActive ? <WhatiDo /> : null}
                        {this.state.arr[2].isActive ? <Contact /> : null}
                      </animated.div>
                    ))
                  }
                </Transition>
              </div>
            </div>
            {/* ) : null} */}
          </div>

          <div style={{ margin: "auto", width: "25%" }} />

          <ul className="buttons">{buttons}</ul>
        </div>
      </div>
    );
  }
}
