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
<<<<<<< HEAD
              <img src={`/pictures/WatchFoto/${item[0]}`} alt="First slide" />
              <img src={`/pictures/WatchFoto/${item[1]}`} alt="First slide" />
=======
              <img className="d-block w-100" src={`/pictures/WatchFoto/${item[0]}`} alt="First slide" />
              <img className="d-block w-100" src={`/pictures/WatchFoto/${item[1]}`} alt="First slide" />
>>>>>>> 218ea72a3c552cff801239ac00b5b9ab34401eea
            </div>
          </Carousel.Item>
        })}
      </Carousel>
    </div>
  )
}
export default CaruselRolex;
