import React, { Component } from 'react';
import Chart from 'chart.js';

export default class DonutChart extends Component {

    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidUpdate() {
        this.myChart.update();
    }

    componentDidMount() {
        this.myChart = new Chart(this.chartRef.current, {
            type: 'doughnut',
            data: {
                labels: this.props.data.map(d => d.label),
                datasets: [{
                    data: this.props.data.map(d => d.value),
                    backgroundColor: this.props.data.map(d => d.color),
                    borderColor: 'transparent'
                }]
            }
        });
    }

    render() {
        return (
            <canvas ref={this.chartRef} />
        );
    }
}
