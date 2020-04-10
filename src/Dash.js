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

    const data1 = [
        { angle: 26, radius: 10, innerRadius: 6, color: '#AB1F20' },
        { angle: 6, radius: 10, innerRadius: 6, color: '#E5E577' },
        { angle: 16, radius: 10, innerRadius: 6, color: '#C67017' },
        { angle: 20, radius: 10, innerRadius: 6, color: '#004771' },
        { angle: 9, radius: 10, innerRadius: 6, color: '#7F7F7F' },
        { angle: 11, radius: 10, innerRadius: 6, color: '#E377C2' },
        { angle: 12, radius: 10, innerRadius: 6, color: '#670067' }
    ]

    const data2 = [
        { angle: 33, radius: 10, innerRadius: 6, color: '#2B93DB' },
        { angle: 23, radius: 10, innerRadius: 6, color: '#1FB45D' },
        { angle: 15, radius: 10, innerRadius: 6, color: '#B45C1F' },
        { angle: 29, radius: 10, innerRadius: 6, color: '#B41F77' }
    ]

    return(
        <div className={dash.root}>
            <Grid container>
                <Widget lg={3} md={3} sm={6} xs={12}
                header='NUMBER COUNT'>
                    <h3>1, 605, 277</h3>
                </Widget>
                <Widget lg={3} md={3} sm={6} xs={12}
                header='NUMBER COUNT'>
                    <h3>95, 751</h3>
                </Widget>
                <Widget lg={3} md={3} sm={6} xs={12}
                header='NUMBER COUNT'>
                    <h3>356, 925</h3>
                </Widget>
                <Widget lg={3} md={3} sm={6} xs={12}
                header='NUMBER COUNT'>
                    <h3>27, 800</h3>
                </Widget>
            </Grid>
            <Grid container>
                <Widget lg={3} md={3} sm={4} xs={12}
                header='NUMBER COUNT'>
                    <h3>200, 000</h3>
                </Widget>
                <Widget lg={9} md={9} sm={8} xs={12}
                header='WIDGET'>
                    <DonutChart />
                    <DonutChart data={data1} color='literal' />
                    <DonutChart data={data2} color='literal' />
                </Widget>
            </Grid>
        </div>
    );
}
