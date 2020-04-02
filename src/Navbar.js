import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo.svg';

import './Navbar.css'

export default function Header() {
    return (
        <Navbar className='navbar' variant='dark'>
            <Navbar.Brand>
                <strong>Polyglot Dash</strong>
            </Navbar.Brand>
            <Navbar.Brand>
                <img className='logo' src={Logo} alt='logo' />
            </Navbar.Brand>
        </Navbar>
    );
}
