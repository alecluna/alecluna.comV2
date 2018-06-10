import React, { Component } from 'react';

const nameSize = {
    fontSize: '18px',
    color: 'white',
    letterSpacing: ".5px",
    fontWeight: '100'
}

class Hello extends React.Component {
    render() {
        return (
            <div>
               <p style={nameSize}>"I have no special talent,<br/> 
               I'm just passionately curious."<br/>
               - Albert Einstein </p>
            </div>
        );
    }
}

export default Hello