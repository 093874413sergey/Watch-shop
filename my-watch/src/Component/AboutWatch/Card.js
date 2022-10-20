import React from "react";
import './Card.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo1_0 from '../WatchFoto/1.0.jpg';
import logo2_0 from '../WatchFoto/2.0.jpg';
import logo3_0 from '../WatchFoto/3.0.jpg';
import logo4_0 from '../WatchFoto/4.0.jpg';
import logo5_0 from '../WatchFoto/5.0.jpg';
import logo6_0 from '../WatchFoto/6.0.jpg';

function BasicExample() {
    return (
<div>
        <div className="blok_card">
            <div className="Left_blok">

            </div>
                <div className="Centre_blok">
                <div className="Card_1">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={logo1_0} />
                    <Card.Body>
                      <Card.Title>Rolex</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button href="headRolex1_0" variant="primary">Want to buy</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className="Card_2">
                <Card style={{ width: '20rem' }}>
                     <Card.Img variant="top" src={logo2_0} />
                     <Card.Body>
                       <Card.Title>Rolex</Card.Title>
                       <Card.Text>
                         Some quick example text to build on the card title and make up the
                         bulk of the card's content.
                       </Card.Text>
                       <Button href="headRolex2_0" variant="primary">Want to buy</Button>
                     </Card.Body>
                 </Card>
                 </div>
                 <div className="Card_3">
                 <Card style={{ width: '20rem' }}>
                     <Card.Img variant="top" src={logo3_0} />
                     <Card.Body>
                       <Card.Title>Rolex</Card.Title>
                       <Card.Text>
                         Some quick example text to build on the card title and make up the
                         bulk of the card's content.
                       </Card.Text>
                       <Button href="headRolex3_0" variant="primary">Want to buy</Button>
                     </Card.Body>
                 </Card>
                 </div>
                 <div className="Card_4">   
                 <Card style={{ width: '20rem' }}>
                     <Card.Img variant="top" src={logo4_0} />
                     <Card.Body>
                       <Card.Title>Rolex</Card.Title>
                       <Card.Text>
                         Some quick example text to build on the card title and make up the
                         bulk of the card's content.
                       </Card.Text>
                       <Button href="headRolex4_0" variant="primary">Want to buy</Button>
                     </Card.Body>
                 </Card>
                 </div>
                 <div className="Card_5">
                 <Card style={{ width: '20rem' }}>
                     <Card.Img variant="top" src={logo5_0} />
                     <Card.Body>
                       <Card.Title>Rolex</Card.Title>
                       <Card.Text>
                         Some quick example text to build on the card title and make up the
                         bulk of the card's content.
                       </Card.Text>
                       <Button href="headRolex5_0" variant="primary">Want to buy</Button>
                     </Card.Body>
                 </Card>
                 </div>
                 <div className="Card_6">
                 <Card style={{ width: '20rem' }}>
                     <Card.Img variant="top" src={logo6_0} />
                     <Card.Body>
                       <Card.Title>Rolex</Card.Title>
                       <Card.Text>
                         Some quick example text to build on the card title and make up the
                         bulk of the card's content.
                       </Card.Text>
                       <Button href="headRolex6_0"variant="primary">Want to buy</Button>
                     </Card.Body>
                 </Card>
                 </div>
                                        
                </div>
                    <div className="Right_blok">
        
                </div>
                
        </div>
       
</div>
    )
}
export default BasicExample;