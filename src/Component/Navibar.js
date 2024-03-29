import React, { useState } from 'react';
import './Navibar.css';
import { Button,Form,Navbar,Container,Nav,NavDropdown,FormControl } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { BsFillFilePlusFill, BsFileMinusFill } from 'react-icons/bs';
import { BsFillFilePersonFill } from 'react-icons/bs';
import { getBasketItems } from '../selector/selector'
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../actions/actions";

 function NaviBar() {
  const [cartOpen, setCartOpen] = useState(false)
  const basketItems = useSelector(getBasketItems)
  const dispatch = useDispatch()
  const handleAddItem = (item) => () => dispatch(addItem(item))
  const handleDeleteItem = (item) => () => dispatch(deleteItem(item))

  let totalQuantity = 0;
  basketItems.forEach(({quantity}) => totalQuantity += quantity )

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
              navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about-rolex">Rolex</Nav.Link>
              <Nav.Link href="/about-patek">Patek Philippe</Nav.Link>
              <NavDropdown title="History" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/history-rolex">History Rolex</NavDropdown.Item>
                <NavDropdown.Item href="/history-patek">History Patek Philippe</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/about-us">
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
              <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className='shop_icon'/>               
              <div className='basket_account'><p>{totalQuantity}</p></div>                     
              {cartOpen && (
                <div className='shop_blok'>
                  {basketItems.map(item=> (
                    <div  key={item.itemData.id} className='basket_description'>
                      <img src= {`/pictures/WatchFoto/${item.itemData.mainImg}`} />
                      <div className='basket_button'>
                        <div className='number'>{item.quantity}</div>
                        <BsFillFilePlusFill onClick={handleAddItem(item.itemData)} className='button_plus' />
                        <BsFileMinusFill onClick={handleDeleteItem(item.itemData)} className='button_minus' />
                        <p>{item.quantity * item.itemData.cost} $</p>
                        <div onClick={() => alert('Точно хотите купить?')} className='button_buy'>Buy</div>
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
export default NaviBar;


