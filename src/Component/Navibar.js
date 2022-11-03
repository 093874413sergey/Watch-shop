import React, { useState } from 'react';
import './Navibar.css';
import { Button,Form,Navbar,Container,Nav,NavDropdown,FormControl } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import logo2_0 from './WatchFoto/2.0.jpg';
import { BsFillFilePlusFill, BsFileMinusFill } from 'react-icons/bs';
import { BsFillFilePersonFill } from 'react-icons/bs';
import { getBasketItems } from '../selector/selector'
import { useSelector } from "react-redux";

export default function NaviBar() {
  const [cartOpen, setCartOpen] = useState(false)
  const basketItems = useSelector(getBasketItems)

  console.log('basketItems', basketItems)

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
              <a href="Registration"><BsFillFilePersonFill className='reges' /></a>
              <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop_icon ${cartOpen && 'active'}`}/>
              <div className='basket_account'><p>{basketItems.length}</p></div>
              {cartOpen && (
                <div className='shop_blok'>
                  {basketItems.map(item=> (
                    <div  key={item.id} className='basket_description'>
                      <img src= {item.mainImg} />
                      <div className='basket_button'>
                        <BsFillFilePlusFill className='button_plus' />
                        <BsFileMinusFill className='button_minus' />
                        <p>1550$</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}



