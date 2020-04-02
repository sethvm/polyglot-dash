import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Widget from './components/Widget';
import DonutChart from './components/DonutChart';

export default class Dash extends Component {
    render() {
        return(
            <Row className='row'>
                <Col lg={3} sm={6}>
                    <Widget header='Widget'>
                        <DonutChart />
                    </Widget>
                </Col>
                <Col lg={3} sm={6}>
                    <Widget header='Widget'>
                        <DonutChart />
                    </Widget>
                </Col>
                <Col lg={3} sm={6}>
                    <Widget header='Widget'>
                        <DonutChart />
                    </Widget>
                </Col>
                <Col lg={3} sm={6}>
                    <Widget header='Widget'>
                        <DonutChart />
                    </Widget>
                </Col>
            </Row>
        );
    }
}
