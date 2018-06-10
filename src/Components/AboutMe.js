import React, { Component } from 'react';

const color = {
    color: 'white'
}

const font = {
    fontSize: '14px',
}

const aboutMeDiv = {

    height: '210px',
    color: 'white',
    letterSpacing: '.5px',
    fontWeight: '100'
}
class AboutMe extends React.Component {

    render() {
        return (
            <div style={aboutMeDiv}>
                <p style={font}>I am a: </p>
                <i className="fa fa-book" aria-hidden="true" style={color}></i>
                <p style={font}> Student </p>

                <i className="fa fa-code" aria-hidden="true" style={color}></i>
                <p style={font}> Curious Developer </p>

                <i className="fa fa-edit" aria-hidden="true" style={color}></i>
                <p style={font}> Passionate Designer </p>
            </div>
        );
    }
}

export default AboutMe