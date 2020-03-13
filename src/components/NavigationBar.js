import React from 'react';
import {Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap';


const NavigationBar = () =>{
    return (
        <div>
             <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">Abdul</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default NavigationBar;
