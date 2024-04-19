import React from 'react'
import './assets/Navbar.css'
import './assets/responsive.css'
import logo from './assets/image/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
 
const NavbarCommon = () => {
  return (
    <div>
    {/* <nav class="navbar navbar-expand-lg  navbar-body fixed-top">
      <div className="row">
         
        <div className="col-3">
        <img src={logo}/>
        </div>
        <div className="col-9">
          <ul className='nav-home'>
            <li><a href="">home</a></li>
          </ul>
        </div>
      </div>



</nav> */}
  <Navbar collapseOnSelect expand="lg" className=" navbar-body fixed-top" >
      <Container>
        <Navbar.Brand href="#home" style={{width:"30%"}}>
        <img src={logo} className='nav-logo' style={{width:"250px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className=" nav-items text-center">
            <Nav className='active'>Home</Nav>
            <Nav >Company</Nav>
            <NavDropdown title="Product" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Product</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Service" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav>Blogs</Nav>
            <Nav>Career</Nav>
            <Nav>Contact</Nav>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default NavbarCommon
