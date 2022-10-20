import React from "react";
import './CaruselRolex.css';
import Carousel from 'react-bootstrap/Carousel';
import logo1_1 from '../WatchFoto/1.1.jpg';
import logo1_2 from '../WatchFoto/1.2.jpg';
import logo1_3 from '../WatchFoto/1.3.jpg';
import logo1_4 from '../WatchFoto/1.4.jpg';
import logo1_5 from '../WatchFoto/1.5.jpg';
import logo1_6 from '../WatchFoto/1.6.jpg';
import logo1_7 from '../WatchFoto/1.7.jpg';
import logo1_8 from '../WatchFoto/1.8.jpg';
import logo1_9 from '../WatchFoto/1.9.jpg';
import logo1_10 from '../WatchFoto/1.10.jpg';

function CaruselRolex () {
    return(
<div className="CaruselRolex">
<Carousel>
      <Carousel.Item>
        <div className="foto-carusel">
        <img
          className="d-block w-100"
          src={logo1_1}
          alt="First slide"
        />
         <img
          className="d-block w-100"
          src={logo1_2}
          alt="First slide"
        />
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className="foto-carusel">
        <img
          className="d-block w-100"
          src={logo1_3}
          alt="Second slide"
        />
         <img
          className="d-block w-100"
          src={logo1_4}
          alt="Second slide"
        />
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className="foto-carusel">
        <img
          className="d-block w-100"
          src={logo1_5}
          alt="Third slide"
        />
         <img
          className="d-block w-100"
          src={logo1_6}
          alt="Third slide"
        />
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className="foto-carusel">
        <img
          className="d-block w-100"
          src={logo1_7}
          alt="Third slide"
        />
         <img
          className="d-block w-100"
          src={logo1_8}
          alt="Third slide"
        />
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className="foto-carusel">
        <img
          className="d-block w-100"
          src={logo1_9}
          alt="Third slide"
        />
         <img
          className="d-block w-100"
          src={logo1_10}
          alt="Third slide"
        />
        </div>
      </Carousel.Item>
      
    </Carousel>
</div>
    )
}
export default CaruselRolex;