import React, { Component } from 'react';
import { Navbar, NavItem, MenuItem, NavDropdown, Nav } from 'react-bootstrap';

class Nav_header extends Component {
    render(){
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#home">A Sepp project</a>
                    </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
            </Navbar>
        );
    }
}

export default Nav_header;