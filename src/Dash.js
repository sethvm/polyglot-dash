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
            // random dummy numbers for widgets
            widgetNumbers: [
                Math.floor(Math.random() * Math.floor(10000000)),
                Math.floor(Math.random() * Math.floor(1000000)),
                Math.floor(Math.random() * Math.floor(1000000)),
                Math.floor(Math.random() * Math.floor(10000)),
                Math.floor(Math.random() * Math.floor(1000000)),
                Math.floor(Math.random() * Math.floor(100000)),
                Math.floor(Math.random() * Math.floor(1000000)),
                Math.floor(Math.random() * Math.floor(100000))
            ],
            // dummy data sets for chart samples
            chart1: [
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
            chart2: [
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
            chart3: [
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
            chart4: [
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

    formatWidgetNumbers(numbers) {
        console.log('function called!');
        // create new copty of array
        const newNumbers = [...numbers];
        // format elements with commas
        for (var i = 0; i < newNumbers.length; i++) {
            newNumbers[i] = newNumbers[i].toLocaleString();
        }
        return newNumbers;
    }

    render() {

        const { error, isLoaded, widgetNumbers } = this.state;

        const widgetData = this.formatWidgetNumbers(widgetNumbers);

        return (
            <DashContainer>
                {/*row container*/}
                <Grid container>
                    {/*widget section*/}
                    <Grid container xs={12} direction='row'>
                        <Widget md={3} xs={6} header='WIDGET'>
                            <NumberData data={widgetData[0]}
                            isLoaded={isLoaded}
                            error={error}/>
                        </Widget>
                        <Widget md={3} xs={6} header='WIDGET'>
                            <NumberData data={widgetData[1]}
                            isLoaded={isLoaded}
                            error={error}/>
                        </Widget>
                        <Widget md={3} xs={6} header='WIDGET'>
                            <NumberData data={widgetData[2]}
                            isLoaded={isLoaded}
                            error={error}/>
                        </Widget>
                        <Widget md={3} xs={6} header='WIDGET'>
                            <NumberData data={widgetData[3]}
                            isLoaded={isLoaded}
                            error={error}/>
                        </Widget>
                    </Grid>
                    {/*chart section*/}
                    <Grid container xs={12} direction='row'>
                        <Widget md={6} xs={12} header='CHART'>
                            <DonutChart 
                            data={this.state.chart1} />
                        </Widget>
                        <Widget md={6} xs={12} header='CHART'>
                            <DonutChart 
                            data={this.state.chart2} />
                        </Widget>
                    </Grid>
                </Grid>
                {/*row container*/}
                <Grid container>
                    {/*widget section*/}
                    <Grid container xs={12} direction='row'>
                        <Widget md={3} xs={6} header='WIDGET'>
                            <NumberData data={widgetData[4]}
                            isLoaded={isLoaded}
                            error={error}/>
                        </Widget>
                        <Widget md={3} xs={6} header='WIDGET'>
                            <NumberData data={widgetData[5]}
                            isLoaded={isLoaded}
                            error={error}/>
                        </Widget>
                        <Widget md={3} xs={6} header='WIDGET'>
                            <NumberData data={widgetData[6]}
                            isLoaded={isLoaded}
                            error={error}/>
                        </Widget>
                        <Widget md={3} xs={6} header='WIDGET'>
                            <NumberData data={widgetData[7]}
                            isLoaded={isLoaded}
                            error={error}/>
                        </Widget>
                    </Grid>
                    {/*chart section*/}
                    <Grid container xs={12} direction='row'>
                        <Widget md={6} xs={12} header='CHART'>
                            <DonutChart 
                            data={this.state.chart3} />
                        </Widget>
                        <Widget md={6} xs={12} header='CHART'>
                            <DonutChart 
                            data={this.state.chart4} />
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
