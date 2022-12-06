import React from 'react';
import './RegHead.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Navibar from '../Navibar';
import Footer from '../Footer';

function Register() {
return (
<div className='Validation'>
        <Navibar />
        
   <div className='Valid_body'>
        <div className='blok_Left_Val'>

        </div>
        <div className='blok_centre_Val'>
        <div className='email'>
        <Form>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Login</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

       <div className='login_button'>
       <Button onClick={() => alert('Подтвердите!')} variant="primary" type="submit">
                  Login
                </Button>  
       </div>
        </Form>
        
        </div>
                    <div className='trait'>
                    </div>



<div className='Valid_Register'>
<div className='blok_Register'>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Telephone</Form.Label>
        <Form.Control placeholder="+380" />
      </Form.Group>
      <div className='b_2'>
            <Form.Group as={Row} className="mb-3">
            
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Mr"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Ms"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
           
          </Col>
        </Form.Group>
        </div>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Name </Form.Label>
        <Form.Control placeholder="Last name " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>First </Form.Label>
        <Form.Control placeholder="First name" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Adress</Form.Label>
          <Form.Control placeholder="Country, Zip code, City " />
         
        </Form.Group>
      

            <div className='valid_button'>
           <div className='b_1'>
           <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button onClick={() => alert('Подтвердите!')} variant="primary" type="submit">
            Registre
            </Button>
           </div>
           
            </div>
    </Form>
    </div>
    
    </div>
</div>
                
        
                <div className='blok_right_Val'>

                </div>

   </div>
   <Footer />
</div>
    )
}
export default Register;
