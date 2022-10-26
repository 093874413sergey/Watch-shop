import React from "react";
import './CaruselR1_1.css';
import Carousel from 'react-bootstrap/Carousel';
import logo2_1 from '../WatchFoto/2.1.jpg';
import logo2_2 from '../WatchFoto/2.2.jpg';
import logo2_3 from '../WatchFoto/2.3.jpg';
import logo2_4 from '../WatchFoto/2.4.jpg';
import logo2_5 from '../WatchFoto/2.5.jpg';
import logo2_6 from '../WatchFoto/2.6.jpg';



function CaruselR1_1 () {
    return(
<div className="CaruselRolex1_1">
<Carousel>
      <Carousel.Item>
        <div className="foto-carusel1_1">
        <img
          className="d-block w-100"
          src={logo2_1}
          alt="First slide"
        />
         <img
          className="d-block w-100"
          src={logo2_2}
          alt="First slide"
        />
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className="foto-carusel1_1">
        <img
          className="d-block w-100"
          src={logo2_3}
          alt="Second slide"
        />
         <img
          className="d-block w-100"
          src={logo2_4}
          alt="Second slide"
        />
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className="foto-carusel1_1">
        <img
          className="d-block w-100"
          src={logo2_5}
          alt="Third slide"
        />
         <img
          className="d-block w-100"
          src={logo2_6}
          alt="Third slide"
        />
        </div>
      </Carousel.Item>

    </Carousel>
</div>
    )
}
export default CaruselR1_1;