import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { useSpring, animated } from "react-spring";
import Hello from "./Components/Hello";
import WhatiDo from "./Components/WhatiDo";
import Contact from "./Components/Contact";

const backGroundStyles = {
  width: "100%",
  height: "100vh",
  backgroundColor: "#2f3138",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
};

// const stylesProps = useSpring({
//   to: [
//     { opacity: 1, color: "#ffaaee" },
//     { opacity: 0, color: "rgb(14,26,19)" }
//   ],
//   from: { opacity: 0, color: "red" }
// });

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      arr: [
        {
          name: "Hello",
          isActive: false,
          key: 1
        },
        {
          name: "Portfolio",
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
    // this.setState({ show: false });
    // setTimeout(() => this.setState({ isActive: temp, show: true }), 100);

    //show is firing twice not sure why
    let temp = this.state.arr;
    temp.forEach((fillerArg, element) => {
      if (temp[element] === temp[index]) {
        temp[index].isActive = !temp[index].isActive;
      } else {
        temp[element].isActive = false;
      }
    });

    this.setState({ isActive: temp });
  }

  handleClick = index => {
    this.toggle(index);
  };

  render() {
    return (
      <div style={backGroundStyles}>
        <div>
          <div style={{ margin: "3%" }}>
            {/* <useSpring
                native
                items={show}
                from={{ opacity: 0, height: 0 }}
                enter={[{ opacity: 1, height: "auto" }]}
                leave={{ opacity: 0, height: 0 }}
              >
                {show =>
                  show &&
                  (props => (
                    <animated.div style={stylesProps}> */}
            {this.state.arr[0].isActive ? <Hello /> : null}
            {this.state.arr[1].isActive ? <WhatiDo /> : null}
            {this.state.arr[2].isActive ? <Contact /> : null}
            {/* </animated.div>
                   ))
                 }
               </useSpring>  */}
          </div>
          <ul className="buttons">
            {this.state.arr.map((el, index) => (
              <li key={el.key}>
                <button
                  onClick={this.handleClick.bind(this, index)}
                  className="bttn"
                >
                  {el.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
