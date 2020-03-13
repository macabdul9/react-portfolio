import {Container} from 'react-bootstrap';
import React, { Component } from 'react'

export class Layout extends Component {
    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        )
    }
}

export default Layout

