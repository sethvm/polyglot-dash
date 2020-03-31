import React, { Component } from 'react';
import { XYPlot, 
    VerticalGridLines,
    HorizontalGridLines, 
    XAxis,
    YAxis,
    LineSeries } from 'react-vis';

class LineChart extends Component {

    render() {

        const sampleData = [
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
        ];

        return(
            <XYPlot
            height={this.props.height}
            width={this.props.width}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <LineSeries data={sampleData} />
                <XAxis />
                <YAxis />
            </XYPlot>
        );
    }
}

export default LineChart;
