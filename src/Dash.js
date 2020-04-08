import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Widget from './components/Widget';
import DonutChart from './components/DonutChart';

const styleDash = makeStyles ({
    root: {
        marginTop: '60px',
    }
});

export default function Dash() {

    const dash = styleDash();

    return(
        <div className={dash.root}>
            <Grid container>
                <Widget lg={2} md={3} sm={3} xs={12}
                header='NUMBER COUNT'>
                    <h3>27.8K</h3>
                </Widget>
                <Widget lg={10} md={9} sm={9} xs={12}
                header='WIDGET'>
                    <DonutChart />
                    <DonutChart />
                    <DonutChart />
                </Widget>
            </Grid>
            <Grid container>
                <Widget lg={2} md={2} sm={3} xs={12}
                header='NUMBER COUNT'>
                    <h3>27.8K</h3>
                </Widget>
                <Widget lg={5} md={5} sm={4} xs={12}
                header='WIDGET'>
                    <DonutChart />
                </Widget>
                <Widget lg={5} md={5} sm={4} xs={12}
                header='WIDGET'>
                    <DonutChart />
                </Widget>
            </Grid>
        </div>
    );
}
