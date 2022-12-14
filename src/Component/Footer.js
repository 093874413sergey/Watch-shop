import React from "react";
import './Footer.css';
import { BsInstagram, BsTelegram, BsFacebook } from 'react-icons/bs';


export default function Footer() {
    return (
        <div className="footer">
             <img className='logo_f' src='https://i.pinimg.com/474x/fb/70/7b/fb707b2455bf6435bc637c5e5019ce67.jpg' alt='#' />
            <div className="logo">
                <div className="blok_1">
                    <p>Vera by Skeleton Watch</p>
                    <p>Pushkinskaya 59/45</p>
                    <p>vera2020mir@gmail.com</p>
                </div>
                <div className="blok_2">
                    <p>Payment</p>
                    <p>Shipping UPS</p>
                    <p>tel: +380938744136</p>
                </div>
                <div className="blok_3">
                    <a href="https://www.instagram.com/verabyskeletonwatch/"><BsInstagram className="icon_footer" /></a>
                    <a href="#"><BsTelegram className="icon_footer"  /></a>
                    <a href="#"><BsFacebook className="icon_footer"  /></a>
                </div>
            </div>

        </div>
    )
}