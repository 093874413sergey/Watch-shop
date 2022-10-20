import React from "react";
import './Banner.css';
import BannerR from '../WatchFoto/logo.jpg';

function Banner() {
    return (
<div>
    <div className="Wrapper">
        <div className="Wrapper_left">

        </div>
        <div className="Wrapper_centre">
        <img src={BannerR}/>
        <h1>Rolex</h1>
            <div className="Wrapper_text">
    <p>Lorem ipsum dolor sit amet consectetur
       adipisicing elit. Illum deleniti error
       esse, sint dicta unde, fugit itaque
       voluptatibus nam, maiores repellendus!
        Accusamus praesentium commodi totam
         perferendis assumenda ab animi possimus?
         Lorem ipsum dolor sit amet consectetur
adipisicing elit. Illum deleniti error
esse, sint dicta unde, fugit itaque
voluptatibus nam, maiores repellendus!
 Accusamus praesentium commodi totam
  perferendis assumenda ab animi possimus?
  Lorem ipsum dolor sit amet consectetur
adipisicing elit. Illum deleniti error
esse, sint dicta unde, fugit itaque
voluptatibus nam, maiores repellendus!
 Accusamus praesentium commodi totam
  perferendis assumenda ab animi possimus?
  Lorem ipsum dolor sit amet consectetur
adipisicing elit. 

</p>

    </div>
        </div>
        <div className="Wrapper_right">

        </div>
    </div>
</div>
    )
}
export default Banner;