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

            // initialize isLoaded to false when non-dummy data is fetched
            isLoaded: true,
            error: false,

            // dummy data sets for chart samples
            data1: [
                {
                    "label": 'Statistic (%)',
                    "value": 26,
                    "color": '#004771',
                },
                {
                    "label": 'Statistic (%)',
                    "value": 27,
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
                }
            ],
            data2: [
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
            ],
            data3: [
                {
                    "label": 'Statistic (%)',
                    "value": 34,
                    "color": '#AB1F20',
                },
                {
                    "label": 'Statistic (%)',
                    "value": 33,
                    "color": '#004771',
                },
                {
                    "label": 'Statistic (%)',
                    "value": 33,
                    "color": '#E5E577',
                }
            ],
            data4: [
                {
                    "label": 'Statistic (%)',
                    "value": 33,
                    "color": '#9467BD',
                },
                {
                    "label": 'Statistic (%)',
                    "value": 33,
                    "color": '#FF7F0E',
                },
                {
                    "label": 'Statistic (%)',
                    "value": 34,
                    "color": '#2CA02C',
                }
            ]
        }
    }

    render() {

        const { error, isLoaded } = this.state;

        return (
            <DashContainer>
                {/*row container*/}
                <Grid container>
                    {/*widget section*/}
                    <Grid container lg={3} xs={12}
                    direction='row'>
                        <Widget lg={12} xs={6}
                        header='WIDGET'>
                            <NumberData data='1, 600, 774'
                            isLoaded={isLoaded}
                            error={error}/>
                        </Widget>
                        <Widget lg={12} xs={6}
                        header='WIDGET'>
                            <NumberData data='240, 575'
                            isLoaded={isLoaded}
                            error={error}/>
                        </Widget>
                    </Grid>
                    {/*chart section*/}
                    <Grid container lg={9} xs={12}
                    direction='row'>
                        <Widget lg={6} md={6} xs={12}
                        header='CHART'>
                            <DonutChart 
                            data={this.state.data1} />
                        </Widget>
                        <Widget lg={6} md={6} xs={12}
                        header='CHART'>
                            <DonutChart 
                            data={this.state.data2} />
                        </Widget>
                    </Grid>
                </Grid>
                {/*row container*/}
                <Grid container>
                    {/*widget section*/}
                    <Grid container lg={3} xs={12}
                    direction='row'>
                        <Widget lg={12} xs={6}
                        header='WIDGET'>
                            <NumberData data='1, 600, 774'
                            isLoaded={isLoaded}
                            error={error}/>
                        </Widget>
                        <Widget lg={12} xs={6}
                        header='WIDGET'>
                            <NumberData data='240, 575'
                            isLoaded={isLoaded}
                            error={error}/>
                        </Widget>
                    </Grid>
                    {/*chart section*/}
                    <Grid container lg={9} xs={12}
                    direction='row'>
                        <Widget lg={6} md={6} xs={12}
                        header='CHART'>
                            <DonutChart 
                            data={this.state.data3} />
                        </Widget>
                        <Widget lg={6} md={6} xs={12}
                        header='CHART'>
                            <DonutChart 
                            data={this.state.data4} />
                        </Widget>
                    </Grid>
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
