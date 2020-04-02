import React, { Component } from 'react';
import { XYPlot, 
    VerticalGridLines,
    HorizontalGridLines, 
    XAxis,
    YAxis,
    LineSeries } from 'react-vis';


export default class LineChart extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [
            {x: 0, y: 8},
            {x: 1, y: 5},
            {x: 2, y: 4},
            {x: 3, y: 9},
            {x: 4, y: 1},
            {x: 5, y: 7},
            {x: 6, y: 6},
            {x: 7, y: 3},
            {x: 8, y: 2},
            {x: 9, y: 0}
        ]}
    }

    render() {
        return(
            <XYPlot
            height={this.props.height}
            width={this.props.width}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <LineSeries data={this.state.data} />
                <XAxis />
                <YAxis />
            </XYPlot>
        );
    }
}

LineChart.defaultProps = {
    width: 150,
    height: 150
}
