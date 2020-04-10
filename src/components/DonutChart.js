import React, { Component } from 'react';
import { RadialChart } from 'react-vis';

export default class DonutChart extends Component {

    constructor(props) {
        super(props);
        this.state = { data: this.props.data };
    }

    render() {
        return (
            <RadialChart
            width={this.props.width}
            height={this.props.height}
            data={this.state.data} />
        );
    }
}

DonutChart.defaultProps = {
    width: 125,
    height: 125,
    data: [
        { angle: 20, radius: 10, innerRadius: 6 },
        { angle: 20, radius: 10, innerRadius: 6 },
        { angle: 20, radius: 10, innerRadius: 6 },
        { angle: 20, radius: 10, innerRadius: 6 },
        { angle: 20, radius: 10, innerRadius: 6 }
    ],
}
