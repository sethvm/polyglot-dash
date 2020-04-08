import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,
    Toolbar,
    Typography } from '@material-ui/core';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';

const styleAppBar = makeStyles({
    bar: {
        background: '#202a3b',
    },
    toolbox: {
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#ffffff',
    },
});

export default function Navbar() {

    const appbar = styleAppBar();

    return(
        <AppBar className={appbar.bar}>
            <Toolbar className={appbar.toolbox}>
                <Typography variant='h5'>
                    POLYGLOT DASH
                </Typography>
                <DashboardRoundedIcon fontSize='large' />
            </Toolbar>
        </AppBar>
    );
}
