import React, { Component } from 'react';

const color = {

    color: 'white'
}

const font = {
    fontSize: '15px'
}

class AboutMe extends React.Component {
    render() {
        return (
            <div style={color}>
               <p style={font}>I am 21 years old and currently attending CSUS for a degree in Computer Science.
               Some hobbies of mine include snowboarding, playing tennis and going to the gym.</p>
               
               
               <p style={font}> As I've progressed through my college career, I've grown quite fond of the front-end 
               scene, especially the local JavaScript community within Sacramento. Over the last year,
               I've taught myself the front end technologies including HTML, CSS, and the latest and greatest of ES6. </p>

               <p style={font}> My dream is to become a full-stack developer, and to ultamitely create things that 
               people enjoy and genuinely find useful.</p>
            </div>
        );
    }
}

export default AboutMe