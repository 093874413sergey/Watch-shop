import React from "react";
import './HeadBuy.css';
import Navibar from '../Navibar';
import Footer from '../Footer';
import logo1_0 from '../WatchFoto/1.0.jpg';
import { BsFillCartCheckFill } from "react-icons/bs";
import CaruselRolex from "./CaruselRolex";
import Video from "./Video";
import InfoR from "./InfoR";
import SlayderBuyR from "./SlayderBuyR";


function HeadBuy () {
    return(
        <div className="head_buy">
<Navibar />
<div className="body_body">
        <div className="left_body">
        </div>
                <div className="centre_body">
                    <div className="logo_buy">
                    <img className="logo1_0" src={logo1_0} alt='#' />
                    <ul>
                        <li><h1>Rolex watch</h1></li>
                        <li><h2>Mechanism</h2>
                        <p>Mechanical 18 rubyes</p></li>
                        <li><h2>Frame</h2>
                        <p>Stainless steel with gilding</p></li>
                        <li><h2>Strap</h2>
                        <p>Leather</p></li>
                        <li><h2>Dimensions</h2>
                        <p>Diameter 43mm</p></li>
                        <li className="cost">1550 $</li>
                        <BsFillCartCheckFill className="buy_rolex"/>
                    </ul>
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
export default HeadBuy;