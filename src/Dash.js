import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Widget from './components/Widget';
import DonutChart from './components/DonutChart';
import LineChart from './components/LineChart';

class Dash extends Component {
    render() {
        return(
            <Row className='row'>
                <Col lg={3} sm={6}>
                    <Widget header='Donut Chart'>
                        Some description text
                        <br />followed by a line break
                        <DonutChart 
                        width={200}
                        height={200} />
                    </Widget>
                </Col>
                <Col lg={3} sm={6}>
                    <Widget header='Donut Chart'>
                        Some description text
                        <br />followed by a line break
                        <DonutChart 
                        width={200}
                        height={200} />
                    </Widget>
                </Col>
                <Col lg={3} sm={6}>
                    <Widget header='Donut Chart'>
                        Some description text
                        <br />followed by a line break
                        <DonutChart 
                        width={200}
                        height={200} />
                    </Widget>
                </Col>
                <Col lg={3} sm={6}>
                    <Widget header='Line Graph'>
                        Some description text
                        <br />followed by a line break
                        <LineChart 
                        width={200}
                        height={200} />
                    </Widget>
                </Col>
            </Row>
        );
    }
}

export default Dash;
