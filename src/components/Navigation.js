import React, { Component } from 'react'

import {Navbar, Nav , Container,Button} from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

 class Navigation extends Component {
    render() {
        return (
            <div>

                <>
                    <Navbar bg="white" variant="light">
                        <Container className="site-header" fluid>
                            <Nav className= "mr-auto navbar">

                                <Nav.Link  className="branding" href="/">BRILLIANT</Nav.Link>
                                <Nav.Link  className="nav-item" to="/quiz-display" >TODAY</Nav.Link>
                                <Nav.Link className="nav-item current" href="/">COURSES</Nav.Link>
                                <Nav.Link className="nav-item" href="/">PRACTICE</Nav.Link>
                               
                                
                            </Nav>
                            <div className="btn">
                                <Button className="login" variant="outline-primary">Log in</Button>{' '}
                                <Button className="signup" variant="outline-secondary">Sign up</Button>{' '}
                            </div>
                            
                        </Container>

                            
                    </Navbar> 
                </>

                
            </div>
        )
    }
}

export default Navigation
