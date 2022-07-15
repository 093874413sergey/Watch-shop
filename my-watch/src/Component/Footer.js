import React from "react";
import './Footer.css';



export default function Footer() {
    return(
<div className="footer">
    <div className="logo">
        <img className='logo_f'src='https://i.pinimg.com/474x/fb/70/7b/fb707b2455bf6435bc637c5e5019ce67.jpg' alt='#'/>
        <div className="blok_1">
    <a href="#"><span>Name</span></a>
    <a href="#"><span>Address</span></a>
    <a href="#"><span>Email</span></a>
</div>
        <div className="blok_2">
            <a href="#"><span>Payment</span></a>
            <a href="#"><span>Shipping</span></a>
            <a href="#"><span>Contactus</span></a>
        </div>
                <div className="blok_3">
                    <a href="#"><img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/instagram_black_logo_icon_147122.png"/></a>
                    <a href="#"><img src="https://papik.pro/uploads/posts/2021-11/1636121305_24-papik-pro-p-telegram-logotip-foto-24.png"/></a>
                    <a href="#"><img src="https://cdn.icon-icons.com/icons2/2566/PNG/512/facebook_icon_153518.png"/></a>
                </div>
    </div>

</div>
    )
}