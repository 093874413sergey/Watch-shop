import React from "react";
import './CaruselRolex.css';
import Carousel from 'react-bootstrap/Carousel';

function CaruselRolex ({list}) {
  return(
    <div className="CaruselRolex">
      <Carousel>
        {list.map((item, index) => {
          return <Carousel.Item>
            <div key={index} className="foto-carusel">
              <img className="d-block w-100" src={`/pictures/WatchFoto/${item[0]}`} alt="First slide" />
              <img className="d-block w-100" src={`/pictures/WatchFoto/${item[1]}`} alt="First slide" />
            </div>
          </Carousel.Item>
        })}
      </Carousel>
    </div>
  )
}
export default CaruselRolex;
