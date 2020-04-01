import React, { Component } from 'react';
import { RadialChart } from 'react-vis';

class DonutChart extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [
            { angle: 10, radius: 8, innerRadius: 5 },
            { angle: 40, radius: 8, innerRadius: 5 },
            { angle: 25, radius: 8, innerRadius: 5 },
            { angle: 15, radius: 8, innerRadius: 5 }
        ] };
    }

    render() {
        return (
            <RadialChart
            data={this.state.data}
            width={this.props.width}
            height={this.props.height}/>
        );
    }
}

export default DonutChart;
