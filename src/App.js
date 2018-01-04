import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {addClass: false}
  }

  toggle() {
    this.setState({addClass: !this.state.addClass});
  }

  render() {

    let boxClass = ["box"];
    if (this.state.addClass){
      boxClass.push('newColor');
    }
    return (
      <div className={boxClass.join('')} onClick={this.toggle.bind(this)}>{this.state.addClass ? "new color added" : "new color removed, this is false"} 
      </div>
    );
  
}}

export default App;
