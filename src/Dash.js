import React from 'react';
import Grid from '@material-ui/core/Grid';

import Widget from './components/Widget';
import DonutChart from './components/DonutChart';

export default function Dash() {
    return(
        <>
        <Grid container>
            <Grid item lg={2} md={3} sm={3} xs={12}>
                <Widget header='NUMBER COUNT'>
                    <h3>27.8K</h3>
                </Widget>
            </Grid>
            <Grid item lg={10} md={9} sm={9} xs={12}>
                <Widget header='WIDGET'>
                    <DonutChart />
                    <DonutChart />
                    <DonutChart />
                </Widget>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item lg={2} md={2} sm={3} xs={12}>
                <Widget header='NUMBER COUNT'>
                    <h3>27.8K</h3>
                </Widget>
            </Grid>
            <Grid item lg={5} md={5} sm={4} xs={12}>
                <Widget header='WIDGET'>
                    <DonutChart />
                </Widget>
            </Grid>
            <Grid item lg={5} md={5} sm={4} xs={12}>
                <Widget header='WIDGET'>
                    <DonutChart />
                </Widget>
            </Grid>
        </Grid>
        </>
    );
}
