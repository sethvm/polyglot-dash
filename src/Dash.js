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
        { angle: 70, radius: 10, innerRadius: 6 },
        { angle: 30, radius: 10, innerRadius: 6 }
    ]

    const data2 = [
        { angle: 10, radius: 10, innerRadius: 6 },
        { angle: 30, radius: 10, innerRadius: 6 },
        { angle: 50, radius: 10, innerRadius: 6 },
        { angle: 10, radius: 10, innerRadius: 6 }
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
                    <DonutChart data={data1} />
                    <DonutChart data={data2} />
                </Widget>
            </Grid>
        </div>
    );
}
