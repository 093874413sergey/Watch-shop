import React from 'react';
import './CommonItemPage.css';
import Navibar from '../Navibar';
import { useDispatch } from 'react-redux'
import { addItem } from '../../actions/actions.js'
import Footer from '../Footer';
import { BsFillCartCheckFill } from "react-icons/bs";
import CaruselRolex from "./CaruselRolex";
import Video from "./Video";
import InfoR from "./InfoR";
import SlayderBuyR from "./SlayderBuyR";

function CommonItemPage ({item}) {
  const dispatch = useDispatch()

  const handleAddItem = () => dispatch(addItem(item))

  return(
    <div className="head_buy">
      <Navibar />
      <div className="body_body">
        <div className="left_body">
        </div>
        <div className="centre_body">
          <div className="logo_buy">
            <img className="logo1_0" src={item.mainImg} alt='#' />
            <div className='2'>
            {item.description({item})}
            <BsFillCartCheckFill onClick={handleAddItem} className="buy_rolex"/>
            </div>
          </div>
          <div className="carusel_video">
            <div className="carusel_buy">
              <CaruselRolex list={item.carouselImages}/>
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
