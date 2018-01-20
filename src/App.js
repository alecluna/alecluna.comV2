import React, { Component } from 'react';
import Hello from './Components/Hello';
import AboutMe from './Components/AboutMe';
import WhatiDo from './Components/WhatiDo';
import Contact from './Components/Contact';

class App extends Component {
  constructor(props) {

    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      arr: [
        { name: "Hello", isActive: false }, //initialize buttons
        { name: "About Me", isActive: false },
        { name: "What I Do", isActive: false },
        { name: "Contact", isActive: false }
      ]
    }

  }
  toggle(index) {

    let temp = this.state.arr;
    temp.forEach(function (currentVal, element) { //compare element to index of button pushed

      if (temp[element] === temp[index]) {

        temp[index].isActive = !temp[index].isActive;
      }
      else { //every button not = index is changed to false 
        temp[element].isActive = false;
      }
    });

    this.setState({ arr: temp }); //replace current array with newly updated temp array
  }
  render() {
    return (
      <div className="wrapper">
        {this.state.arr.map((el, index) =>
          <button key={index} onClick={() => this.toggle(index)}>
            {el.name}, isActive: {el.isActive ? "true" : "false"}
          </button>
        )}
        <div className="content">
          {this.state.arr[0].isActive ? <Hello /> : null}
          {this.state.arr[1].isActive ? <AboutMe /> : null}
          {this.state.arr[2].isActive ? <WhatiDo /> : null}
          {this.state.arr[3].isActive ? <Contact /> : null}
        </div>
      </div>
    );
  }
}

export default App;
