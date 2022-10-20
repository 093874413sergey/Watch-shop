import React, { useState } from 'react';
import './Navibar.css';
import { Button,Form,Navbar,Container,Nav,NavDropdown,FormControl } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

export default function NaviBar() {
  let [cartOpen, setCartOpen] = useState(false)
    return (

<div className='Container_blok'>
        <Navbar bg="light" expand="lg">
  <Container className='header' fluid>
    <img className='img_navbar' src='https://i.pinimg.com/474x/fb/70/7b/fb707b2455bf6435bc637c5e5019ce67.jpg' alt='#'/>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="about">Rolex</Nav.Link>
        <Nav.Link href="aboutPP">Patek Philippe</Nav.Link>
        <NavDropdown title="History" id="navbarScrollingDropdown">
          <NavDropdown.Item href="historyR">History Rolex</NavDropdown.Item>
          <NavDropdown.Item href="historyPP">History Patek Philippe</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="aboutus">
            About us
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
        <a href="Registration"><img className='reges' src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"/></a>
<FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop_icon ${cartOpen && 'active'}`}/>
{cartOpen && (
  <div className='shop_blok'>

  </div>
)}
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

</div>
    )
}



