import React from 'react'
import { NavLink } from 'react-router-dom';
//import styled from 'styled-components';
import { FiShoppingCart } from  "react-icons/fi";

import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Headers = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">
      <img src="./logo192.png" width="30" height="30"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/aboutus">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Nav.Item className="ml-auto">
      <Nav.Link><FiShoppingCart/></Nav.Link>
    </Nav.Item>
    </Container>
    
  </Navbar>

    // <Mapiheader>
    //   <NavLink to="/">
    //     <img src="./logo192.png" className='logo'></img>
    //   </NavLink>
    //   <Navs/>
    // </Mapiheader>
   
  )
}
// const Mapiheader=styled.header`
 
// padding: 0 4.8rem;
// height: 10rem;
// background-color: ${({ theme }) => theme.colors.bg};
// display: flex;
// justify-content: space-between;
// align-items: center;
// position: relative;

// .logo {
//   height: 5rem;
// }

// `;
export default Headers





  
