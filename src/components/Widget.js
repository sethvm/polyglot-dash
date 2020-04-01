import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import '../styles/Widget.css';

class Widget extends Component {
    render() {
        return(
            <Card className='widget'>
                <Card.Body>
                    <Card.Title>
                        <strong>{this.props.header}</strong>
                    </Card.Title>
                    <Card.Text className='content'>
                        {this.props.children}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Widget;
