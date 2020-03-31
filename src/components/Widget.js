import React, { Component } from 'react';

import '../styles/Widget.css';

import logo from '../logo.svg';

class Widget extends Component {
    render() {
        return(
            <div className='widget'>
                <div className='header'>
                    <h3>{this.props.header}</h3>
                    <img src={logo} className='logo' alt='logo' />
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Widget;
