import React, { Component } from 'react';
import { RadialChart } from 'react-vis';


export default class DonutChart extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            data: [
                { angle: 10, radius: 10, innerRadius: 6 },
                { angle: 40, radius: 10, innerRadius: 6 },
                { angle: 25, radius: 10, innerRadius: 6 },
                { angle: 15, radius: 10, innerRadius: 6 }
            ],
        };
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
    width: 150,
    height: 150,
}
