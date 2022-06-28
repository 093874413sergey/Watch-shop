import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Slayder.css'

export default function Slayder () {
return(
<div className="Carousel_blok">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-old-pocket-watch-robert-chlopas.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://proprikol.ru/wp-content/uploads/2020/02/kartinki-krasivye-chasy-1-1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://proprikol.ru/wp-content/uploads/2020/02/kartinki-krasivye-chasy-16.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </div>
    )
}


