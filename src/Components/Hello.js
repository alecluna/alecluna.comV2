import React, { Component } from 'react';

const color = {

    backgroundColor: '#7F7C7C',
    color: 'white'
}

class Hello extends React.Component {
    render() {
        return (
            <div style={color}>
               HELLO
            </div>
        );
    }
}

export default Hello