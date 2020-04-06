import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Widget from './components/Widget';
import DonutChart from './components/DonutChart';

export default class Dash extends Component {
    render() {
        return(
            <>
            <Row className='row'>
                <Col lg={3} md={4}>
                    <Widget header='NUMBER COUNT'>
                        <h3>27.8K</h3>
                    </Widget>
                </Col>
                <Col lg={9} md={8}>
                    <Widget header='WIDGET'>
                        <DonutChart />
                        <DonutChart />
                        <DonutChart />
                    </Widget>
                </Col>
            </Row>
            <Row className='row'>
                <Col lg={3} md={9}>
                    <Widget header='NUMBER COUNT'>
                        <h3>27.8K</h3>
                    </Widget>
                </Col>
                <Col lg={3} md={9}>
                    <Widget header='WIDGET'>
                        <DonutChart />
                    </Widget>
                </Col>
                <Col lg={3} md={9}>
                    <Widget header='WIDGET'>
                        <DonutChart />
                    </Widget>
                </Col>
                <Col lg={3} md={9}>
                    <Widget header='WIDGET'>
                        <DonutChart />
                    </Widget>
                </Col>
            </Row>
            </>
        );
    }
}
