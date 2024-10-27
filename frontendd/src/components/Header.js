import React from 'react';
import { Navbar, Nav, Container, FormControl, Button, NavDropdown, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <div>
      <Navbar  variant="dark" bg="dark" expand="lg" style={{ height: '100px', color: '#78c2ad' }} >
        <Container>

          <LinkContainer to="/">
        <Navbar.Brand> <strong>EBOOK</strong>  </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px"}}
          navbarScroll>

          <LinkContainer to="/">
            <Nav.Link active>  <i className='fas fa-home'> </i> Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/cart">
            <Nav.Link href="#" className='text-white'> <i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/login">
            <Nav.Link href="#" className='text-white'>  <i className='fas fa-user'></i>Login</Nav.Link>
            </LinkContainer>
            <NavDropdown title="More" id="navbarScrollingDropdown" className='text-white'>

            <LinkContainer to="/favorite">
              <NavDropdown.Item href="#">Favorite</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Item href="#">Another action</NavDropdown.Item>

              <LinkContainer to="/about">
              <NavDropdown.Item href="#">About</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
          <Form className="d-flex ms-auto custom-spacing">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"/>
            <Button variant="light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;
