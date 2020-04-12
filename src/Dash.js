import React, { Component } from 'react';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Widget from './components/Widget';
import LoadingIcon from './components/LoadingIcon';
import DonutChart from './components/DonutChart';

const DashContainer = styled(Grid) ({
    marginTop: '60px',
    padding: 0
})

export default class Dash extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
            error: false,
        }
    }

    render() {

        const { error, isLoaded } = this.state;
        
        const data1 = [
            {
                "label": 'Statistic (%)',
                "value": 26,
                "color": '#004771',
            },
            {
                "label": 'Statistic (%)',
                "value": 6,
                "color": '#E5E577',
            },
            {
                "label": 'Statistic (%)',
                "value": 27,
                "color": '#C67017',
            },
            {
                "label": 'Statistic (%)',
                "value": 20,
                "color": '#AB1F20',
            },
            {
                "label": 'Statistic (%)',
                "value": 9,
                "color": '#7F7F7F',
            },
            {
                "label": 'Statistic (%)',
                "value": 12,
                "color": '#670067',
            },
        ]
        
        const data3 = [
            {
                "label": 'Statistic (%)',
                "value": 30,
                "color": '#AB1F20',
            },
            {
                "label": 'Statistic (%)',
                "value": 70,
                "color": '#004771',
            }
        ]

        const data2 = [
            {
                "label": 'Statistic (%)',
                "value": 33,
                "color": '#2B93DB',
            },
            {
                "label": 'Statistic (%)',
                "value": 23,
                "color": '#1FB45D',
            },
            {
                "label": 'Statistic (%)',
                "value": 15,
                "color": '#B45C1F',
            },
            {
                "label": 'Statistic (%)',
                "value": 29,
                "color": '#B41F77',
            }
        ]

        return (
            <DashContainer>
                <Grid container>
                    <Widget lg={3} md={3} sm={6} xs={6}
                    header='WIDGET'>
                        <NumberData data={1609774}
                        isLoaded={isLoaded}
                        error={error}/>
                    </Widget>
                    <Widget lg={3} md={3} sm={6} xs={6}
                    header='WIDGET'>
                        <NumberData data={200400}
                        isLoaded={isLoaded}
                        error={error}/>
                    </Widget>
                    <Widget lg={3} md={3} sm={6} xs={6}
                    header='WIDGET'>
                        <NumberData data={110300}
                        isLoaded={isLoaded}
                        error={error}/>
                    </Widget>
                    <Widget lg={3} md={3} sm={6} xs={6}
                    header='WIDGET'>
                        <NumberData data={110300}
                        isLoaded={isLoaded}
                        error={error}/>
                    </Widget>
                    <Widget lg={6} md={6} sm={12} xs={12}
                    header='CHART'>
                        <DonutChart 
                        data={data1} />
                    </Widget>
                    <Widget lg={6} md={6} sm={12} xs={12}
                    header='CHART'>
                        <DonutChart 
                        data={data2} />
                    </Widget>
                </Grid>
                <Grid container>
                    <Widget lg={3} md={3} sm={6} xs={6}
                    header='WIDGET'>
                        <NumberData data={1609774}
                        isLoaded={isLoaded}
                        error={error}/>
                    </Widget>
                    <Widget lg={3} md={3} sm={6} xs={6}
                    header='WIDGET'>
                        <NumberData data={200400}
                        isLoaded={isLoaded}
                        error={error}/>
                    </Widget>
                    <Widget lg={3} md={3} sm={6} xs={6}
                    header='WIDGET'>
                        <NumberData data={110300}
                        isLoaded={isLoaded}
                        error={error}/>
                    </Widget>
                    <Widget lg={3} md={3} sm={6} xs={6}
                    header='WIDGET'>
                        <NumberData data={110300}
                        isLoaded={isLoaded}
                        error={error}/>
                    </Widget>
                    <Widget lg={6} md={6} sm={12} xs={12}
                    header='CHART'>
                        <DonutChart 
                        data={data3} />
                    </Widget>
                    <Widget lg={6} md={6} sm={12} xs={12}
                    header='CHART'>
                        <DonutChart 
                        data={data1} />
                    </Widget>
                </Grid>
            </DashContainer>
        );
    }
}

function NumberData(props) {
    if (props.error) {
        return <div><h3>Loading Failed!</h3></div>
    } else if (!props.isLoaded) {
        return (
            <div><h3><LoadingIcon /></h3></div>
        );
    } else {
        return (
            <h3>{props.data}</h3>
        );
    }
}
