import React from "react";
import './CardPP.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
    return (
<div>
        <div className="blok_cardPP">
            <div className="Left_blokPP">

            </div>
                <div className="Centre_blokPP">
                <div className="Card_1">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="https://www.berrysjewellers.co.uk/images/patek-philippe-annual-calendar-18ct-rose-gold-40mm-black-dial-mens-leather-strap-watch-p5412-18286_image.jpg" />
                    <Card.Body>
                      <Card.Title>Patek philippe</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button href="Buy" variant="primary">Buy a watch</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className="Card_2">
                <Card style={{ width: '20rem' }}>
                     <Card.Img variant="top" src="http://www.leguidedesmontres.com/_files/references/images/1909_2065_patek_philippe__5074_r.jpg" />
                     <Card.Body>
                       <Card.Title>Patek philippe</Card.Title>
                       <Card.Text>
                         Some quick example text to build on the card title and make up the
                         bulk of the card's content.
                       </Card.Text>
                       <Button href="Buy" variant="primary">Buy a watch</Button>
                     </Card.Body>
                 </Card>
                 </div>
                 <div className="Card_3">
                 <Card style={{ width: '20rem' }}>
                     <Card.Img variant="top" src="https://cdn2.chrono24.com/images/uhren/20182783-xu943q6ui54p2jcp2tlwbgle-ExtraLarge.jpg" />
                     <Card.Body>
                       <Card.Title>Patek philippe</Card.Title>
                       <Card.Text>
                         Some quick example text to build on the card title and make up the
                         bulk of the card's content.
                       </Card.Text>
                       <Button href="Buy" variant="primary">Buy a watch</Button>
                     </Card.Body>
                 </Card>
                 </div>
                 <div className="Card_4">   
                 <Card style={{ width: '20rem' }}>
                     <Card.Img variant="top" src="https://www.berrysjewellers.co.uk/images/patek-philippe-annual-calendar-chronograph-platinum-black-dial-automatic-mens-leather-strap-watch-p5389-18306_image.jpg" />
                     <Card.Body>
                       <Card.Title>Patek philippe</Card.Title>
                       <Card.Text>
                         Some quick example text to build on the card title and make up the
                         bulk of the card's content.
                       </Card.Text>
                       <Button href="Buy" variant="primary">Buy a watch</Button>
                     </Card.Body>
                 </Card>
                 </div>
                 <div className="Card_5">
                 <Card style={{ width: '20rem' }}>
                     <Card.Img variant="top" src="https://watchmydiamonds.com/media/catalog/product/cache/1/image/1280x/040ec09b1e35df139433887a97daa66f/w/e/webp.net-resizeimage_77_5.jpg" />
                     <Card.Body>
                       <Card.Title>Patek philippe</Card.Title>
                       <Card.Text>
                         Some quick example text to build on the card title and make up the
                         bulk of the card's content.
                       </Card.Text>
                       <Button href="Buy" variant="primary">Buy a watch</Button>
                     </Card.Body>
                 </Card>
                 </div>
                 <div className="Card_6">
                 <Card style={{ width: '20rem' }}>
                     <Card.Img variant="top" src="https://content.thewosgroup.com/productimage/17921013/17921013_1.jpg?impolicy=zoom" />
                     <Card.Body>
                       <Card.Title>Patek philippe</Card.Title>
                       <Card.Text>
                         Some quick example text to build on the card title and make up the
                         bulk of the card's content.
                       </Card.Text>
                       <Button href="Buy" variant="primary">Buy a watch</Button>
                     </Card.Body>
                 </Card>
                 </div>
                                        
                </div>
                    <div className="Right_blokPP">
        
                </div>
                
        </div>
       
</div>
    )
}
export default BasicExample;