import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';

import Navbar from './Navbar';
import Dash from './Dash';

function App() {
    return(
        <div className='wrapper'>
            <Navbar />
            <Container className='dashboard'>
                <Dash />
            </Container>
        </div>
    );
}

export default App;
