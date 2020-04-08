import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';

import AppBar from './AppBar';
import Dash from './Dash';

function App() {
    return(
        <div className='wrapper'>
            <Container className='dashboard'>
                <AppBar />
                <Dash />
            </Container>
        </div>
    );
}

export default App;
