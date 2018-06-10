import React, { Component } from 'react';


const color = {

    color: 'white',
    letterSpacing: '.3em',
    fontSize: '40px'
}

class Contact extends React.Component {
    render() {
        return (
            <div style={color}>
                <a href="https://github.com/alecluna" target="_blank"><i className="fa fa-github fa-3x" aria-hidden="true" style={color}></i></a>
                <a href="https://www.linkedin.com/in/alecluna" target="_blank"><i className="fa fa-linkedin fa-3x" aria-hidden="true" style={color}></i></a>
                <a href="https://xkcd.com/1597/" target="_blank"><i className="fab fa-pied-piper-hat fa-3x" aria-hidden="true" style={color}></i></a>
                <a href="https://twitter.com/AlecLunaa" target="_blank"><i className="fa fa-twitter fa-3x" aria-hidden="true" style={color}></i></a> 
                <a href="https://www.facebook.com/alec.luna.90" target="_blank"><i className="fa fa-facebook-square fa-3x" aria-hidden="true" style={color}></i></a>   
            </div>
        );<i class="fab fa-pied-piper-hat"></i>


    }
}

export default Contact