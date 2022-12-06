import React, { useState } from 'react';
import './Navibar.css';
import { Button,Form,Navbar,Container,Nav,NavDropdown,FormControl } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { BsFillFilePlusFill, BsFileMinusFill } from 'react-icons/bs';
import { BsFillFilePersonFill } from 'react-icons/bs';
import { getBasketItems } from '../selector/selector'
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../actions/actions";

export default function NaviBar() {
  const [cartOpen, setCartOpen] = useState(false)
  const basketItems = useSelector(getBasketItems)
  const dispatch = useDispatch()
<<<<<<< HEAD

  const handleAddItem = (item) => () => dispatch(addItem(item))
  const handleDeleteItem = (item) => () => dispatch(deleteItem(item))
  
=======

  const handleAddItem = (item) => () => dispatch(addItem(item))
  const handleDeleteItem = (item) => () => dispatch(deleteItem(item))

>>>>>>> cedde47211a6dec59b21be42d06faaf961ef1bd9
  return (

    <div className='Container_blok'>
      <Navbar bg="light" expanhandleDeleteItemd="lg">
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
              {basketItems.map(basNumber=> (
                <div key={basNumber.itemData.id}>
                  <div className='basket_account'><p>{basNumber.quantity}</p></div>
                </div>
              ))}
              {cartOpen && (
                <div className='shop_blok'>
                  {basketItems.map(item=> (
                    <div  key={item.itemData.id} className='basket_description'>
                      <img src= {item.itemData.mainImg} />
                      <div className='basket_button'>
                        <div className='number'>{item.quantity}</div>
                        <BsFillFilePlusFill onClick={handleAddItem(item.itemData)} className='button_plus' />
                        <BsFileMinusFill onClick={handleDeleteItem(item.itemData)} className='button_minus' />
                        <p>{item.quantity * item.itemData.cost} $</p>
<<<<<<< HEAD
                        <div onClick={() => alert('Точно хотите купить?')} className='button_buy'>Buy</div>
=======
                        <div className='button_buy'>Buy</div>
>>>>>>> cedde47211a6dec59b21be42d06faaf961ef1bd9
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



