import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import AppBar from './AppBar';
import Dash from './Dash';

const styleApp = makeStyles ({
    root: {
        background: '#202020',
        fontFamily: 'Roboto',
    },
    dashboard: {
        padding: '15px',
        minHeight: '100vh',
        minWidth: '100%',
    },
});

export default function App() {

    const app = styleApp();

    return(
        <div className={app.root}>
            <Container className={app.dashboard}>
                <AppBar />
                <Dash />
            </Container>
        </div>
    );
}
