import React from "react";
import './Card.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <div>
      <div className="blok_card">
        <div className="Left_blok" />
        <div className="Centre_blok">
          <div className="Card">
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="/pictures/WatchFoto/1.0.jpg" />
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
          <div className="Card">
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="/pictures/WatchFoto/2.0.jpg" />
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
          <div className="Card">
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="/pictures/WatchFoto/3.0.jpg" />
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
          <div className="Card">
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="/pictures/WatchFoto/4.0.jpg" />
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
          <div className="Card">
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="/pictures/WatchFoto/5.0.jpg" />
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
          <div className="Card">
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="/pictures/WatchFoto/6.0.jpg" />
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
        <div className="Right_blok"/>
      </div>
    </div>
  )
}
export default BasicExample;
