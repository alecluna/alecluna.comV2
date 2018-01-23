import React, { Component } from 'react';

const color = {

    backgroundColor: '#7F7C7C',
    color: 'white'
}

class AboutMe extends React.Component {
    render() {
        return (
            <div style={color}>
         
                        

                title: 'college student',
                school: 'CSUS',
                major: 'Computer Science',
                year: '4th year',
                hobbies:
                ['snowboarding',
                'tennis',
                'building computers'],
                interests: 'Web Development'
     
      
            </div>
        );
    }
}

export default AboutMe