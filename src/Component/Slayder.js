import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Slayder.css';

export default function Slayder () {
return(
<div className="Carousel_blok">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block"
      src="https://cdn.mos.cms.futurecdn.net/bZ4fNsznmctTpf8sS7MYA6.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="https://brcc.brightspotgocdn.com/dims4/default/5f4a1ef/2147483647/strip/true/crop/4688x2639+0+469/resize/1000x563!/quality/90/?url=https%3A%2F%2Fbrightspot-go-k1-brcc.s3.amazonaws.com%2Fbrightspot%2F7c%2F51%2F4162d1914a1b842b7187b2718748%2Fdo01150794.JPG"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="https://robbreport.com/wp-content/uploads/2021/09/Patek_POP_Ref.jpg?w=1000"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="https://hodinkee.imgix.net/uploads/images/d057a0a9-b5e2-4609-9d1f-21dd1400104b/patek-5204-5935-hero.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12"
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


