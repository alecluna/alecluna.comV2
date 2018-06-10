import React, { Component } from 'react';
import '../../node_modules/font-awesome/less/font-awesome.less';

const color = {

    color: 'white',
    fontSize: '17px',
    listStyle: 'none',
    fontWeight: '100',
    textAlign: 'center',
    letterSpacing: '.5px'
}

const gitIcon = {
    color: 'white',
    fontSize: '40px',
    textAlign: 'center',

}

class WhatiDo extends React.Component {

    render() {
        return (
            <div style={color}>
                <p>
                    Aspiring Fullstack Developer with a newfound passion for <br /> Javascript
                    and Front-End design. Check out my current projects on Github!
                 </p>
                <a href="https://github.com/alecluna" target="_blank"><i className="fa fa-github fa-3x" aria-hidden="true" style={gitIcon}></i></a>
            </div>
        );
    }
}

export default WhatiDo