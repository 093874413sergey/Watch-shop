import React from "react";
import './CaruselR3_0.css';
import Carousel from 'react-bootstrap/Carousel';
import logo3_1 from '../WatchFoto/3.1.jpg';
import logo3_2 from '../WatchFoto/3.2.jpg';
import logo3_3 from '../WatchFoto/3.3.jpg';
import logo3_4 from '../WatchFoto/3.4.jpg';
import logo3_5 from '../WatchFoto/3.5.jpg';
import logo3_6 from '../WatchFoto/3.6.jpg';
import logo3_7 from '../WatchFoto/3.7.jpg';
import logo3_8 from '../WatchFoto/3.8.jpg';
import logo3_9 from '../WatchFoto/3.9.jpg';
import logo3_10 from '../WatchFoto/3.10.jpg';


function CaruselR3_0 () {
    return(
<div className="CaruselRolex3_0">
<Carousel>
      <Carousel.Item>
        <div className="foto-carusel3_0">
        <img
          className="d-block w-100"
          src={logo3_1}
          alt="First slide"
        />
         <img
          className="d-block w-100"
          src={logo3_2}
          alt="First slide"
        />
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className="foto-carusel3_0">
        <img
          className="d-block w-100"
          src={logo3_3}
          alt="Second slide"
        />
         <img
          className="d-block w-100"
          src={logo3_4}
          alt="Second slide"
        />
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className="foto-carusel3_0">
        <img
          className="d-block w-100"
          src={logo3_5}
          alt="Third slide"
        />
         <img
          className="d-block w-100"
          src={logo3_6}
          alt="Third slide"
        />
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className="foto-carusel3_0">
        <img
          className="d-block w-100"
          src={logo3_7}
          alt="Third slide"
        />
         <img
          className="d-block w-100"
          src={logo3_8}
          alt="Third slide"
        />
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className="foto-carusel3_0">
        <img
          className="d-block w-100"
          src={logo3_9}
          alt="Third slide"
        />
         <img
          className="d-block w-100"
          src={logo3_10}
          alt="Third slide"
        />
        </div>
      </Carousel.Item>
    </Carousel>
</div>
    )
}
export default CaruselR3_0;