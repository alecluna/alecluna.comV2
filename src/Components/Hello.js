import React, { Component } from 'react';

const color = {

    color: 'white'
}

const nameSize = {
    fontSize: '18px'
}

class Hello extends React.Component {
    render() {
        return (
            <div style={color}>
               <p style={nameSize}>My name is Alec, CS student and self taught Web Developer </p>
            </div>
        );
    }
}

export default Hello