import React from "react";
import './Head3_0.css';
import Navibar from '../Navibar';
import Footer from '../Footer';
import logo3_0 from '../WatchFoto/3.0.jpg';
import { BsFillCartCheckFill } from "react-icons/bs";
import CaruselR3_0 from "./CaruselR3_0";
import InfoR3_0 from "./InfoR3_0";
import VideoR3_0 from "./VideoR3_0";
import SlayderBuyR from "../BuyRolex/SlayderBuyR";

function Head3_0 () {
    return(
        <div className="head_buy1_1">
<Navibar />
<div className="body_body1_1">
        <div className="left_body1_1">
        </div>
                <div className="centre_body1_1">
                    <div className="logo_buy1_1">
                    <img className="logo2_0" src={logo3_0} alt='#' />
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
                        <li className="cost1_1 ">1590 $</li>
                        <BsFillCartCheckFill className="buy_rolex1_1" />
                    </ul>
                    </div>
                                <div className="carusel_video1_1">
                                        <div className="carusel_buy1_1">
                                        <CaruselR3_0 />
                                        </div>
                                            <div className="video_buy1_1">
                                                <VideoR3_0 />
                                            </div>
                                </div>
                                        <div className="info_buy1_1">
                                        <InfoR3_0 />
                                        </div>
                                       <SlayderBuyR />
                </div>
        <div className="right_body1_1">
        </div>
</div>

<Footer />
        </div>
    )
}
export default Head3_0;