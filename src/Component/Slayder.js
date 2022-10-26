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
      src="https://content.rolex.com/dam/watches/family-pages/yacht-master/roller-features-ym/professional-watches-yacht-master-beauty_m268621_0003_1708jva_001-re_portrait.jpg?imwidth=1080"
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
      src="https://static.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1200,h=600,dpr=2.0/magazine/wp-content/uploads/2021/11/Rolex-Datejust-2-1.jpg"
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
      src="https://vipgold.in.ua/files/uploads/Blog/original-23r.jpg"
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


