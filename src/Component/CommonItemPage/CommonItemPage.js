import React, { useState } from 'react';
import './CommonItemPage.css';
import Navibar from '../Navibar';
import Footer from '../Footer';
import logo1_0 from '../WatchFoto/1.0.jpg';
import { BsFillCartCheckFill } from "react-icons/bs";
import CaruselRolex from "./CaruselRolex";
import Video from "./Video";
import InfoR from "./InfoR";
import SlayderBuyR from "./SlayderBuyR";

function CommonItemPage ({item}) {
  let [cartOpen, setCartOpen] = useState(false)

  return(
    <div className="head_buy">
      <Navibar />
      <div className="body_body">
        <div className="left_body">
        </div>
        <div className="centre_body">
          <div className="logo_buy">
            <img className="logo1_0" src={logo1_0} alt='#' />
            {item.description({item})}
            <BsFillCartCheckFill className="buy_rolex"/>
          </div>
          <div className="carusel_video">
            <div className="carusel_buy">
              <CaruselRolex />
            </div>
            <div className="video_buy">
              <Video />
            </div>
          </div>
          <div className="info_buy">
            <InfoR />
          </div>
          <SlayderBuyR />
        </div>
        <div className="right_body">
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default CommonItemPage;
