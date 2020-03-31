import React, { Component } from 'react';
import { RadialChart } from 'react-vis';

class DonutChart extends Component {
    render() {
        const sampleData = [
            { angle: 20, radius: 8, innerRadius: 5 },
            { angle: 40, radius: 8, innerRadius: 5 },
            { angle: 10, radius: 8, innerRadius: 5 },
            { angle: 30, radius: 8, innerRadius: 5 }
        ];

        return (
            <RadialChart
            data={sampleData}
            width={this.props.width}
            height={this.props.height}/>
        );
    }
}

export default DonutChart;
